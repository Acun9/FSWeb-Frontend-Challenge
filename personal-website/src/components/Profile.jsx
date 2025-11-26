import { useLanguage } from "../context/LanguageContext";

const Profile = () => {
  const { content } = useLanguage();

  return (
    <section className="py-16 bg-[#F4F2FF] dark:bg-[#171043]">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-12">
          {content.profile.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Basic Info */}
          <div className="bg-white dark:bg-[#252128] p-8 rounded-xl shadow-[10px_10px_0px_0px_rgba(82,82,82,0.1)] transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-medium text-[#EA2678] mb-6">
              {content.profile.basicInfoTitle}
            </h3>

            <div className="space-y-4">
              {Object.entries(content.profile.basicInfo).map(([key, info]) => (
                <div
                  key={key}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                >
                  <span className="font-bold text-[#1F2937] dark:text-white min-w-[140px]">
                    {info.label}
                  </span>
                  <span className="text-[#6B7280] dark:text-gray-400">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* About Me */}
          <div className="space-y-6">
            <div className="relative">
              <h3 className="text-2xl font-medium text-[#1F2937] dark:text-[#AEBCCF] mb-6 relative z-10 inline-block">
                {content.profile.aboutMeTitle}
                <div className="absolute bottom-1 left-0 w-full h-4 bg-[#82BBFF] -z-10 opacity-60 rounded"></div>
              </h3>
            </div>

            <div className="space-y-4 text-[#6B7280] dark:text-gray-400 leading-relaxed">
              {content.profile.aboutMe.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
