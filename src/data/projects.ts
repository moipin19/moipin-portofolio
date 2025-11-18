export type Project = {
  name: string;
  company?: string;
  description: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    name: "Alaska Airlines Website",
    description:
      "Maintained and enhanced the main website using Next.js with focus on performance and accessibility; built reusable components with LitElement for the design system.",
    tech: ["Next.js", "LitElement", "WCAG"],
  },
  {
    name: "Wynn Las Vegas Hospitality Platform",
    description:
      "Developed front-end modules for hospitality platform using React Native, implementing booking, payment, and digital key features.",
    tech: ["React Native"],
  },
  {
    name: "Pret A Manger Internal Tools",
    description:
      "Built internal back-office tools using Next.js and Tailwind CSS to improve operational efficiency.",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    name: "Eyecare Patient Portal",
    description:
      "Developed a Next.js web app with ADA-compliant accessibility for patient scheduling.",
    tech: ["Next.js", "Accessibility"],
  },
  {
    name: "Baker & Taylor Mobile App",
    description:
      "Created a React Native mobile app for an online library with offline capability and intuitive navigation.",
    tech: ["React Native"],
  },
  {
    name: "JMACS IntelliTech JMS",
    description:
      "Developed a Jail Management System web app using React.js and Redux-Saga, focusing on dashboard visualization and data automation.",
    tech: ["React", "Redux-Saga"],
  },
  {
    name: "SEVA E-commerce UI",
    description:
      "Built front-end UI for an automotive e-commerce platform using JSP, jQuery, and Sass; improved component performance and interface consistency.",
    tech: ["JSP", "jQuery", "Sass"],
  },
];

