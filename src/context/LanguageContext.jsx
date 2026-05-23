import { useCallback, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useFetchContent from "../hooks/useFetchContent";
import { LanguageContext } from "./languageContextValue";

const getInitialLanguage = () => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("language");
  if (stored === "tr" || stored === "en") return stored;
  return navigator.language?.toLowerCase().startsWith("tr") ? "tr" : "en";
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage(
    "language",
    getInitialLanguage
  );
  const { content, isLoading } = useFetchContent(language);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "tr" : "en"));
  }, [setLanguage]);

  const value = useMemo(
    () => ({ language, toggleLanguage, content, isLoading }),
    [language, toggleLanguage, content, isLoading]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
