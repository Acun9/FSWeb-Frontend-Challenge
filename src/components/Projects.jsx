import { useLanguage } from "../context/LanguageContext";
import projectWorkintech from "../assets/projects-workintech.png";
import projectRandomJokes from "../assets/projects-random-jokes.png";
import projectJourney from "../assets/projects-journey.png";

const Projects = () => {
  const { content } = useLanguage();

  const projectImages = {
    workintech: projectWorkintech,
    "random-jokes": projectRandomJokes,
    journey: projectJourney,
  };

  return (
    <section id="projects" className="py-24">
      <div className="section-wrapper space-y-10">
        <div>
          <h2 className="text-[48px] font-semibold leading-none text-[#1F2937] dark:text-[#E2E2E2]">
            {content.projects.title}
          </h2>
          <div className="mt-4 h-px w-full bg-[#BAB2E7] dark:bg-[#3A3A3A]"></div>
        </div>

        <div className="grid gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-[120px]">
          {content.projects.items.map((project, index) => (
            <div key={index} className="max-w-[300px] space-y-4">
              <div className="h-[180px] w-full overflow-hidden rounded-lg">
                <img
                  src={projectImages[project.image]}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-[30px] font-medium leading-7 text-[#4338CA] dark:text-[#B7AAFF]">
                {project.title}
              </h3>
              <p className="text-sm leading-tight text-[#6B7280] dark:text-[#AAAAAA]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded border border-[#3730A3] px-4 py-1 text-xs font-medium uppercase tracking-tight text-[#3730A3] dark:border-[#8F88FF] dark:text-[#8F88FF]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-base font-medium text-[#3730A3] dark:text-[#E2E2E2]">
                <a href="#" className="underline">
                  {project.links.github}
                </a>
                <a href="#" className="underline">
                  {project.links.view}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
