const metrics = [
  { value: "5", label: "regional markets", tone: "text-cyan-200" },
  { value: "SAP", label: "data and planning delivery", tone: "text-amber-200" },
  { value: "Sec", label: "DevSecOps and app security", tone: "text-emerald-200" },
  { value: "AI", label: "automation and ML enablement", tone: "text-fuchsia-200" },
];

const missions = [
  {
    title: "SAP Datasphere & SAC",
    type: "Enterprise analytics",
    summary:
      "Planning, validation, dashboard delivery, UAT cycles, and stakeholder alignment for SAP data programs.",
    details: [
      "Coordinated business users, data teams, and implementation partners.",
      "Tracked SIT/UAT readiness, defects, signoffs, and executive reporting.",
      "Connected technical delivery back to financial planning and decision support.",
    ],
    accent: "border-cyan-400/60",
  },
  {
    title: "Cybersecurity Delivery",
    type: "DevSecOps execution",
    summary:
      "Security delivery across Fortify, SAST, DAST, governance workflows, and enterprise rollout planning.",
    details: [
      "Managed delivery milestones across security, application, and vendor teams.",
      "Translated security findings into actionable remediation plans.",
      "Balanced project governance with delivery speed and risk visibility.",
    ],
    accent: "border-emerald-400/60",
  },
  {
    title: "Regional PM Experience",
    type: "Multi-market coordination",
    summary:
      "Project coordination across Egypt, KSA, UAE, Kuwait, and private and governmental sectors.",
    details: [
      "Aligned stakeholders with different operating models and approval paths.",
      "Created delivery rhythm through planning, reporting, escalation, and follow-up.",
      "Maintained clear execution visibility for leadership and delivery teams.",
    ],
    accent: "border-amber-400/60",
  },
];

const skillGroups = [
  {
    name: "Delivery",
    skills: ["Project Management", "Stakeholder Management", "UAT / SIT", "Vendor Coordination"],
  },
  {
    name: "Platforms",
    skills: ["SAP Datasphere", "SAP Analytics Cloud", "Financial Dashboards", "Data Validation"],
  },
  {
    name: "Security + AI",
    skills: ["Cybersecurity", "DevSecOps", "Fortify", "AI / Machine Learning"],
  },
];

const timeline = [
  "Discover scope, risks, stakeholders, and decision owners.",
  "Shape the delivery plan, governance cadence, and success measures.",
  "Drive execution through reporting, validation, UAT, and escalation.",
  "Close with signoffs, adoption support, and measurable handover.",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b10] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="relative">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-[#080b10]/85 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
            <a href="#top" className="font-semibold tracking-wide text-white">
              Amr Boghdady
            </a>
            <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
              <a className="transition hover:text-white" href="#missions">
                Missions
              </a>
              <a className="transition hover:text-white" href="#skills">
                Skills
              </a>
              <a className="transition hover:text-white" href="#process">
                Process
              </a>
              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
            </div>
          </nav>
        </header>

        <section id="top" className="mx-auto grid min-h-[calc(100vh-65px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="mb-5 w-fit border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
              Enterprise delivery portfolio
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] md:text-7xl">
              Amr Adel Boghdady
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Senior IT Project Manager connecting SAP, data, AI, cybersecurity,
              and business execution across regional enterprise environments.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#missions"
                className="border border-cyan-300 bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                Explore missions
              </a>
              <a
                href="/amr-cv.pdf"
                className="border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-amber-200 hover:text-amber-100"
              >
                Download CV
              </a>
              <a
                href="https://github.com/amr3adel"
                target="_blank"
                rel="noreferrer"
                className="border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-emerald-200 hover:text-emerald-100"
              >
                GitHub
              </a>
            </div>
          </div>

          <aside className="border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <p className="text-sm font-semibold text-slate-200">Delivery console</p>
              <span className="bg-emerald-400/15 px-2 py-1 text-xs font-semibold text-emerald-200">
                Active
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div key={metric.label} className="border border-white/10 bg-black/20 p-4">
                  <p className={`text-3xl font-black ${metric.tone}`}>{metric.value}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                Focus stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["SAP", "Data", "AI", "Security", "Governance", "UAT"].map((item) => (
                  <span key={item} className="border border-white/10 px-3 py-1 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section id="missions" className="mx-auto max-w-7xl px-5 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-200">
              Selected missions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Work framed by outcomes, not just tools.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Each card opens into the execution story behind the domain: scope,
              delivery control, stakeholders, and measurable readiness.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {missions.map((mission) => (
              <details
                key={mission.title}
                className={`group border-l-4 ${mission.accent} border-y border-r border-white/10 bg-[#101722] p-6 transition hover:bg-[#121d2b]`}
              >
                <summary className="cursor-pointer list-none">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {mission.type}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold text-white">{mission.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{mission.summary}</p>
                  <span className="mt-6 inline-block text-sm font-bold text-cyan-200 group-open:text-amber-200">
                    View case notes
                  </span>
                </summary>
                <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm leading-6 text-slate-300">
                  {mission.details.map((detail) => (
                    <li key={detail}>- {detail}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>

        <section id="skills" className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                Skills map
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                A practical blend for complex delivery.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.name} className="border border-white/10 bg-[#0d121b] p-5">
                  <h3 className="font-bold text-white">{group.name}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="border border-white/10 px-3 py-2 text-sm text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">
                Delivery rhythm
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                Clear governance from kickoff to handover.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                The portfolio now shows how you run the work, not only what
                technologies appear on the resume.
              </p>
            </div>

            <ol className="grid gap-4">
              {timeline.map((item, index) => (
                <li key={item} className="grid grid-cols-[44px_1fr] gap-4 border border-white/10 bg-[#101722] p-5">
                  <span className="flex h-11 w-11 items-center justify-center bg-amber-200 text-sm font-black text-slate-950">
                    {index + 1}
                  </span>
                  <p className="self-center leading-7 text-slate-300">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 pb-24 pt-10">
          <div className="border border-white/10 bg-[#101722] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-200">
              Contact
            </p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="text-3xl font-bold md:text-5xl">
                  Let&apos;s connect on delivery opportunities.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  Project management, SAP analytics, cybersecurity delivery,
                  AI enablement, or regional enterprise execution.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:amradel95@hotmail.com"
                  className="border border-white bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100"
                >
                  Email me
                </a>
                <a
                  href="https://github.com/amr3adel/amr-portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-200 hover:text-cyan-100"
                >
                  View repo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
