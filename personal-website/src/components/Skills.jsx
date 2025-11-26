import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
  const { content } = useLanguage();

  return (
    <section id="skills" className="py-24">
      <div className="section-wrapper space-y-10">
        <div>
          <h2 className="text-[48px] font-semibold leading-none text-[#1F2937]">
            {content.skills.title}
          </h2>
          <div className="mt-4 h-px w-full bg-[#BAB2E7]"></div>
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-x-20">
          {content.skills.items.map((skill, index) => (
            <div key={index} className="max-w-[300px] space-y-4">
              <h3 className="text-[30px] font-medium leading-7 text-[#4338CA]">
                {skill.name}
              </h3>
              <p className="text-xs leading-4 text-[#6B7280]">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
