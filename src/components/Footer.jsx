import useLanguage from "../hooks/useLanguage";

const Footer = () => {
  const { content } = useLanguage();

  return (
    <footer
      id="hire-me"
      className="bg-[#F9F9F9] py-16 md:py-24 dark:bg-[#1A1A1A]"
      aria-labelledby="hire-title"
    >
      <div className="section-wrapper flex flex-col gap-10 text-left lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-6">
          <h2
            id="hire-title"
            className="max-w-2xl text-[32px] sm:text-[42px] font-semibold leading-tight text-[#1F2937] dark:text-[#E2E2E2]"
          >
            {content.footer.msg}
          </h2>
          <div className="flex items-center gap-2 text-[#AF0C48] dark:text-[#E2E2E2]">
            <span aria-hidden="true" className="text-2xl leading-6">
              👉
            </span>
            <a
              href={`mailto:${content.footer.email}`}
              aria-label={content.footer.emailLabel}
              className="text-[18px] sm:text-[20px] font-medium tracking-[0.05em] underline break-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AF0C48] rounded"
            >
              {content.footer.email}
            </a>
          </div>
        </div>

        <ul className="flex flex-wrap gap-5 text-[18px] font-medium">
          {content.footer.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-current rounded`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
