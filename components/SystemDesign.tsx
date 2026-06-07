import { infraItems, systemCards } from "@/lib/portfolioData";
import { Tools } from "./Tools";

export function SystemDesign() {
  return (
    <div className="section-wrap" id="sysdesign">
      <div className="sec-pre">
        <span className="ln">02</span> System Design
      </div>
      <h2 className="sec-h reveal">
        Architecture &amp; <span className="dim">infrastructure patterns.</span>
      </h2>
      <p className="sec-sub reveal">Systems I design and build — scalable, fault-tolerant, and production-hardened.</p>
      <div className="sysdesign-grid reveal">
        {systemCards.map((system) => (
          <div className="sd-card" key={system.title}>
            <div className="sd-icon"> <system.icon className="h-6 w-6" /></div>
            <div className="sd-title">{system.title}</div>
            <div className="sd-desc">{system.description}</div>
            <div className="sd-tags">
              {system.tags.map((tag) => (
                <span key={tag} className="sd-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="infra-section reveal">
        <div className="infra-header">
          <span className="term-prompt">▸</span>
          <span className="infra-title">Infrastructure &amp; tooling stack</span>
        </div>
        <div className="infra-grid">
          {infraItems.map((item) => (
            <div className="infra-item" key={item.name}>
              <div className={`infra-logo ${item.logoClass}`}>{item.logo}</div>
              <div className="infra-name">{item.name}</div>
              <div className="infra-cat">{item.category}</div>
            </div>
          ))}
        </div>
      </div> */}
      {/* <Tools /> */}
    </div>
  );
}

