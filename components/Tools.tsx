import Image from "next/image";
import { tools } from "@/lib/portfolioData";

export function Tools() {
  return (
    <div className="infra-section reveal">
      <div className="infra-header">
        <span className="term-prompt">▸</span>
        <span className="infra-title">Tools &amp; Technology Stack</span>
      </div>
      <div className="tools-grid">
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
