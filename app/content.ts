export const portfolioContent = {
  nav: {
    name: "AMR ADEL BOGHDADY",
    links: [
      { label: "Experience", href: "#experience" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Contact", href: "#contact" },
    ],
    cvLabel: "Download CV",
  },
  hero: {
    eyebrow: "Senior IT Project Manager",
    name: "Amr Adel Boghdady",
    headline:
      "Senior IT Project Manager for SAP, Cybersecurity, Data, and AI Delivery",
    summary:
      "8+ years leading technology programs across the Middle East, combining project governance, stakeholder management, analytics delivery, and technical execution.",
    primaryCta: { label: "View Experience", href: "#experience" },
    secondaryCta: { label: "Open Case Studies", href: "#case-studies" },
    contactCta: { label: "Contact Me", href: "mailto:amradel95@hotmail.com" },
  },
  impact: {
    title: "Delivery Impact",
    subtitle: "Selected outcomes from enterprise technology and engineering projects.",
    status: "Available",
    highlights: [
      { value: "8+", label: "Years of IT and engineering delivery leadership" },
      { value: "56", label: "Projects managed across cybersecurity, GRC, and software delivery" },
      { value: "$65M", label: "Managed project portfolio at ZINAD" },
      { value: "$40M+", label: "Delivered project portfolio at KONE" },
    ],
    focusTitle: "Current Focus",
    focus:
      "Leading SAP Analytics Cloud planning, financial process consulting, BBP workshops, and dashboard delivery for enterprise clients at SDG Group Middle East.",
  },
  experienceSection: {
    eyebrow: "Experience",
    heading: "Select a company to review scope and proof.",
  },
  experiences: [
    {
      company: "SDG Group Middle East",
      role: "Senior Project Manager",
      period: "Sep 2024 - Present",
      logo: "/logos/sdg.png",
      focus:
        "SAP Analytics Cloud planning models, financial process consulting, BBP sessions, and analytics dashboard delivery.",
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
      logo: "/logos/zinad.png",
      focus:
        "Information security, GRC, software development, and cybersecurity implementation across Egypt, Saudi Arabia, and the Gulf region.",
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
      logo: "/logos/kone.png",
      focus:
        "Large-scale project lifecycle ownership from sales handover through installation, quality assurance, and closeout.",
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
      logo: "/logos/synapse.png",
      focus:
        "AI, NLP, and predictive model automation in a practical data science team environment.",
      proof: [
        "Worked with teams designing ML systems and AI software.",
        "Built exposure to data science, NLP models, and automation workflows.",
        "Connected technical AI training with delivery-focused project management.",
      ],
    },
  ],
  capabilitiesSection: {
    eyebrow: "Capabilities",
    heading: "Senior delivery strengths, grouped by value area.",
    summary:
      "The interaction lets visitors quickly switch between project control, SAP analytics, cybersecurity, and AI/data foundations.",
  },
  capabilities: [
    {
      name: "Project Delivery",
      summary:
        "Structured planning, risk control, budget tracking, resource coordination, and executive reporting.",
      skills: ["MS Project", "Agile", "Scrum", "Jira", "Trello", "Salesforce", "Risk Management"],
    },
    {
      name: "SAP + Analytics",
      summary:
        "Business blueprinting, SAC planning, dashboards, financial process alignment, and data validation.",
      skills: ["SAP Analytics Cloud", "SAP Cost Control", "BBP Sessions", "Excel Analysis", "Dashboards"],
    },
    {
      name: "Cybersecurity + GRC",
      summary:
        "Security implementation delivery, GRC coordination, DevSecOps workflows, and stakeholder alignment.",
      skills: ["Information Security", "GRC", "Cybersecurity Software", "DevSecOps", "Governance"],
    },
    {
      name: "AI + Data",
      summary:
        "AI foundation from ITI and AWS ML certification with practical ML, Python, and NLP exposure.",
      skills: ["Python", "Scikit-Learn", "OpenCV", "Hugging Face", "Linux", "NLP"],
    },
  ],
  caseStudiesSection: {
    eyebrow: "Case Studies",
    heading: "Open each story to see context, action, and result.",
    openLabel: "Open",
    closeLabel: "Close",
  },
  caseStudies: [
    {
      title: "SAP SAC Planning Delivery",
      tag: "Current Focus",
      context:
        "Financial planning stakeholders need clear models, dashboards, and adoption-ready planning workflows.",
      action:
        "Lead BBP workshops, align business users with implementation teams, manage cadence, and control readiness through validation and signoff.",
      result: "Clearer planning execution for high-profile Middle East clients.",
    },
    {
      title: "Cybersecurity Portfolio Execution",
      tag: "Security delivery",
      context:
        "Multiple security and GRC projects needed coordination across markets, vendors, and technical teams.",
      action:
        "Built delivery plans, managed risks and budgets, coordinated resources, and kept leadership visibility through structured reporting.",
      result: "56 projects managed, with 42 closed within planned budget.",
    },
    {
      title: "Large-Scale Field Operations",
      tag: "Engineering PM",
      context:
        "Operational teams needed schedule, quality, and stakeholder control from sales handover to QA.",
      action:
        "Owned delivery rhythm, stakeholder coordination, quality follow-up, and closeout controls across a $40M+ portfolio.",
      result: "16 projects delivered, with teams of up to 55 members.",
    },
  ],
  educationSection: {
    eyebrow: "Education and certificates",
    heading: "AI and engineering foundation behind the delivery profile.",
  },
  education: [
    "Post-graduate Diploma, Artificial Intelligence Program, Information Technology Institute Egypt",
    "Bachelor of Engineering, Mechatronics Department, Ain Shams University",
    "AWS Certified Machine Learning - Specialty",
    "Data Scientist with Python Certificate, DataCamp",
    "Project Management Fundamentals and Managing Customer Projects, IIL",
  ],
  contact: {
    eyebrow: "Contact",
    heading:
      "Available for senior IT project management, SAP analytics, cybersecurity delivery, and transformation roles.",
    details: "Nasr City, Cairo, Egypt | amradel95@hotmail.com | +20 112 410 3601",
    emailLabel: "Email Me",
    cvLabel: "Download CV",
  },
} as const;


