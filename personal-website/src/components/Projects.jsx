import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { content } = useLanguage();

  // Placeholder images mapping
  const projectImages = {
    workintech:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
    "random-jokes":
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    journey:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  };

  return (
    <section id="projects" className="py-24">
      <div className="section-wrapper space-y-10">
        <div>
          <h2 className="text-[48px] font-semibold leading-none text-[#1F2937]">
            {content.projects.title}
          </h2>
          <div className="mt-4 h-px w-full bg-[#BAB2E7]"></div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-[120px]">
          {content.projects.items.map((project, index) => (
            <div key={index} className="max-w-[300px] space-y-4">
              <div className="h-[180px] w-full overflow-hidden rounded-lg">
                <img
                  src={projectImages[project.image]}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-[30px] font-medium leading-7 text-[#4338CA]">
                {project.title}
              </h3>
              <p className="text-sm leading-tight text-[#6B7280]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded border border-[#3730A3] px-4 py-1 text-xs font-medium uppercase tracking-tight text-[#3730A3]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-base font-medium text-[#3730A3]">
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
