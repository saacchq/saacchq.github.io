export const config = {
  postsPerPage: 10,
  title: "sa/acc — Accelerating AI & Tech in Saudi Arabia",
  titleAr: "sa/acc — تسريع الذكاء الاصطناعي والتقنية في السعودية",
  description: "Saudi Acceleration — Accelerating AI & tech in Saudi Arabia",
  descriptionAr:
    "التسارع السعودي — تسريع الذكاء الاصطناعي والتقنية في السعودية",
  author: "sa/acc",
  url: "https://saacchq.org",
  /** Public contact and Google Calendar subscribe id */
  contactEmail: "hello@saacchq.org",
  social: {
    discord: "https://discord.gg/Ks4Dpdzkmn",
    github: "https://github.com/saacchq",
  },
  partners: [
    {
      name: "CranL",
      url: "https://cranl.com",
      urlLabel: "cranL.com",
      logo: "/assets/imgs/cranl_logo.png",
    },
  ],
  associations: [
    {
      name: "Cursor Saudi",
      url: "https://cursorsaudi.com",
      urlLabel: "cursorsaudi.com",
      logo: "/assets/imgs/cursorsaudi_logo.png",
    },
  ],
  meeting: {
    schedule: "Every Friday at 10 PM (Riyadh)",
    scheduleAr: "كل جمعة الساعة ١٠ مساءً (الرياض)",
  },
  manifesto: [
    { id: "01", tag: "#build" },
    { id: "02", tag: "#research" },
    { id: "03", tag: "#engineering" },
    { id: "04", tag: "#share" },
    { id: "05", tag: "#connect" },
  ],
} as const;
