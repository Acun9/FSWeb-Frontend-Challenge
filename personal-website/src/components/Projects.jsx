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
    <section
      id="projects"
      className="py-16 bg-[#CBF281] bg-opacity-20 dark:bg-[#252128]"
    >
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-12">
          {content.projects.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.projects.items.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#2D3235] rounded-xl overflow-hidden shadow-lg flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={projectImages[project.image]}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#4731D3] dark:text-[#CFCBFF] mb-4">
                  {project.title}
                </h3>

                <p className="text-[#6B7280] dark:text-gray-300 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1 bg-white border border-[#4731D3] dark:bg-[#383838] dark:border-transparent text-[#4731D3] dark:text-[#8F88FF] rounded-full text-sm font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <a
                    href="#"
                    className="text-[#1F2937] dark:text-[#E1E1FF] font-medium underline hover:text-[#4731D3] dark:hover:text-[#B7AAFF]"
                  >
                    {project.links.github}
                  </a>
                  <a
                    href="#"
                    className="text-[#1F2937] dark:text-[#E1E1FF] font-medium underline hover:text-[#4731D3] dark:hover:text-[#B7AAFF]"
                  >
                    {project.links.view}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
