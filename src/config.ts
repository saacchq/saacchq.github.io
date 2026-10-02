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
  /**
   * Community profiles shown on /members with detail pages. The complete
   * Discord roster is generated separately at build time.
   *
   * `avatar`: path to a committed image (e.g. your Discord profile picture) under
   *   public/assets/members/, referenced as /assets/members/<file>. Leave empty
   *   to show a monogram fallback. `discord` is your Discord username (optional).
   */
  members: {
    "Mazen Alotaibi": {
      slug: "mazen-alotaibi",
      role: "Founder",
      roleAr: "المؤسس",
      discord: "ma7dev",
      handle: "ma7dev",
      url: "https://x.com/ma7dev",
      bio: "",
      bioAr: "",
    },
    "Yousef Altaher": {
      slug: "yousef-altaher",
      role: "Contributor",
      roleAr: "مساهم",
      discord: "",
      handle: "yousef-altaher",
      url: "https://www.linkedin.com/in/yousef-altaher/",
      bio: "",
      bioAr: "",
    },
  },
  manifesto: [
    { id: "01", tag: "#build" },
    { id: "02", tag: "#research" },
    { id: "03", tag: "#engineering" },
    { id: "04", tag: "#share" },
    { id: "05", tag: "#connect" },
  ],
} as const;
