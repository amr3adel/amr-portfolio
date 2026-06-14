"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const highlights = [
  { value: "8+", label: "Years leading technology and engineering delivery" },
  { value: "56", label: "Cybersecurity, GRC, and software projects at ZINAD" },
  { value: "$65M", label: "Approx. revenue managed across ZINAD projects" },
  { value: "$40M+", label: "Revenue delivered across KONE project portfolio" },
];

const experiences = [
  {
    company: "SDG Group Middle East",
    role: "Senior Project Manager",
    period: "Sep 2024 - Present",
    logo: "/logos/sdg.svg",
    focus: "SAP Analytics Cloud planning models, financial process consulting, BBP sessions, and analytics dashboard delivery.",
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
    logo: "/logos/zinad.svg",
    focus: "Information security, GRC, software development, and cybersecurity implementation across Egypt, Saudi Arabia, and the Gulf region.",
    proof: [
      "Managed 56 projects with approximate total revenue of $65M.",
      "Closed 42 projects within the planned budget.",
      "Improved overall project workflow efficiency by 20% through stronger delivery controls.",
    ],
  },
  {
    company: "KONE",
    role: "Senior Project Engineer",
    period: "Nov 2018 - Nov 2022",
    logo: "/logos/kone.svg",
    focus: "Large-scale project lifecycle ownership from sales handover through installation, quality assurance, and closeout.",
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
    logo: "/logos/synapse.svg",
    focus: "AI, NLP, and predictive model automation in a practical data science team environment.",
    proof: [
      "Worked with teams designing ML systems and AI software.",
      "Built exposure to data science, NLP models, and automation workflows.",
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
    context: "Financial planning stakeholders need clear models, dashboards, and adoption-ready planning workflows.",
    action: "Lead BBP workshops, align business users with implementation teams, manage cadence, and control readiness through validation and signoff.",
    result: "Clearer planning execution for high-profile Middle East clients.",
  },
  {
    title: "Cybersecurity Portfolio Execution",
    tag: "Security delivery",
    context: "Multiple security and GRC projects needed coordination across markets, vendors, and technical teams.",
    action: "Built delivery plans, managed risks and budgets, coordinated resources, and kept leadership visibility through structured reporting.",
    result: "56 projects managed, with 42 closed within planned budget.",
  },
  {
    title: "Large-Scale Field Operations",
    tag: "Engineering PM",
    context: "Operational teams needed schedule, quality, and stakeholder control from sales handover to QA.",
    action: "Owned delivery rhythm, stakeholder coordination, quality follow-up, and closeout controls across a $40M+ portfolio.",
    result: "16 projects delivered, with teams of up to 55 members.",
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
    <main className="min-h-screen bg-[#faf8f4] text-[#172033]">
      <header className="sticky top-0 z-30 border-b border-[#d8dde3] bg-[#faf8f4]/92 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="text-sm font-semibold tracking-[0.18em] text-[#102033]">
            AMR ADEL BOGHDADY
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-[#52606f] md:flex">
            <a className="hover:text-[#c46632]" href="#experience">Experience</a>
            <a className="hover:text-[#c46632]" href="#capabilities">Capabilities</a>
            <a className="hover:text-[#c46632]" href="#case-studies">Case Studies</a>
            <a className="hover:text-[#c46632]" href="#contact">Contact</a>
          </div>
          <a href="/amr-cv.pdf" className="bg-[#102033] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1e4e6d]">
            Download CV
          </a>
        </nav>
      </header>

      <section id="top" className="border-b border-[#d8dde3]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <div className="self-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c46632]">
              Senior IT Project Manager
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#102033] md:text-7xl">
              Amr Adel Boghdady
            </h1>
            <p className="mt-6 max-w-3xl text-2xl leading-snug text-[#1e4e6d] md:text-3xl">
              Enterprise delivery across SAP analytics, cybersecurity, data, AI, and transformation programs.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52606f]">
              8+ years leading cross-functional technology projects in the Middle East, combining business consulting, structured execution, risk control, and technical fluency.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#experience" className="bg-[#c46632] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a7522a]">
                View experience
              </a>
              <a href="#case-studies" className="border border-[#c8cfd8] bg-white px-5 py-3 text-sm font-semibold text-[#102033] transition hover:border-[#c46632]">
                Open case studies
              </a>
              <a href="mailto:amradel95@hotmail.com" className="border border-[#c8cfd8] bg-white px-5 py-3 text-sm font-semibold text-[#102033] transition hover:border-[#c46632]">
                Contact me
              </a>
            </div>
          </div>

          <aside className="bg-white p-6 shadow-[0_24px_70px_rgba(16,32,51,0.10)]">
            <div className="flex items-start justify-between gap-6 border-b border-[#e5e8ec] pb-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c46632]">Impact summary</p>
                <p className="mt-2 text-sm leading-6 text-[#52606f]">Quantified delivery proof from the CV.</p>
              </div>
              <span className="bg-[#f3e8dd] px-3 py-1 text-xs font-semibold text-[#8a4324]">Available</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.label} className="border-l-2 border-[#c46632] bg-[#faf8f4] px-4 py-4">
                  <p className="text-3xl font-semibold text-[#102033]">{item.value}</p>
                  <p className="mt-2 text-sm leading-5 text-[#52606f]">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-[#102033] p-5 text-white">
              <p className="text-sm font-semibold text-[#f2b27f]">Current focus</p>
              <p className="mt-2 text-sm leading-6 text-white/85">
                SAP Analytics Cloud planning models, financial process consulting, BBP workshops, and analytics dashboards at SDG Group Middle East.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="experience" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-18 lg:grid-cols-[390px_1fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c46632]">Experience</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-[#102033] md:text-4xl">
              Select a company to review scope and proof.
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
                  <span className="mr-3 font-semibold text-[#c46632]">—</span>{proof}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="capabilities" className="border-y border-[#d8dde3] bg-[#f0f4f7]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-18 lg:grid-cols-[0.82fr_1.18fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c46632]">Capabilities</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-[#102033] md:text-4xl">
              Senior delivery strengths, grouped by value area.
            </h2>
            <p className="mt-4 leading-7 text-[#52606f]">
              The interaction lets visitors quickly switch between project control, SAP analytics, cybersecurity, and AI/data foundations.
            </p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c46632]">Case studies</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-[#102033] md:text-4xl">
              Open each story to see context, action, and result.
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
                    {openCase === index ? "Close" : "Open"}
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c46632]">Education and certificates</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-[#102033] md:text-4xl">
              AI and engineering foundation behind the delivery profile.
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2b27f]">Contact</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
              Available for senior IT project management, SAP analytics, cybersecurity delivery, and transformation roles.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/78">
              Nasr City, Cairo, Egypt | amradel95@hotmail.com | +20 112 410 3601
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:amradel95@hotmail.com" className="bg-[#c46632] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a7522a]">
              Email me
            </a>
            <a href="/amr-cv.pdf" className="border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:border-white">
              Download CV
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
