import { useLanguage } from "../context/LanguageContext";
import axios from "axios";
import { toast } from "react-toastify";

const Hero = () => {
  const { content } = useLanguage();

  const handleHireMe = async () => {
    try {
      // Simulating a POST request
      const response = await axios.post("https://reqres.in/api/users", {
        name: "Almila Su",
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
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-24 h-[1px] bg-[#4731D3] dark:bg-[#B7AAFF]"></div>
            <span className="text-[#4731D3] dark:text-[#B7AAFF] font-medium">
              {content.hero.name}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#1F2937] dark:text-[#AEBCCF] leading-tight">
            {content.hero.title}
          </h1>

          <p className="text-[#6B7280] dark:text-gray-400 text-lg leading-relaxed max-w-xl">
            {content.hero.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={handleHireMe}
              className="px-8 py-3 bg-[#4731D3] text-white rounded-md hover:bg-[#3726A6] transition-colors dark:bg-[#B7AAFF] dark:text-[#1F2937] dark:hover:bg-[#9e8eff]"
            >
              {content.hero.hireButton}
            </button>
            <button className="px-8 py-3 border border-[#4731D3] text-[#4731D3] rounded-md flex items-center gap-2 hover:bg-[#EEF2FF] transition-colors dark:border-white dark:text-white dark:hover:bg-[#2A2A2A]">
              <i className="fa-brands fa-github"></i>{" "}
              {content.hero.githubButton}
            </button>
            <button className="px-8 py-3 border border-[#4731D3] text-[#4731D3] rounded-md flex items-center gap-2 hover:bg-[#EEF2FF] transition-colors dark:border-white dark:text-white dark:hover:bg-[#2A2A2A]">
              <i className="fa-brands fa-linkedin-in"></i>{" "}
              {content.hero.linkedinButton}
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
              alt="Hero"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#4731D3] rounded-2xl -z-0 hidden md:block dark:border-[#B7AAFF]"></div>
          <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#4731D3] rounded-2xl -z-10 hidden md:block opacity-20 dark:bg-[#B7AAFF]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
