import { EExperiencePositionIcon, IExperience } from "../types/experiences";

export const EXPERIENCES: IExperience[] = [
  {
    company: "EstateKit",
    companyLogo: "/images/companies/estatekit.png",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Software Engineer",
        year: "Oct 2022 - present",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.CodeXml,
        description:
          "- Built, and maintained the [EstateKit SaaS Infrastructure](https://estatekit.co/). \n - Deployed and maintained EstateKit's Infrastructure without relying on expensive Cloud Services. \n - Strategized and implemented scaleable solutions by leveraging only open-source tools and software.",
        skills: [
          "PocketBase",
          "TypeScript",
          "Astro.js",
          "React.js",
          "NGinx",
          "VPS Hosting",
          "Golang",
        ],
        expanded: true,
      },
    ],
    current: true,
  },
  {
    company: "VarLab, LLC.",
    companyLogo: "/images/companies/quaric.png",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Software Engineer",
        year: "Mar 2024 - present",
        employmentType: "Contract",
        icon: EExperiencePositionIcon.CodeXml,
        description:
          "In-house Project: [Solana Core](https://varlab.llc) \n - Developed a performance optimized backend. \n\n In-House Project: CryptoMM Bot \n - Created a Discord bot to automate Crypto trade between two real users.",
        skills: [
          "Laravel",
          "Discord.js",
          "Typescript",
          "PHP",
          "Discord.js",
          "Javascript"
        ],
        expanded: true,
      },
    ],
    current: true,
  },
];
