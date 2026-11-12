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

  contact: {
    email: "",                  // e.g. "hello@yourmail.com"
    whatsapp: "",               // international format, digits only: "8801XXXXXXXXX"
    whatsappLabel: "",          // how it's shown: "+880 1XXX-XXXXXX"
  },

  socials: [
    // { label: "YouTube",   url: "https://youtube.com/@..." },
    // { label: "Facebook",  url: "https://facebook.com/..." },
    // { label: "Instagram", url: "https://instagram.com/..." },
    // { label: "LinkedIn",  url: "https://linkedin.com/in/..." },
    // { label: "GitHub",    url: "https://github.com/..." },
  ],

  /* Projects ------------------------------------------------
     type:   "film" | "ad" | "shopify" | "web"
     format: "16:9" | "9:16"   (videos)   — web/shopify use "16:9"
     video:  YouTube link (watch, youtu.be or shorts) — plays in a popup
     link:   any live URL (store, website, Facebook post)
     thumb:  optional image path, e.g. "assets/work/rose-cream.jpg"
     Leave video and link empty and the card shows "In production".   */
  projects: [
    { title: "Cinematic brand film", type: "film", format: "16:9", client: "Concept", tools: "Seedance · Kling · Premiere", video: "", link: "", thumb: "" },
    { title: "Product ad for an F-commerce brand", type: "ad", format: "9:16", client: "Concept", tools: "AI model · CapCut", video: "", link: "", thumb: "" },
    { title: "Shopify store build", type: "shopify", format: "16:9", client: "Practice store", tools: "Shopify · Dawn theme", video: "", link: "", thumb: "" },
    { title: "UGC-style reel", type: "ad", format: "9:16", client: "Concept", tools: "AI avatar · Voiceover", video: "", link: "", thumb: "" },
    { title: "Landing page for a launch", type: "web", format: "16:9", client: "Concept", tools: "HTML · CSS · JS", video: "", link: "", thumb: "" },
    { title: "AI short film", type: "film", format: "9:16", client: "Personal", tools: "Veo · Suno · Premiere", video: "", link: "", thumb: "" },
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
      id: "web", tag: "03 / Web", title: "Websites & landing pages",
      blurb: "Fast, mobile-first pages for launches, personal brands and small businesses.",
      items: ["Landing pages", "Portfolio & business sites", "Speed & SEO basics", "Deploy + domain setup"],
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
