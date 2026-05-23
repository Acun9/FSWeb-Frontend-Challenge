import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import api from "../api/axios";
import { data } from "../data/data";

/**
 * Dil değiştiğinde reqres.in'e POST atan, toast.promise ile yükleme/başarı/hata
 * bildirimlerini yöneten ve cevap döndüğünde ilgili dilin içeriğini state'e yazan
 * custom hook.
 *
 * - Aynı dil için ikinci kez istek atmaz (basit cache).
 * - İstek başarısız olursa lokal data ile fallback yapılır.
 */
const useFetchContent = (language) => {
  const [content, setContent] = useState(data[language]);
  const [isLoading, setIsLoading] = useState(false);
  const cacheRef = useRef(new Set());
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (cacheRef.current.has(language)) {
      setContent(data[language]);
      return;
    }

    let cancelled = false;
    const initial = isFirstRender.current;
    isFirstRender.current = false;

    const fetchContent = async () => {
      setIsLoading(true);
      try {
        const request = api.post("/workintech", { language });

        if (!initial) {
          toast.promise(
            request,
            {
              pending:
                language === "tr"
                  ? "İçerik yükleniyor..."
                  : "Loading content...",
              success:
                language === "tr"
                  ? "İçerik başarıyla güncellendi"
                  : "Content updated successfully",
              error:
                language === "tr"
                  ? "İçerik yüklenirken hata oluştu"
                  : "Failed to load content",
            },
            { autoClose: 1800 }
          );
        }

        await request;
        if (!cancelled) {
          cacheRef.current.add(language);
          setContent(data[language]);
        }
      } catch (error) {
        if (!cancelled) {
          setContent(data[language]);
          console.error("Language fetch failed, using local fallback.", error);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    fetchContent();

    return () => {
      cancelled = true;
    };
  }, [language]);

  return { content, isLoading };
};

export default useFetchContent;
