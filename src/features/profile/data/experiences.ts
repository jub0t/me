import { EExperiencePositionIcon, IExperience } from "../types/experiences";

export const EXPERIENCES: IExperience[] = [
  {
    company: "EstateKit",
    companyLogo: "/images/companies/simplamo.png",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Senior Frontend Developer",
        year: "Oct 2022 - present",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.CodeXml,
        description:
          "- Build and maintain the [Zalo Mini App](https://zalo.me/s/1736112917405511258/) for Simplamo, ensuring seamless integration and performance.\n- Develop and maintain core features for Simplamo, driving its functionality and user experience.\n- Maintain UI/UX consistency and ensure adherence to standards across all implementations for Simplamo.\n- Ensured robust frontend technical solutions for both web and mobile platforms, aligning with project requirements and industry standards.\n- Analyzed and clarified technical implementation capabilities, providing guidance on feasible and optimal solutions.",
        skills: [
          "TypeScript",
          "Next.js",
          "MobX",
          "MobX-State-Tree",
          "Tailwind CSS",
          "Zalo Mini App",
          "Agile",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
        expanded: true,
      },
      {
        id: "cedd7adb-4118-4085-9983-ae00530b49e2",
        title: "UI Design Lead",
        year: "Oct 2022 - present",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.DraftingCompass,
        description:
          "- Maintain UI/UX consistency and ensure adherence to high-quality standards across all design implementations.\n- Designed intuitive and user-focused interfaces for features specified by the Product Team, aligning with business goals and user needs.\n- Defined and established the UI design style for Simplamo's features, ensuring a cohesive and visually appealing user interface.",
        skills: ["Creativity", "UI/UX Design", "Figma"],
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
          "In-house Project: [Solana Core](https://varlab.llc) \n - Integrated the VNPAY - QR payment gateway, enabling seamless and secure transactions.\n - Registered the e - commerce website with the Ministry of Industry and Trade([online.gov.vn](http://online.gov.vn/Home/WebDetails/115855)) to ensure compliance with regulatory requirements.\n- Developed an online ordering feature, streamlining the purchasing process for users.\n\n",
        skills: [
          "Laravel",
          "Discord.js",
          "Typescript",
          "PHP",
          "Javascript"
        ],
        expanded: true,
      },
      // {
      //   id: "991692c4-7d02-4666-8d31-933c4831768d",
      //   title: "Developer",
      //   year: "Mar 2022 - 2024",
      //   employmentType: "Contract",
      //   description:
      //     "- Lead and manage the company's strategy.\n- Oversee technical teams and product development.\n- Manage relationships with customers and partners.",
      //   skills: ["Frontend Development", "Backend Development"],
      // },
    ],
    current: true,
  },
  {
    company: "Tung Tung JSC",
    companyLogo: "/images/companies/tungtung.png",
    positions: [
      {
        id: "3e831244-8d8c-41e2-b2ce-7f3946956afd",
        title: "Web Developer",
        year: "2020 - 2022",
        employmentType: "Full-time",
        description:
          "- Designed and developed a scalable design system, promoting consistency and efficiency across the application.\n- Collaborated with the Backend Team to integrate APIs seamlessly into the website, enhancing functionality and performance.",
        icon: EExperiencePositionIcon.CodeXml,
        skills: [
          "React",
          "Redux",
          "Storybook",
          "Lerna",
          "Agile",
          "Teamwork",
          "Research",
        ],
        expanded: true,
      },
      {
        id: "13bd34c3-db84-4fad-8132-a6c89a42957e",
        title: "Mobile Developer",
        year: "2019 - 2020",
        employmentType: "Full-time",
        description:
          "- Rebuilt the mobile application using React Native, implementing the new design to enhance user experience and performance.\n- Integrated the [MoMo payment gateway](https://github.com/momo-wallet/mobile-sdk/issues/5) and App Store in-app purchase, enabling seamless and secure payment options.\n- Optimized the application deployment process for staging and production environments, ensuring efficient and reliable rollouts.\n- Published the mobile application on both the App Store and Google Play Store, reaching a wider audience and ensuring compliance with platform standards.",
        icon: EExperiencePositionIcon.CodeXml,
        skills: [
          "React Native",
          "Redux",
          "MoMo Payment API",
          "App Store",
          "Google Play Store",
          "Agile",
          "Teamwork",
          "Research",
        ],
        expanded: true,
      },
      {
        id: "73151add-7adf-4035-a237-b5803ceb5478",
        title: "UI/UX Designer",
        year: "2018 - 2019",
        employmentType: "Part-time",
        description:
          '- Redesigned and enhanced the interface of the "Online Quiz Platform" for both web and mobile applications, creating a more modern and visually appealing design.\n- Improved the user experience (UX) by addressing usability issues, streamlining navigation, and ensuring an intuitive user journey.',
        icon: EExperiencePositionIcon.DraftingCompass,
        skills: ["UI/UX Design", "Sketch"],
      },
    ],
  },
  {
    company: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Web Developer",
        year: "2018 - 2020",
        employmentType: "Part-time",
        description:
          "- Developed a website for order placement, order management, and tracking delivery progress on a map for drivers.\n- Developed an e-commerce website for a company specializing in bird's nest products.\n- Developed a map to display information about monitoring stations.\n- Designed and developed a Landing Page interface for WordPress, allowing clients to modify content according to their needs.",
        icon: EExperiencePositionIcon.CodeXml,
        skills: [
          "Laravel",
          "React",
          "Express.js",
          "Socket.IO",
          "MongoDB",
          "Firebase",
          "Docker",
          "NGINX",
        ],
      },
      {
        id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
        title: "Graphic & UI/UX Designer",
        year: "2018 - 2019",
        employmentType: "Part-time",
        description:
          "Designed logos, posters, advertising banners, and user interfaces.",
        icon: EExperiencePositionIcon.Palette,
        skills: [
          "Creativity",
          "UI/UX Design",
          "Graphic Design",
          "Sketch",
          "Adobe Photoshop",
          "Adobe Illustrator",
        ],
      },
    ],
  },
  // {
  //   company: "Education",
  //   positions: [
  //     {
  //       id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
  //       title: "University of Science - VNUHCM",
  //       year: "Aug 2018 - present",
  //       employmentType: "Full-time",
  //       icon: EExperiencePositionIcon.GraduationCap,
  //       description:
  //         "- Currently studying for a Bachelor's degree in Information Systems.\n- Language Proficiency: B1 English Level (Intermediate).\n- Achieved several awards, including:\n  - Bronze Medal - 10th Design, Fabrication, and Application Awards 2022\n  - 2nd Prize - Business Startup Competition 2019 (organized by University of Economics and Law - VNUHCM)",
  //       skills: [
  //         "C++",
  //         "Java",
  //         "Python",
  //         "Data Structures",
  //         "Algorithms",
  //         "Advanced Databases",
  //         "Systems Design",
  //         "Distributed Systems",
  //         "Software Engineering",
  //         "Self-learning",
  //         "Teamwork",
  //         "Presentation",
  //       ],
  //       expanded: true,
  //     },
  //     {
  //       id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
  //       title: "Ly Tu Trong High School for the Gifted - Can Tho City",
  //       year: "Aug 2015 - Jun 2018",
  //       employmentType: "Full-time",
  //       icon: EExperiencePositionIcon.GraduationCap,
  //       description:
  //         "- Student of the Specialized Computer Science Program.\n- Granted direct admission to university due to achieving 3rd prize at the national level.\n- [Achieved numerous awards](https://baocantho.com.vn/nguyen-chanh-dai-17-tuoi-va-19-giai-thuong-a97348.html) at city and national levels, including:\n  - [3rd Prize](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm) - Viet Nam Science and Engineering Fair 2018 (ViSEF)\n  - 1st Prize - Can Tho City Science and Engineering Fair 2018\n  - Creativity Award - Binh Duong Hackathon 2017\n  - Consolation Prize - National Youth and Children's Creativity Contest 2016\n  - [1st Prize](https://www.youtube.com/watch?v=OYgugvjqU4A) - Can Tho City Youth and Children's Creativity Contest 2016\n  - 3rd Prize (Hardware programming) - National Youth Informatics Contest 2016\n- Developed a feature using Node.js and Pandoc to recognize multiple-choice questions from .docx files and upload them to an [online quiz platform](https://youtu.be/QjR99wdmTyo) I created.\n- Developed websites based on Laravel framework.\n- Built websites with PHP and MySQL, following the MVC architecture.",
  //       skills: [
  //         "Algorithms",
  //         "C++",
  //         "PHP",
  //         "MySQL",
  //         "Laravel",
  //         "Node.js",
  //         "Pandoc",
  //         "Self-learning",
  //       ],
  //       expanded: true,
  //     },
  //     {
  //       id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
  //       title: "Thuan Hung Secondary School",
  //       year: "Aug 2011 - Jun 2015",
  //       employmentType: "Full-time",
  //       icon: EExperiencePositionIcon.GraduationCap,
  //       description:
  //         "- Achieved numerous awards at city and national levels:\n  - Consolation Prize (Pascal Programming) - National Youth Informatics Contest 2015\n  - Consolation Prize (Creative Software) - National Youth Informatics Contest 2014\n  - 1st Price (Creative Software) - Can Tho City Youth Informatics Contest 2014\n- Developed websites using the open-source NukeViet CMS.",
  //       skills: [
  //         "Pascal",
  //         "NukeViet",
  //         "HTML",
  //         "CSS",
  //         "JavaScript",
  //         "Self-learning",
  //       ],
  //     },
  //   ],
  // },
];
