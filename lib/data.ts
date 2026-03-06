export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  features: string[];
  status?: "live" | "in-progress" | "local";
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  year: string;
  current: boolean;
  description: string;
};

export type TechItem = {
  name: string;
  category: "Frontend" | "Backend" | "AI" | "Tools";
  icon?: string;
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  url?: string;
};

export const projects: Project[] = [

  // ── WordPress ─────────────────────────────────────────────────────────────
  {
    slug: "disruptive-solutions-wp",
    name: "Disruptive Solutions Inc",
    shortDescription: "Corporate website for a technology solutions company built on WordPress.",
    longDescription:
      "A professional corporate website for Disruptive Solutions Inc., a technology company offering IT infrastructure, managed services, and digital transformation consulting. Built with WordPress for easy content management and scalability.",
    tags: ["WordPress", "Corporate"],
    techStack: ["WordPress", "PHP", "MySQL", "CSS"],
    githubUrl: "",
    liveUrl: "https://disruptivesolutionsinc.com/",
    category: "WordPress",
    status: "live",
    features: [
      "Corporate service pages",
      "SEO-optimized structure",
      "Contact and inquiry forms",
      "Responsive mobile design",
      "CMS-managed content",
    ],
  },
  {
    slug: "ecoshift-corp-wp",
    name: "Ecoshift Corporation",
    shortDescription: "Company website for an LED lighting and energy solutions provider.",
    longDescription:
      "The official website of Ecoshift Corporation, a leading LED lighting and energy efficiency solutions company in the Philippines. Features product catalogs, project showcases, and corporate information managed through WordPress.",
    tags: ["WordPress", "Corporate"],
    techStack: ["WordPress", "PHP", "MySQL", "CSS"],
    githubUrl: "",
    liveUrl: "https://www.ecoshiftcorp.com/",
    category: "WordPress",
    status: "live",
    features: [
      "Product catalog with categories",
      "Project portfolio showcase",
      "Corporate news and updates",
      "Contact and quote request forms",
      "Responsive design",
    ],
  },
  {
    slug: "retropower-wp",
    name: "Retropower",
    shortDescription: "Business website for a power solutions company in the Philippines.",
    longDescription:
      "A business website for Retropower, a company specializing in power and energy solutions in the Philippines. Built on WordPress with a focus on showcasing services and enabling client inquiries.",
    tags: ["WordPress", "Business"],
    techStack: ["WordPress", "PHP", "MySQL", "CSS"],
    githubUrl: "",
    liveUrl: "https://retropower.com.ph/",
    category: "WordPress",
    status: "live",
    features: [
      "Service and product listings",
      "About and team pages",
      "Client inquiry forms",
      "Mobile-responsive layout",
      "CMS-managed content",
    ],
  },
  {
    slug: "cut-and-break-wp",
    name: "Cut & Break",
    shortDescription: "Website for a concrete cutting and breaking services company.",
    longDescription:
      "A professional website for Cut & Break, a Philippine-based company offering concrete cutting, coring, and breaking services. Built on WordPress to highlight their specialized construction services and project portfolio.",
    tags: ["WordPress", "Construction"],
    techStack: ["WordPress", "PHP", "MySQL", "CSS"],
    githubUrl: "",
    liveUrl: "https://cutandbreak.com.ph/",
    category: "WordPress",
    status: "live",
    features: [
      "Service showcase pages",
      "Project gallery",
      "Client contact forms",
      "SEO optimization",
      "Mobile-friendly design",
    ],
  },

  // ── Next.js / Firebase / Vercel ───────────────────────────────────────────
  {
    slug: "vah",
    name: "VAH",
    shortDescription: "Full-stack web application deployed on a custom domain.",
    longDescription:
      "A full-stack web application built with Next.js and deployed to a custom domain. Features a modern UI with server-side rendering for fast load times and optimal SEO performance.",
    tags: ["Next.js", "Full Stack"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "",
    liveUrl: "https://vah.com.ph/home",
    category: "Websites & Web Apps",
    status: "live",
    features: [
      "Server-side rendering",
      "Custom domain deployment",
      "Responsive design",
      "Optimized performance",
      "Modern UI/UX",
    ],
  },
  {
    slug: "disruptive-solutions-nextjs",
    name: "Disruptive Solutions (Next.js)",
    shortDescription: "Next.js rebuild of the Disruptive Solutions corporate site — in development.",
    longDescription:
      "A full rebuild of the Disruptive Solutions Inc. corporate website using Next.js, replacing the existing WordPress site with a faster, more customizable stack. Currently in active development.",
    tags: ["Next.js", "In Progress"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "",
    liveUrl: "https://disruptive-solutions-inc.vercel.app",
    category: "Websites & Web Apps",
    status: "in-progress",
    features: [
      "Next.js App Router",
      "Component-based architecture",
      "Performance-optimized pages",
      "CMS integration",
      "Mobile-first design",
    ],
  },
  {
    slug: "ecoshift-website-nextjs",
    name: "Ecoshift Website (Next.js)",
    shortDescription: "Next.js rebuild of the Ecoshift corporate website — in development.",
    longDescription:
      "A modern rebuild of the Ecoshift Corporation website using Next.js and Firebase, replacing the WordPress site. Designed for better performance, custom features, and scalable architecture. Currently in development.",
    tags: ["Next.js", "Firebase", "In Progress"],
    techStack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Vercel"],
    githubUrl: "",
    liveUrl: "https://ecoshift-website.vercel.app/home",
    category: "Websites & Web Apps",
    status: "in-progress",
    features: [
      "Firebase real-time database",
      "Next.js App Router",
      "Product catalog system",
      "Admin content management",
      "Responsive layout",
    ],
  },
  {
    slug: "jaris-cms",
    name: "JarisCMS",
    shortDescription: "Custom headless CMS built for managing developer portfolio content.",
    longDescription:
      "A lightweight headless CMS designed specifically for developer portfolios. Features a clean admin interface for managing projects, experience, and tech stack data with live preview support.",
    tags: ["CMS", "Next.js", "Full Stack"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "",
    liveUrl: "https://jariscms.vercel.app",
    category: "Websites & Web Apps",
    status: "live",
    features: [
      "Portfolio content management",
      "Live preview mode",
      "Project and experience editor",
      "Media management",
      "One-click deploy hooks",
    ],
  },
  {
    slug: "stash-demo",
    name: "Stash",
    shortDescription: "Demo application showcasing a modern savings and stash management interface.",
    longDescription:
      "A demo web application built to showcase a modern savings tracker and stash management interface. Built with Next.js and deployed to Vercel with a clean, minimal UI.",
    tags: ["Next.js", "Finance"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "",
    liveUrl: "https://stash-demo.vercel.app",
    category: "Websites & Web Apps",
    status: "live",
    features: [
      "Savings tracking interface",
      "Clean minimal UI",
      "Responsive layout",
      "Component-driven design",
      "Vercel edge deployment",
    ],
  },
  {
    slug: "floodwatch-ph",
    name: "FloodWatch PH",
    shortDescription: "Real-time flood monitoring and alert system for the Philippines.",
    longDescription:
      "A web application providing real-time flood monitoring and early warning alerts across the Philippines. Aggregates flood sensor data and weather information to help communities stay informed during flood events.",
    tags: ["Next.js", "Public Safety", "Real-time"],
    techStack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Vercel"],
    githubUrl: "",
    liveUrl: "https://floodwatch-ph.vercel.app/",
    category: "Websites & Web Apps",
    status: "live",
    features: [
      "Real-time flood level monitoring",
      "Area-based alert system",
      "Interactive map view",
      "Historical flood data",
      "Mobile-responsive design",
    ],
  },

  // ── Local / Desktop ───────────────────────────────────────────────────────
  {
    slug: "yahoo-finance-scraper",
    name: "Yahoo Finance Scraper",
    shortDescription: "Desktop tool that scrapes and exports financial data from Yahoo Finance.",
    longDescription:
      "A Python desktop application that automates the extraction of financial data — stock prices, historical charts, and company fundamentals — from Yahoo Finance. Outputs structured data to CSV or JSON for analysis.",
    tags: ["Python", "Desktop", "Finance"],
    techStack: ["Python", "BeautifulSoup", "Pandas", "Tkinter"],
    githubUrl: "",
    liveUrl: "",
    category: "Desktop",
    status: "local",
    features: [
      "Stock price and history scraping",
      "Company fundamentals extraction",
      "CSV and JSON export",
      "Desktop GUI with Tkinter",
      "Scheduled auto-fetch",
    ],
  },
  {
    slug: "quiz-app-java",
    name: "Quiz App",
    shortDescription: "Desktop quiz application built in Java with score tracking and categories.",
    longDescription:
      "A Java desktop quiz application featuring multiple question categories, a timer, score tracking, and a leaderboard. Built as a learning project to practice Java OOP principles and Swing-based UI development.",
    tags: ["Java", "Desktop"],
    techStack: ["Java", "Swing", "OOP"],
    githubUrl: "",
    liveUrl: "",
    category: "Desktop",
    status: "local",
    features: [
      "Multiple quiz categories",
      "Countdown timer per question",
      "Score tracking and history",
      "Leaderboard system",
      "Java Swing GUI",
    ],
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    role: "Full Stack Developer",
    company: "Ecoshift Corporation",
    year: "2026",
    current: true,
    description:
      "Leading full-stack development of internal tools and customer-facing platforms. Architecting scalable systems using Next.js, Python, and PostgreSQL while integrating AI capabilities into existing workflows.",
  },
  {
    id: "2",
    role: "Full Stack Intern",
    company: "Ecoshift Corporation",
    year: "2025",
    current: false,
    description:
      "Built and shipped multiple internal dashboards and automation tools. Contributed to backend API development and optimized database query performance by 40%.",
  },
  {
    id: "3",
    role: "Web Developer",
    company: "Freelancer",
    year: "2024",
    current: false,
    description:
      "Delivered custom websites and web applications for small to mid-sized businesses. Specialized in React-based frontends integrated with headless CMS solutions.",
  },
  {
    id: "4",
    role: "Java Developer",
    company: "Freelancer",
    year: "2023",
    current: false,
    description:
      "Developed desktop and backend applications using Java and Spring Boot. Built RESTful APIs and contributed to open-source Java utilities.",
  },
  {
    id: "5",
    role: "Hello World",
    company: "started my programming journey",
    year: "2023",
    current: false,
    description:
      "First steps into programming — writing small programs, learning fundamentals, and discovering a lifelong passion for building software.",
  },
];

export const techStack: TechItem[] = [
  { name: "Next.js",        category: "Frontend" },
  { name: "React",          category: "Frontend" },
  { name: "TypeScript",     category: "Frontend" },
  { name: "Tailwind CSS",   category: "Frontend" },
  { name: "Framer Motion",  category: "Frontend" },
  { name: "shadcn/ui",      category: "Frontend" },
  { name: "Node.js",        category: "Backend"  },
  { name: "Python",         category: "Backend"  },
  { name: "FastAPI",        category: "Backend"  },
  { name: "PostgreSQL",     category: "Backend"  },
  { name: "Redis",          category: "Backend"  },
  { name: "Prisma",         category: "Backend"  },
  { name: "OpenAI API",     category: "AI"       },
  { name: "LangChain",      category: "AI"       },
  { name: "Pinecone",       category: "AI"       },
  { name: "Hugging Face",   category: "AI"       },
  { name: "Docker",         category: "Tools"    },
  { name: "Git",            category: "Tools"    },
  { name: "Vercel",         category: "Tools"    },
  { name: "GitHub Actions", category: "Tools"    },
];

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "March 2025",
    description:
      "Validates proficiency in developing and maintaining applications on the AWS platform, including core services, security, and deployment automation.",
    url: "https://aws.amazon.com/certification",
  },
  {
    id: "2",
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "November 2024",
    description:
      "Demonstrates ability to build scalable, highly available applications using Google Cloud technologies and best practices for cloud-native development.",
    url: "https://cloud.google.com/certification",
  },
  {
    id: "3",
    title: "Meta Frontend Developer Certificate",
    issuer: "Meta / Coursera",
    date: "June 2024",
    description:
      "Comprehensive program covering advanced React, state management, accessibility, and UI/UX design principles for production-grade frontend systems.",
    url: "https://coursera.org",
  },
  {
    id: "4",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    date: "January 2024",
    description:
      "Five-course specialization covering neural networks, hyperparameter tuning, CNNs, sequence models, and practical deep learning project work.",
    url: "https://coursera.org",
  },
];