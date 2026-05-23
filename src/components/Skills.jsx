import useLanguage from "../hooks/useLanguage";

const Skills = () => {
  const { content } = useLanguage();

  return (
    <section
      id="skills"
      className="py-16 md:py-24"
      aria-labelledby="skills-title"
    >
      <div className="section-wrapper space-y-10">
        <header>
          <h2
            id="skills-title"
            className="text-[40px] md:text-[48px] font-semibold leading-none text-[#1F2937] dark:text-[#B7AAFF]"
          >
            {content.skills.title}
          </h2>
          <div
            aria-hidden="true"
            className="mt-4 h-px w-full bg-[#BAB2E7] dark:bg-[#B7AAFF]"
          />
        </header>

        <ul className="grid gap-y-12 md:grid-cols-3 md:gap-[120px]">
          {content.skills.items.map((skill) => (
            <li key={skill.name} className="max-w-[300px] space-y-4">
              <h3 className="text-[30px] font-medium leading-7 text-[#4338CA] dark:text-[#E2E2E2]">
                {skill.name}
              </h3>
              <p className="text-sm leading-5 text-[#6B7280] dark:text-[#AAAAAA]">
                {skill.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
