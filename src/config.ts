export const config = {
  title: "sa/acc — Accelerating AI & Tech in Saudi Arabia",
  titleAr: "sa/acc — تسريع الذكاء الاصطناعي والتقنية في السعودية",
  description: "Saudi Acceleration — Accelerating AI & tech in Saudi Arabia",
  descriptionAr:
    "التسارع السعودي — تسريع الذكاء الاصطناعي والتقنية في السعودية",
  author: "sa/acc",
  url: "https://saacchq.org",
  /** Public contact email */
  contactEmail: "hello@saacchq.org",
  social: {
    discord: "https://discord.gg/Ks4Dpdzkmn",
    github: "https://github.com/saacchq",
    repo: "https://github.com/saacchq/saacchq.github.io",
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
    schedule: "Every Saturday at 7 PM (Riyadh)",
    scheduleAr: "كل سبت الساعة ٧ مساءً (الرياض)",
    /**
     * Live "meeting in progress" banner (Discord Widget). To enable:
     *  1. Discord → Server Settings → Widget → enable "Server Widget".
     *  2. Put the server (guild) ID here. The site polls the public
     *     widget.json and shows a banner when someone is in voice.
     *  3. Optional: set discordVoiceChannelId to only count that one channel
     *     as "the meeting" (otherwise any voice presence counts).
     * Left empty → the banner is dormant and nothing renders.
     */
    discordGuildId: "",
    discordVoiceChannelId: "",
  },
  manifesto: [
    { id: "01", tag: "#build" },
    { id: "02", tag: "#research" },
    { id: "03", tag: "#engineering" },
    { id: "04", tag: "#share" },
    { id: "05", tag: "#connect" },
  ],
} as const;
