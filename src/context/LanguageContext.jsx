import { createContext, useContext, useState, useEffect } from "react";
import { data } from "../data/data";
import axios from "axios";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const [content, setContent] = useState(data[language]);

  useEffect(() => {
    localStorage.setItem("language", language);
    setContent(data[language]);

    // Optional: Send language preference to API if needed
    // axios.post('https://reqres.in/api/workintech', { language });
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "tr" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
