import { ProjectDetail, ExperienceItem, SkillCategory } from '@/types/portfolio';

export const personalInfo = {
  name: 'Uzair Zahoor',
  initials: 'UZ',
  role: 'Software Engineer',
  specialization: 'Scalable Next.js SaaS & Real-Time Multi-Tenant Systems',
  company: 'Pixako Technologies Pvt. Ltd.',
  location: 'Islamabad, Pakistan',
  email: 'uzairalam724@gmail.com',
  linkedin: 'https://linkedin.com/in/uzair-zahoor-1a46a0194',
  github: 'https://github.com/uzair-zahoor',
  experienceYears: '3+',
  education: {
    degree: 'BS Software Engineering',
    institution: 'Abbottabad University of Science and Technology',
    year: '2022'
  },
  bioSummary: `Software Engineer with 3+ years of professional experience building production-grade web applications and multi-tenant SaaS platforms. Expertise in Next.js, React.js, TypeScript, Node.js, GraphQL, MongoDB, and Redis.`,
  tagline: 'Building Scalable Next.js SaaS. Solving Complex Systems.',
  shortBio: `I'm Uzair Zahoor, a Software Engineer with 3+ years of experience engineering production-grade React/Next.js web applications, multi-tenant transport SaaS platforms, and GraphQL microservices.`
};

export const resumeTextContent = `UZAIR ZAHOOR - Software Engineer
Email: uzairalam724@gmail.com
Phone: +92 311 5762092
Location: Islamabad, Pakistan
LinkedIn: https://linkedin.com/in/uzair-zahoor-1a46a0194
GitHub: https://github.com/uzair-zahoor

SUMMARY:
Software Engineer with 3+ years of professional experience building production-grade web applications and multi-tenant SaaS platforms. Expertise in Next.js, React.js, TypeScript, Node.js, GraphQL, MongoDB, and Redis.

EXPERIENCE:
Software Engineer | Pixako Technologies Pvt. Ltd. (Feb 2023 - Present)
- Core developer for Allotrac, a multi-tenant transport management platform.
- Architected tenant-isolated database models and cross-tenant resource sharing logic.
- Built GraphQL resolvers, mutations, and real-time subscriptions for driver dispatches and job stops.
- Implemented WebSockets with Redis Pub/Sub channels for live telemetry & vehicle tracking.
- Integrated Xero Accounting API for automated tenant invoice generation.
- Optimized database performance with GraphQL DataLoader to prevent N+1 query bottlenecks.

Web Development Intern | Codematics Inc. (Aug 2022 - Nov 2022)
- Developed responsive web interface components using HTML, CSS, JavaScript, and Vue.js.
- Resolved user interface bugs and collaborated with QA teams to refine application responsiveness.

EDUCATION:
BS Software Engineering | Abbottabad University of Science and Technology (2022)

TECHNICAL SKILLS:
- Languages: TypeScript, JavaScript (ES6+), HTML5, CSS3
- Frontend: Next.js (App Router), React.js, Tailwind CSS, Material UI (MUI), AG Grid, React Hook Form
- Backend: Node.js, Express.js, GraphQL APIs, Apollo Server, REST APIs, DataLoader
- Databases & Queues: MongoDB, Redis Pub/Sub, Mongoose ORM, Aggregation Pipelines, WebSockets
- Architecture: Multi-Tenant SaaS Isolation, RBAC (Role-Based Access Control), JWT, Xero API, Microservices
- AI & Tooling: LLM Integrations, Gemini API, RAG Workflows, Git, GitHub, Agile/Scrum, CI/CD
`;

export const heroStats = [
  { value: '3+ Years', label: 'Full-Stack Experience', color: 'text-blue-400' },
  { value: 'Multi-Tenant', label: 'SaaS Platforms', color: 'text-indigo-400' },
  { value: 'GraphQL', label: 'APIs & Subscriptions', color: 'text-emerald-400' },
  { value: 'Allotrac', label: 'Transport SaaS Core', color: 'text-amber-400' }
];

export const heroBadges = [
  'Next.js & React',
  'TypeScript & ES6+',
  'Node.js & Express',
  'GraphQL & Apollo',
  'MongoDB & Redis',
  'AI Agents & Workflows'
];

export const experienceData: ExperienceItem[] = [
  {
    company: 'Pixako Technologies Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'Feb 2023 – Present',
    type: 'work',
    description: 'Developing, engineering, and optimizing Allotrac—a high-throughput multi-tenant transport management SaaS platform for logistics and fleet dispatches across Next.js frontends and Node.js/GraphQL backends.',
    bullets: [
      'Designed tenant-aware data models to ensure strict multi-tenant data isolation alongside seamless cross-tenant job sharing.',
      'Built GraphQL queries, mutations, resolvers, and real-time subscriptions for dispatches, stops, and fleet telemetry.',
      'Implemented real-time WebSockets with Redis Pub/Sub channels for instant driver and job status updates.',
      'Optimized database queries and batch processing using GraphQL DataLoader to eliminate N+1 latency bottlenecks.',
      'Integrated Xero accounting engine APIs for automated tenant invoicing and financial reporting.'
    ],
    tech: ['Next.js', 'TypeScript', 'React.js', 'GraphQL', 'Node.js', 'MongoDB', 'Redis Pub/Sub', 'DataLoader', 'Xero API']
  },
  {
    company: 'Codematics Inc.',
    role: 'Web Development Intern',
    period: 'Aug 2022 – Nov 2022',
    type: 'internship',
    description: 'Contributed to responsive web interface development and cross-browser quality assurance for client-facing web applications.',
    bullets: [
      'Developed responsive web interface components using HTML5, CSS3, JavaScript (ES6+), and Vue.js.',
      'Resolved user interface bugs and collaborated with QA teams to refine application responsiveness across device breakpoints.',
      'Gained deep experience in modular component patterns and version-controlled Git workflows.'
    ],
    tech: ['JavaScript', 'Vue.js', 'HTML5', 'CSS3', 'Git', 'Responsive Design']
  }
];

export const projectsData: Record<string, ProjectDetail> = {
  allotrac: {
    id: 'allotrac',
    title: 'Allotrac — Multi-Tenant Transport Platform',
    subtitle: 'Pixako Technologies | Enterprise Fleet Operations',
    category: 'Enterprise SaaS & Fleet Logistics',
    badge: 'Enterprise SaaS',
    badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    description: 'Logistics and fleet management SaaS platform engineered for driver dispatching, multi-leg stop management, cross-tenant jobs, and live telemetry.',
    tech: ['Next.js', 'TypeScript', 'React.js', 'GraphQL', 'Node.js', 'MongoDB', 'Redis Pub/Sub', 'WebSockets', 'DataLoader'],
    keyPoints: [
      'Multi-tenant data isolation & cross-tenant resource sharing',
      'Real-time WebSockets & Redis Pub/Sub tracking channels',
      'Xero API accounting & automated invoice generation'
    ],
    architectureHighlights: [
      'Architected tenant-isolated database models ensuring strict data governance across corporate tenants.',
      'Built GraphQL resolvers, mutations, and real-time subscriptions for driver dispatches and job stops.',
      'Implemented WebSockets with Redis Pub/Sub channels for live telemetry & vehicle tracking.',
      'Integrated Xero Accounting API for automated tenant invoice generation and billing sync.',
      'Optimized database performance with GraphQL DataLoader to prevent N+1 query bottlenecks across high-frequency resolvers.'
    ]
  },
  hrms: {
    id: 'hrms',
    title: 'Advanced HRMS & Attendance System',
    subtitle: 'Enterprise Workforce Analytics',
    category: 'Workforce Analytics & HR Tech',
    badge: 'Workforce Analytics',
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    description: 'Workforce management platform featuring high-density AG Grid dashboards, historical log sync, and date-filtered attendance analytics.',
    tech: ['Next.js', 'React.js', 'GraphQL', 'Node.js', 'MongoDB', 'AG Grid', 'Express.js', 'REST APIs'],
    keyPoints: [
      'GraphQL API microservices & role permissions',
      'AG Grid attendance analytics dashboards with virtualized rows',
      'Legacy MS Access database log ingestion & data transformation'
    ],
    architectureHighlights: [
      'Built high-performance GraphQL attendance tracking microservices with sub-second response times.',
      'Created interactive data grids using AG Grid for complex employee log visualization and multi-column filtering.',
      'Processed legacy MS Access database sync logs for historical attendance reports and audit trails.',
      'Designed role-based permissions (RBAC) and granular access controllers for administrative hierarchy.'
    ]
  }
};

export const skillsCategories: SkillCategory[] = [
  {
    title: 'Languages',
    subtitle: 'Core Foundations',
    iconName: 'code',
    accentBorder: 'hover:border-blue-500/40',
    accentBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    skills: [
      { name: 'TypeScript', highlight: true, colorClass: 'bg-blue-900/40 border-blue-500/50 text-blue-300' },
      { name: 'JavaScript (ES6+)', highlight: true, colorClass: 'bg-amber-900/30 border-amber-500/40 text-amber-300' },
      { name: 'HTML5', highlight: false },
      { name: 'CSS3', highlight: false }
    ]
  },
  {
    title: 'Frontend Frameworks',
    subtitle: 'Reactive & Dynamic UIs',
    iconName: 'layout',
    accentBorder: 'hover:border-indigo-500/40',
    accentBg: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    skills: [
      { name: 'Next.js (App Router)', highlight: true, colorClass: 'bg-indigo-900/40 border-indigo-500/50 text-indigo-300' },
      { name: 'React.js', highlight: true, colorClass: 'bg-cyan-900/30 border-cyan-500/40 text-cyan-300' },
      { name: 'Tailwind CSS', highlight: false },
      { name: 'Material UI (MUI)', highlight: false },
      { name: 'AG Grid', highlight: true, colorClass: 'bg-emerald-900/30 border-emerald-500/40 text-emerald-300' },
      { name: 'React Hook Form', highlight: false }
    ]
  },
  {
    title: 'Backend & GraphQL',
    subtitle: 'APIs & Microservices',
    iconName: 'server',
    accentBorder: 'hover:border-emerald-500/40',
    accentBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    skills: [
      { name: 'Node.js', highlight: true, colorClass: 'bg-emerald-900/30 border-emerald-500/40 text-emerald-300' },
      { name: 'GraphQL APIs', highlight: true, colorClass: 'bg-pink-900/30 border-pink-500/40 text-pink-300' },
      { name: 'Express.js', highlight: false },
      { name: 'Apollo Server', highlight: false },
      { name: 'REST APIs', highlight: false },
      { name: 'DataLoader Batching', highlight: true, colorClass: 'bg-purple-900/30 border-purple-500/40 text-purple-300' }
    ]
  },
  {
    title: 'Databases & Pub/Sub',
    subtitle: 'Data & Messaging',
    iconName: 'database',
    accentBorder: 'hover:border-red-500/40',
    accentBg: 'bg-red-500/20 text-red-400 border-red-500/30',
    skills: [
      { name: 'MongoDB', highlight: true, colorClass: 'bg-green-900/30 border-green-500/40 text-green-300' },
      { name: 'Redis Pub/Sub', highlight: true, colorClass: 'bg-red-900/30 border-red-500/40 text-red-300' },
      { name: 'Mongoose ORM', highlight: false },
      { name: 'Aggregation Pipelines', highlight: false },
      { name: 'WebSockets', highlight: true, colorClass: 'bg-cyan-900/30 border-cyan-500/40 text-cyan-300' }
    ]
  },
  {
    title: 'SaaS Architecture',
    subtitle: 'Security & Isolation',
    iconName: 'shield',
    accentBorder: 'hover:border-purple-500/40',
    accentBg: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    skills: [
      { name: 'Multi-Tenant Isolation', highlight: true, colorClass: 'bg-purple-900/30 border-purple-500/40 text-purple-300' },
      { name: 'Role-Based Auth (RBAC)', highlight: true, colorClass: 'bg-blue-900/30 border-blue-500/40 text-blue-300' },
      { name: 'JWT & Auth0', highlight: false },
      { name: 'Xero Integration', highlight: true, colorClass: 'bg-sky-900/30 border-sky-500/40 text-sky-300' }
    ]
  },
  {
    title: 'Tools & Workflows',
    subtitle: 'Engineering Practices',
    iconName: 'git',
    accentBorder: 'hover:border-cyan-500/40',
    accentBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    skills: [
      { name: 'Git & GitHub', highlight: false },
      { name: 'Agile / Scrum', highlight: false },
      { name: 'CI/CD Workflows', highlight: false },
      { name: 'Code Reviews', highlight: false }
    ]
  }
];
