import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
  const { content } = useLanguage();

  return (
    <section id="skills" className="py-16 bg-white dark:bg-[#252128]">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-12">
          {content.skills.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.skills.items.map((skill, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-medium text-[#4731D3] dark:text-[#B7AAFF]">
                {skill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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
