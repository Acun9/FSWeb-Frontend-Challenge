import useTheme from "../hooks/useTheme";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, content } = useLanguage();

  return (
    <header className="pt-8 pb-6">
      <div className="section-wrapper flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="h-[62px] w-[63px] rounded-full bg-[#EEEBFF] dark:bg-[#3A3A3A] flex items-center justify-center rotate-12 shadow-[0px_18px_45px_rgba(71,49,211,0.25)] dark:shadow-[0px_18px_45px_rgba(0,0,0,0.3)] transition-all duration-300">
            <span className="text-[#7B61FF] dark:text-[#B7AAFF] text-2xl font-semibold">
              M
            </span>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#4338CA] dark:text-[#B7AAFF]">
              {content.hero.name}
            </p>
            <p className="text-2xl font-semibold text-[#1F2937] dark:text-[#E2E2E2]">
              Portfolio
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <div className="flex flex-col gap-3 text-[15px] font-bold tracking-widest text-[#777777] dark:text-[#AAAAAA] lg:flex-row lg:items-center">
            <div className="flex items-center gap-4">
              <span className="uppercase hidden md:inline-block">
                {theme === "dark"
                  ? content.header.darkMode
                  : content.header.lightMode}
              </span>
              <button
                onClick={toggleTheme}
                className={`relative inline-flex h-6 w-14 items-center rounded-full transition-all duration-300 ${
                  theme === "dark" ? "bg-[#3A3A3A]" : "bg-[#4731D3]"
                }`}
                aria-label="Toggle theme"
              >
                <span
                  className={`absolute left-1 h-[18px] w-[18px] rounded-full transition-transform duration-300 ${
                    theme === "dark"
                      ? "translate-x-6 bg-[#FFE86E]"
                      : "translate-x-0 bg-white"
                  }`}
                ></span>
              </button>
              <span className="hidden md:block">|</span>
            </div>
            <button
              onClick={toggleLanguage}
              className="font-bold tracking-widest"
            >
              {language === "en" ? (
                <>
                  <span className="text-[#4731D3] dark:text-[#B7AAFF]">
                    TÜRKÇE
                  </span>
                  <span className="text-[#777777] dark:text-[#AAAAAA]">
                    'YE GEÇ
                  </span>
                </>
              ) : (
                <>
                  <span className="text-[#4731D3] dark:text-[#B7AAFF]">
                    SWITCH
                  </span>
                  <span className="text-[#777777] dark:text-[#AAAAAA]">
                    {" "}
                    TO EN
                  </span>
                </>
              )}
            </button>
          </div>

          <nav className="flex flex-wrap items-center justify-center text-lg font-medium text-[#6B7280] dark:text-[#AAAAAA]">
            <a
              href="#skills"
              className="mr-[82px] transition-colors hover:text-[#1F2937] dark:hover:text-white"
            >
              {content.header.skills}
            </a>
            <a
              href="#projects"
              className="mr-[60px] transition-colors hover:text-[#1F2937] dark:hover:text-white"
            >
              {content.header.projects}
            </a>
            <a
              href="#hire-me"
              className="rounded-md border border-[#3730A3] px-8 py-3 text-[#3730A3] transition-colors hover:bg-[#F4F2FF] dark:border-[#E2E2E2] dark:text-[#E2E2E2] dark:hover:bg-[#3A3A3A]"
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
