import { FormEvent } from "react";
import { Link, Mail, Phone, MapPin, Send } from "lucide-react";
import { contactInfo } from "@/lib/portfolioData";

type ContactProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  submitLabel: string;
};

export function Contact({ onSubmit, submitLabel }: ContactProps) {
  return (
    <div className="section-wrap" id="contact">
      <div className="sec-pre">
        <span className="ln">06</span> Contact
      </div>
      <h2 className="sec-h reveal">
        Let's build <span className="dim">something serious.</span>
      </h2>
      <div className="contact-cols">
        <div className="reveal">
          <p className="c-p">
            Looking for a senior engineer who can architect systems, ship AI products, and own the full lifecycle — from infra to interface? Let's talk.
          </p>
          <div className="c-row">
            <div className="c-ico">
              <Mail size={16} />
            </div>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </div>
          <div className="c-row">
            <div className="c-ico">
              <Phone size={16} />
            </div>
            <span>{contactInfo.phone}</span>
          </div>
          <div className="c-row">
            <div className="c-ico">
              <MapPin size={16} />
            </div>
            <span>{contactInfo.location}</span>
          </div>
          <div className="s-links">
            {contactInfo.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="s-link">
                <Link size={14} />
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <form className="c-form reveal" onSubmit={onSubmit}>
          <div className="f-row">
            <div className="f-g">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="f-g">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="you@company.com" required />
            </div>
          </div>
          <div className="f-g">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Project, role, collaboration..." />
          </div>
          <div className="f-g">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell me about your engineering challenges..." />
          </div>
          <button type="submit" className="btn-send" id="send-btn">
            <Send size={16} />
            {submitLabel}
          </button>
        </form>
      </div>
    </div>
  );
}
