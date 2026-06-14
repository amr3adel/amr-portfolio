"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { portfolioContent } from "./content";

type Theme = "light" | "dark";

export default function Home() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const [openCase, setOpenCase] = useState(0);
  const [theme, setTheme] = useState<Theme>("light");
  const {
    nav,
    hero,
    impact,
    experienceSection,
    experiences,
    capabilitiesSection,
    capabilities,
    caseStudiesSection,
    caseStudies,
    educationSection,
    education,
    contact,
  } = portfolioContent;

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const nextTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : preferredTheme;
    const frame = window.requestAnimationFrame(() => setTheme(nextTheme));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "light" ? "dark" : "light";
      window.localStorage.setItem("portfolio-theme", nextTheme);
      return nextTheme;
    });
  }

  return (
    <main className="portfolio" data-theme={theme}>
      <header className="site-header">
        <nav className="nav-inner">
          <a href="#top" className="brand-name">
            {nav.name}
          </a>
          <div className="nav-links">
            {nav.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button type="button" className="theme-toggle" aria-pressed={theme === "dark"} onClick={toggleTheme}>
              <span>{theme === "dark" ? "Light" : "Dark"}</span>
              <span className="theme-toggle-track">
                <span className="theme-toggle-thumb" />
              </span>
            </button>
            <a href="/amr-cv.pdf" className="button button-primary">
              {nav.cvLabel}
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="hero-section">
        <div className="section-grid hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.name}</h1>
            <p className="hero-headline">{hero.headline}</p>
            <p className="hero-summary">{hero.summary}</p>
            <div className="button-row">
              <a href={hero.primaryCta.href} className="button button-accent">
                {hero.primaryCta.label}
              </a>
              <a href={hero.secondaryCta.href} className="button button-secondary">
                {hero.secondaryCta.label}
              </a>
              <a href={hero.contactCta.href} className="button button-secondary">
                {hero.contactCta.label}
              </a>
            </div>
          </div>

          <aside className="impact-card">
            <div className="card-header">
              <div>
                <p className="eyebrow">{impact.title}</p>
                <p className="muted-text">{impact.subtitle}</p>
              </div>
              <span className="status-pill">{impact.status}</span>
            </div>
            <div className="metric-grid">
              {impact.highlights.map((item) => (
                <div key={item.label} className="metric-card">
                  <p>{item.value}</p>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="focus-card">
              <p>{impact.focusTitle}</p>
              <span>{impact.focus}</span>
            </div>
          </aside>
        </div>
      </section>

      <section id="experience" className="section section-plain">
        <div className="section-grid experience-grid">
          <div>
            <p className="eyebrow">{experienceSection.eyebrow}</p>
            <h2>{experienceSection.heading}</h2>
            <div className="company-list">
              {experiences.map((item, index) => (
                <button
                  key={item.company}
                  type="button"
                  onClick={() => setActiveExperience(index)}
                  className={activeExperience === index ? "company-button active" : "company-button"}
                >
                  <span className="logo-box small-logo">
                    <img src={item.logo} alt={`${item.company} logo`} />
                  </span>
                  <span>
                    <span className="company-name">{item.company}</span>
                    <span className="company-period">{item.period}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <article className="detail-panel">
            <div className="detail-heading">
              <span className="logo-box large-logo">
                <img src={experiences[activeExperience].logo} alt={`${experiences[activeExperience].company} logo`} />
              </span>
              <div>
                <p className="eyebrow">{experiences[activeExperience].period}</p>
                <h3>{experiences[activeExperience].role}</h3>
                <p className="muted-text strong-muted">{experiences[activeExperience].company}</p>
              </div>
            </div>
            <p className="detail-summary">{experiences[activeExperience].focus}</p>
            <ul className="proof-list">
              {experiences[activeExperience].proof.map((proof) => (
                <li key={proof}>{proof}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="capabilities" className="section section-soft">
        <div className="section-grid capabilities-grid">
          <div>
            <p className="eyebrow">{capabilitiesSection.eyebrow}</p>
            <h2>{capabilitiesSection.heading}</h2>
            <p className="muted-text section-intro">{capabilitiesSection.summary}</p>
          </div>

          <div className="switch-panel">
            <div className="tab-grid">
              {capabilities.map((capability, index) => (
                <button
                  key={capability.name}
                  type="button"
                  onClick={() => setActiveCapability(index)}
                  className={activeCapability === index ? "tab-button active" : "tab-button"}
                >
                  {capability.name}
                </button>
              ))}
            </div>
            <div className="capability-detail">
              <h3>{capabilities[activeCapability].name}</h3>
              <p>{capabilities[activeCapability].summary}</p>
              <div className="skill-list">
                {capabilities[activeCapability].skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="section section-plain">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">{caseStudiesSection.eyebrow}</p>
            <h2>{caseStudiesSection.heading}</h2>
          </div>
          <div className="case-list">
            {caseStudies.map((item, index) => (
              <article key={item.title} className="case-card">
                <button type="button" onClick={() => setOpenCase(openCase === index ? -1 : index)}>
                  <span>
                    <span className="case-tag">{item.tag}</span>
                    <span className="case-title">{item.title}</span>
                  </span>
                  <span className="open-pill">
                    {openCase === index ? caseStudiesSection.closeLabel : caseStudiesSection.openLabel}
                  </span>
                </button>
                {openCase === index ? (
                  <div className="case-detail-grid">
                    <div>
                      <p>Context</p>
                      <span>{item.context}</span>
                    </div>
                    <div>
                      <p>Action</p>
                      <span>{item.action}</span>
                    </div>
                    <div>
                      <p>Result</p>
                      <span>{item.result}</span>
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-grid education-grid">
          <div>
            <p className="eyebrow">{educationSection.eyebrow}</p>
            <h2>{educationSection.heading}</h2>
          </div>
          <ul className="education-list">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div>
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2>{contact.heading}</h2>
            <p>{contact.details}</p>
          </div>
          <div className="button-row">
            <a href="mailto:amradel95@hotmail.com" className="button button-accent">
              {contact.emailLabel}
            </a>
            <a href="/amr-cv.pdf" className="button button-dark-outline">
              {contact.cvLabel}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

