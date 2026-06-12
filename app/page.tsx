export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
          Interactive Portfolio
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Amr Adel Boghdady
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
          Senior IT Project Manager working at the intersection of SAP,
          Data, AI, Cybersecurity, and business execution.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#missions"
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Explore My Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-400"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section id="missions" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Mission Cards</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold text-cyan-300">
              SAP Datasphere & SAC
            </h3>
            <p className="mt-4 text-slate-300">
              Delivery coordination for planning, analytics dashboards, data
              validation, UAT cycles, and stakeholder alignment.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold text-cyan-300">
              Cybersecurity Delivery
            </h3>
            <p className="mt-4 text-slate-300">
              Managed cybersecurity projects involving Fortify, SAST, DAST,
              DevSecOps workflows, and enterprise implementation.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold text-cyan-300">
              Regional PM Experience
            </h3>
            <p className="mt-4 text-slate-300">
              Coordinated projects across Egypt, KSA, UAE, Kuwait, and both
              private and governmental sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Skills Map</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Project Management",
            "SAP Datasphere",
            "SAP Analytics Cloud",
            "Cybersecurity",
            "DevSecOps",
            "AI / Machine Learning",
            "UAT / SIT",
            "Stakeholder Management",
            "Financial Dashboards",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4 text-slate-300">
          Let’s connect for project management, SAP, data, AI, or cybersecurity
          delivery opportunities.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="mailto:amradel95@hotmail.com"
            className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}