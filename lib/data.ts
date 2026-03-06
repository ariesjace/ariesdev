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
  {
    slug: "ai-saas-platform",
    name: "AI SaaS Platform",
    shortDescription: "Full-stack AI-powered SaaS with real-time features and subscription billing.",
    longDescription:
      "A comprehensive SaaS platform integrating OpenAI APIs to automate document processing, intelligent search, and workflow automation. Built with a multi-tenant architecture supporting thousands of concurrent users with real-time collaboration features.",
    tags: ["AI", "SaaS", "Full Stack"],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "Stripe", "Redis"],
    githubUrl: "https://github.com/ariesjace",
    liveUrl: "",
    category: "AI",
    features: [
      "Multi-tenant architecture with isolated data",
      "Real-time document collaboration",
      "AI-powered search and summarization",
      "Stripe subscription billing",
      "Role-based access control",
      "Audit logging and analytics dashboard",
    ],
  },
  {
    slug: "ecommerce-system",
    name: "E-Commerce System",
    shortDescription: "High-performance e-commerce platform with inventory management.",
    longDescription:
      "A scalable e-commerce solution handling complex product catalogs, dynamic pricing, and real-time inventory tracking. Designed to handle high traffic spikes with edge caching and optimistic UI updates.",
    tags: ["E-Commerce", "Full Stack"],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS"],
    githubUrl: "https://github.com/ariesjace",
    liveUrl: "",
    category: "Backend",
    features: [
      "Dynamic product catalog with variants",
      "Real-time inventory management",
      "Order processing and fulfillment pipeline",
      "Admin dashboard with analytics",
      "SEO-optimized product pages",
      "Multi-payment gateway support",
    ],
  },
  {
    slug: "automation-dashboard",
    name: "Automation Dashboard",
    shortDescription: "Python-based automation hub with visual workflow builder.",
    longDescription:
      "A visual automation platform enabling non-technical users to build complex workflows with conditional logic, third-party integrations, and scheduled triggers. Features a drag-and-drop canvas with real-time execution monitoring.",
    tags: ["Automation", "Python", "Dashboard"],
    techStack: ["React", "Python", "FastAPI", "Celery", "PostgreSQL"],
    githubUrl: "https://github.com/ariesjace",
    liveUrl: "",
    category: "Tools",
    features: [
      "Drag-and-drop workflow builder",
      "Scheduled task execution with Celery",
      "Real-time execution logs",
      "Third-party API integrations",
      "Conditional branching logic",
      "Error handling and retry policies",
    ],
  },
  {
    slug: "web-scraper-pipeline",
    name: "Web Scraper Pipeline",
    shortDescription: "Distributed scraping system with proxy rotation and data normalization.",
    longDescription:
      "An enterprise-grade web data extraction pipeline featuring distributed scraping workers, intelligent proxy rotation, and automated data normalization. Processes millions of records daily with built-in deduplication and change detection.",
    tags: ["Python", "Data", "Backend"],
    techStack: ["Python", "Scrapy", "Redis", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/ariesjace",
    liveUrl: "",
    category: "Backend",
    features: [
      "Distributed scraping with worker pools",
      "Intelligent proxy rotation",
      "Data normalization pipeline",
      "Change detection and deduplication",
      "Scheduled crawl jobs",
      "Export to CSV/JSON/Database",
    ],
  },
  {
    slug: "ai-chatbot",
    name: "AI Chatbot Interface",
    shortDescription: "Context-aware conversational AI with RAG and memory.",
    longDescription:
      "A production-ready AI chatbot leveraging Retrieval-Augmented Generation (RAG) to ground responses in proprietary knowledge bases. Features persistent memory, multi-turn conversation handling, and streaming responses.",
    tags: ["AI", "NLP", "Full Stack"],
    techStack: ["Next.js", "LangChain", "Pinecone", "OpenAI", "Python"],
    githubUrl: "https://github.com/ariesjace",
    liveUrl: "",
    category: "AI",
    features: [
      "RAG-powered contextual responses",
      "Vector database knowledge base",
      "Persistent conversation memory",
      "Streaming response rendering",
      "Document ingestion pipeline",
      "Multi-model support (GPT-4, Claude)",
    ],
  },
  {
    slug: "portfolio-cms",
    name: "Portfolio CMS",
    shortDescription: "Headless CMS tailored for developer portfolios with live preview.",
    longDescription:
      "A custom headless CMS built specifically for developer portfolios, featuring a live preview mode, markdown editor, and one-click deployment hooks. Supports media management and SEO metadata editing.",
    tags: ["CMS", "Full Stack"],
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/ariesjace",
    liveUrl: "",
    category: "Frontend",
    features: [
      "Live preview mode",
      "Rich markdown editor",
      "Media asset management",
      "SEO metadata editor",
      "One-click deployment triggers",
      "Role-based content editing",
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
  { name: "WordPress",      category: "Tools"    },
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
