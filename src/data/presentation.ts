type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "sahithmanchi08@gmail.com",
  title: "Hi, I’m Sahith Manchi 👋",
  // profile: "/profile.webp",
  description:
    "Namaste 🙏🏻, i'm a *Java Full Stack Developer* with over * 5+ years* of Java, Springboot, Spring MVC, Microservices, Angular, React, Azure, AWS with various Database experiences like Oracle, PostgresSql, MongoDB Etc., I can Create, Build and Develop Full Stack Applications.",
  socials: [
    {
      label: "linkedin",
      link: "https://www.linkedin.com/in/sahithm/",
    },
    {
      label: "Github",
      link: "https://github.com/Sahith1408",
    },
  ],
};

export default presentation;
