import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { content } = useLanguage();

  return (
    <footer id="hire-me" className="py-20 bg-[#F9F9F9] dark:bg-[#141414]">
      <div className="container mx-auto px-8 text-center md:text-left md:flex md:justify-between md:items-end">
        <div className="mb-8 md:mb-0 max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-8 leading-tight">
            {content.footer.msg}
          </h2>

          <div className="flex items-center gap-2 text-[#4731D3] dark:text-[#B7AAFF] mb-4 justify-center md:justify-start">
            <span className="text-xl">👉</span>
            <a
              href={`mailto:${content.footer.email}`}
              className="text-xl font-medium underline"
            >
              {content.footer.email}
            </a>
          </div>
        </div>

        <div className="flex gap-6 justify-center md:justify-end">
          {content.footer.links.map((link, index) => (
            <a
              key={index}
              href="#"
              className={`font-medium ${
                index === 0
                  ? "text-[#1F2937] dark:text-[#E1E1FF]"
                  : "text-[#00AB6B] dark:text-[#17D18B]"
              } hover:opacity-80 transition-opacity`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
