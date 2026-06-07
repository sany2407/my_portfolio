import { skillGroups } from "@/lib/portfolioData";

export function About() {
  const tagClass = (groupTitle: string) => {
    if (groupTitle.includes("AI")) return "sk-tag ai";
    if (groupTitle.includes("Infrastructure") || groupTitle.includes("DevOps")) return "sk-tag infra";
    return "sk-tag";
  };

  return (
    <div className="section-wrap" id="about">
      <div className="sec-pre">
        <span className="ln">01</span> About
      </div>
      <h2 className="sec-h reveal">
        Engineer who owns <span className="dim">problems end-to-end.</span>
      </h2>
      <div className="about-grid">
        <div className="reveal">
          <p className="about-p">
            I'm a <strong>Full Stack Software Developer</strong> with 2 years of production experience across enterprise applications, distributed systems, and AI-integrated products. I work across the complete stack — from designing scalable backend services to shipping pixel-precise frontends.
          </p>
          <p className="about-p">
            At <strong>AES Technologies India</strong>, I architect and build enterprise-grade applications that fuse modern full-stack patterns with AI capabilities — delivering 45% performance improvements and cutting delivery time by 60% through better system design and CI/CD automation.
          </p>
          <p className="about-p">
            At <strong>SNS iNNovation Hub</strong>, I focused on automation pipelines, intelligent agents, and data-driven product features — achieving 95% efficiency gains through smart caching, async processing, and LLM-powered workflows.
          </p>
          <p className="about-p">
            I'm strongest when I can take an idea from architecture sketch to running product — and keep it <strong>reliable, observable, and scalable</strong> along the way.
          </p>
          <a
            href="https://portfolio-five-gamma-41.vercel.app/My Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginTop: "1rem", fontSize: "0.76rem" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            DOWNLOAD RESUME
          </a>
        </div>
        <div className="skill-blocks reveal">
          {skillGroups.map((group) => (
            <div className="sk-b" key={group.title}>
              <div className="sk-header">
                <span className="sk-title">{group.title}</span>
                <span className="sk-count">{group.count} skills</span>
              </div>
              <div className="sk-body">
                {group.tags.map((tag) => (
                  <span key={tag} className={tagClass(group.title)}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
