import {
  Brand,
  ContentPillar,
  DealCampaign,
  MarketplaceItem,
  ServiceOffer,
  StoryPost,
  Testimonial
} from "@/lib/types";

export const siteNav = [
  { label: "Home", href: "/" },
  { label: "Brands", href: "/brands" },
  { label: "Community", href: "/community" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Services", href: "/services" },
  { label: "Deals", href: "/deals" }
] as const;

export const contactInfo = {
  email: "hello@littyco.com",
  phone: "+1 (917) 555-0148",
  city: "New York, NY",
  instagram: "https://instagram.com/littyco",
  tiktok: "https://tiktok.com/@littyco"
};

export const contentPillars: ContentPillar[] = [
  {
    title: "Ambition",
    summary: "The energy of becoming, not pretending. Litty frames the climb as a lifestyle."
  },
  {
    title: "Culture",
    summary: "Objects, spaces, and routines that feel like they belong to a real world, not an ad."
  },
  {
    title: "Behind the Build",
    summary: "One ecosystem, multiple lanes. The same work powers the story across all brands."
  },
  {
    title: "The Come-Up",
    summary: "Proof over posture. Real momentum, real craft, and a taste of where the whole thing is going."
  }
];

export const brands: Brand[] = [
  {
    slug: "litty-co",
    displayName: "Litty Co.",
    shortName: "Litty",
    tag: "Lifestyle hub",
    summary:
      "The umbrella brand. Litty is where the aspiration lives, where culture meets motion, and where the rest of the ecosystem gets discovered.",
    route: "/",
    monogramVariant: "tt",
    theme: {
      accent: "#D4AF37",
      accentSoft: "rgba(212, 175, 55, 0.16)",
      accentGlow: "rgba(212, 175, 55, 0.36)",
      surface: "rgba(31, 10, 11, 0.72)",
      edge: "rgba(212, 175, 55, 0.22)",
      label: "#F1DB83"
    },
    palette: ["#111111", "#241112", "#B30000", "#D4AF37"],
    heroImage: "/brands/litty/poster.png",
    secondaryImage: "/brands/litty/monogram-glow.png",
    signature:
      "Bold script wordmark, restrained flame, and the shared center-letter logic embedded inside the name itself.",
    audience:
      "People drawn to ambition, aesthetics, and the feeling of being around something that is on the way up.",
    proof: [
      "Carries the ecosystem story and attention",
      "Turns one shoot into multiple brand narratives",
      "Builds the cultural wrapper around products and services"
    ],
    sections: [
      {
        eyebrow: "Why it exists",
        title: "The wrapper around the whole ecosystem.",
        body:
          "Litty is not a separate lane fighting the rest of the brands. It is the lens that makes the rest of the lanes feel like a world.",
        bullets: [
          "Lifestyle-first presentation",
          "Content-forward discovery",
          "Soft handoff into services, products, and stories"
        ],
        media: "/brands/shared/collage.png"
      },
      {
        eyebrow: "How it feels",
        title: "Aspirational, cultural, and still grounded.",
        body:
          "The tone stays ambitious without getting corny. Premium, but not sterile. Cinematic, but still usable.",
        bullets: [
          "Dark palette with ember and gold focus",
          "Blur that resolves into clarity on intent",
          "Motion that feels like a focus pull, not a gimmick"
        ],
        media: "/brands/shared/connects.png"
      }
    ],
    ctaLabel: "Open the Litty modal",
    ctaHref: "#contact"
  },
  {
    slug: "jj-totes",
    displayName: "JJ Totes",
    shortName: "JJ Totes",
    tag: "Reusable storage system",
    summary:
      "Structured, practical, and eco-forward. JJ Totes takes the shared monogram system and squares it up around real utility.",
    route: "/brands/jj-totes",
    monogramVariant: "JJ",
    theme: {
      accent: "#2E5E3E",
      accentSoft: "rgba(46, 94, 62, 0.15)",
      accentGlow: "rgba(122, 166, 106, 0.28)",
      surface: "rgba(29, 38, 27, 0.7)",
      edge: "rgba(122, 166, 106, 0.22)",
      label: "#CFE2C5"
    },
    palette: ["#2E5E3E", "#D9B27D", "#F28C28", "#7FA66A"],
    heroImage: "/brands/jj-totes/poster.png",
    secondaryImage: "/brands/jj-totes/tote.png",
    signature:
      "The JJ read stays more squared and structural here, with a subtle material reference to hard plastic totes.",
    audience:
      "People who care about systems, movement, reusability, and solutions that feel organized instead of disposable.",
    proof: [
      "Clear product logic and use case",
      "Eco-forward without performative branding",
      "Can scale into product kits, bundles, and content demos"
    ],
    sections: [
      {
        eyebrow: "Product attitude",
        title: "Storage that feels intentional.",
        body:
          "The brand should read clean and capable. Not luxury for the sake of it, but still refined enough to stand next to the rest of the family.",
        bullets: [
          "Utility-first storytelling",
          "Structured visuals and squared monogram behavior",
          "Reliable, reusable, and responsible positioning"
        ],
        media: "/brands/jj-totes/tote.png"
      },
      {
        eyebrow: "Content lane",
        title: "Show the system in action.",
        body:
          "Moving, organizing, loading, stacking, and resetting a space all become content that can live on Litty while still pushing JJ Totes forward.",
        bullets: [
          "How-to content that still feels branded",
          "Before and after organization stories",
          "Cross-posts cleanly into the ecosystem"
        ],
        media: "/brands/shared/applications.png"
      }
    ],
    ctaLabel: "See JJ Totes",
    ctaHref: "/brands/jj-totes"
  },
  {
    slug: "great-wall-of-legends",
    displayName: "Great Wall of Legends",
    shortName: "Great Wall",
    tag: "Luxury showpiece",
    summary:
      "Calm wealth, warmth, and craftsmanship. This is the showroom lane: stone, firelight, and high-ticket atmosphere.",
    route: "/brands/great-wall-of-legends",
    monogramVariant: "LL",
    theme: {
      accent: "#D97A2B",
      accentSoft: "rgba(217, 122, 43, 0.14)",
      accentGlow: "rgba(217, 122, 43, 0.24)",
      surface: "rgba(53, 42, 34, 0.72)",
      edge: "rgba(210, 184, 163, 0.25)",
      label: "#F2E7D7"
    },
    palette: ["#3A3A3A", "#C2B8A3", "#F2EFE7", "#D97A2B"],
    heroImage: "/brands/great-wall/poster.png",
    secondaryImage: "/brands/great-wall/showroom.jpeg",
    signature:
      "The LL read supports a more architectural, stacked, premium expression with warmth instead of flash.",
    audience:
      "Homeowners and clients who respond to atmosphere, craftsmanship, and a finished space that feels expensive without noise.",
    proof: [
      "Showpiece brand within the family",
      "Best lane for cinematic install content",
      "Supports a higher-ticket offer mix"
    ],
    sections: [
      {
        eyebrow: "Positioning",
        title: "A calm luxury fireplace brand.",
        body:
          "Great Wall of Legends should feel composed, confident, and tactile. Warm stone, amber glow, and strong typography do the heavy lifting.",
        bullets: [
          "Restoration Hardware meets bold culture",
          "Minimal clutter, full-bleed attitude",
          "Texture and ambiance over feature overload"
        ],
        media: "/brands/great-wall/plaque.png"
      },
      {
        eyebrow: "Experience",
        title: "Sell the room, not just the install.",
        body:
          "The content should show ambiance and the finished feeling of the space. The product is the fire feature, but the real offer is the atmosphere.",
        bullets: [
          "Close-up texture shots",
          "Showroom-style reveal sequences",
          "Client spaces that feel elevated and lived in"
        ],
        media: "/brands/great-wall/showroom.jpeg"
      }
    ],
    ctaLabel: "Explore Great Wall",
    ctaHref: "/brands/great-wall-of-legends"
  },
  {
    slug: "jj-pro-service",
    displayName: "JJ Pro Service",
    shortName: "JJ Pro",
    tag: "Reliable service lane",
    summary:
      "Trustworthy, local, and practical. The service brand keeps the shared DNA but softens the luxury edge into something more neighborly and direct.",
    route: "/brands/jj-pro-service",
    monogramVariant: "JJ",
    theme: {
      accent: "#1E3A8A",
      accentSoft: "rgba(30, 58, 138, 0.14)",
      accentGlow: "rgba(249, 115, 22, 0.2)",
      surface: "rgba(13, 27, 57, 0.72)",
      edge: "rgba(249, 115, 22, 0.22)",
      label: "#CBD8FF"
    },
    palette: ["#1E3A8A", "#F97316", "#8B8B8B"],
    heroImage: "/brands/jj-pro/poster.png",
    secondaryImage: "/brands/jj-pro/patch.png",
    signature:
      "The JJ read stays intact, but the presentation leans practical and trustworthy rather than dramatic or luxury-coded.",
    audience:
      "People who want quality work, clear communication, and service that feels local and dependable.",
    proof: [
      "Service-first positioning",
      "Easy before-and-after storytelling lane",
      "Strong trust and testimonial potential"
    ],
    sections: [
      {
        eyebrow: "Brand role",
        title: "The direct, reliable service arm.",
        body:
          "JJ Pro should feel clear and human. Still polished, but less showroom and more 'this person gets the job done right.'",
        bullets: [
          "Neighbor-trust tone",
          "Simple proof, real work, real results",
          "Plays well as a referral engine inside Litty"
        ],
        media: "/brands/jj-pro/patch.png"
      },
      {
        eyebrow: "How content works",
        title: "Work clips become proof fast.",
        body:
          "Jobs, repairs, setup, cleanup, and finish work can all be documented once and distributed across Litty and the service brand together.",
        bullets: [
          "Short-form proof content",
          "Problem-to-solution framing",
          "Cross-postable reels and stories"
        ],
        media: "/brands/shared/connects.png"
      }
    ],
    ctaLabel: "View JJ Pro",
    ctaHref: "/brands/jj-pro-service"
  }
];

export const featuredBrands = brands.filter((brand) => brand.slug !== "litty-co");

export const storyPosts: StoryPost[] = [
  {
    slug: "the-life-is-built-not-borrowed",
    category: "Ambition",
    title: "The life is built, not borrowed.",
    excerpt:
      "Litty is the layer that turns different lanes of work into one visible world.",
    readTime: "3 min read",
    image: "/brands/litty/poster.png",
    relatedBrand: "litty-co",
    body: [
      "Litty is where the aspiration gets framed. It is the wrapper that makes product, service, and space all feel like part of the same climb.",
      "That means the visuals do not need to scream. They need to feel intentional, cinematic, and consistent enough that every post strengthens the whole ecosystem.",
      "The goal is not to manufacture hype. It is to show real movement in a way people want to keep watching."
    ]
  },
  {
    slug: "one-shoot-four-angles",
    category: "Behind the build",
    title: "One shoot, four angles, no wasted content.",
    excerpt:
      "The same footage can serve Litty, JJ Totes, Great Wall, and JJ Pro without feeling recycled.",
    readTime: "4 min read",
    image: "/brands/shared/collage.png",
    relatedBrand: "litty-co",
    body: [
      "The ecosystem gets stronger when one day of work turns into multiple narratives. The tote becomes utility. The service clip becomes proof. The fireplace reveal becomes atmosphere.",
      "Litty then becomes the lifestyle summary of all of it, which means the content engine compounds instead of restarting for every brand.",
      "That is how the system scales without feeling like a content treadmill."
    ]
  },
  {
    slug: "structure-is-a-brand-language",
    category: "Culture",
    title: "Structure is a brand language too.",
    excerpt:
      "The shared monogram works because the system is strict enough to stay recognizable and flexible enough to adapt.",
    readTime: "2 min read",
    image: "/brands/shared/symbol.png",
    relatedBrand: "great-wall-of-legends",
    body: [
      "The same construction rules can read as tt, JJ, or LL depending on context. That is the point of the family: one logic, different expressions.",
      "When the spacing stays tight and the stems stay inward, the mark feels iconic instead of chaotic.",
      "That precision is what lets each brand feel related without looking copy-pasted."
    ]
  }
];

export const marketplaceItems: MarketplaceItem[] = [
  {
    title: "Founder's Edit Tote Bundle",
    category: "Product drop",
    summary: "A curated JJ Totes setup shown inside the Litty universe for people who like clean systems and better storage.",
    price: "$180 preview",
    tag: "Curated preview",
    image: "/brands/jj-totes/tote.png",
    brandSlug: "jj-totes"
  },
  {
    title: "Showroom Consultation",
    category: "Luxury service",
    summary: "A discovery call and concept direction session around a premium fireplace or feature-wall experience.",
    price: "$450 consult",
    tag: "High-ticket",
    image: "/brands/great-wall/showroom.jpeg",
    brandSlug: "great-wall-of-legends"
  },
  {
    title: "Reliable Job Walkthrough",
    category: "Service booking",
    summary: "A straightforward service intake and scope review for clients who want real help without the runaround.",
    price: "$95 intake",
    tag: "Lead offer",
    image: "/brands/jj-pro/patch.png",
    brandSlug: "jj-pro-service"
  }
];

export const serviceOffers: ServiceOffer[] = [
  {
    title: "Brand Ecosystem Direction",
    category: "Litty strategy",
    summary: "A top-level brand session for aligning voice, visuals, and attention flow across multiple lanes.",
    delivery: "Vision deck + direction notes",
    tag: "Strategy",
    image: "/brands/shared/connects.png",
    brandSlug: "litty-co"
  },
  {
    title: "Luxury Space Storytelling",
    category: "Great Wall content",
    summary: "A premium content direction package focused on ambiance, install presentation, and finish-level proof.",
    delivery: "Shot list + editorial direction",
    tag: "Cinematic",
    image: "/brands/great-wall/plaque.png",
    brandSlug: "great-wall-of-legends"
  },
  {
    title: "Service Proof Refresh",
    category: "JJ Pro content",
    summary: "A simple proof system for turning real jobs into trust-building visual assets and short-form posts.",
    delivery: "Capture guide + posting flow",
    tag: "Proof-first",
    image: "/brands/jj-pro/poster.png",
    brandSlug: "jj-pro-service"
  }
];

export const dealCampaigns: DealCampaign[] = [
  {
    title: "Founder's Circle Preview",
    status: "live",
    summary: "A live pass-one offer for people who want first access to curated drops and early service slots.",
    window: "Open now",
    code: "FIRSTLOOK",
    reward: "10% off first curated order"
  },
  {
    title: "Showroom Night Window",
    status: "up-next",
    summary: "A timed Great Wall campaign built around atmosphere, scarcity, and premium consult positioning.",
    window: "Next release",
    code: "EMBER",
    reward: "Priority consult access"
  },
  {
    title: "System Reset Archive",
    status: "archive",
    summary: "An example of how Litty keeps old campaigns visible as part of the brand rhythm without pretending they are still active.",
    window: "Archived",
    code: "RESET",
    reward: "Past JJ Totes launch incentive"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Brand build partner",
    role: "Creative collaborator",
    quote:
      "The system feels related without looking reused. Every lane gets its own personality."
  },
  {
    name: "Early buyer",
    role: "Community preview",
    quote:
      "The site makes the whole ecosystem feel bigger than separate projects. It reads like a world."
  }
];

export const marqueePhrases = [
  "lifestyle wrapper",
  "culture with structure",
  "one shoot, four brands",
  "calm luxury",
  "reliable service",
  "curated drops",
  "the come-up"
];

// Reserved for later motion expansion so the architecture stays ready for it.
export const motionBacklog = [
  "sections that scroll together then separate apart",
  "paired foreground/background drift rates",
  "deeper focus-pull transitions between haze and clarity"
];
