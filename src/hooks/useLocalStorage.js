import { useEffect, useState, useCallback } from "react";

/**
 * Senkronize biçimde localStorage'a yazıp okuyan custom hook.
 * - JSON serileştirme/deserileştirme'yi otomatik yapar
 * - Başlangıç değerini fonksiyon olarak da alabilir (lazy init)
 * - Farklı sekmeler arasında "storage" event ile senkron kalır
 */
const useLocalStorage = (key, initialValue) => {
  const readValue = useCallback(() => {
    if (typeof window === "undefined") {
      return typeof initialValue === "function" ? initialValue() : initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      if (item === null) {
        return typeof initialValue === "function"
          ? initialValue()
          : initialValue;
      }
      try {
        return JSON.parse(item);
      } catch {
        return item;
      }
    } catch (error) {
      console.warn(`useLocalStorage read error for key "${key}":`, error);
      return typeof initialValue === "function" ? initialValue() : initialValue;
    }
  }, [key, initialValue]);

  const [storedValue, setStoredValue] = useState(readValue);

  const setValue = useCallback(
    (value) => {
      try {
        setStoredValue((prev) => {
          const next = value instanceof Function ? value(prev) : value;
          if (typeof window !== "undefined") {
            window.localStorage.setItem(
              key,
              typeof next === "string" ? next : JSON.stringify(next)
            );
          }
          return next;
        });
      } catch (error) {
        console.warn(`useLocalStorage write error for key "${key}":`, error);
      }
    },
    [key]
  );

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === key && event.newValue !== null) {
        try {
          setStoredValue(JSON.parse(event.newValue));
        } catch {
          setStoredValue(event.newValue);
        }
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [key]);

  return [storedValue, setValue];
};

export default useLocalStorage;
