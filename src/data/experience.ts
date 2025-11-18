export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Photon",
    role: "Senior Software Engineer",
    duration: "Aug 2021 – Present",
    bullets: [
      "Developed and maintained enterprise-grade front-end applications using React, Next.js, React Native, and LitElement.",
      "Built modular and reusable UI components ensuring maintainability, scalability, and accessibility compliance.",
      "Improved performance, load time, and overall UX across multiple platforms.",
      "Implemented unit and integration testing using Jest, Enzyme, and React Testing Library.",
      "Collaborated with global cross-functional teams in an Agile environment.",
      "Contributed to front-end architecture improvements and CI/CD automation.",
    ],
  },
  {
    company: "Astra International (SEVA)",
    role: "Software Engineer",
    duration: "Aug 2019 – Aug 2021",
    bullets: [
      "Developed and maintained the SEVA automotive e-commerce platform using JSP, jQuery, and Sass.",
      "Collaborated with backend and UI/UX teams to deliver responsive, accessible UIs.",
      "Enhanced website performance and ensured cross-browser compatibility.",
      "Supported UI/UX improvements to align with evolving business requirements.",
    ],
  },
];

