"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/portfolioData";

type NavProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export function Nav({ theme, onToggleTheme }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-left">
        <a href="#hero" className="nav-logo">
          <span className="logo-dot"></span> SANY_A
        </a>
        <span className="nav-status">● OPEN TO WORK</span>
      </div>

      <button
        type="button"
        className="nav-hamburger"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          id="theme-btn"
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </div>
    </nav>
  );
}
