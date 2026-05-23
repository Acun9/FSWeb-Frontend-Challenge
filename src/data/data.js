export const data = {
  tr: {
    header: {
      skills: "Yetenekler",
      projects: "Projeler",
      hireMe: "İletişim",
      darkMode: "KARANLIK MOD",
      lightMode: "AYDINLIK MOD",
      switchToTr: "TÜRKÇE'YE GEÇ",
      switchToEn: "SWITCH TO EN",
    },
    hero: {
      name: "Murat Acun",
      title: "Yaratıcı düşünür Minimalist sever",
      description:
        "Merhaba, ben Murat. Harika kullanıcı deneyimine sahip, sağlam ve ölçeklenebilir ön yüz ürünleri geliştirmeyi seven bir full-stack geliştiriciyim. Birlikte çalışmak için tanışalım.",
      hireButton: "Beni İşe Al",
      githubButton: "Github",
      linkedinButton: "Linkedin",
      heroImageAlt: "Murat Acun - Frontend Geliştirici",
    },
    skills: {
      title: "Yetenekler",
      items: [
        {
          name: "JavaScript",
          description:
            "ES6+, asenkron yapılar, fonksiyonel programlama ve modüler kod organizasyonu. Tarayıcı API'leri ve performans odaklı yazılımlar geliştiririm.",
        },
        {
          name: "React.Js",
          description:
            "Hooks, Context API, React Router ve Redux ile bileşen tabanlı, performanslı ve sürdürülebilir tek sayfa uygulamaları geliştiririm.",
        },
        {
          name: "Node.Js",
          description:
            "Express ile RESTful API tasarımı, JWT tabanlı kimlik doğrulama ve PostgreSQL/MongoDB veritabanı entegrasyonu konularında deneyimliyim.",
        },
      ],
    },
    profile: {
      title: "Profil",
      basicInfoTitle: "Temel Bilgiler",
      aboutMeTitle: "Hakkımda",
      basicInfo: {
        birthDate: { label: "Doğum Tarihi", value: "24.03.1996" },
        city: { label: "İkamet Şehri", value: "Ankara" },
        education: {
          label: "Eğitim Durumu",
          value: "Hacettepe Ünv. Biyoloji Lisans, 2016",
        },
        role: { label: "Tercih Ettiği Rol", value: "Frontend, UI" },
      },
      aboutMe: [
        "Workintech Full Stack Web Geliştirme programında, sıfırdan üretken bir geliştiriciye dönüşmek için yoğun bir yolculuğa çıktım. HTML, CSS, JavaScript ve React ekosistemiyle modern web uygulamaları geliştiriyorum.",
        "Temiz, sürdürülebilir kod yazmaya, erişilebilirliğe ve kullanıcı deneyimine önem veriyorum. Yeni teknolojileri öğrenmeye ve takım çalışmasına açığım; tasarımı koda dönüştürmekten ayrı bir keyif alıyorum.",
      ],
    },
    projects: {
      title: "Projeler",
      items: [
        {
          title: "Workintech",
          description:
            "Workintech Full Stack programında geliştirdiğim, modern bir e-ticaret arayüzü. React Router, Redux ve Tailwind CSS ile responsive ve dark-mode destekli olarak hazırlandı.",
          tags: ["react", "redux", "tailwind"],
          links: {
            github: "Github",
            view: "View Site",
            githubUrl: "https://github.com/Acun9",
            viewUrl: "https://github.com/Acun9",
          },
          image: "workintech",
        },
        {
          title: "Random Jokes",
          description:
            "Harici bir REST API'den rastgele şakalar çeken küçük bir React uygulaması. Axios, custom hook'lar ve toast bildirimleriyle yükleme/hata durumlarını yönetir.",
          tags: ["react", "axios", "css"],
          links: {
            github: "Github",
            view: "View Site",
            githubUrl: "https://github.com/Acun9",
            viewUrl: "https://github.com/Acun9",
          },
          image: "random-jokes",
        },
        {
          title: "Journey",
          description:
            "Seyahat planı oluşturmaya odaklanan, çok adımlı form ve dinamik liste yönetimi içeren bir React uygulaması. Context API ile global state yönetilir.",
          tags: ["react", "context", "css"],
          links: {
            github: "Github",
            view: "View Site",
            githubUrl: "https://github.com/Acun9",
            viewUrl: "https://github.com/Acun9",
          },
          image: "journey",
        },
      ],
    },
    footer: {
      msg: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
      email: "m.muratacun9@gmail.com",
      emailLabel: "Bana e-posta gönder",
      links: [
        {
          label: "Github",
          url: "https://github.com/Acun9",
          color: "text-[#00AB6B]",
        },
        {
          label: "Linkedin",
          url: "https://www.linkedin.com/in/acun9/",
          color: "text-[#0077B5]",
        },
      ],
    },
  },

  en: {
    header: {
      skills: "Skills",
      projects: "Projects",
      hireMe: "Contact",
      darkMode: "DARK MODE",
      lightMode: "LIGHT MODE",
      switchToTr: "TÜRKÇE'YE GEÇ",
      switchToEn: "SWITCH TO EN",
    },
    hero: {
      name: "Murat Acun",
      title: "Creative thinker Minimalism lover",
      description:
        "Hi, I'm Murat. I'm a full-stack developer who loves crafting solid, scalable frontend products with great user experiences. Let's shake hands and build something together.",
      hireButton: "Hire me",
      githubButton: "Github",
      linkedinButton: "Linkedin",
      heroImageAlt: "Murat Acun - Frontend Developer",
    },
    skills: {
      title: "Skills",
      items: [
        {
          name: "JavaScript",
          description:
            "ES6+, async patterns, functional programming and modular code organization. I build performance-focused apps that play nicely with the browser platform.",
        },
        {
          name: "React.Js",
          description:
            "Hooks, Context API, React Router and Redux to ship component-based, performant and maintainable single page applications.",
        },
        {
          name: "Node.Js",
          description:
            "Designing RESTful APIs with Express, JWT-based auth, and integration with PostgreSQL/MongoDB databases.",
        },
      ],
    },
    profile: {
      title: "Profile",
      basicInfoTitle: "Basic Information",
      aboutMeTitle: "About Me",
      basicInfo: {
        birthDate: { label: "Birth Date", value: "24.03.1996" },
        city: { label: "City", value: "Ankara" },
        education: {
          label: "Education",
          value: "Hacettepe University, B.Sc. in Biology, 2016",
        },
        role: { label: "Preferred Role", value: "Frontend, UI" },
      },
      aboutMe: [
        "Through the Workintech Full Stack Web Development program I went on an intense journey to become a productive developer from scratch. I build modern web apps with HTML, CSS, JavaScript and the React ecosystem.",
        "I care about clean, maintainable code, accessibility and user experience. I'm open to new technologies and teamwork — turning designs into delightful interfaces is what I enjoy the most.",
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Workintech",
          description:
            "A modern e-commerce interface I built during the Workintech Full Stack program. Responsive and dark-mode ready, powered by React Router, Redux and Tailwind CSS.",
          tags: ["react", "redux", "tailwind"],
          links: {
            github: "Github",
            view: "View Site",
            githubUrl: "https://github.com/Acun9",
            viewUrl: "https://github.com/Acun9",
          },
          image: "workintech",
        },
        {
          title: "Random Jokes",
          description:
            "A small React app pulling random jokes from a public REST API. Uses Axios, custom hooks and toast notifications to handle loading and error states.",
          tags: ["react", "axios", "css"],
          links: {
            github: "Github",
            view: "View Site",
            githubUrl: "https://github.com/Acun9",
            viewUrl: "https://github.com/Acun9",
          },
          image: "random-jokes",
        },
        {
          title: "Journey",
          description:
            "A React app focused on planning trips, with a multi-step form and dynamic list management. Global state is handled with the Context API.",
          tags: ["react", "context", "css"],
          links: {
            github: "Github",
            view: "View Site",
            githubUrl: "https://github.com/Acun9",
            viewUrl: "https://github.com/Acun9",
          },
          image: "journey",
        },
      ],
    },
    footer: {
      msg: "Let's work together on your next product.",
      email: "m.muratacun9@gmail.com",
      emailLabel: "Send me an email",
      links: [
        {
          label: "Github",
          url: "https://github.com/Acun9",
          color: "text-[#00AB6B]",
        },
        {
          label: "Linkedin",
          url: "https://www.linkedin.com/in/acun9/",
          color: "text-[#0077B5]",
        },
      ],
    },
  },
};
