export type Lang = "en" | "es";

export const langs: Lang[] = ["en", "es"];

export const langPath: Record<Lang, string> = {
  en: "/",
  es: "/es/",
};

const en = {
  meta: {
    title: "Diego Letelier | Software & Data Engineer",
    description:
      "Software engineer in Santiago, Chile. Building Biovity and fasty. TypeScript, Rust, data.",
  },
  nav: {
    about: "about",
    projects: "projects",
    experience: "experience",
    contact: "contact",
  },
  hero: {
    terminalTitle: "diego@dl:~ - zsh",
    boot: [
      { cmd: "whoami", out: "diego-letelier" },
      { cmd: "cat focus.txt", out: "Software Engineer | Data | AI" },
    ],
    name: "Diego Letelier",
    sub: "Building Biovity, an AI talent platform for life sciences, and fasty, a terminal emulator written in Rust.",
    ctaProjects: "See projects",
    ctaCv: "Download CV",
    promptHint: 'Click the terminal and type "help"',
    shell: {
      help: "available: help  whoami  ls  projects  about  contact  clear",
      helpTip: 'tip: try "sudo hire-me"',
      whoami: "diego-letelier",
      ls: "about/  projects/  experience/  contact/",
      jump: "jumping to #{to}",
      sudo: "permission granted. opening mail client...",
      notFound: 'command not found: {cmd} (try "help")',
    },
  },
  about: {
    title: "About",
    paragraphs: [
      "Industrial civil engineer (UDD) who learned to program at the SoyHenry bootcamp in 2022 and has not stopped since. Today I build Biovity and fasty on my own time, and lead open source programs at indies.la.",
      "At Tigo Chile I work as a Marketing B2B Apprentice Analyst: SQL Server queries across business schemas, Power BI dashboards the sales team checks daily, and reporting automated with Power Automate.",
      "I like fintech, data analysis, and building products people actually use.",
    ],
    fullName: "Diego José Letelier Salbach",
    location: "Santiago, Chile",
    stats: [
      { value: "55", label: "public repos" },
      { value: "8", label: "stars on fasty" },
      { value: "4.3k", label: "LinkedIn followers" },
      { value: "2", label: "products in build" },
    ],
    stackTitle: "Stack",
    stack: [
      { group: "Languages", items: ["TypeScript", "Rust", "Python", "JavaScript"] },
      { group: "Frontend", items: ["Next.js", "React", "Expo", "Tailwind CSS"] },
      { group: "Backend & Data", items: ["NestJS", "PostgreSQL", "Supabase", "SQL Server", "Power BI"] },
      { group: "Tooling", items: ["Linux", "Git", "Docker", "Vercel"] },
    ],
  },
  projects: {
    title: "Projects",
    viewSource: "View source",
    liveDemo: "Live demo",
    items: [
      {
        id: "biovity",
        name: "Biovity",
        meta: "TypeScript | Next.js | NestJS | Supabase",
        description:
          "Job board connecting scientific talent with biotech and R&D in Chile: verified openings with transparent salaries.",
        file: "https://biovity.cl",
        demo: "https://biovity.cl",
        link: "https://github.com/diegoleteliers10/biovity",
      },
      {
        id: "fasty",
        name: "fasty",
        meta: "Rust | GPUI | v0.10.0 | 8 stars",
        description:
          "GPU-accelerated terminal emulator for macOS, Linux and Windows, built with Rust on GPUI. Sub-1% idle CPU and pixel-perfect rendering.",
        file: "https://fastyterm.vercel.app",
        demo: "https://fastyterm.vercel.app",
        link: "https://github.com/diegoleteliers10/fasty",
      },
      {
        id: "portmanager",
        name: "portmanager-extension",
        meta: "TypeScript | Raycast API",
        description:
          "Raycast extension to find, inspect and kill processes by port without leaving the keyboard.",
        link: "https://github.com/diegoleteliers10/portmanager-extension",
      },
      {
        id: "churn",
        name: "churn_prediction",
        meta: "Python | Jupyter",
        description: "Churn prediction for telco clients: cleaning, feature engineering and model comparison.",
        link: "https://github.com/diegoleteliers10/churn_prediction",
      },
    ],
  },
  experience: {
    title: "Experience",
    education: "Education",
    entries: [
      {
        role: "Full Stack Engineer",
        org: "BearClaw Gaming",
        period: "Mar 2026 - Sep 2026",
        description: "Contract work shipping product features end to end.",
      },
      {
        role: "Open Source Program Lead",
        org: "indies.la",
        period: "Feb 2026 - Present",
        description: "Leading open source programs for the Chilean indie dev community.",
      },
      {
        role: "Marketing B2B Apprentice Analyst",
        org: "Tigo Chile (Millicom)",
        period: "May 2025 - Present",
        description:
          "SQL Server queries across business schemas, daily-use Power BI dashboards, and reporting automated with Power Automate.",
      },
    ],
    educationEntries: [
      {
        role: "Industrial Civil Engineering",
        org: "Universidad del Desarrollo",
        period: "2026",
      },
      {
        role: "Full Stack Web Development",
        org: "SoyHenry Bootcamp",
        period: "2022",
      },
      {
        role: "Secondary School",
        org: "Colegio del Verbo Divino",
        period: "2004 - 2018",
      },
    ],
  },
  contact: {
    title: "Let's build something people actually use.",
    sub: "Open to full-time roles and interesting problems. Remote or in Santiago.",
    cta: "Get in touch",
    github: "GitHub",
    linkedin: "LinkedIn",
    cv: "CV",
  },
  footer: {
    copyright: "© 2026 Diego Letelier",
    location: "Santiago, Chile",
  },
};

const es: typeof en = {
  meta: {
    title: "Diego Letelier | Software & Data Engineer",
    description:
      "Ingeniero de software en Santiago, Chile. Construyendo Biovity y fasty. TypeScript, Rust, datos.",
  },
  nav: {
    about: "sobre-mí",
    projects: "proyectos",
    experience: "experiencia",
    contact: "contacto",
  },
  hero: {
    terminalTitle: "diego@dl:~ - zsh",
    boot: [
      { cmd: "whoami", out: "diego-letelier" },
      { cmd: "cat focus.txt", out: "Software Engineer | Data | AI" },
    ],
    name: "Diego Letelier",
    sub: "Construyo Biovity, una plataforma de talento con IA para ciencias de la vida, y fasty, un emulador de terminal escrito en Rust.",
    ctaProjects: "Ver proyectos",
    ctaCv: "Descargar CV",
    promptHint: 'Haz clic en la terminal y escribe "help"',
    shell: {
      help: "disponibles: help  whoami  ls  projects  about  contact  clear",
      helpTip: 'tip: prueba "sudo hire-me"',
      whoami: "diego-letelier",
      ls: "about/  projects/  experience/  contact/",
      jump: "saltando a #{to}",
      sudo: "permiso concedido. abriendo cliente de correo...",
      notFound: 'comando no encontrado: {cmd} (prueba "help")',
    },
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Ingeniero civil industrial (UDD) que aprendió a programar en el bootcamp de SoyHenry en 2022 y no ha parado desde entonces. Hoy construyo Biovity y fasty en mi tiempo libre, y lidero programas de open source en indies.la.",
      "En Tigo Chile trabajo como Marketing B2B Apprentice Analyst: consultas SQL Server entre esquemas de negocio, dashboards en Power BI que el equipo comercial revisa a diario, y reportería automatizada con Power Automate.",
      "Me interesan las fintech, el análisis de datos y construir productos que la gente use de verdad.",
    ],
    fullName: "Diego José Letelier Salbach",
    location: "Santiago, Chile",
    stats: [
      { value: "55", label: "repos públicos" },
      { value: "8", label: "stars en fasty" },
      { value: "4.3k", label: "seguidores en LinkedIn" },
      { value: "2", label: "productos en construcción" },
    ],
    stackTitle: "Stack",
    stack: [
      { group: "Lenguajes", items: ["TypeScript", "Rust", "Python", "JavaScript"] },
      { group: "Frontend", items: ["Next.js", "React", "Expo", "Tailwind CSS"] },
      { group: "Backend & Datos", items: ["NestJS", "PostgreSQL", "Supabase", "SQL Server", "Power BI"] },
      { group: "Herramientas", items: ["Linux", "Git", "Docker", "Vercel"] },
    ],
  },
  projects: {
    title: "Proyectos",
    viewSource: "Ver código",
    liveDemo: "Ver demo",
    items: [
      {
        id: "biovity",
        name: "Biovity",
        meta: "TypeScript | Next.js | NestJS | Supabase",
        description:
          "Bolsa de trabajo que conecta talento científico con biotech e I+D en Chile: ofertas verificadas con salarios transparentes.",
        file: "https://biovity.cl",
        demo: "https://biovity.cl",
        link: "https://github.com/diegoleteliers10/biovity",
      },
      {
        id: "fasty",
        name: "fasty",
        meta: "Rust | GPUI | v0.10.0 | 8 stars",
        description:
          "Emulador de terminal acelerado por GPU para macOS, Linux y Windows, construido con Rust sobre GPUI. CPU en reposo bajo 1% y renderizado pixel-perfect.",
        file: "https://fastyterm.vercel.app",
        demo: "https://fastyterm.vercel.app",
        link: "https://github.com/diegoleteliers10/fasty",
      },
      {
        id: "portmanager",
        name: "portmanager-extension",
        meta: "TypeScript | Raycast API",
        description:
          "Extensión de Raycast para encontrar, inspeccionar y matar procesos por puerto sin salir del teclado.",
        link: "https://github.com/diegoleteliers10/portmanager-extension",
      },
      {
        id: "churn",
        name: "churn_prediction",
        meta: "Python | Jupyter",
        description: "Predicción de churn para clientes de telecom: limpieza, feature engineering y comparación de modelos.",
        link: "https://github.com/diegoleteliers10/churn_prediction",
      },
    ],
  },
  experience: {
    title: "Experiencia",
    education: "Educación",
    entries: [
      {
        role: "Full Stack Engineer",
        org: "BearClaw Gaming",
        period: "mar 2026 - sep 2026",
        description: "Trabajo por contrato desarrollando features de producto de punta a punta.",
      },
      {
        role: "Open Source Program Lead",
        org: "indies.la",
        period: "feb 2026 - actualidad",
        description: "Lidero programas de open source para la comunidad de devs indie de Chile.",
      },
      {
        role: "Marketing B2B Apprentice Analyst",
        org: "Tigo Chile (Millicom)",
        period: "may 2025 - actualidad",
        description:
          "Consultas SQL Server entre esquemas de negocio, dashboards en Power BI de uso diario, y reportería automatizada con Power Automate.",
      },
    ],
    educationEntries: [
      {
        role: "Ingeniería Civil Industrial",
        org: "Universidad del Desarrollo",
        period: "2026",
      },
      {
        role: "Desarrollo Web Full Stack",
        org: "SoyHenry Bootcamp",
        period: "2022",
      },
      {
        role: "Enseñanza Media",
        org: "Colegio del Verbo Divino",
        period: "2004 - 2018",
      },
    ],
  },
  contact: {
    title: "Construyamos algo que la gente use de verdad.",
    sub: "Disponible para roles full-time y problemas interesantes. Remoto o en Santiago.",
    cta: "Conversemos",
    github: "GitHub",
    linkedin: "LinkedIn",
    cv: "CV",
  },
  footer: {
    copyright: "© 2026 Diego Letelier",
    location: "Santiago, Chile",
  },
};

export const ui: Record<Lang, typeof en> = { en, es };

export const email = "dleteliersr@gmail.com";

export const links = {
  github: "https://github.com/diegoleteliers10",
  linkedin: "https://www.linkedin.com/in/diegoleteliers10",
  cv: "/CV_Diego_Letelie_ES.pdf",
};
