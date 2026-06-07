import { certifications } from "@/lib/portfolioData";

export function Certifications() {
  return (
    <div className="section-wrap">
      <div className="sec-pre">
        <span className="ln">06</span> Certifications
      </div>
      <h2 className="sec-h reveal">
        Verified <span className="dim">credentials.</span>
      </h2>
      <div className="cert-grid reveal">
        {certifications.map((cert) => (
          <div className="cert-c" key={cert.title}>
            <div className="cert-ico">{cert.icon}</div>
            <div>
              <div className="cert-n">{cert.title}</div>
              <div className="cert-is">{cert.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
