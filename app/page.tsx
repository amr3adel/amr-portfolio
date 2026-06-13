"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const highlights = [
  { value: "8+", label: "Years leading IT and engineering delivery" },
  { value: "56", label: "Cybersecurity, GRC, and software projects at ZINAD" },
  { value: "$65M", label: "Approx. revenue managed across ZINAD projects" },
  { value: "$40M+", label: "Revenue delivered across KONE project portfolio" },
];

const experiences = [
  {
    company: "SDG Group Middle East",
    role: "Senior Project Manager",
    period: "Sep 2024 - Present",
    logo: "https://logo.clearbit.com/sdggroup.com",
    mark: "SDG",
    focus: "SAP Analytics Cloud, planning models, BBP sessions, and financial process consulting.",
    proof: [
      "Leading consultancy projects for ALJ Motors, Arab Drilling, RCG, and AMTPJ.",
      "Managing SAC planning models and analytics dashboard delivery.",
      "Facilitating workshops that align business objectives with technical solutions.",
    ],
  },
  {
    company: "ZINAD IT",
    role: "Senior IT Project Manager",
    period: "Dec 2022 - Sep 2024",
    logo: "https://logo.clearbit.com/zinad.com",
    mark: "Z",
    focus: "Information security, GRC, software development, and cybersecurity implementation.",
    proof: [
      "Managed 56 projects across Egypt, Saudi Arabia, and the Gulf region.",
      "Delivered an approximate $65M project portfolio, with 42 projects closed within planned budget.",
      "Improved workflow efficiency by 20% through project controls and delivery optimization.",
    ],
  },
  {
    company: "KONE",
    role: "Senior Project Engineer",
    period: "Nov 2018 - Nov 2022",
    logo: "https://logo.clearbit.com/kone.com",
    mark: "K",
    focus: "Large-scale project lifecycle ownership from sales handover to installation and QA.",
    proof: [
      "Managed 16 projects with total revenue exceeding $40M.",
      "Led teams of up to 55 members simultaneously.",
      "Delivered complex work within time and budget constraints.",
    ],
  },
  {
    company: "Synapse Analytics",
    role: "Machine Learning Intern",
    period: "Oct 2021 - Jan 2022",
    logo: "https://logo.clearbit.com/synapse-analytics.com",
    mark: "SA",
    focus: "AI, NLP, and predictive model automation.",
    proof: [
      "Worked with teams designing ML systems and AI software.",
      "Built practical exposure to data science, NLP models, and automation.",
      "Connected technical AI training with delivery-focused project management.",
    ],
  },
];

const capabilities = [
  {
    name: "Project Delivery",
    summary: "Structured planning, risk control, budget tracking, resource coordination, and executive reporting.",
    skills: ["MS Project", "Agile", "Scrum", "Jira", "Trello", "Salesforce", "Risk Management"],
  },
  {
    name: "SAP + Analytics",
    summary: "Business blueprinting, SAC planning, dashboards, financial process alignment, and data validation.",
    skills: ["SAP Analytics Cloud", "SAP Cost Control", "BBP Sessions", "Excel Analysis", "Dashboards"],
  },
  {
    name: "Cybersecurity + GRC",
    summary: "Security implementation delivery, GRC coordination, DevSecOps workflows, and stakeholder alignment.",
    skills: ["Information Security", "GRC", "Cybersecurity Software", "DevSecOps", "Governance"],
  },
  {
    name: "AI + Data",
    summary: "AI foundation from ITI and AWS ML certification with practical ML, Python, and NLP exposure.",
    skills: ["Python", "Scikit-Learn", "OpenCV", "Hugging Face", "Linux", "NLP"],
  },
];

const caseStudies = [
  {
    title: "SAP SAC Planning Delivery",
    tag: "Current focus",
    challenge: "Translate financial planning needs into structured models, dashboards, and adoption-ready workflows.",
    response:
      "Lead BBP workshops, align business users with implementation teams, manage delivery cadence, and control readiness through validation and signoff.",
    outcome: "Clearer planning execution for high-profile Middle East clients.",
  },
  {
    title: "Cybersecurity Portfolio Execution",
    tag: "Security delivery",
    challenge: "Run multiple security and GRC projects across different markets, vendors, and technical teams.",
    response:
      "Created delivery plans, managed risk and budget, coordinated resources, and kept leadership visibility through structured reporting.",
    outcome: "56 projects managed, with 42 closed within planned budget.",
  },
  {
    title: "Large-Scale Field Operations",
    tag: "Engineering PM",
    challenge: "Control delivery from sales handover through installation and QA while managing large operational teams.",
    response:
      "Owned schedule, stakeholder coordination, quality follow-up, and delivery controls across a $40M+ project portfolio.",
    outcome: "16 projects delivered, with teams of up to 55 members.",
  },
];

const education = [
  "Post-graduate Diploma, Artificial Intelligence Program, Information Technology Institute Egypt",
  "Bachelor of Engineering, Mechatronics Department, Ain Shams University",
  "AWS Certified Machine Learning - Specialty",
  "Data Scientist with Python Certificate, DataCamp",
  "Project Management Fundamentals and Managing Customer Projects, IIL",
];

export default function Home() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const [openCase, setOpenCase] = useState(0);

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <header className="sticky top-0 z-30 border-b border-[#d7dde7] bg-white/95 shadow-sm shadow-slate-200/70 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="text-sm font-black uppercase tracking-[0.22em] text-[#061a33]">
            Amr Adel Boghdady
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
            <a className="hover:text-[#e8751a]" href="#experience">Experience</a>
            <a className="hover:text-[#e8751a]" href="#capabilities">Capabilities</a>
            <a className="hover:text-[#e8751a]" href="#case-studies">Case Studies</a>
            <a className="hover:text-[#e8751a]" href="#contact">Contact</a>
          </div>
          <a
            href="/amr-cv.pdf"
            className="border border-[#061a33] bg-[#061a33] px-4 py-2 text-sm font-bold text-white transition hover:border-[#e8751a] hover:bg-[#e8751a]"
          >
            Download CV
          </a>
        </nav>
      </header>

      <section id="top" className="bg-[#061a33]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-14 text-white lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-20">
        <div>
          <p className="w-fit border border-[#f59b45]/40 bg-[#e8751a]/15 px-3 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#ffd29f]">
            Senior IT Project Manager
          </p>
          <h1 className="mt-6 max-w-5xl text-6xl font-black leading-[0.96] tracking-tight text-white md:text-8xl">
            Amr Adel Boghdady
          </h1>
          <h2 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight text-[#ffb36b] md:text-5xl">
            Delivery leadership across SAP, cybersecurity, data, and AI.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50/90">
            8+ years leading cross-functional technology projects in the Middle East, with hands-on delivery across SAP Analytics Cloud, financial processes, GRC, cybersecurity software, data analytics, and enterprise systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#experience" className="border border-[#e8751a] bg-[#e8751a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#c75d0f]">
              View experience
            </a>
            <a href="#case-studies" className="border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-[#ffb36b] hover:text-[#ffcf9f]">
              Open case studies
            </a>
            <a href="mailto:amradel95@hotmail.com" className="border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-[#ffb36b] hover:text-[#ffcf9f]">
              Email me
            </a>
          </div>
        </div>

        <aside className="border border-white/15 bg-white p-5 text-slate-950 shadow-2xl shadow-black/30">
          <div className="border-b border-slate-200 pb-4">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#e8751a]">
              Career dashboard
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Click through the sections below to explore quantified delivery impact from the CV.
            </p>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.label} className="border border-slate-200 bg-[#f8fafc] p-4">
                <p className="text-3xl font-black text-[#061a33]">{item.value}</p>
                <p className="mt-2 text-sm leading-5 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 border border-[#f6c391] bg-[#fff3e7] p-4">
            <p className="text-sm font-bold text-[#c75d0f]">Current focus</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              SAP Analytics Cloud planning models, financial process consulting, BBP workshops, and analytics dashboards at SDG Group Middle East.
            </p>
          </div>
        </aside>
        </div>
      </section>

      <section id="experience" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#e8751a]">Experience</p>
            <h2 className="mt-3 text-3xl font-black text-[#0b1f33] md:text-4xl">
              Click a role to open the proof behind it.
            </h2>
            <div className="mt-6 grid gap-2">
              {experiences.map((item, index) => (
                <button
                  key={item.company}
                  type="button"
                  onClick={() => setActiveExperience(index)}
                  className={`flex items-center gap-3 border px-4 py-3 text-left text-sm font-bold transition ${
                    activeExperience === index
                      ? "border-[#061a33] bg-[#061a33] text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[#e8751a]"
                  }`}
                >
                  <span className="relative flex h-9 w-9 shrink-0 items-center justify-center border border-slate-200 bg-white p-1">
                    <span className="text-[10px] font-black text-[#061a33]">{item.mark}</span>
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="absolute max-h-6 max-w-7 bg-white object-contain"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </span>
                  <span>{item.company}</span>
                </button>
              ))}
            </div>
          </div>

          <article className="border border-slate-200 bg-[#f8fafc] p-6 shadow-lg shadow-slate-200/80 md:p-8">
            <div className="flex flex-wrap items-start gap-4">
              <span className="relative flex h-14 w-14 items-center justify-center border border-slate-200 bg-white p-2">
                <span className="text-sm font-black text-[#061a33]">
                  {experiences[activeExperience].mark}
                </span>
                <img
                  src={experiences[activeExperience].logo}
                  alt={`${experiences[activeExperience].company} logo`}
                  className="absolute max-h-9 max-w-10 bg-white object-contain"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#e8751a]">
                  {experiences[activeExperience].period}
                </p>
                <h3 className="mt-3 text-3xl font-black text-[#061a33]">
                  {experiences[activeExperience].role}
                </h3>
                <p className="mt-2 text-lg font-bold text-slate-700">
                  {experiences[activeExperience].company}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              {experiences[activeExperience].focus}
            </p>
            <ul className="mt-6 grid gap-3">
              {experiences[activeExperience].proof.map((proof) => (
                <li key={proof} className="border-l-4 border-[#e8751a] bg-white px-4 py-3 leading-7 text-slate-700">
                  {proof}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#e8751a]">Capabilities</p>
            <h2 className="mt-3 text-3xl font-black text-[#0b1f33] md:text-4xl">
              Practical strengths grouped for hiring managers.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Instead of a flat skills cloud, this section lets visitors switch between the value areas that matter for senior delivery roles.
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-5">
            <div className="grid gap-2 sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <button
                  key={capability.name}
                  type="button"
                  onClick={() => setActiveCapability(index)}
                  className={`border px-4 py-3 text-left text-sm font-bold transition ${
                    activeCapability === index
                      ? "border-[#061a33] bg-[#061a33] text-white"
                      : "border-slate-200 bg-[#f8fafc] text-slate-700 hover:border-[#e8751a]"
                  }`}
                >
                  {capability.name}
                </button>
              ))}
            </div>
            <div className="mt-5 border border-slate-200 bg-[#f8fafc] p-5">
              <h3 className="text-2xl font-black text-[#0b1f33]">{capabilities[activeCapability].name}</h3>
              <p className="mt-3 leading-7 text-slate-700">{capabilities[activeCapability].summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {capabilities[activeCapability].skills.map((skill) => (
                  <span key={skill} className="border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="border-y border-slate-200 bg-[#e8eef7]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#e8751a]">Interactive case studies</p>
            <h2 className="mt-3 text-3xl font-black text-[#0b1f33] md:text-4xl">
              Open each project story to see challenge, response, and outcome.
            </h2>
          </div>
          <div className="mt-8 grid gap-4">
            {caseStudies.map((item, index) => (
              <article key={item.title} className="border border-slate-200 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenCase(openCase === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span>
                    <span className="block text-xs font-black uppercase tracking-[0.22em] text-[#e8751a]">{item.tag}</span>
                    <span className="mt-2 block text-xl font-black text-[#0b1f33]">{item.title}</span>
                  </span>
                  <span className="border border-slate-300 px-3 py-2 text-sm font-black text-[#061a33]">
                    {openCase === index ? "Close" : "Open"}
                  </span>
                </button>
                {openCase === index ? (
                  <div className="grid gap-4 border-t border-slate-200 bg-[#fbfcfe] p-5 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-black text-[#e8751a]">Challenge</p>
                      <p className="mt-2 leading-7 text-slate-700">{item.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#e8751a]">Response</p>
                      <p className="mt-2 leading-7 text-slate-700">{item.response}</p>
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#e8751a]">Outcome</p>
                      <p className="mt-2 leading-7 text-slate-700">{item.outcome}</p>
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#e8751a]">Education and certificates</p>
            <h2 className="mt-3 text-3xl font-black text-[#0b1f33] md:text-4xl">
              Delivery discipline backed by AI and engineering foundations.
            </h2>
          </div>
          <ul className="grid gap-3">
            {education.map((item) => (
              <li key={item} className="border border-slate-200 bg-white px-5 py-4 font-semibold leading-7 text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="bg-[#061a33] px-5 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ffb36b]">Contact</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-5xl">
              Available for senior IT project management, SAP analytics, cybersecurity delivery, and transformation roles.
            </h2>
            <p className="mt-5 text-lg leading-8 text-blue-50">
              Nasr City, Cairo, Egypt | amradel95@hotmail.com | +20 112 410 3601
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:amradel95@hotmail.com" className="border border-[#e8751a] bg-[#e8751a] px-5 py-3 text-sm font-black text-white transition hover:bg-[#c75d0f]">
              Email me
            </a>
            <a href="/amr-cv.pdf" className="border border-white/40 px-5 py-3 text-sm font-black text-white transition hover:border-white">
              Download CV
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
