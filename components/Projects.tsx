"use client";

import { useState } from "react";
import { projects } from "@/lib/portfolioData";

const INITIAL_VISIBLE_PROJECTS = 5;

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE_PROJECTS);

  return (
    <div className="section-wrap" id="projects">
      <div className="sec-pre">
        <span className="ln">03</span> Projects
      </div>
      <h2 className="sec-h reveal">
        Shipped <span className="dim">products &amp; systems.</span>
      </h2>
      <p className="sec-sub reveal">AI pipelines, full-stack platforms, developer tooling, and automation systems — built for production.</p>
      <div className="proj-grid reveal">
        {visibleProjects.map((project) => (
          <div className={`proj-card${project.featured ? " featured" : ""}`} key={project.title}>
            <span className={`proj-type ${project.variant}`}>{project.type}</span>
            <h3 className="proj-h">{project.title}</h3>
            <p className="proj-p">{project.description}</p>
            <div className="tech-row">
              {project.tech.map((item) => (
                <span className="tc" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="proj-links">
              {project.links.map((link) => (
                <a key={link.label} href={link.href} target={link.external ? "_blank" : ""} rel={link.external ? "noreferrer" : undefined} className="pl">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      {projects.length > INITIAL_VISIBLE_PROJECTS ? (
        <div className="proj-btn-wrap">
          <button type="button" className="btn-primary" onClick={() => setShowAll((prev) => !prev)}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
