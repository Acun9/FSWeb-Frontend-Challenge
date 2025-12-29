import { useLanguage } from "../context/LanguageContext";
import axios from "axios";
import { toast } from "react-toastify";
import heroImage from "../assets/hero-image-figma.png";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linked-in.svg";

const Hero = () => {
  const { content } = useLanguage();

  const handleHireMe = async () => {
    try {
      // Simulating a POST request
      const response = await axios.post("https://reqres.in/api/users", {
        name: "Murat Acun",
        job: "Developer",
        action: "Hire Me Clicked",
      });

      if (response.status === 201) {
        toast.success(`Message sent! ID: ${response.data.id}`, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error("API Error:", error);
    }
  };

  return (
    <section className="py-24">
      <div className="section-wrapper flex flex-col-reverse items-center gap-16 lg:flex-row lg:items-start">
        <div className="flex-1 w-full space-y-8">
          <div className="flex items-center gap-6 text-[#4338CA] dark:text-[#B7AAFF]">
            <span className="block h-px w-24 bg-[#4338CA] dark:bg-[#B7AAFF]"></span>
            <span className="text-lg font-medium uppercase tracking-[0.4em]">
              {content.hero.name}
            </span>
          </div>
          <h1 className="text-[48px] leading-[1.1] text-[#1F2937] font-bold sm:text-[60px] md:text-[72px] dark:text-[#E2E2E2]">
            {content.hero.title}
          </h1>

          <p className="max-w-[553px] text-lg leading-7 text-[#6B7280] dark:text-[#AAAAAA]">
            {content.hero.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-8">
            <button
              onClick={handleHireMe}
              className="rounded-md bg-[#3730A3] px-8 py-3 text-lg font-medium text-white shadow-[0px_12px_30px_rgba(55,48,163,0.35)] transition-transform hover:-translate-y-0.5 dark:bg-[#E2E2E2] dark:text-[#252128]"
            >
              {content.hero.hireButton}
            </button>
            <button className="flex items-center gap-3 rounded-md border border-[#3730A3] bg-white px-5 py-3 text-lg font-medium text-[#3730A3] transition-colors hover:bg-[#F4F2FF] dark:border-[#E2E2E2] dark:bg-transparent dark:text-[#E2E2E2] dark:hover:bg-[#3A3A3A]">
              <img
                src={githubIcon}
                alt="Github"
                className="h-6 w-6 dark:invert"
              />
              {content.hero.githubButton}
            </button>
            <button className="flex items-center gap-3 rounded-md border border-[#3730A3] bg-white px-5 py-3 text-lg font-medium text-[#3730A3] transition-colors hover:bg-[#F4F2FF] dark:border-[#E2E2E2] dark:bg-transparent dark:text-[#E2E2E2] dark:hover:bg-[#3A3A3A]">
              <img
                src={linkedinIcon}
                alt="Linkedin"
                className="h-6 w-6 dark:invert"
              />
              {content.hero.linkedinButton}
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-[476px]">
          <div className="relative h-[375px] overflow-hidden rounded-[18px] shadow-[0px_8px_28px_-6px_rgba(24,39,75,0.12),0px_18px_88px_-4px_rgba(24,39,75,0.14)] dark:shadow-[0px_8px_28px_-6px_rgba(0,0,0,0.3),0px_18px_88px_-4px_rgba(0,0,0,0.4)] transition-shadow duration-300">
            <img
              src={heroImage}
              alt="Murat Acun - Developer"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
