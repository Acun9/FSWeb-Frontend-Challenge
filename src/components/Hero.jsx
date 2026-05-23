import useLanguage from "../hooks/useLanguage";
import heroImage from "../assets/hero-image-figma.png";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linked-in.svg";

const Hero = () => {
  const { content } = useLanguage();

  return (
    <section id="top" className="py-16 md:py-24" aria-labelledby="hero-title">
      <div className="section-wrapper flex flex-col-reverse items-center gap-16 lg:flex-row lg:items-start">
        <div className="flex-1 w-full space-y-8">
          <div className="flex items-center gap-6 text-[#4338CA] dark:text-[#B7AAFF]">
            <span
              aria-hidden="true"
              className="block h-px w-24 bg-[#4338CA] dark:bg-[#B7AAFF]"
            />
            <span className="text-lg font-medium uppercase tracking-[0.4em]">
              {content.hero.name}
            </span>
          </div>
          <h1
            id="hero-title"
            className="text-[40px] leading-[1.1] text-[#1F2937] font-bold sm:text-[56px] md:text-[72px] dark:text-[#E2E2E2]"
          >
            {content.hero.title}
          </h1>

          <p className="max-w-[553px] text-lg leading-7 text-[#6B7280] dark:text-[#AAAAAA]">
            {content.hero.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-8">
            <a
              href="https://github.com/Acun9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md border border-[#3730A3] bg-white px-5 py-3 text-lg font-medium text-[#3730A3] transition-all hover:-translate-y-0.5 hover:bg-[#F4F2FF] hover:shadow-md dark:border-[#8F88FF] dark:bg-[#2D2A3E] dark:text-[#E2E2E2] dark:hover:bg-[#3A3652] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4731D3] dark:focus-visible:ring-[#B7AAFF]"
            >
              <img
                src={githubIcon}
                alt=""
                aria-hidden="true"
                className="h-6 w-6 dark:brightness-0 dark:invert"
              />
              {content.hero.githubButton}
            </a>
            <a
              href="https://www.linkedin.com/in/acun9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md border border-[#3730A3] bg-white px-5 py-3 text-lg font-medium text-[#3730A3] transition-all hover:-translate-y-0.5 hover:bg-[#F4F2FF] hover:shadow-md dark:border-[#8F88FF] dark:bg-[#2D2A3E] dark:text-[#E2E2E2] dark:hover:bg-[#3A3652] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4731D3] dark:focus-visible:ring-[#B7AAFF]"
            >
              <img
                src={linkedinIcon}
                alt=""
                aria-hidden="true"
                className="h-6 w-6 dark:brightness-0 dark:invert"
              />
              {content.hero.linkedinButton}
            </a>
          </div>
        </div>

        <div className="flex-1 w-full max-w-[476px]">
          <div className="relative h-[300px] sm:h-[375px] overflow-hidden rounded-[18px] shadow-[0px_8px_28px_-6px_rgba(24,39,75,0.12),0px_18px_88px_-4px_rgba(24,39,75,0.14)] dark:shadow-[0px_8px_28px_-6px_rgba(0,0,0,0.3),0px_18px_88px_-4px_rgba(0,0,0,0.4)] transition-shadow duration-300">
            <img
              src={heroImage}
              alt={content.hero.heroImageAlt}
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
