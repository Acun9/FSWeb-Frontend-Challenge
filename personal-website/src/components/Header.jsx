import useTheme from "../hooks/useTheme";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, content } = useLanguage();

  return (
    <header className="py-8">
      <div className="container mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="w-12 h-12 rounded-full bg-[#EEEBFF] flex items-center justify-center transform rotate-12">
          <span className="text-[#7B61FF] font-bold text-xl">A</span>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-8">
          {/* Theme & Language Toggles */}
          <div className="hidden md:flex items-center gap-6">
            <div
              className="flex items-center gap-2 cursor-pointer select-none"
              onClick={toggleTheme}
            >
              <div
                className={`w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300 ${
                  theme === "dark" ? "bg-[#3A3A3A]" : "bg-[#4731D3]"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-[#FFE86E] shadow-md transform transition-transform duration-300 ${
                    theme === "dark" ? "translate-x-0" : "translate-x-6"
                  }`}
                >
                  {theme === "dark" && (
                    <div className="w-2 h-2 bg-[#3A3A3A] rounded-full absolute top-0 right-0 -mt-0.5 -mr-0.5"></div>
                  )}
                </div>
                <div
                  className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                    theme === "dark"
                      ? "translate-x-6 opacity-0"
                      : "-translate-x-4 opacity-0"
                  }`}
                ></div>
              </div>
              <span className="font-bold text-xs tracking-wider text-[#777777] dark:text-[#D9D9D9]">
                {theme === "dark"
                  ? content.header.lightMode
                  : content.header.darkMode}
              </span>
            </div>

            <span className="text-[#777777] dark:text-[#D9D9D9]">|</span>

            <button
              onClick={toggleLanguage}
              className="font-bold text-xs tracking-wider text-[#4731D3] dark:text-[#B7AAFF]"
            >
              {language === "en" ? (
                <>
                  <span className="text-[#777777] dark:text-[#D9D9D9]">
                    TÜRKÇE
                  </span>
                  'YE GEÇ
                </>
              ) : (
                <>
                  <span className="text-[#777777] dark:text-[#D9D9D9]">
                    SWITCH TO
                  </span>{" "}
                  ENGLISH
                </>
              )}
            </button>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#skills"
              className="text-[#6B7280] dark:text-gray-300 hover:text-[#4731D3] dark:hover:text-[#B7AAFF] transition-colors font-medium"
            >
              {content.header.skills}
            </a>
            <a
              href="#projects"
              className="text-[#6B7280] dark:text-gray-300 hover:text-[#4731D3] dark:hover:text-[#B7AAFF] transition-colors font-medium"
            >
              {content.header.projects}
            </a>
            <a
              href="#hire-me"
              className="px-6 py-2 border border-[#4731D3] text-[#4731D3] dark:border-white dark:text-white rounded-md hover:bg-[#EEF2FF] dark:hover:bg-[#2A2A2A] transition-all font-medium"
            >
              {content.header.hireMe}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
