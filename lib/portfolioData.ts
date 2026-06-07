import { 
  Boxes, 
  Cloud, 
  Cpu, 
  FolderGit2, 
  HardDriveDownload, 
  Zap 
} from "lucide-react";
import { ComponentType } from "react";
export type NavLink = { label: string; href: string };
export type Metric = { value: string; label: string };
export type SkillGroup = { title: string; count: number; tags: string[] };
export type SystemCard = { 
  icon: ComponentType<{ className?: string }>; 
  title: string; 
  description: string; 
  tags: string[] 
};export type InfraItem = { logo: string; logoClass: string; name: string; category: string };
export type ProjectLink = { href: string; label: string; external?: boolean };
export type Project = { type: string; variant: string; title: string; description: string; tech: string[]; links: ProjectLink[]; featured?: boolean };
export type ExperienceItem = { date: string; current?: boolean; role: string; company: string; location: string; bullets: string[]; tags?: string[]; dotClass?: string };
export type Certification = { icon: string; title: string; issuer: string };
export type ContactInfo = { email: string; phone: string; location: string; socials: { label: string; href: string; icon: 'github' | 'linkedin' }[] };
export type ToolItem = { name: string; icon: string; category: string };

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Systems", href: "#sysdesign" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroMetrics: Metric[] = [
  { value: "45%", label: "Perf. improvement" },
  { value: "60%", label: "Delivery time ↓" },
  { value: "95%", label: "Efficiency gains" },
  { value: "2yr+", label: "Prod. experience" },
];

export const skillGroups: SkillGroup[] = [
  { title: "Frontend", count: 4, tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", count: 7, tags: ["Node.js", "Express.js", "Bun.js", "Python", "REST APIs", "GraphQL", "WebSockets"] },
  { title: "Databases & Caching", count: 5, tags: ["PostgreSQL", "MongoDB", "Redis", "SQL", "Vector DBs"] },
  { title: "Infrastructure & DevOps", count: 6, tags: ["Docker", "Kubernetes", "AWS", "Azure", "Terraform", "CI/CD"] },
  { title: "AI & Agents", count: 6, tags: ["LangChain", "LangGraph", "RAG", "OpenAI", "MCP", "Azure AI"] },
];

export const systemCards: SystemCard[] = [
  {
    icon: Boxes,
    title: "Containerized Microservices",
    description:
      "Design and orchestrate Docker-based microservice architectures. Build multi-stage Dockerfiles, optimize image layers, and manage service networking with Docker Compose and Kubernetes manifests.",
    tags: ["Docker", "Compose", "Multi-stage builds", "Service mesh"],
  },
  {
    icon: HardDriveDownload,
    title: "Kubernetes Orchestration",
    description:
      "Deploy and manage production workloads on Kubernetes. Configure HPA, rolling deployments, pod disruption budgets, ingress controllers, and secrets management for zero-downtime releases.",
    tags: ["K8s", "Helm", "HPA", "Ingress", "Secrets"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture (AWS / Azure)",
    description:
      "Architect cloud-native solutions using managed services — Lambda, ECS, RDS, S3, CloudFront on AWS; App Service, AKS, Azure AI, Blob Storage on Azure. Design for high availability and cost efficiency.",
    tags: ["AWS ECS", "Lambda", "AKS", "Azure AI", "CDN"],
  },
  {
    icon: FolderGit2,
    title: "Infrastructure as Code",
    description:
      "Provision and manage cloud infrastructure with Terraform. Write reusable modules for VPCs, EKS clusters, RDS instances, IAM policies, and networking — enabling reproducible environments across dev, staging, and prod.",
    tags: ["Terraform", "HCL", "Modules", "State management"],
  },
  {
    icon: Zap,
    title: "Caching & Performance",
    description:
      "Implement multi-layer caching strategies with Redis — session stores, rate limiting, pub/sub messaging, distributed locks, and cache-aside patterns to reduce database load in high-traffic flows.",
    tags: ["Redis", "Cache-aside", "Pub/Sub", "Rate limiting"],
  },
  {
    icon: Cpu,
    title: "Agentic AI Pipelines",
    description:
      "Design RAG pipelines and multi-agent systems on production infrastructure — with vector stores, embedding services, LLM routing, observability, and fallback strategies for reliability at scale.",
    tags: ["LangGraph", "Vector DB", "LLM routing", "Observability"],
  },
];

export const infraItems: InfraItem[] = [
  { logo: "DOK", logoClass: "logo-docker", name: "Docker", category: "Containers" },
  { logo: "K8S", logoClass: "logo-k8s", name: "Kubernetes", category: "Orchestration" },
  { logo: "AWS", logoClass: "logo-aws", name: "AWS", category: "Cloud" },
  { logo: "AZ", logoClass: "logo-azure", name: "Azure", category: "Cloud" },
  { logo: "TF", logoClass: "logo-tf", name: "Terraform", category: "IaC" },
  { logo: "RDS", logoClass: "logo-redis", name: "Redis", category: "Cache / Queue" },
  { logo: "PG", logoClass: "logo-pg", name: "PostgreSQL", category: "Database" },
  { logo: "MDB", logoClass: "logo-mongo", name: "MongoDB", category: "Database" },
  { logo: "GHA", logoClass: "logo-gh", name: "GitHub Actions", category: "CI/CD" },
  { logo: "NXT", logoClass: "logo-next", name: "Next.js", category: "Frontend" },
];

export const tools: ToolItem[] = [
  { name: "VS Code", icon: "/assets/vs-code.png", category: "Development" },
  { name: "Git", icon: "/assets/git.png", category: "Version Control" },
  { name: "GitHub", icon: "/assets/github.png", category: "Version Control" },
  { name: "Postman", icon: "/assets/postman.png", category: "API Testing" },
  { name: "Swagger", icon: "/assets/swagger.png", category: "API Documentation" },
  { name: "Jira", icon: "/assets/jira.png", category: "Project Management" },
  { name: "Slack", icon: "/assets/slack.png", category: "Communication" },
  { name: "Figma", icon: "/assets/figma.png", category: "Design" },
  { name: "Vercel", icon: "/assets/apple-touch-icon-256x256.png", category: "Deployment" },
  { name: "Docker", icon: "/assets/docker.png", category: "Deployment" },
  { name: "Kubernetes", icon: "/assets/k8s.png", category: "Deployment" },
  { name: "AWS", icon: "/assets/aws.png", category: "Cloud" },
  { name: "React.js", icon: "/assets/teactjs.png", category: "Frontend" },
  { name: "Next.js", icon: "/assets/nextjs.png", category: "Frontend" },
  { name: "TypeScript", icon: "/assets/ts.png", category: "Language" },
  { name: "Python", icon: "/assets/python.png", category: "Language" },
  { name: "Redux", icon: "/assets/redux.png", category: "State Management" },
  { name: "Node.js", icon: "/assets/nodejs-logo.png", category: "Backend" },
  { name: "Express.js", icon: "/assets/expressjs.png", category: "Backend" },
  { name: "Linux", icon: "/assets/linux.png", category: "OS/DevOps" },
  { name: "MongoDB", icon: "/assets/mongodb.png", category: "Database" },
  { name: "MySQL", icon: "/assets/MySQL-Logo.png", category: "Database" },
  { name: "LangGraph", icon: "/assets/langgraph.png", category: "Orchestration" },
  { name: "CrewAI", icon: "/assets/crew.png", category: "Agents/Orchestration" },
];

export const projects: Project[] = [
  {
    type: "AI · RAG · Agents",
    variant: "pt-ai",
    title: "RAG Document Intelligence System",
    description:
      "Production-grade Retrieval-Augmented Generation system with SQL-agent reasoning. Intelligent chunking, vector search, streaming chat, and structured data access — containerized and deployable on K8s.",
    tech: ["Python", "LangChain", "Vector DB", "OpenAI", "FastAPI", "Docker"],
    featured: true,
    links: [
      { href: "https://github.com/sany2407/SqlAgent", label: "GitHub", external: true },
      { href: "https://portfolio-five-gamma-41.vercel.app/projects/rag-doc-assistant", label: "Details →", external: true },
    ],
  },
  {
    type: "Full-Stack",
    variant: "pt-fs",
    title: "Job Portal Platform",
    description:
      "Full-featured job board with real-time listings, filters, and application tracking. Redis-cached search, optimised DB queries, CI/CD-deployed.",
    tech: ["Next.js", "MongoDB", "Redis", "Docker"],
    links: [
      { href: "https://job-board-frontend-eta.vercel.app/", label: "Live Demo", external: true },
    ],
  },
  {
    type: "E-Commerce",
    variant: "pt-fs",
    title: "Vembar Karupatti Shop",
    description:
      "Modern e-commerce platform for authentic palm products. Server-side rendering, cart management, and optimised checkout flow.",
    tech: ["Next.js", "React", "MongoDB", "TypeScript"],
    links: [
      { href: "https://vembar-karupatti.vercel.app/", label: "Live Demo →", external: true },
    ],
  },
  {
    type: "CLI · AI",
    variant: "pt-cli",
    title: "AI Chat CLI",
    description:
      "Terminal-based AI assistant with streaming responses, multi-turn memory, model switching, and persistent conversation history.",
    tech: ["Node.js", "TypeScript", "OpenAI"],
    links: [
      { href: "https://github.com/sany2407/ai-chat-cli", label: "GitHub →", external: true },
    ],
  },
  {
    type: "NPM Package",
    variant: "pt-npm",
    title: "nextjs-auth-kit",
    description:
      "Published NPM package — drop-in auth for Next.js with JWT, session handling, OAuth integrations, and middleware helpers.",
    tech: ["Next.js", "JWT", "TypeScript", "npm"],
    links: [
      { href: "https://www.npmjs.com/package/nextjs-auth-kit", label: "NPM →", external: true },
    ],
  },
  {
    type: "AI Tool",
    variant: "pt-ai",
    title: "ATS Resume Editor",
    description:
      "AI-powered resume builder for ATS optimisation — real-time keyword analysis, formatting guidance, and score prediction.",
    tech: ["React", "OpenAI", "Node.js"],
    links: [
      { href: "https://github.com/sany2407/resume-builder", label: "GitHub →", external: true },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    date: "JAN 2026 — PRESENT",
    current: true,
    role: "AI Full Stack Developer",
    company: "AES Technologies India Pvt Ltd",
    location: "India",
    bullets: [
      "Built enterprise applications delivering 45% performance improvement and 60% faster delivery through architectural optimisations",
      "Designed scalable full-stack systems across frontend, backend services, APIs, and AI integrations for production enterprise use",
      "Implemented containerised microservices with Docker and Kubernetes, enabling zero-downtime deployments",
      "Integrated AI capabilities into enterprise workflows — LLM-powered features in production environments",
    ],
    tags: ["Next.js", "Node.js", "Docker", "K8s", "AI Integration", "Enterprise APIs"],
  },
  {
    date: "JUL 2024 — DEC 2025",
    role: "Software Associate",
    company: "SNS iNNovation Hub",
    location: "India",
    bullets: [
      "Delivered 95% efficiency gains through intelligent agents, workflow automation, and smart caching strategies",
      "Implemented Redis caching layers to optimise API response times and reduce database load in high-traffic flows",
      "Increased user engagement by 25% through data-driven UI/UX improvements and A/B tested product features",
      "Built automation pipelines including email automation and YouTube comment response automation",
      "Established CI/CD pipelines with Docker + GitHub Actions; optimised PostgreSQL and MongoDB query performance",
    ],
    tags: ["Next.js", "React", "Node.js", "Redis", "PostgreSQL", "MongoDB", "Docker", "GitHub Actions"],
    dotClass: "",
  },
  {
    date: "FEB 2024 — MAY 2024",
    role: "Web Developer Intern",
    company: "Accent Techno Soft",
    location: "India",
    bullets: [
      "Built and shipped UI components with React, HTML, CSS, and JavaScript",
      "Designed and integrated RESTful APIs for dynamic data rendering",
      "Diagnosed and resolved cross-stack bugs; improved application stability",
    ],
    tags: [],
    dotClass: "",
  },
  {
    date: "2020 — 2024",
    role: "B.E. Computer Science",
    company: "SNS College of Technology",
    location: "India",
    bullets: [],
    tags: [],
    dotClass: "",
  },
];

export const certifications: Certification[] = [
  { icon: "☁️", title: "Intelligent Document Processing with Azure AI Document Intelligence", issuer: "Microsoft Azure" },
  { icon: "🔗", title: "Introduction to Model Context Protocol", issuer: "Anthropic / MCP" },
  { icon: "⚡", title: "Model Context Protocol: Advanced Topics", issuer: "Anthropic / MCP" },
  { icon: "🧮", title: "Algorithmic Toolbox", issuer: "Coursera / UC San Diego" },
  { icon: "💾", title: "Redis for JavaScript Developers", issuer: "Redis University" },
];

export const contactInfo: ContactInfo = {
  email: "sanyworks08@gmail.com",
  phone: "+91 89408 95723",
  location: "India",
  socials: [
    { label: "GitHub", href: "https://github.com/sany2407", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/asany", icon: "linkedin" },
  ],
};
