import Image from "next/image";
import { tools } from "@/lib/portfolioData";

export function Tools() {
  return (
    <div className="section-wrap" id="tools">
      <div className="sec-pre">
        <span className="ln">03</span> Tools &amp; Technology Stack
      </div>
      <h2 className="sec-h reveal">
        Technologies <span className="dim">that power innovation.</span>
      </h2>
      <p className="sec-sub reveal">Languages, frameworks, platforms, and tools that drive modern development.</p>
      <div className="tools-grid reveal">
        {tools.map((tool) => (
          <div className="tool-item" key={tool.name}>
            <div className="tool-icon">
              <Image
                src={tool.icon}
                alt={tool.name}
                width={40}
                height={40}
                loading="lazy"
              />
            </div>
            <div className="tool-name">{tool.name}</div>
            <div className="tool-cat">{tool.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
