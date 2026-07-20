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
    repo: "https://github.com/saacchq/saacchq.org",
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
  /** Canonical topic tags shown on /tags (alongside the per-series tags). */
  topics: ["news", "build", "engineering", "research", "share"],
  /**
   * Post series, each led by an author. A series is identified by a tag: any
   * post carrying a tag matching one of these keys belongs to that series
   * (the key is also its /tags/<key> route). Single source of truth for
   * series names and their lead author's profile link.
   */
  series: {
    "ai-weekly": {
      name: "AI Weekly",
      nameAr: "الذكاء الاصطناعي الأسبوعية",
      author: "Mazen Alotaibi",
      handle: "ma7dev",
      authorUrl: "https://x.com/ma7dev",
    },
    "ai-abliteration": {
      name: "AI Abliteration Series",
      nameAr: "سلسلة أبليتيريشن الذكاء الاصطناعي",
      author: "Yousef Altaher",
      handle: "yousef-altaher",
      authorUrl: "https://www.linkedin.com/in/yousef-altaher/",
    },
  },
  /**
   * Community members, keyed by full name (use the exact same string in a post's
   * `author` field to link posts to a member). Each member gets a card on
   * /members and their own page at /members/<slug>.
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
      avatar: "/assets/members/mazen-alotaibi.png",
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
      avatar: "/assets/members/yousef-altaher.png",
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
