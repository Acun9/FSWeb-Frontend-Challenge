import { useLanguage } from "../context/LanguageContext";

const Profile = () => {
  const { content } = useLanguage();

  return (
    <section className="py-24">
      <div className="section-wrapper space-y-10">
        <div>
          <h2 className="text-[48px] font-semibold leading-none text-[#1F2937] dark:text-[#B7AAFF]">
            {content.profile.title}
          </h2>
          <div className="mt-4 h-px w-full bg-[#BAB2E7] dark:bg-[#B7AAFF]"></div>
        </div>

        <div className="grid gap-12 md:grid-cols-[420px_minmax(0,1fr)]">
          <div className="space-y-6">
            <h3 className="text-[30px] font-medium leading-7 text-[#4338CA] dark:text-[#E2E2E2]">
              {content.profile.basicInfoTitle}
            </h3>
            <div className="space-y-4 text-[18px] leading-9 text-[#000000] dark:text-[#E2E2E2]">
              {Object.entries(content.profile.basicInfo).map(([key, info]) => (
                <div
                  key={key}
                  className="flex flex-col gap-1 md:flex-row md:gap-6"
                >
                  <span className="w-full text-[18px] font-semibold tracking-[0.01em] text-[#000000] md:w-44 dark:text-[#E2E2E2]">
                    {info.label}
                  </span>
                  <span className="text-[18px] tracking-[0.01em] text-[#000000] dark:text-[#AAAAAA]">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[30px] font-medium leading-7 text-[#4338CA] dark:text-[#E2E2E2]">
              {content.profile.aboutMeTitle}
            </h3>
            <div className="space-y-4 text-[18px] leading-[27px] text-[#6B7280] dark:text-[#AAAAAA]">
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
