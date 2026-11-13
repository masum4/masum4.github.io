/* =========================================================
   EDIT THIS FILE to update your portfolio.
   Everything on the site (projects, contact, services) reads from here.
   Leave a value as "" to hide it.
   ========================================================= */
window.SITE = {
  name: "Masum Khandakar",
  shortName: "Masum",
  location: "Bangladesh",
  timezone: "Asia/Dhaka",       // used for the live local-time clock
  available: true,              // green "Available for projects" badge
  photo: "assets/me.jpg",                  // your portrait, e.g. "assets/me.jpg" — shows inside the hero camera frame

  contact: {
    email: "masumkhandakar4@gmail.com",
    whatsapp: "8801784065730",  // international format, digits only
    whatsappLabel: "+880 1784-065730",
  },

  socials: [
    { label: "Facebook",  url: "https://www.facebook.com/masum.khandakar4/" },
    { label: "LinkedIn",  url: "https://www.linkedin.com/in/masum4/" },
    { label: "Instagram", url: "https://www.instagram.com/mh_masum57/" },
    // { label: "YouTube",   url: "https://youtube.com/@..." },
  ],

  /* Projects ------------------------------------------------
     type:   "theme" | "film" | "ad" | "shopify" | "web"
     format: "16:9" | "9:16"
     video:  YouTube link (watch, youtu.be or shorts) — plays in a popup
     link:   any live URL (ThemeForest, store, website, Facebook post)
     cta:    optional badge text, e.g. "View on ThemeForest"
     size:   optional "wide" (2/3 row) or "half" (1/2 row); default 1/3
     poster: optional big word on the card when there's no thumb
     thumb:  optional image path, e.g. "assets/work/archinex.jpg"
     Leave video and link empty and the card shows "In production".
     Filter buttons with no projects hide themselves.               */
  projects: [
    { title: "Archinex — Architecture & Interior Design", type: "theme", format: "WordPress", poster: "Archinex", client: "ThemeForest", tools: "Elementor", cta: "View on ThemeForest",
      link: "https://themeforest.net/item/archinex-modern-architecture-interior-design-wordpress-theme/65116521", thumb: "assets/work/archinex.png" },
    { title: "Dinevo — Restaurant & Cafe", type: "theme", format: "WordPress", poster: "Dinevo", client: "ThemeForest", tools: "Elementor", cta: "View on ThemeForest",
      link: "https://themeforest.net/item/dinevo-modern-restaurant-cafe-wordpress-theme/63237353", thumb: "assets/work/dinevo.png" },
    { title: "Orvio — Creative Agency & Portfolio", type: "theme", format: "WordPress", poster: "Orvio", client: "ThemeForest", tools: "Elementor", cta: "View on ThemeForest",
      link: "https://themeforest.net/item/orvio-creative-agency-and-portfolio-wordpress-theme/59374477", thumb: "assets/work/orvio.png" },
    { title: "Feux — Creative Digital Agency", type: "theme", format: "WordPress", size: "half", poster: "Feux", client: "ThemeForest", tools: "Elementor", cta: "View on ThemeForest",
      link: "https://themeforest.net/item/feux-creative-digital-agency-wordpress-theme/57380914", thumb: "assets/work/feux.png" },
    { title: "Unikon — Multipurpose Agency", type: "theme", format: "WordPress", size: "half", poster: "Unikon", client: "ThemeForest", tools: "Elementor", cta: "View on ThemeForest",
      link: "https://themeforest.net/item/unikon-multipurpose-agency-elementor-wordpress-theme/55397712", thumb: "assets/work/unikon.png" },
    { title: "AI short story — Part 1", type: "film", format: "9:16", size: "half", poster: "Story 01", client: "Personal", tools: "AI video · Edit · Sound", cta: "▶ Watch on Facebook",
      link: "https://www.facebook.com/share/r/1KF48nzF37/", thumb: "" },
    { title: "AI short story — Part 2", type: "film", format: "9:16", size: "half", poster: "Story 02", client: "Personal", tools: "AI video · Edit · Sound", cta: "▶ Watch on Facebook",
      link: "https://www.facebook.com/share/v/1X51UAtXDW/", thumb: "" },
  ],

  /* Starting prices are optional. Leave "" to show "Ask for a quote". */
  services: [
    {
      id: "video", tag: "01 / Motion", title: "AI video & ad films",
      blurb: "Scroll-stopping ads, product films and reels — script, AI generation, edit, sound and delivery.",
      items: ["TVC-style brand films (16:9)", "Facebook / Instagram ads (9:16)", "UGC & avatar videos", "Reels, Shorts & TikTok edits"],
      price: "",
    },
    {
      id: "shopify", tag: "02 / Commerce", title: "Shopify stores",
      blurb: "Stores that are ready to sell on day one — products, variants, shipping, payments and a clean theme.",
      items: ["Store setup from zero", "Theme customisation", "Product pages that convert", "Shipping, tax & payment setup"],
      price: "",
    },
    {
      id: "web", tag: "03 / Web", title: "WordPress themes & websites",
      blurb: "I design and build premium WordPress themes sold on ThemeForest — and custom sites for businesses.",
      items: ["Custom WordPress & Elementor sites", "Theme customisation & setup", "Landing pages", "Speed, SEO basics & deploy"],
      price: "",
    },
  ],

  faq: [
    { q: "How long does an ad video take?", a: "A 15–30 second ad usually takes 2–4 days from approved script to final file. Rush delivery is possible for small edits." },
    { q: "Do you write the script too?", a: "Yes. Send your product and your goal; I write the hook, script and shot list, and you approve it before anything is generated." },
    { q: "Can you build the store AND make the launch videos?", a: "That's the point. The Launch Kit combines a Shopify store with matching ad creatives, so the brand looks the same from the ad to the checkout." },
    { q: "How many revisions do I get?", a: "Two rounds of revisions are included on every project. Small text or music changes don't count as a round." },
    { q: "How do we pay?", a: "50% to start, 50% on delivery. bKash, Nagad and bank transfer for local clients; Payoneer or Wise for international." },
  ],
};
