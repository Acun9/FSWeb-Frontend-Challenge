import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { content } = useLanguage();

  return (
    <footer id="hire-me" className="bg-[#F9F9F9] py-24 dark:bg-[#1A1A1A]">
      <div className="section-wrapper flex flex-col gap-10 text-left lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-6">
          <h2 className="max-w-2xl text-[42px] font-semibold leading-tight text-[#1F2937] dark:text-[#E2E2E2]">
            {content.footer.msg}
          </h2>
          <div className="flex items-center gap-2 text-[#AF0C48] dark:text-[#E2E2E2]">
            <span className="text-2xl leading-6">👉</span>
            <a
              href={`mailto:${content.footer.email}`}
              className="text-[20px] font-medium tracking-[0.05em] underline"
            >
              {content.footer.email}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 text-[18px] font-medium">
          {content.footer.links.map((link, index) => {
            const colors = ["text-[#00AB6B]", "text-[#0077B5]"];
            const urls = [
              "https://github.com/Acun9",
              "https://www.linkedin.com/in/acun9/",
            ];
            return (
              <a
                key={index}
                href={urls[index]}
                target="_blank"
                rel="noopener noreferrer"
                className={colors[index] || "text-[#0A0A14]"}
              >
                {link}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
