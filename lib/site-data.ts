export const SITE = {
  name: 'Cuantic Designs',
  tagline: 'Design. Development. Digital Marketing.',
  phone: '+91 90031 90977',
  phoneHref: '+919003190977',
  email: 'Cuanticdesigns@gmail.com',
  address: 'No. 17, M.E.G City, Avadi, Chennai – 600062',
  locationShort: 'Avadi, Chennai – 600062',
  mapsQuery: 'M.E.G City, Avadi, Chennai 600062',
  hours: 'Mon – Sat · 9:30 AM – 7:00 PM',
  social: {
    linkedin: '#',
    facebook: '#',
    instagram: '#',
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export type ServiceSlug = 'graphic-design' | 'web-development' | 'digital-marketing';

export const STATS = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 60, suffix: '+', label: 'Active & Returning Clients' },
  { value: 3, suffix: '', label: 'Core Disciplines' },
  { value: 1, suffix: ' Day', label: 'Average First Response', prefix: '1 Business' },
];

export const SERVICES = [
  {
    number: '01',
    slug: 'graphic-design' as ServiceSlug,
    title: 'Graphic Design',
    icon: 'Palette',
    short:
      'Logos, brand identity, brochures, and campaign creative that stay consistent across every touchpoint.',
    items: [
      'Strategy Development',
      'Branding & Corporate Identity',
      'Advertisements & Posters',
      'Brochures',
      'Banners',
      'Outdoor Creative',
    ],
  },
  {
    number: '02',
    slug: 'web-development' as ServiceSlug,
    title: 'Web Development',
    icon: 'Code',
    short:
      'Responsive, fast-loading websites built for search visibility, from single landing pages to full e-commerce builds.',
    items: [
      'Responsive Design',
      'Front-End Development',
      'WordPress & E-Commerce',
      'SEO-Friendly Structure',
      'Testing & Debugging',
      'Maintenance & Updates',
    ],
  },
  {
    number: '03',
    slug: 'digital-marketing' as ServiceSlug,
    title: 'Digital Marketing',
    icon: 'TrendingUp',
    short:
      'SEO, social media, and paid campaigns run with monthly reporting so you always know what\u2019s working.',
    items: [
      'SEO',
      'Social Media Marketing',
      'Google Ads',
      'Lead Generation',
      'Email Campaigns',
      'Content Strategy',
      'Analytics & Reporting',
    ],
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    text: 'Understand goals, audience, requirements, and timeline.',
  },
  {
    number: '02',
    title: 'Concept',
    text: 'Develop initial creative direction and structure.',
  },
  {
    number: '03',
    title: 'Build',
    text: 'Design, develop, test, and refine with regular feedback.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    text: 'Final testing, launch, handover, and ongoing support.',
  },
];

export const REASONS = [
  {
    title: 'One Team, Three Disciplines',
    text: 'Design, development, and marketing under one roof.',
    icon: 'Layers',
  },
  {
    title: 'Direct Access',
    text: 'Work directly with the people designing and building your project.',
    icon: 'MessageCircle',
  },
  {
    title: 'Fixed Scope & Timeline',
    text: 'Clear briefs and agreed delivery dates.',
    icon: 'CalendarCheck',
  },
  {
    title: 'Built for Performance',
    text: 'Performance, SEO, conversion, and aesthetics considered together.',
    icon: 'Zap',
  },
  {
    title: 'Local & Responsive',
    text: 'Chennai-based support with remote project delivery across Tamil Nadu and India.',
    icon: 'MapPin',
  },
];

export const PROJECTS = [
  {
    id: 'pillais',
    client: 'Pillais',
    title: 'Food E-Commerce Website',
    category: 'Web Design & Development',
    categoryKey: 'web',
    image:
      'https://images.pexels.com/photos/4087617/pexels-photo-4087617.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description:
      'A full e-commerce build for a Chennai food brand — fast product browsing, cart, checkout, and SEO structure.',
    scope: 'UX, Front-End Development, E-Commerce, SEO',
    outcome: 'Online ordering launched within 4 weeks of brief.',
    featured: true,
    size: 'large',
  },
  {
    id: 'beatly',
    client: 'Beatly.ai',
    title: 'AI-Powered CMS',
    category: 'Web Design & Development',
    categoryKey: 'web',
    image:
      'https://images.pexels.com/photos/16027824/pexels-photo-16027824.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description:
      'A content platform with an AI-assisted editor — designed for speed, clarity, and a frictionless publishing workflow.',
    scope: 'Product Design, Front-End, CMS Architecture',
    outcome: 'Editor onboarding time reduced by 60%.',
    featured: true,
    size: 'large',
  },
  {
    id: 'aurora-brand',
    client: 'Aurora Hospitality',
    title: 'Brand Identity & Logo',
    category: 'Branding & Identity',
    categoryKey: 'branding',
    image:
      'https://images.pexels.com/photos/6373857/pexels-photo-6373857.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description:
      'A complete brand identity system — logo, colour, type, and stationery — for a hospitality startup in Chennai.',
    scope: 'Strategy, Logo, Identity System, Stationery',
    outcome: 'Brand launched across 3 locations in 6 months.',
    featured: false,
    size: 'medium',
  },
  {
    id: 'vertex-print',
    client: 'Vertex Retail',
    title: 'Campaign Brochure Series',
    category: 'Print & Advertising',
    categoryKey: 'print',
    image:
      'https://images.pexels.com/photos/2250136/pexels-photo-2250136.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description:
      'A seasonal print campaign — brochures, posters, and outdoor creative — rolled out across the city.',
    scope: 'Print Design, Campaign Creative, Copy Direction',
    outcome: 'Footfall uplift tracked across 11 outlets.',
    featured: false,
    size: 'medium',
  },
  {
    id: 'nimbus-ads',
    client: 'Nimbus Learning',
    title: 'Google Ads & Lead Gen',
    category: 'Digital Marketing Campaigns',
    categoryKey: 'marketing',
    image:
      'https://images.pexels.com/photos/15595050/pexels-photo-15595050.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description:
      'A paid + organic campaign mix for an ed-tech brand — landing pages, ad creative, and monthly reporting.',
    scope: 'Google Ads, Landing Pages, Analytics',
    outcome: 'Cost per lead down 38% in quarter one.',
    featured: false,
    size: 'medium',
  },
  {
    id: 'lumen-social',
    client: 'Lumen Studios',
    title: 'Social Media Marketing',
    category: 'Digital Marketing Campaigns',
    categoryKey: 'marketing',
    image:
      'https://images.pexels.com/photos/7970817/pexels-photo-7970817.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description:
      'An always-on social calendar with monthly content, design, and reporting for a creative studio.',
    scope: 'Content Strategy, Design, Reporting',
    outcome: 'Engagement rate up 2.4x over 90 days.',
    featured: false,
    size: 'medium',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Delivered exactly what we needed, on time. The team understood our brand in the first call itself.',
    name: 'Karthik Raman',
    company: 'Pillais Foods',
  },
  {
    quote:
      'The website Cuantic built for us loads fast and looks premium. Our enquiries nearly doubled.',
    name: 'Deepa Subramanian',
    company: 'Aurora Hospitality',
  },
  {
    quote:
      'Clear scope, clear timeline, and direct access to the people doing the work. Rare combination.',
    name: 'Arjun Mehta',
    company: 'Nimbus Learning',
  },
  {
    quote:
      'They took over our existing site, cleaned it up, and made it convert. Genuinely impressed.',
    name: 'Sneha Iyer',
    company: 'Vertex Retail',
  },
];

export const FAQS = [
  {
    q: 'How long does a typical project take?',
    a: 'A brand identity usually runs 2–3 weeks, a marketing website 3–5 weeks, and e-commerce builds 4–8 weeks depending on scope. We agree a delivery date before we start.',
  },
  {
    q: 'Do you work with businesses outside Chennai?',
    a: 'Yes. We are based in Chennai and deliver remotely across Tamil Nadu and the rest of India. Discovery calls and reviews happen over video.',
  },
  {
    q: 'Can you take over an existing website?',
    a: 'Absolutely. We audit the current site, fix what is broken, and improve performance, SEO, and design without losing your existing content.',
  },
  {
    q: 'What do you need from us to get started?',
    a: 'A short call to understand goals, any brand material you already have, and a rough idea of budget and timeline. We handle the rest.',
  },
];

export const TEAM = [
  {
    name: 'Thenisai Kumar',
    role: 'Creative Head',
    image:
      'https://images.pexels.com/photos/9092311/pexels-photo-9092311.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    bio: 'Leads brand and creative direction across every Cuantic project.',
  },
  {
    name: 'Prajeevan',
    role: 'Web Developer',
    image:
      'https://images.pexels.com/photos/7580994/pexels-photo-7580994.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    bio: 'Builds fast, responsive, SEO-friendly websites and e-commerce stores.',
  },
];

export const MILESTONES = [
  { year: '2021', title: 'Studio Founded', text: 'Cuantic Designs starts in Avadi, Chennai with graphic design as the core discipline.' },
  { year: '2022', title: 'Web Development Added', text: 'Expanded into full web development and e-commerce builds.' },
  { year: '2023', title: 'Digital Marketing Practice', text: 'Launched SEO, social, and paid campaign services with monthly reporting.' },
  { year: '2024', title: '60+ Returning Clients', text: 'Crossed 60 active and returning clients across Chennai and Tamil Nadu.' },
  { year: '2025', title: 'Full-Service Studio', text: 'One team, three disciplines — design, development, and marketing under one roof.' },
];

export const VALUES = [
  { title: 'Direct Work', text: 'No account managers between you and the people building your project.' },
  { title: 'Clarity First', text: 'Clear scope, clear timeline, clear price — agreed before we start.' },
  { title: 'Performance-Minded', text: 'Every design and build decision weighed against speed and conversion.' },
  { title: 'Local Roots', text: 'Chennai-based, with an understanding of the local market and language.' },
];
