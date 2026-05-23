import useLanguage from "../hooks/useLanguage";
import projectWorkintech from "../assets/projects-workintech.png";
import projectRandomJokes from "../assets/projects-random-jokes.png";
import projectJourney from "../assets/projects-journey.png";

const projectImages = {
  workintech: projectWorkintech,
  "random-jokes": projectRandomJokes,
  journey: projectJourney,
};

const Projects = () => {
  const { content } = useLanguage();

  return (
    <section
      id="projects"
      className="py-16 md:py-24"
      aria-labelledby="projects-title"
    >
      <div className="section-wrapper space-y-10">
        <header>
          <h2
            id="projects-title"
            className="text-[40px] md:text-[48px] font-semibold leading-none text-[#1F2937] dark:text-[#B7AAFF]"
          >
            {content.projects.title}
          </h2>
          <div
            aria-hidden="true"
            className="mt-4 h-px w-full bg-[#BAB2E7] dark:bg-[#B7AAFF]"
          />
        </header>

        <ul className="grid gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-[120px]">
          {content.projects.items.map((project) => (
            <li
              key={project.title}
              className="max-w-[300px] space-y-4 group"
            >
              <div className="h-[180px] w-full overflow-hidden rounded-lg">
                <img
                  src={projectImages[project.image]}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-[28px] font-medium leading-7 text-[#4338CA] dark:text-[#E2E2E2]">
                {project.title}
              </h3>
              <p className="text-sm leading-5 text-[#6B7280] dark:text-[#AAAAAA]">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-[#3730A3] px-3 py-1 text-xs font-medium uppercase tracking-tight text-[#3730A3] dark:border-[#8F88FF] dark:text-[#8F88FF]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between text-base font-medium text-[#3730A3] dark:text-[#E2E2E2]">
                <a
                  href={project.links.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#4338CA] dark:hover:text-[#B7AAFF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4731D3] dark:focus-visible:ring-[#B7AAFF] rounded"
                >
                  {project.links.github}
                </a>
                <a
                  href={project.links.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#4338CA] dark:hover:text-[#B7AAFF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4731D3] dark:focus-visible:ring-[#B7AAFF] rounded"
                >
                  {project.links.view}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
