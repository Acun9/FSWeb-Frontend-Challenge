import { useState } from "react";
import useTheme from "../hooks/useTheme";
import useLanguage from "../hooks/useLanguage";

const Header = () => {
  const { toggleTheme, isDark } = useTheme();
  const { language, toggleLanguage, content } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#skills", label: content.header.skills },
    { href: "#projects", label: content.header.projects },
    { href: "#hire-me", label: content.header.hireMe },
  ];

  return (
    <header className="pt-8 pb-6">
      <div className="section-wrapper flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-4">
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
          </a>

          <button
            type="button"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-md border border-[#E4E7F1] text-[#1F2937] dark:border-[#3A3A3A] dark:text-[#E2E2E2]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        <div
          className={`flex flex-col gap-4 lg:items-end ${
            mobileOpen ? "flex" : "hidden lg:flex"
          }`}
        >
          <div className="flex flex-col gap-3 text-[15px] font-bold tracking-widest text-[#777777] dark:text-[#AAAAAA] lg:flex-row lg:items-center">
            <div className="flex items-center gap-4">
              <span className="uppercase hidden md:inline-block">
                {isDark ? content.header.darkMode : content.header.lightMode}
              </span>
              <button
                type="button"
                onClick={toggleTheme}
                className={`relative inline-flex h-6 w-12 items-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4731D3] dark:focus-visible:ring-[#B7AAFF] ${
                  isDark ? "bg-[#3A3A3A]" : "bg-[#4731D3]"
                }`}
                role="switch"
                aria-checked={isDark}
                aria-label={
                  isDark
                    ? language === "tr"
                      ? "Aydınlık moda geç"
                      : "Switch to light mode"
                    : language === "tr"
                    ? "Karanlık moda geç"
                    : "Switch to dark mode"
                }
              >
                <span
                  className={`absolute h-[18px] w-[18px] rounded-full transition-transform duration-300 ${
                    isDark
                      ? "translate-x-[27px] bg-[#E2E2E2]"
                      : "translate-x-[3px] bg-white"
                  }`}
                />
              </button>
              <span className="hidden lg:inline" aria-hidden="true">
                |
              </span>
            </div>
            <button
              type="button"
              onClick={toggleLanguage}
              className="font-bold tracking-widest focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4731D3] dark:focus-visible:ring-[#B7AAFF] rounded"
              aria-label={
                language === "en"
                  ? "Switch language to Turkish"
                  : "Dili İngilizce'ye çevir"
              }
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

          <nav
            aria-label="Main navigation"
            className="flex flex-col items-start gap-4 text-lg font-medium text-[#6B7280] dark:text-[#AAAAAA] lg:flex-row lg:items-center lg:gap-[60px]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="transition-colors hover:text-[#1F2937] dark:hover:text-white focus:outline-none focus-visible:text-[#4731D3] dark:focus-visible:text-[#B7AAFF]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
