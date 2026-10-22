/**
 * Predefined answers used when the assistant API is unreachable.
 *
 * These are canned, portfolio-accurate responses. The UI always labels them
 * as predefined so they are never mistaken for a live, retrieved answer.
 */

export type PredefinedEntry = {
  id: string;
  keywords: string[];
  answer: string;
  sources: { title: string; source: string; excerpt: string }[];
};

export const PREDEFINED_ENTRIES: PredefinedEntry[] = [
  {
    id: "technologies",
    keywords: [
      "tech",
      "technolog",
      "stack",
      "tool",
      "framework",
      "language",
      "database",
      "cloud",
      "program",
      "use",
    ],
    answer: `**Predefined answer — the live assistant is unavailable.**

Based on the documented portfolio, Sany works across these areas:

* **AI & Agents:** LangChain, LangGraph, RAG, Model Context Protocol (MCP), tool calling, agent planning, multi-agent workflows, prompt engineering, vector embeddings [1].
* **Languages:** Python, TypeScript, JavaScript, SQL [1].
* **Backend & Architecture:** FastAPI, Node.js, Express.js, REST APIs, GraphQL, .NET microservices, WebSockets, event-driven architecture [1].
* **Data & Caching:** PostgreSQL, MongoDB, Oracle Database, Redis (caching, TTL, Pub/Sub, sessions) [1].
* **Cloud & DevOps:** Azure, Google Cloud Platform, Docker, Kubernetes, Terraform, GitHub Actions, CI/CD pipelines [1].
* **Frontend:** React, Next.js, Tailwind CSS [1].`,
    sources: [
      {
        title: "Skills",
        source: "knowledge/skills.md",
        excerpt:
          "LangChain, LangGraph, retrieval-augmented generation (RAG), Model Context Protocol (MCP), tool calling, agent planning…",
      },
      {
        title: "Profile",
        source: "knowledge/profile.md",
        excerpt: "Senior full-stack and AI engineer working across enterprise systems.",
      },
    ],
  },
  {
    id: "projects",
    keywords: ["project", "built", "maritime", "platform", "app", "feature", "product"],
    answer: `**Predefined answer — the live assistant is unavailable.**

The portfolio documents work on these areas [1]:

* **Maritime Port Information Platform** — enterprise full-stack platform for vessel, port and terminal data, including Terminal Details and Port Facilities [2].
* **Real-Time Messaging Platform** — low-latency messaging and notifications [3].
* **AI Document Intelligence** — RAG ingestion, chunking, vector search and SQL-agent reasoning [4].
* **Salesforce AI Automation Agent** — LLM-driven automation for case and feedback handling [5].
* **Fleet Compatibility** — data and compatibility tooling across the fleet domain [6].`,
    sources: [
      {
        title: "Maritime Port Information Platform",
        source: "knowledge/projects/maritime-port-information-platform.md",
        excerpt:
          "Enterprise full-stack application in the maritime and e-shipment domain, managing vessel, port and terminal data.",
      },
      {
        title: "Projects",
        source: "knowledge/projects/",
        excerpt: "Documented project areas and responsibilities.",
      },
    ],
  },
  {
    id: "experience",
    keywords: [
      "experience",
      "work",
      "company",
      "role",
      "job",
      "aes",
      "sns",
      "employer",
      "career",
      "position",
    ],
    answer: `**Predefined answer — the live assistant is unavailable.**

* **AI Full Stack Developer — AES Technologies India Pvt. Ltd.** (January 2026 – Present, Coimbatore, India). Builds enterprise services for a vessel and e-shipment platform using .NET microservices, Node.js, GraphQL and Oracle Database, with a focus on AI integrations [1].
* **Software Associate — SNS Square** (June 2024 – December 2025). Automation pipelines, intelligent agents and data-driven product features, with reported gains in efficiency and delivery speed [2].
* **Web Developer Intern** — earlier work on client web applications [3].`,
    sources: [
      {
        title: "Aes Technologies",
        source: "knowledge/experience/aes-technologies.md",
        excerpt: "Role: Full Stack AI Engineer — enterprise maritime and e-shipment platform.",
      },
      {
        title: "SNS Square",
        source: "knowledge/experience/sns-square.md",
        excerpt: "Automation pipelines, intelligent agents and data-driven features.",
      },
    ],
  },
  {
    id: "certifications",
    keywords: [
      "certif",
      "certifi",
      "credential",
      "education",
      "degree",
      "course",
      "trained",
      "learn",
    ],
    answer: `**Predefined answer — the live assistant is unavailable.**

The portfolio lists these certifications [1]:

* **Redis Certified Developer**
* **NASSCOM Python Certification**
* **Azure AI Document Intelligence**
* **Model Context Protocol (MCP)**
* **MCP Advanced Topics**

Education: **B.E. Computer Science** [1].

The portfolio does not specify credential IDs, issue dates, expiry dates, or verification URLs for these certifications [1].`,
    sources: [
      {
        title: "Certifications And Education",
        source: "knowledge/certifications-and-education.md",
        excerpt: "Redis Certified Developer, NASSCOM Python, Azure AI Document Intelligence, MCP.",
      },
    ],
  },
  {
    id: "contact",
    keywords: ["contact", "email", "reach", "hire", "available", "connect", "talk", "resume"],
    answer: `**Predefined answer — the live assistant is unavailable.**

You can reach Sany through his verified public professional profiles:

* **LinkedIn:** linkedin.com/in/asany [1].
* **GitHub:** github.com/sany2407 [1].

Note: direct email addresses and phone numbers are intentionally omitted and not published in the available portfolio evidence [1].`,
    sources: [
      {
        title: "Contact",
        source: "knowledge/contact.md",
        excerpt: "Email, phone and location details.",
      },
    ],
  },
  {
    id: "ai",
    keywords: ["ai", "agent", "llm", "rag", "machine learning", "genai", "vector", "embedding"],
    answer: `**Predefined answer — the live assistant is unavailable.**

Sany's AI work includes [1]:

* **RAG pipelines** — ingestion, chunking, embedding, vector search and grounded answering, with citation-level evidence [2].
* **Agentic workflows** — LangGraph orchestration, tool calling, planning and multi-agent patterns [2].
* **LLM integrations** — document intelligence, automated feedback handling and case triage [3].
* **Vector embeddings and caching** — embedding models, semantic retrieval, Redis-backed caching and event-driven pipelines [1].`,
    sources: [
      {
        title: "Profile",
        source: "knowledge/profile.md",
        excerpt: "Production RAG pipelines and agentic workflows.",
      },
      {
        title: "AI Document Intelligence",
        source: "knowledge/projects/ai-document-intelligence.md",
        excerpt: "Production-grade retrieval-augmented generation with SQL-agent reasoning.",
      },
    ],
  },
];

export const PREDEFINED_FALLBACK: PredefinedEntry = {
  id: "generic",
  keywords: [],
  answer: `**Predefined answer — the live assistant is unavailable.**

I could not reach the portfolio assistant service, so this is a predefined answer
rather than a retrieved one. A few things the portfolio covers:

* **Experience** at AES Technologies and SNS Square [1].
* **Projects** across maritime platforms, messaging, AI document intelligence and automation [2].
* **Skills** in Python, TypeScript, FastAPI, .NET, React, Next.js, LangGraph and cloud platforms [3].

Try the live assistant again shortly for a fully cited, retrieved answer.`,
  sources: [
    {
      title: "Profile",
      source: "knowledge/profile.md",
      excerpt: "Senior full-stack and AI engineer.",
    },
    {
      title: "Skills",
      source: "knowledge/skills.md",
      excerpt: "Languages, frameworks, platforms and tools.",
    },
  ],
};

/** Pick the predefined entry whose keywords best match the question. */
export function findPredefinedAnswer(question: string): PredefinedEntry {
  const text = question.toLowerCase();
  let best: PredefinedEntry | null = null;
  let bestScore = 0;

  for (const entry of PREDEFINED_ENTRIES) {
    const score = entry.keywords.reduce(
      (total, keyword) => (text.includes(keyword) ? total + keyword.length : total),
      0
    );
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  return best ?? PREDEFINED_FALLBACK;
}
