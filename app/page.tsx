"use client";

import { FormEvent, useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { About } from "@/components/About";
import { ChatWidget } from "@/components/ChatWidget";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import {Tools} from "@/components/Tools";
import { SystemDesign } from "@/components/SystemDesign";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [submitLabel, setSubmitLabel] = useState("SEND MESSAGE");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), index * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Message sent!");
    setSubmitLabel("SENT ✓");
    event.currentTarget.reset();
    setTimeout(() => setSubmitLabel("SEND MESSAGE"), 3000);
  };

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <SystemDesign />
        <div className="divider" />
        <Tools />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Certifications />
        <div className="divider" />
        <Contact onSubmit={handleSubmit} submitLabel={submitLabel} />
        <Footer />
      </main>
      <Toaster position="top-right" richColors />
      <ChatWidget />
    </>
  );
}
