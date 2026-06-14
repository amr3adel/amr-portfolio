"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { portfolioContent } from "./content";

export default function Home() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const [openCase, setOpenCase] = useState(0);
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

  return (
    <main className="min-h-screen bg-[#faf8f4] text-[#172033]">
      <header className="sticky top-0 z-30 border-b border-[#d8dde3] bg-[#faf8f4]/92 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="text-sm font-semibold tracking-[0.18em] text-[#102033]">
            {nav.name}
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-[#52606f] md:flex">
            {nav.links.map((link) => (
              <a key={link.href} className="hover:text-[#c46632]" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a href="/amr-cv.pdf" className="bg-[#102033] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1e4e6d]">
            {nav.cvLabel}
          </a>
        </nav>
      </header>

      <section id="top" className="border-b border-[#d8dde3]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <div className="self-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c46632]">
              {hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#102033] md:text-7xl">
              {hero.name}
            </h1>
            <p className="mt-6 max-w-3xl text-2xl leading-snug text-[#1e4e6d] md:text-3xl">
              {hero.headline}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52606f]">
              {hero.summary}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={hero.primaryCta.href} className="bg-[#c46632] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a7522a]">
                {hero.primaryCta.label}
              </a>
              <a href={hero.secondaryCta.href} className="border border-[#c8cfd8] bg-white px-5 py-3 text-sm font-semibold text-[#102033] transition hover:border-[#c46632]">
                {hero.secondaryCta.label}
              </a>
              <a href={hero.contactCta.href} className="border border-[#c8cfd8] bg-white px-5 py-3 text-sm font-semibold text-[#102033] transition hover:border-[#c46632]">
                {hero.contactCta.label}
              </a>
            </div>
          </div>

          <aside className="bg-white p-6 shadow-[0_24px_70px_rgba(16,32,51,0.10)]">
            <div className="flex items-start justify-between gap-6 border-b border-[#e5e8ec] pb-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c46632]">{impact.title}</p>
                <p className="mt-2 text-sm leading-6 text-[#52606f]">{impact.subtitle}</p>
              </div>
              <span className="bg-[#f3e8dd] px-3 py-1 text-xs font-semibold text-[#8a4324]">{impact.status}</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {impact.highlights.map((item) => (
                <div key={item.label} className="border-l-2 border-[#c46632] bg-[#faf8f4] px-4 py-4">
                  <p className="text-3xl font-semibold text-[#102033]">{item.value}</p>
                  <p className="mt-2 text-sm leading-5 text-[#52606f]">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-[#102033] p-5 text-white">
              <p className="text-sm font-semibold text-[#f2b27f]">{impact.focusTitle}</p>
              <p className="mt-2 text-sm leading-6 text-white/85">{impact.focus}</p>
            </div>
          </aside>
        </div>
      </section>

      <section id="experience" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-18 lg:grid-cols-[390px_1fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c46632]">{experienceSection.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-[#102033] md:text-4xl">
              {experienceSection.heading}
            </h2>
            <div className="mt-7 grid gap-3">
              {experiences.map((item, index) => (
                <button
                  key={item.company}
                  type="button"
                  onClick={() => setActiveExperience(index)}
                  className={`flex items-center gap-4 border px-4 py-3 text-left transition ${
                    activeExperience === index
                      ? "border-[#102033] bg-[#102033] text-white"
                      : "border-[#d8dde3] bg-[#faf8f4] text-[#172033] hover:border-[#c46632]"
                  }`}
                >
                  <span className="flex h-11 w-16 shrink-0 items-center justify-center bg-white p-1.5">
                    <img src={item.logo} alt={`${item.company} logo`} className="max-h-8 max-w-full object-contain" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{item.company}</span>
                    <span className={`mt-1 block text-xs ${activeExperience === index ? "text-white/70" : "text-[#6a7380]"}`}>{item.period}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <article className="border border-[#d8dde3] bg-[#faf8f4] p-6 md:p-8">
            <div className="flex flex-wrap items-start gap-5">
              <span className="flex h-16 w-24 items-center justify-center bg-white p-3 shadow-sm">
                <img src={experiences[activeExperience].logo} alt={`${experiences[activeExperience].company} logo`} className="max-h-10 max-w-full object-contain" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#c46632]">{experiences[activeExperience].period}</p>
                <h3 className="mt-2 text-3xl font-semibold text-[#102033]">{experiences[activeExperience].role}</h3>
                <p className="mt-1 text-lg font-medium text-[#52606f]">{experiences[activeExperience].company}</p>
              </div>
            </div>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#52606f]">{experiences[activeExperience].focus}</p>
            <ul className="mt-7 grid gap-3">
              {experiences[activeExperience].proof.map((proof) => (
                <li key={proof} className="bg-white px-4 py-3 leading-7 text-[#394553] shadow-sm">
                  <span className="mr-3 font-semibold text-[#c46632]">-</span>{proof}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="capabilities" className="border-y border-[#d8dde3] bg-[#f0f4f7]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-18 lg:grid-cols-[0.82fr_1.18fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c46632]">{capabilitiesSection.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-[#102033] md:text-4xl">
              {capabilitiesSection.heading}
            </h2>
            <p className="mt-4 leading-7 text-[#52606f]">{capabilitiesSection.summary}</p>
          </div>

          <div className="bg-white p-5 shadow-[0_18px_60px_rgba(16,32,51,0.08)]">
            <div className="grid gap-2 sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <button
                  key={capability.name}
                  type="button"
                  onClick={() => setActiveCapability(index)}
                  className={`px-4 py-3 text-left text-sm font-semibold transition ${
                    activeCapability === index
                      ? "bg-[#102033] text-white"
                      : "border border-[#d8dde3] bg-[#faf8f4] text-[#394553] hover:border-[#c46632]"
                  }`}
                >
                  {capability.name}
                </button>
              ))}
            </div>
            <div className="mt-5 bg-[#faf8f4] p-5">
              <h3 className="text-2xl font-semibold text-[#102033]">{capabilities[activeCapability].name}</h3>
              <p className="mt-3 leading-7 text-[#52606f]">{capabilities[activeCapability].summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {capabilities[activeCapability].skills.map((skill) => (
                  <span key={skill} className="border border-[#d8dde3] bg-white px-3 py-2 text-sm font-medium text-[#394553]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="bg-[#faf8f4]">
        <div className="mx-auto max-w-7xl px-5 py-18 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c46632]">{caseStudiesSection.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-[#102033] md:text-4xl">
              {caseStudiesSection.heading}
            </h2>
          </div>
          <div className="mt-9 grid gap-4">
            {caseStudies.map((item, index) => (
              <article key={item.title} className="border border-[#d8dde3] bg-white">
                <button
                  type="button"
                  onClick={() => setOpenCase(openCase === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-[#fbf3ec]"
                >
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#c46632]">{item.tag}</span>
                    <span className="mt-2 block text-xl font-semibold text-[#102033]">{item.title}</span>
                  </span>
                  <span className="border border-[#c8cfd8] px-3 py-2 text-sm font-semibold text-[#102033]">
                    {openCase === index ? caseStudiesSection.closeLabel : caseStudiesSection.openLabel}
                  </span>
                </button>
                {openCase === index ? (
                  <div className="grid gap-5 border-t border-[#d8dde3] bg-[#faf8f4] p-5 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-semibold text-[#c46632]">Context</p>
                      <p className="mt-2 leading-7 text-[#52606f]">{item.context}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#c46632]">Action</p>
                      <p className="mt-2 leading-7 text-[#52606f]">{item.action}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#c46632]">Result</p>
                      <p className="mt-2 leading-7 text-[#52606f]">{item.result}</p>
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8dde3] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-18 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c46632]">{educationSection.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-[#102033] md:text-4xl">
              {educationSection.heading}
            </h2>
          </div>
          <ul className="grid gap-3">
            {education.map((item) => (
              <li key={item} className="bg-[#faf8f4] px-5 py-4 font-medium leading-7 text-[#394553]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="bg-[#102033] px-5 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2b27f]">{contact.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
              {contact.heading}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/78">{contact.details}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:amradel95@hotmail.com" className="bg-[#c46632] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a7522a]">
              {contact.emailLabel}
            </a>
            <a href="/amr-cv.pdf" className="border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:border-white">
              {contact.cvLabel}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
