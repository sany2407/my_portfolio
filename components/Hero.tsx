import { Download } from "lucide-react";
import { heroMetrics } from "@/lib/portfolioData";

export function Hero() {
  return (
    <div id="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">
          Senior Engineer · AI Systems · Full Stack
        </div>
        <h1 className="hero-name">
          SANY
          <br />
          <span className="accent">A.</span>
        </h1>
        <div className="hero-role">
          <span className="typewriter">
            $ Senior Full Stack &amp; AI Engineer
          </span>
        </div>
        <p className="hero-desc">
          I design and ship <strong>enterprise-grade systems</strong>  from
          distributed microservices on Kubernetes to production RAG pipelines
          and agentic workflows. I own problems end-to-end architecture,
          implementation, deployment, and reliability.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="/assets/Sany_A resume.pdf" className="btn-ghost" download>
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="terminal">
          <div className="term-bar">
            <span className="term-dot" style={{ background: "#FF5F56" }} />
            <span className="term-dot" style={{ background: "#FFBD2E" }} />
            <span className="term-dot" style={{ background: "#27C93F" }} />
            <span
              style={{
                fontFamily: "'Chivo Mono',monospace",
                fontSize: "0.68rem",
                color: "var(--ink3)",
                marginLeft: "0.5rem",
              }}
            >
              engineer.config.ts
            </span>
          </div>
          <div className="term-body">
            <div className="term-line">
              <span className="term-comment">// Senior Engineer Profile</span>
            </div>
            <div className="term-line">
              <span className="term-key">const</span>
              &nbsp;
              <span style={{ color: "var(--ink)" }}>engineer</span>
              &nbsp;
              <span className="term-comment">=</span>
              &nbsp;
              <span className="term-comment">{`{`}</span>
            </div>
            <div className="term-line">
              &nbsp;&nbsp;<span className="term-key">name:</span>&nbsp;
              <span className="term-str">"Sany A"</span>
              <span className="term-comment">,</span>
            </div>
            <div className="term-line">
              &nbsp;&nbsp;<span className="term-key">level:</span>&nbsp;
              <span className="term-str">"Senior / L5"</span>
              <span className="term-comment">,</span>
            </div>
            <div className="term-line">
              &nbsp;&nbsp;<span className="term-key">stack:</span>&nbsp;
              <span className="term-str">["Next.js","Node","Python","Dotnet","Rust"]</span>
              <span className="term-comment">,</span>
            </div>
            <div className="term-line">
              &nbsp;&nbsp;<span className="term-key">infra:</span>&nbsp;
              <span className="term-str">["K8s","Docker","AWS","Azure"]</span>
              <span className="term-comment">,</span>
            </div>
            <div className="term-line">
              &nbsp;&nbsp;<span className="term-key">ai:</span>&nbsp;
              <span className="term-str">
                ["RAG","Agents","LangGraph","MCP"]
              </span>
              <span className="term-comment">,</span>
            </div>
            <div className="term-line">
              &nbsp;&nbsp;<span className="term-key">available:</span>&nbsp;
              <span style={{ color: "var(--accent)" }}>true</span>
            </div>
            <div className="term-line">
              <span className="term-comment">{"};"}</span>
            </div>
            <div className="term-line" style={{ marginTop: "0.5rem" }}>
              <span className="term-prompt">▸</span>
              &nbsp;
              <span style={{ color: "var(--ink2)" }}>
                Running system checks
              </span>
              &nbsp;
              <span className="term-cursor" />
            </div>
          </div>
        </div>
        <div className="metric-row">
          {heroMetrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <div className="metric-n">{metric.value}</div>
              <div className="metric-l">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
