import useTheme from "../hooks/useTheme";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, content } = useLanguage();

  return (
    <header className="pt-8 pb-6">
      <div className="section-wrapper flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="h-[62px] w-[63px] rounded-full bg-[#EEEBFF] flex items-center justify-center rotate-12 shadow-[0px_18px_45px_rgba(71,49,211,0.25)]">
            <span className="text-primary text-2xl font-semibold">A</span>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#9CA3AF]">
              {content.hero.name}
            </p>
            <p className="text-2xl font-semibold text-[#1F2937]">Portfolio</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <div className="flex flex-col gap-3 text-[15px] font-bold tracking-widest text-[#777777] lg:flex-row lg:items-center">
            <div className="flex items-center gap-4">
              <span className="uppercase hidden md:inline-block">
                {theme === "dark"
                  ? content.header.lightMode
                  : content.header.darkMode}
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
            <button onClick={toggleLanguage} className="text-primary">
              {language === "en" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO EN"}
            </button>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-lg font-medium text-[#6B7280]">
            <a
              href="#skills"
              className="transition-colors hover:text-[#1F2937]"
            >
              {content.header.skills}
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-[#1F2937]"
            >
              {content.header.projects}
            </a>
            <a
              href="#hire-me"
              className="rounded-md border border-[#3730A3] px-8 py-3 text-[#3730A3] transition-colors hover:bg-[#F4F2FF]"
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
