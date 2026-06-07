import { experiences } from "@/lib/portfolioData";

export function Experience() {
  return (
    <div className="section-wrap" id="experience">
      <div className="sec-pre">
        <span className="ln">05</span> Experience
      </div>
      <h2 className="sec-h reveal">
        Career <span className="dim">timeline.</span>
      </h2>
      <p className="sec-sub reveal">Enterprise systems, AI products, and measurable engineering impact.</p>
      <div className="exp-outer reveal">
        {experiences.map((item) => (
          <div className="exp-block" key={`${item.role}-${item.date}`}>
            <div className="exp-dot" style={item.current ? {} : { background: "var(--blue)" }} />
            <div className="exp-meta">
              <span className="exp-date">{item.date}</span>
              {item.current ? <span className="exp-badge badge-current">CURRENT</span> : null}
            </div>
            <div className="exp-role">{item.role}</div>
            <div className="exp-co">
              <strong>{item.company}</strong>
              {item.location ? ` · ${item.location}` : ""}
            </div>
            {item.bullets.length ? (
              <ul className="exp-ul">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            {item.tags && item.tags.length ? (
              <div className="etags">
                {item.tags.map((tag) => (
                  <span className="etag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
