/* =========================================================
   EDIT THIS FILE to update your portfolio.
   Everything on the site (projects, contact, services) reads from here.
   Leave a value as "" to hide it.
   ========================================================= */
window.SITE = {
  name: "Mehedi Hasan Masum",
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
     type:   "theme" | "film" | "ad" | "store" | "web"
     summary: optional one-line case study shown on the card
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
    /* Client work: titles name the industry, not the client.
       Add link: "https://..." only once the client is happy to be shown. */
    { title: "Football gear shop — WooCommerce redesign", type: "store", format: "WooCommerce", size: "half", poster: "Shop redesign", client: "Client · Germany", tools: "WooCommerce · Elementor", cta: "Client project",
      summary: "Put a 17-screen redesign onto a live German store without closing it, cut unneeded plugins for speed, and left pages the owner can edit himself.", link: "", thumb: "" },
    { title: "Tech expo — exhibitor booking site", type: "store", format: "WooCommerce", size: "half", poster: "Expo booking", client: "Client · Australia", tools: "WooCommerce · Stripe · Custom plugin", cta: "Client project",
      summary: "One-page event site with paid exhibitor packages, limited slots with live counters, bank-transfer holds and a settings screen the organiser runs alone.", link: "", thumb: "" },
    { title: "Visa agency — SEO & WordPress clean-up", type: "web", format: "WordPress", size: "half", poster: "SEO audit", client: "Client · Switzerland", tools: "WordPress · Yoast · Elementor", cta: "Client project",
      summary: "SEO audit, then the fixes on the live site: indexing, titles and headings, dead links, redirects and a WhatsApp-first landing page for their main market.", link: "", thumb: "" },
    { title: "AI trading platform — landing page", type: "web", format: "WordPress", size: "half", poster: "Landing page", client: "Client · UAE", tools: "WordPress · Brand assets", cta: "Client project",
      summary: "Landing page, logo files and launch setup: hosting, domain, business email and a WhatsApp contact button.", link: "", thumb: "" },
    /* Ads: concept work is labelled as concept, never as a client job. */
    { title: "DEWLAND · Kakadu C Serum", type: "ad", format: "9:16", poster: "Dewland", client: "Concept ad", tools: "AI video · Match-cut edit · Motion graphics · AI music · Sound design", cta: "▶ Watch",
      summary: "A 20-second clean-beauty skincare ad for a fictional Australian brand: close-up textures, a juice-drop-to-bottle match cut, ingredient labels and a 4-version ad set (A/B openings, 6s, 4:5).",
      video: "assets/video/dewland.mp4", thumb: "assets/work/dewland.png" },
    { title: "ZAHRAEL · The Eid Edit", type: "ad", format: "9:16", poster: "Zahrael", client: "Concept ad", tools: "Consistent AI model · Fashion edit · Motion graphics · Original music", cta: "▶ Watch",
      summary: "A 20-second abaya lookbook for a fictional label: one model across three looks, fabric-wipe transitions, editorial labels and a three-look split screen.",
      video: "assets/video/zahrael.mp4", thumb: "assets/work/zahrael.png" },
    { title: "ASTRAVEL · Espresso No. 7", type: "ad", format: "9:16", poster: "Astravel", client: "Concept ad", tools: "AI video · Beat-synced edit · Motion graphics · Original music", cta: "▶ Watch",
      summary: "A 20-second coffee ad for a fictional roaster: 10 AI shots, whip cuts on the beat, slam type, product callouts and an animated call to action.",
      video: "assets/video/astravel.mp4", thumb: "assets/work/astravel.png" },
    { title: "EMBER & DUNE · Oud de Nuit", type: "ad", format: "9:16", poster: "Ember & Dune", client: "Concept ad", tools: "AI video · Edit · Motion graphics · Sound", cta: "▶ Watch",
      summary: "A 15-second luxury perfume ad for a fictional oud brand: product design, AI shots, edit, original music and end card.",
      video: "assets/video/ember-dune.mp4", thumb: "assets/work/ember-dune.png" },

    /* Films and edits: newest first. */
    { title: "Grand Theft Manual — Dhaka edition", type: "film", format: "9:16", poster: "Grand Theft Manual", client: "Clips & song: The Khalid Way", tools: "Edit · Music video", cta: "▶ Watch on Facebook",
      link: "https://www.facebook.com/reel/2939809759699478", thumb: "assets/work/grand-theft-manual.png" },
    { title: "7:00 AM", type: "film", format: "9:16", poster: "7:00 AM", client: "Personal · Made with VOSU", tools: "Story · AI video · Edit · Sound", cta: "▶ Watch on Facebook",
      summary: "Every day at 7:00 AM, the same alarm. Until one day he took the watch off.",
      link: "https://www.facebook.com/reel/914210741658470", thumb: "assets/work/7am.png" },
    { title: "Kalpurush (কালপুরুষ)", type: "film", format: "9:16", poster: "Kalpurush", client: "Personal", tools: "Story · AI video · Edit", cta: "▶ Watch on Facebook",
      summary: "A fictional Bangla short film inspired by real events.",
      link: "https://www.facebook.com/reel/1862259908100611", thumb: "assets/work/kalpurush.png" },

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
  ],

  /* Starting prices are optional. Leave "" to show "Ask for a quote". */
  services: [
    {
      id: "video", tag: "01 / Motion", title: "AI films & video editing",
      blurb: "Scroll-stopping ads, AI films and clean edits — script, AI generation, edit, sound and delivery.",
      items: ["AI ad films & brand stories (16:9)", "Facebook / Instagram ads (9:16)", "Video editing — YouTube, reels, podcasts", "Reels, Shorts & TikTok edits"],
      price: "",
    },
    {
      id: "store", tag: "02 / Commerce", title: "WooCommerce & Shopify stores",
      blurb: "Stores that are ready to sell on day one — products, variants, shipping, payments and a fast, clean design.",
      items: ["WooCommerce stores from zero", "Redesigns of live stores — no downtime", "Shopify setup & theme customisation", "Payments, shipping, tax & speed"],
      price: "",
    },
    {
      id: "web", tag: "03 / Web", title: "Websites & WordPress",
      blurb: "Custom business sites and landing pages — from the same hands that build premium themes for ThemeForest.",
      items: ["Custom WordPress & Elementor sites", "Landing pages that convert", "SEO fixes & site clean-up", "Hosting, domain, email & deploy"],
      price: "",
    },
  ],

  /* Client reviews. Paste them word for word. Leave the list empty to hide the section.
     { quote: "...", name: "First name", where: "Germany · WooCommerce redesign" } */
  testimonials: [],

  faq: [
    { q: "WooCommerce or Shopify — which should I pick?", a: "WooCommerce if you want to own everything and avoid monthly app fees; Shopify if you want the simplest hosted setup. Tell me your products and budget and I'll recommend one honestly." },
    { q: "How long does an ad video take?", a: "A 15–30 second ad usually takes 2–4 days from approved script to final file. Rush delivery is possible for small edits." },
    { q: "Do you write the script too?", a: "Yes. Send your product and your goal; I write the hook, script and shot list, and you approve it before anything is generated." },
    { q: "Can you build the store AND make the launch videos?", a: "That's the point. The Launch Kit combines a WooCommerce or Shopify store with matching ad creatives, so the brand looks the same from the ad to the checkout." },
    { q: "How many revisions do I get?", a: "Two rounds of revisions are included on every project. Small text or music changes don't count as a round." },
    { q: "How do we pay?", a: "50% to start, 50% on delivery. bKash, Nagad and bank transfer for local clients; Payoneer or Wise for international." },
  ],
};
