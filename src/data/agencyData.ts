export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'performance' | 'creative' | 'infrastructure';
  categoryLabel: string;
  icon: string;
  description: string;
  longDescription: string;
  deliverables: string[];
  metrics: string;
  turnaround: string;
  priceEstimateUSD: string;
  priceEstimateBDT: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  image: string;
  badge: string;
  badgeColor: 'secondary' | 'tertiary' | 'primary';
  description: string;
  roas: string;
  revenueGenerated: string;
  timeline: string;
  client: string;
  market: 'Bangladesh' | 'International' | 'Global';
  challenge: string;
  solution: string;
  results: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  image: string;
  content: string[];
  keyTakeaways: string[];
}

export const AGENCY_CONTACT = {
  name: 'Next Growth BD',
  tagline: 'Your Growth, Our Mission.',
  phone: '+8801774749768',
  whatsappNumber: '8801774749768',
  email: 'nasiruddinnoyon28@gmail.com',
  address: 'Sirajganj Sadar, Sirajganj, Bangladesh',
  logoUrl: '/assets/aistudio/Image_1_c3bba073.png',
  metrics: {
    avgRoi: '450%',
    systems: '12+',
    transparentRoi: '100%',
    revenueScaled: '$14.2M+',
    clientsServed: '140+',
    avgRoas: '4.6x'
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'social-media-management',
    number: '01',
    title: 'Social Media Management',
    category: 'performance',
    categoryLabel: 'Performance Marketing',
    icon: 'share',
    description: 'Consistent editorial calendars, community engagement, brand tone cultivation, and active profile expansion across all social platforms.',
    longDescription: 'Turn dormant social channels into active customer acquisition hubs. We handle everything from weekly content schedules and graphic assets to active comment management, DM funnels, and viral short-form distribution.',
    deliverables: [
      'Monthly strategic content calendars (16-24 high-value posts)',
      'Community management, message filtering & customer routing',
      'Reels / Shorts scriptwriting & trend alignment',
      'Monthly analytic audit and audience growth telemetry'
    ],
    metrics: '+240% Engagement Rate',
    turnaround: 'Ongoing Monthly Retainer',
    priceEstimateUSD: 'From $350 / mo',
    priceEstimateBDT: 'From ৳35,000 / mo'
  },
  {
    id: 'facebook-instagram-ads',
    number: '02',
    title: 'Facebook & Instagram Ads',
    category: 'performance',
    categoryLabel: 'Performance Marketing',
    icon: 'ads_click',
    description: 'Data-backed Meta advertising with precision demographic targeting, creative split testing, and algorithmic scaling for exponential ROI.',
    longDescription: 'Leverage Meta Advantage+ algorithmic bidding, dynamic creative testing (DCT), and custom conversion API tracking. We turn cold traffic into profitable repeat customers for e-commerce and local businesses.',
    deliverables: [
      'Comprehensive funnel architecture (TOF Prospecting, MOF Consideration, BOF Retargeting)',
      'Weekly high-converting video and static ad creative testing',
      'Meta Pixel, Conversion API (CAPI) & Offline Event Tracking setup',
      'Real-time ROAS dashboards and spend optimization'
    ],
    metrics: '4.8x Average Return on Ad Spend (ROAS)',
    turnaround: 'Launch in 48-72 hours',
    priceEstimateUSD: 'From $450 / mo + ad spend',
    priceEstimateBDT: 'From ৳45,000 / mo + ad spend'
  },
  {
    id: 'graphic-design-promotional',
    number: '03',
    title: 'Graphic Design & Promotional Content',
    category: 'creative',
    categoryLabel: 'Creative Production',
    icon: 'brush',
    description: 'Striking visual assets, social banners, sales posters, and marketing collateral designed to command feed attention instantly.',
    longDescription: 'High-contrast, brand-aligned visual storytelling designed to eliminate scroll inertia. We craft campaign banners, packaging mockups, promotional flyers, and corporate presentations that leave an unforgettable impression.',
    deliverables: [
      'Multi-format ad graphics (1:1, 9:16, 16:9)',
      'Promotional sale banners & seasonal campaign creatives',
      'Vector iconography and product render enhancements',
      'Print-ready flyers, brochures and marketing decks'
    ],
    metrics: 'Top 3% CTR benchmark',
    turnaround: '24-48 Hours per asset batch',
    priceEstimateUSD: 'From $250 / package',
    priceEstimateBDT: 'From ৳25,000 / package'
  },
  {
    id: 'google-business-local-seo',
    number: '04',
    title: 'Google Business Profile & Local SEO',
    category: 'performance',
    categoryLabel: 'Performance Marketing',
    icon: 'pin_drop',
    description: 'Top local map rankings, optimized Google Business listing, review velocity strategies, and local citation dominance.',
    longDescription: 'Capture high-intent buyers searching in your city or region. We optimize your Google Maps listing, implement geo-tagged media, build citations, and automate review acquisition to place your business in the coveted 3-Pack.',
    deliverables: [
      'Google Business Profile complete verification & category tuning',
      'Local citation building across high-authority directories',
      'Review generation automated system & reputation management',
      'Local schema markup & geo-targeted landing page SEO'
    ],
    metrics: '+310% Inbound Calls & Directions',
    turnaround: '30-Day Ranking Sprint',
    priceEstimateUSD: 'From $300 / mo',
    priceEstimateBDT: 'From ৳30,000 / mo'
  },
  {
    id: 'website-ecommerce-dev',
    number: '05',
    title: 'Website & E-commerce Development',
    category: 'infrastructure',
    categoryLabel: 'Digital Infrastructure',
    icon: 'code',
    description: 'Blazing fast, responsive e-commerce stores and corporate websites engineered for conversion rates, seamless checkout, and search engines.',
    longDescription: 'From high-converting custom Shopify and WooCommerce stores with bKash/Nagad gateways to modern headless web apps. Every page is optimized for sub-second load times, mobile thumb ergonomics, and frictionless checkouts.',
    deliverables: [
      'Full responsive UI/UX tailored to brand identity',
      'Integrated payment gateways (Stripe, PayPal, bKash, Nagad, SSLCommerz)',
      'Speed optimization hitting 90+ Google PageSpeed benchmarks',
      'Integrated analytics, pixel tracking and heatmaps'
    ],
    metrics: '< 1.2s Average Page Load Speed',
    turnaround: '7 - 14 Days delivery',
    priceEstimateUSD: 'From $600 one-time',
    priceEstimateBDT: 'From ৳60,000 one-time'
  },
  {
    id: 'ai-voiceover-audio-ads',
    number: '06',
    title: 'AI Voiceover & Audio Advertisement',
    category: 'creative',
    categoryLabel: 'Creative Production',
    icon: 'mic',
    description: 'Studio-grade, emotive AI-powered voiceovers in multiple languages and dialects for commercial ads, podcasts, and video promotions.',
    longDescription: 'High-definition synthetic voice engineering mastered for commercial broadcast. Whether you need authoritative English, conversational Bengali, or multi-lingual commercial spots, we deliver pristine audio with perfect emotion and cadence.',
    deliverables: [
      'Studio-mastered voice tracks with custom tone and pacing',
      'English (US, UK, Global) & Native Bengali audio tracks',
      'Commercial background audio mastering & sonic branding',
      'Fast revisions and script adaptation'
    ],
    metrics: '10x Faster Turnaround vs Traditional Studio',
    turnaround: 'Within 24 Hours',
    priceEstimateUSD: 'From $150 / audio set',
    priceEstimateBDT: 'From ৳15,000 / audio set'
  },
  {
    id: 'ai-promotional-video-editing',
    number: '07',
    title: 'AI Promotional Video & Video Editing',
    category: 'creative',
    categoryLabel: 'Creative Production',
    icon: 'movie_edit',
    description: 'Dynamic motion graphics, high-energy Reels/TikTok edits, and AI-assisted promotional videos crafted to hold customer retention.',
    longDescription: 'In today’s short-attention economy, the first 3 seconds dictate revenue. We craft thumb-stopping hooks, kinetic typography, cinematic pacing, sound design, and AI visual enhancements that convert viewers into paying customers.',
    deliverables: [
      'Vertical short-form video edits (Reels, TikTok, YouTube Shorts)',
      'High-converting product demo videos with 3D text overlays',
      'Kinetic caption styling & dynamic sound effects',
      'A/B tested variation hooks for ad campaigns'
    ],
    metrics: '68% Hook Retention Rate',
    turnaround: '48 - 72 Hours',
    priceEstimateUSD: 'From $250 / video batch',
    priceEstimateBDT: 'From ৳25,000 / video batch'
  },
  {
    id: 'logo-design-brand-identity',
    number: '08',
    title: 'Logo Design & Brand Identity',
    category: 'creative',
    categoryLabel: 'Creative Production',
    icon: 'verified_user',
    description: 'Memorable visual identities, scalable vector logos, color systems, typography guides, and complete brand style books.',
    longDescription: 'Establish visual credibility that commands premium pricing. We build comprehensive brand design systems including primary and secondary marks, responsive icon variants, color palettes, and comprehensive guidelines.',
    deliverables: [
      '3-4 unique concept directions with iterative refinement',
      'Complete vector master files (.AI, .SVG, .PNG, .PDF)',
      'Official brand style guidelines (Color codes, typography hierarchy)',
      'Social media avatar kits and favicon sets'
    ],
    metrics: '100% Scalable Vector Architecture',
    turnaround: '4 - 7 Business Days',
    priceEstimateUSD: 'From $200 package',
    priceEstimateBDT: 'From ৳20,000 package'
  },
  {
    id: 'content-writing-copywriting',
    number: '09',
    title: 'Content Writing & Copywriting',
    category: 'creative',
    categoryLabel: 'Creative Production',
    icon: 'edit_note',
    description: 'Persuasive landing page copy, sales email sequences, SEO articles, and brand storytelling tuned to spark customer action.',
    longDescription: 'Words that sell without feeling sleazy. We write razor-sharp conversion copy tailored to your target audience’s specific pain points, objections, and buying motivations across landing pages, ads, and emails.',
    deliverables: [
      'High-converting sales landing page copy',
      'Automated email welcome sequences & abandoned cart flows',
      'Meta Ad headlines and primary text variations',
      'SEO pillar content articles optimized for organic search'
    ],
    metrics: '+42% Form Conversion Rate',
    turnaround: '2 - 4 Days',
    priceEstimateUSD: 'From $180 / project',
    priceEstimateBDT: 'From ৳18,000 / project'
  },
  {
    id: 'youtube-creator-services',
    number: '10',
    title: 'YouTube & Content Creator Services',
    category: 'creative',
    categoryLabel: 'Creative Production',
    icon: 'smart_display',
    description: 'Channel growth strategy, high-CTR thumbnail design, video SEO, audience retention optimization, and monetization management.',
    longDescription: 'Scale your YouTube channel into an automated authority and inbound lead engine. We optimize video metadata, design click-worthy thumbnails that boost CTR by over 12%, and edit long-form videos for sustained watch time.',
    deliverables: [
      'High-CTR 3D & photographic custom thumbnails',
      'Video SEO optimization (Keyword tags, chapters, descriptions)',
      'Long-form video editing with visual retention b-roll',
      'Channel branding overhaul and monetization strategy'
    ],
    metrics: '+18% Average Click-Through Rate',
    turnaround: 'Weekly Creator Retainer',
    priceEstimateUSD: 'From $350 / mo',
    priceEstimateBDT: 'From ৳35,000 / mo'
  },
  {
    id: 'ai-tools-automation',
    number: '11',
    title: 'AI Tools & Automation',
    category: 'infrastructure',
    categoryLabel: 'Digital Infrastructure',
    icon: 'smart_toy',
    description: 'Automated lead routing, CRM integrations, AI customer service chatbots, and custom workflow automations that eliminate busywork.',
    longDescription: 'Stop losing leads due to slow response times. We build automated WhatsApp lead notification bots, CRM syncs, automated invoice generation, and custom workflows using modern automation engines.',
    deliverables: [
      'Instant WhatsApp & Email lead alert automations',
      'CRM integration (HubSpot, Notion, Google Sheets, Airtable)',
      'Customer support AI bot trained on your product catalogue',
      'Automated review request and follow-up pipelines'
    ],
    metrics: '< 60s Lead Response Time',
    turnaround: '3 - 5 Days',
    priceEstimateUSD: 'From $400 one-time',
    priceEstimateBDT: 'From ৳40,000 one-time'
  },
  {
    id: 'digital-strategy-consultation',
    number: '12',
    title: 'Digital Strategy & Consultation',
    category: 'infrastructure',
    categoryLabel: 'Digital Infrastructure',
    icon: 'psychology',
    description: 'Comprehensive audits, high-level revenue architecture, funnel design, and ongoing advisory to navigate modern digital scaling.',
    longDescription: 'Get a clear, unvarnished roadmap for sustainable growth. We audit your existing marketing, ad accounts, website funnel, and competitors, then provide an actionable 90-day execution blueprint.',
    deliverables: [
      'Full ad account & funnel conversion audit',
      'Competitor positioning and keyword gap analysis',
      '90-day step-by-step revenue growth blueprint',
      '1-on-1 strategic advisory calls with our leadership'
    ],
    metrics: 'Clear 90-Day Execution Roadmap',
    turnaround: '48 Hours Audit Delivery',
    priceEstimateUSD: 'From $300 / session',
    priceEstimateBDT: 'From ৳30,000 / session'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'aerocloud-growth',
    title: 'AeroCloud Growth Campaign',
    category: 'Paid Advertising',
    categorySlug: 'paid-ads',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK7FuSfnlB4qKymOuYbsXiCxK2BaMGfiFM7PEOIbZBuqlCc2UtTtyjZIAfwZlH9DlQzyakEcJfDeUGEC2Ha_02P-whgQRyB4m1gQaQzJzbKQYQ3MSJnlGJdMjRdkHczRzw6ubL59o2JmRiJxWaVCTqg7bRvIIpoYAU1kieTZ27y53ddD_oEEnSz65yibs2mR6-RKDg98B3OaNaLxzFIFBGY2MgRjDO0VcOoX-DE-PavQdMpxjrscMgKQ',
    badge: 'Paid Advertising',
    badgeColor: 'secondary',
    description: 'Multi-stage Meta ad set resulting in a 4.8x ROAS and +180% qualified leads within 60 days.',
    roas: '4.8x',
    revenueGenerated: '$184,000',
    timeline: '60 Days',
    client: 'AeroCloud Solutions',
    market: 'International',
    challenge: 'AeroCloud was struggling with rising Meta CPMs and diminishing conversion rates from generic stock video ads.',
    solution: 'We engineered a 3-tier creative testing system with 12 distinct video hooks, dynamic product demos, and deep custom audience segmentation targeting B2B decision makers.',
    results: [
      'ROAS escalated from 1.6x to 4.8x within 60 days',
      'Cost per acquisition (CPA) reduced by 44%',
      '+180% increase in enterprise inquiry submissions'
    ],
    testimonial: {
      quote: 'Next Growth BD transformed our advertising from a cost center into our most predictable revenue channel.',
      author: 'David Chen',
      role: 'Chief Marketing Officer',
      company: 'AeroCloud'
    }
  },
  {
    id: 'voltfit-apparel',
    title: 'VoltFit Apparel Store',
    category: 'Website Design',
    categorySlug: 'website-design',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrGu-KpntimBmI0PqW_cIpoMgoe8NhkAC8G6RLkNcC6uRdNQ2mrDYLPsDpYg-pHNlmV7abaTe3m_4CKJQWxossqAWyNd74izH8l3O641x9zI2Y9CoTW5Cb6bUgIR4Y7zJwlpJKk69HUew_GFx0uRI_sIYsEg6NRbfisXBuke97kxGu7jhhz7qihCqKabMh2WwyF4gAMSjcCQ7er8GUKESd8PTCXgt4vFpuy-RuoujwVgwQEjN4RPNm3w',
    badge: 'E-commerce Dev',
    badgeColor: 'tertiary',
    description: 'Custom headless storefront with 99 Google PageSpeed score and instant cart checkout architecture.',
    roas: '5.2x',
    revenueGenerated: '৳4,800,000 ($42,000)',
    timeline: '30 Days',
    client: 'VoltFit Athletics',
    market: 'Bangladesh',
    challenge: 'High cart abandonment (78%) due to sluggish load times on mobile 4G networks and lack of seamless bKash/Nagad checkout.',
    solution: 'Designed and developed a blazing-fast responsive e-commerce storefront with 1-click mobile checkout, bKash instant tokenized payments, and social proof triggers.',
    results: [
      'Page load time slashed from 4.8s to 0.8s',
      'Cart abandonment dropped from 78% down to 36%',
      'Daily order volume jumped by 260% in month one'
    ],
    testimonial: {
      quote: 'Our sales exploded the week we launched the new site. The mobile checkout is lightning fast for our local buyers.',
      author: 'Tanvir Hossain',
      role: 'Managing Director',
      company: 'VoltFit Apparel'
    }
  },
  {
    id: 'nexus-mobility',
    title: 'Nexus Mobility Brand System',
    category: 'Branding',
    categorySlug: 'branding',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdJ8wFAkCii6j3LeXwhXEgaGmxVxell8TOa0XOk3Apb-_gc6gL7TqPhthEdTsyTp2Yr-ubW3Ynz9BGh3p0SsnYKGwgh2k3YsNPKLvb3rIqlwqywzKj4h_25lXFdBB9UVeMTK4S98kLkvNridBD3It84-prfiDQhcUD6QYwoEH6G2qLTZylKLuKYsMw7jv50m91kLpM1RqQQVW7sbkp1W-dcRLX1JqDOfIqraKKOwLX4zDlLcef76zGzA',
    badge: 'Brand Identity',
    badgeColor: 'primary',
    description: 'Holistic visual positioning, 3D icon set, and typographic hierarchy designed for enterprise expansion.',
    roas: 'Brand Asset',
    revenueGenerated: 'Series A Brand Foundation',
    timeline: '45 Days',
    client: 'Nexus Mobility Group',
    market: 'Global',
    challenge: 'A fragmented visual identity and inconsistent marketing collateral that failed to convince institutional investors.',
    solution: 'Built a unified brand design system with vector logos, precision typography, 3D product visual assets, and high-impact investor pitch decks.',
    results: [
      'Successfully closed $2.2M Series A funding round',
      'Complete brand guideline handbook deployed across 4 teams',
      '+300% positive brand perception feedback from partners'
    ],
    testimonial: {
      quote: 'Next Growth BD gave our brand the polish and authority of a world-class technology enterprise.',
      author: 'Marcus Vance',
      role: 'Co-Founder & CEO',
      company: 'Nexus Mobility'
    }
  },
  {
    id: 'dhaka-craft-fcommerce',
    title: 'Heritage Weaves F-Commerce Acceleration',
    category: 'Social Media Creatives',
    categorySlug: 'social-media',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT-jv3_GDWK3P9p-XhaV1TlvnsVMPoh_6y-fUgaVLo8m9U4iEP4XFf13DPYB_780YfG4P46RSIfF5vRyyWUNf914MuOVZc_vKpWumSm1ZILF7tKxILrKa8qGI_uoTwQm0I7-n_Um_tLPtGg3c6QA7PjAkodd0jObDblfPNHbNpFOFpNAeiQTshlfwICqNM85GEKdzQ72uKdeuc7_N-B3FVwrT1VUxY5V-9AlDYqVVlKog21NMwbE4rUA',
    badge: 'F-Commerce Scale',
    badgeColor: 'tertiary',
    description: 'Automated Facebook Page messenger funnel and viral Bengali Reels campaigns delivering ৳2.4M monthly sales.',
    roas: '6.4x',
    revenueGenerated: '৳2,400,000 / mo',
    timeline: '90 Days',
    client: 'Heritage Weaves BD',
    market: 'Bangladesh',
    challenge: 'Overwhelmed with manual Facebook inbox orders and high customer drop-off during festival rush periods.',
    solution: 'Implemented automated Messenger & WhatsApp order booking bots paired with high-energy cultural reels and targeted Meta lead generation campaigns.',
    results: [
      'Order confirmation time reduced from 2 hours to 45 seconds',
      'Sales grew by 380% during Eid campaign window',
      'Zero missed leads during peak festival traffic'
    ],
    testimonial: {
      quote: 'Their deep understanding of Bangladeshi consumer psychology is unmatched. Our messaging inbox has become an automatic cash register.',
      author: 'Farhana Akhter',
      role: 'Founder',
      company: 'Heritage Weaves'
    }
  },
  {
    id: 'swift-local-seo',
    title: 'Sirajganj Health Care Local SEO Sprint',
    category: 'Graphic Design',
    categorySlug: 'graphic-design',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK7FuSfnlB4qKymOuYbsXiCxK2BaMGfiFM7PEOIbZBuqlCc2UtTtyjZIAfwZlH9DlQzyakEcJfDeUGEC2Ha_02P-whgQRyB4m1gQaQzJzbKQYQ3MSJnlGJdMjRdkHczRzw6ubL59o2JmRiJxWaVCTqg7bRvIIpoYAU1kieTZ27y53ddD_oEEnSz65yibs2mR6-RKDg98B3OaNaLxzFIFBGY2MgRjDO0VcOoX-DE-PavQdMpxjrscMgKQ',
    badge: 'Local SEO',
    badgeColor: 'secondary',
    description: 'Secured #1 ranking on Google Maps across 14 healthcare search terms, tripling daily patient inquiries.',
    roas: '12x Pipeline',
    revenueGenerated: '320+ Patients / mo',
    timeline: '45 Days',
    client: 'Apex Medical Diagnostic Center',
    market: 'Bangladesh',
    challenge: 'Zero visibility on Google Maps; losing patients to competitors with higher online review volumes.',
    solution: 'Complete Google Business Profile re-architecture, localized keyword schema, patient review automation, and geo-targeted social awareness.',
    results: [
      'Ranked #1 on Google Maps for top diagnostic keywords',
      'Over 600 monthly phone call clicks directly from listing',
      'Patient bookings doubled in under 60 days'
    ],
    testimonial: {
      quote: 'We now get dozens of calls every single day from patients who found us on Google Maps.',
      author: 'Dr. K. Rahman',
      role: 'Medical Director',
      company: 'Apex Diagnostic'
    }
  },
  {
    id: 'omnivox-ai-video',
    title: 'OmniVox Global AI Video Campaign',
    category: 'Video Production',
    categorySlug: 'video-production',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrGu-KpntimBmI0PqW_cIpoMgoe8NhkAC8G6RLkNcC6uRdNQ2mrDYLPsDpYg-pHNlmV7abaTe3m_4CKJQWxossqAWyNd74izH8l3O641x9zI2Y9CoTW5Cb6bUgIR4Y7zJwlpJKk69HUew_GFx0uRI_sIYsEg6NRbfisXBuke97kxGu7jhhz7qihCqKabMh2WwyF4gAMSjcCQ7er8GUKESd8PTCXgt4vFpuy-RuoujwVgwQEjN4RPNm3w',
    badge: 'AI Media',
    badgeColor: 'tertiary',
    description: 'Multilingual AI voiceover and kinetic Reels campaign generating 2.1 million organic views across North America and EU.',
    roas: '4.1x',
    revenueGenerated: '$92,000',
    timeline: '30 Days',
    client: 'OmniVox Audio',
    market: 'Global',
    challenge: 'Needed 40 localized ad variations in English, Spanish, and German without spending $50k on voice actors and video teams.',
    solution: 'Engineered synthetic voice models with emotional inflection and matched with dynamic motion graphics in 3 aspect ratios.',
    results: [
      '40 ad variations produced in just 6 business days',
      'Production cost lowered by 82% compared to agency quotes',
      '2.1M views and over 14,000 app downloads'
    ],
    testimonial: {
      quote: 'The speed and studio-grade quality of their AI video production allowed us to test 5x more creative angles.',
      author: 'Julian Becker',
      role: 'Head of Growth',
      company: 'OmniVox'
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'meta-ads-scaling-2026',
    title: 'Meta Ads Scaling in 2026: Why Creative Velocity Outperforms Micro-Targeting',
    excerpt: 'Detailed analysis of Meta’s modern Andromeda and Advantage+ algorithms and how creative variety delivers superior ROAS.',
    category: 'Performance Marketing',
    readTime: '6 min read',
    date: 'Oct 20, 2026',
    author: 'Nasir Uddin Noyon',
    authorRole: 'Founder & Head of Growth',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK7FuSfnlB4qKymOuYbsXiCxK2BaMGfiFM7PEOIbZBuqlCc2UtTtyjZIAfwZlH9DlQzyakEcJfDeUGEC2Ha_02P-whgQRyB4m1gQaQzJzbKQYQ3MSJnlGJdMjRdkHczRzw6ubL59o2JmRiJxWaVCTqg7bRvIIpoYAU1kieTZ27y53ddD_oEEnSz65yibs2mR6-RKDg98B3OaNaLxzFIFBGY2MgRjDO0VcOoX-DE-PavQdMpxjrscMgKQ',
    keyTakeaways: [
      'Algorithmic Advantage+ campaigns perform best when given wide targeting and 5-8 distinct creative angles',
      'The hook rate (3-second view divided by impressions) is the single biggest predictor of ad profitability',
      'Iterative testing of visual hooks reduces blended customer acquisition cost (CAC) by up to 35%'
    ],
    content: [
      'For years, media buyers obsessed over hyper-specific audience combinations, interest stacking, and complex exclusions. In 2026, Meta’s machine learning systems have rendered manual micro-targeting obsolete.',
      'Today, the ad creative itself is the targeting. When you create an ad addressing the specific pain points of an e-commerce store owner versus an enterprise IT director, the algorithm instantly identifies the right audience cluster based on behavioral telemetry.',
      'At Next Growth BD, our testing framework focuses on Creative Velocity: producing 10 to 15 hook variations per week. By testing emotional resonance in the opening 3 seconds, we systematically find winning creatives that scale spend without fatigue.'
    ]
  },
  {
    id: 'bangladesh-fcommerce-blueprint',
    title: 'The Bangladesh F-Commerce Blueprint: Scaling from ৳100K to ৳2M Monthly Revenue',
    excerpt: 'Tactical guide for Bangladeshi retail and fashion brands to optimize WhatsApp funnels, bKash checkouts, and local trust triggers.',
    category: 'E-Commerce Growth',
    readTime: '7 min read',
    date: 'Oct 14, 2026',
    author: 'Next Growth Strategy Team',
    authorRole: 'Agency Advisory',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT-jv3_GDWK3P9p-XhaV1TlvnsVMPoh_6y-fUgaVLo8m9U4iEP4XFf13DPYB_780YfG4P46RSIfF5vRyyWUNf914MuOVZc_vKpWumSm1ZILF7tKxILrKa8qGI_uoTwQm0I7-n_Um_tLPtGg3c6QA7PjAkodd0jObDblfPNHbNpFOFpNAeiQTshlfwICqNM85GEKdzQ72uKdeuc7_N-B3FVwrT1VUxY5V-9AlDYqVVlKog21NMwbE4rUA',
    keyTakeaways: [
      'Reducing response times from 30 minutes to under 2 minutes doubles conversion rates on Facebook Messenger and WhatsApp',
      'Bilingual content (clean conversational Bengali headline + English value proposition) commands highest engagement',
      'Instant bKash/Nagad checkout confirmation reduces cash-on-delivery return rates by 40%'
    ],
    content: [
      'The Bangladeshi digital market is expanding at an extraordinary pace. With millions of consumers shopping daily on Facebook, Instagram, and TikTok, the bottleneck is rarely traffic—it is checkout friction and trust.',
      'Most Bangladeshi merchants lose 60% of interested buyers because customer queries sit unanswered in Facebook Page inboxes. By deploying automated instant-response routing connected directly to WhatsApp, our clients capture intent while it is fresh.',
      'Furthermore, combining authentic product video demonstrations with clear delivery timelines and flexible payment options eliminates skepticism, fostering loyal recurring customers.'
    ]
  },
  {
    id: 'ai-voiceover-video-production',
    title: 'How AI Voiceover and Video Editing Cut Production Costs by 80% Without Losing Soul',
    excerpt: 'How modern generative audio models and motion design systems allow agile brands to produce broadcast-quality campaigns.',
    category: 'Creative Production',
    readTime: '5 min read',
    date: 'Oct 02, 2026',
    author: 'Nasir Uddin Noyon',
    authorRole: 'Founder & Head of Growth',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrGu-KpntimBmI0PqW_cIpoMgoe8NhkAC8G6RLkNcC6uRdNQ2mrDYLPsDpYg-pHNlmV7abaTe3m_4CKJQWxossqAWyNd74izH8l3O641x9zI2Y9CoTW5Cb6bUgIR4Y7zJwlpJKk69HUew_GFx0uRI_sIYsEg6NRbfisXBuke97kxGu7jhhz7qihCqKabMh2WwyF4gAMSjcCQ7er8GUKESd8PTCXgt4vFpuy-RuoujwVgwQEjN4RPNm3w',
    keyTakeaways: [
      'Modern neural voice synthesis enables studio-grade audio in hours instead of weeks',
      'Dynamic typography overlays increase silent video completion rates by over 50%',
      'Rapid iteration allows brands to tailor accents and tones for local and international demographics'
    ],
    content: [
      'Producing high-impact video advertising historically required booking physical sound booths, hiring voice actors, and spending thousands of dollars on single video spots.',
      'With Next Growth BD’s AI audio-video workflows, we combine cutting-edge synthetic voice engines with professional human sound engineering. We fine-tune vocal cadence, breathing, and dialect nuance to deliver audio that sounds completely authentic.',
      'Paired with snappy motion graphics and retention-focused cuts, our clients can test multiple creative angles simultaneously without blowing their budget.'
    ]
  }
];

export const FAQS = [
  {
    question: 'What makes Next Growth BD different from other digital agencies?',
    answer: 'We merge end-to-end performance marketing with cutting-edge AI creative production and technical engineering. Instead of treating services in isolation, we build interconnected growth funnels where your branding, social ads, website, and automations reinforce one another for maximum ROI.'
  },
  {
    question: 'Do you work with startups and small businesses or only enterprise brands?',
    answer: 'We work with both! Whether you are an ambitious local brand in Bangladesh launching an e-commerce shop, or an international company scaling multi-channel ad spend, we design modular packages that match your current budget and scale as your revenues expand.'
  },
  {
    question: 'How do you track and report campaign performance?',
    answer: 'You get complete transparency with live analytics dashboards tracking ROAS, conversion cost (CPA), qualified leads, click-through rates, and organic traffic growth. We conduct bi-weekly or monthly strategy reviews to explain trends clearly.'
  },
  {
    question: 'What is the onboarding process once we decide to work together?',
    answer: 'Onboarding takes less than 48 hours. After our initial discovery chat, we set up a dedicated communication channel on WhatsApp or Slack, gather brand assets, conduct an in-depth audit, and share an actionable timeline before launching any campaigns.'
  },
  {
    question: 'How do your AI Voiceover and Video services work?',
    answer: 'We combine high-end synthetic intelligence audio models with human audio mastering to generate natural, compelling voiceovers in multiple dialects. We combine these with custom video editing, dynamic captioning, and motion graphics tailored for maximum retention on Reels, TikTok, and YouTube.'
  },
  {
    question: 'How do I get started with Next Growth BD today?',
    answer: 'Simply click the "Start a Project" button or message us directly on WhatsApp at +8801774749768. We will respond promptly, discuss your current needs, and prepare a tailored strategy proposal.'
  }
];
