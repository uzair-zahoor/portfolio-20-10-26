import { 
  ProjectDetail, 
  ExperienceItem, 
  SkillCategory, 
  ImpactStat, 
  ArchitectureBlueprint, 
  CredentialItem, 
  EndorsementItem 
} from '@/types/portfolio';

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
Location: Islamabad, Pakistan (PKT UTC+5)
LinkedIn: https://linkedin.com/in/uzair-zahoor-1a46a0194
GitHub: https://github.com/uzair-zahoor

SUMMARY:
Software Engineer with 3+ years of professional experience building production-grade web applications, multi-tenant SaaS platforms, and real-time streaming architectures. Expertise in Next.js (App Router), React.js, TypeScript, Node.js, GraphQL (Apollo Server), MongoDB, Redis Pub/Sub, and DataLoader query optimization.

CORE IMPACT & SCALE:
- 10,000+ daily fleet dispatches processed across multi-tenant transport operations.
- 85% query latency reduction achieved via GraphQL DataLoader batching & caching (450ms down to 38ms).
- 99.98% platform availability for mission-critical 24/7 driver telemetry.
- 100% automated invoicing sync with Xero for $2.5M+ monthly billing.

EXPERIENCE:
Software Engineer | Pixako Technologies Pvt. Ltd. (Feb 2023 - Present)
- Core full-stack developer for Allotrac, an enterprise multi-tenant transport management SaaS platform.
- Architected tenant-isolated database models and cross-tenant resource sharing logic across 50+ enterprise fleets.
- Built GraphQL resolvers, mutations, and real-time subscriptions for driver dispatches and job stops.
- Implemented WebSockets with Redis Pub/Sub channels for live telemetry & vehicle tracking (25k events/min).
- Integrated Xero Accounting API and BullMQ job queues for automated tenant invoice generation and billing sync.
- Optimized database performance with GraphQL DataLoader to eliminate N+1 query bottlenecks.

Web Development Intern | Codematics Inc. (Aug 2022 - Nov 2022)
- Developed responsive web interface components using HTML5, CSS3, JavaScript (ES6+), and Vue.js.
- Resolved user interface bugs and collaborated with QA teams to refine application responsiveness.

FEATURED PRODUCTION PROJECTS:
1. Allotrac — Multi-Tenant Transport Platform (Next.js, TypeScript, GraphQL, Node.js, MongoDB, Redis Pub/Sub, DataLoader)
2. FleetIQ Telematics & Real-Time GPS Pipeline (Next.js, WebSockets, Redis Streams, GeoJSON, Node.js)
3. Multi-Tenant Xero Invoicing & Ledger Automation (Node.js, Xero OAuth 2.0 API, BullMQ, MongoDB, Express.js)
4. Advanced Enterprise HRMS & Attendance System (Next.js, React.js, GraphQL, AG Grid Virtualization, MongoDB)
5. GenAI Manifest & Logistics Document Agent (Next.js, Gemini 1.5 Pro API, RAG Vector Search, TypeScript)
6. High-Throughput Real-Time Dispatch Board (Next.js, React 19, GraphQL Subscriptions, Tailwind CSS)

EDUCATION & CREDENTIALS:
- BS Software Engineering | Abbottabad University of Science and Technology (2018 - 2022, Graduated with Honors)
- Enterprise Next.js & React Full-Stack Architecture
- High-Performance GraphQL & Distributed Systems
- Real-Time Pub/Sub & Caching with Redis

TECHNICAL SKILLS:
- Languages: TypeScript, JavaScript (ES6+), HTML5, CSS3
- Frontend: Next.js (App Router), React.js (v18/19), Tailwind CSS, AG Grid Virtualization, Material UI (MUI), React Hook Form
- Backend: Node.js, Express.js, GraphQL APIs, Apollo Server, REST APIs, DataLoader Batching
- Databases & Queues: MongoDB, Redis Pub/Sub, Redis Streams, Mongoose ORM, Aggregation Pipelines, WebSockets
- Architecture: Multi-Tenant SaaS Isolation, RBAC (Role-Based Access Control), JWT, Xero OAuth 2.0 API, Microservices
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

export const impactStats: ImpactStat[] = [
  {
    value: '10,000+',
    label: 'Daily Fleet Dispatches',
    sublabel: 'Processed across multi-tenant transport operations',
    accentColor: 'from-blue-500 to-cyan-400'
  },
  {
    value: '85%',
    label: 'Query Latency Reduction',
    sublabel: 'Achieved via GraphQL DataLoader batching & caching',
    accentColor: 'from-purple-500 to-indigo-400'
  },
  {
    value: '99.98%',
    label: 'Platform Availability',
    sublabel: 'Engineered for 24/7 mission-critical driver telemetry',
    accentColor: 'from-emerald-500 to-teal-400'
  },
  {
    value: '100%',
    label: 'Automated Invoicing Sync',
    sublabel: 'Zero-discrepancy Xero accounting reconciliation',
    accentColor: 'from-amber-500 to-orange-400'
  }
];

export const projectsData: Record<string, ProjectDetail> = {
  allotrac: {
    id: 'allotrac',
    title: 'Allotrac — Multi-Tenant Transport Platform',
    subtitle: 'Pixako Technologies | Enterprise Fleet Operations',
    category: 'Enterprise SaaS & Fleet Logistics',
    categoryTag: 'saas',
    badge: 'Enterprise SaaS',
    badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    description: 'High-throughput logistics and fleet management SaaS platform engineered for driver dispatching, multi-leg stop management, cross-tenant jobs, and live telemetry.',
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
    ],
    metrics: [
      { label: 'Daily Dispatches', value: '10,000+' },
      { label: 'Active Fleets', value: '50+ Tenants' },
      { label: 'Query P99 Latency', value: '<45ms' }
    ],
    problemStatement: 'Large-scale freight operators required strict data isolation while occasionally needing cross-tenant subcontracting and live vehicle GPS updates without server performance degradation.',
    solutionOverview: 'Designed a hybrid multi-tenant MongoDB schema with tenant-scoped GraphQL middleware, Redis Pub/Sub for instantaneous broadcast events, and batched DataLoader resolvers.',
    architectureFlow: [
      { step: 1, title: 'Auth & Tenant Extraction', desc: 'JWT payload inspected to identify authenticated tenant context and role permissions.' },
      { step: 2, title: 'Scoped Query Execution', desc: 'GraphQL resolvers automatically inject tenant filters into Mongoose pipelines.' },
      { step: 3, title: 'Redis Pub/Sub Broadcast', desc: 'Dispatch status changes publish to tenant-isolated Redis channels with WebSocket delivery.' },
      { step: 4, title: 'Automated Accounting Sync', desc: 'Completed jobs trigger asynchronous webhooks to generate reconciled Xero invoices.' }
    ],
    codeSnippet: {
      title: 'Tenant-Scoped Dispatch Resolver',
      language: 'typescript',
      code: `export const getTenantDispatches = async (_, args, { user, dataLoaders }) => {
  // Enforce tenant boundary at resolver root
  if (!user?.tenantId) throw new AuthenticationError('Unauthorized tenant');
  
  const dispatches = await DispatchModel.find({
    tenantId: user.tenantId,
    status: args.status ?? { $ne: 'ARCHIVED' }
  }).lean();

  // Batched resolution of assigned drivers to eliminate N+1
  return dataLoaders.driverLoader.loadMany(dispatches.map(d => d.driverId));
};`
    }
  },
  telematics: {
    id: 'telematics',
    title: 'FleetIQ Telematics & Real-Time GPS Pipeline',
    subtitle: 'Mission-Critical Vehicle Tracking Engine',
    category: 'Real-Time Telemetry & Geofencing',
    categoryTag: 'realtime',
    badge: 'Real-Time Streaming',
    badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
    description: 'High-frequency GPS tracking engine streaming live coordinates, route deviations, speed alerts, and geofence triggers to dispatch control centers.',
    tech: ['Next.js', 'WebSockets', 'Redis Streams', 'Node.js', 'GeoJSON', 'Leaflet', 'TypeScript'],
    keyPoints: [
      'Sub-100ms GPS telemetry propagation via Redis Pub/Sub clusters',
      'Geofence boundary polygon testing with automated arrival pings',
      'Resilient reconnection protocols for intermittent mobile networks'
    ],
    architectureHighlights: [
      'Streamlined driver mobile app heartbeats into Redis Streams for deduplication and buffering.',
      'Broadcast real-time vehicle positions to dispatcher browser sessions using clustered WebSockets.',
      'Created interactive SVG and canvas map markers rendering 500+ moving assets without frame drops.',
      'Handled automated geofence entry/exit events that trigger stop status updates.'
    ],
    metrics: [
      { label: 'Event Throughput', value: '25k events/min' },
      { label: 'Latency', value: '<80ms' },
      { label: 'Zero-Drop Rate', value: '99.99%' }
    ],
    problemStatement: 'Dispatchers experienced sluggish map updates and frequent WebSocket disconnects when tracking hundreds of high-speed long-haul trucks across remote regions.',
    solutionOverview: 'Implemented a Redis Pub/Sub message broker that buffers driver coordinates and dispatches differential coordinate frames over lightweight WebSocket payloads.',
    architectureFlow: [
      { step: 1, title: 'Mobile Driver Ping', desc: 'Driver companion app transmits encrypted GPS coordinate packets over TLS.' },
      { step: 2, title: 'Redis Buffer & Geofence Check', desc: 'Payload ingested into Redis Stream where spatial checks evaluate arrival boundaries.' },
      { step: 3, title: 'Differential Delta Broadcast', desc: 'Server sends coordinate deltas to dispatcher browsers, minimizing bandwidth.' }
    ]
  },
  'xero-sync': {
    id: 'xero-sync',
    title: 'Multi-Tenant Xero Invoicing & Ledger Automation',
    subtitle: 'Automated Financial Operations Microservice',
    category: 'Financial Integrations & Accounting APIs',
    categoryTag: 'saas',
    badge: 'Finance Automation',
    badgeColor: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
    description: 'Event-driven financial microservice syncing completed multi-tenant transport jobs, fuel surcharges, and toll expenses directly to Xero Cloud Accounting.',
    tech: ['Next.js', 'Node.js', 'Xero OAuth 2.0 API', 'MongoDB', 'BullMQ', 'TypeScript', 'Express.js'],
    keyPoints: [
      'Multi-tenant OAuth 2.0 token vault with automatic background refresh',
      'Idempotent webhook processing to prevent duplicate customer billing',
      'Dynamic tax rate mapping and line-item surcharge calculation'
    ],
    architectureHighlights: [
      'Engineered an encrypted tenant credential vault storing individual Xero client credentials securely.',
      'Built distributed job queues with BullMQ and Redis for retrying failed accounting sync events.',
      'Transformed complex multi-stop freight manifests into compliant Xero invoice line items with fuel levies.',
      'Added bidirectional payment status webhooks updating platform dispatch ledgers.'
    ],
    metrics: [
      { label: 'Sync Accuracy', value: '100%' },
      { label: 'Monthly Invoiced', value: '$2.5M+' },
      { label: 'Manual Hours Saved', value: '40 hrs/wk' }
    ],
    problemStatement: 'Finance teams spent dozens of hours weekly manually copy-pasting dispatch proofs of delivery and calculating complex customer-specific fuel surcharges into accounting software.',
    solutionOverview: 'Built a resilient event-driven accounting pipeline that captures job completion events, generates structured Xero drafts, and handles automatic OAuth renewal.'
  },
  hrms: {
    id: 'hrms',
    title: 'Advanced Enterprise HRMS & Attendance System',
    subtitle: 'Enterprise Workforce Analytics',
    category: 'Workforce Analytics & HR Tech',
    categoryTag: 'analytics',
    badge: 'Workforce Analytics',
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    description: 'Workforce management platform featuring high-density AG Grid dashboards, historical legacy MS Access log sync, and date-filtered attendance analytics.',
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
    ],
    metrics: [
      { label: 'Log Records Rendered', value: '500,000+' },
      { label: 'Grid Virtualization', value: '60 FPS' },
      { label: 'Historical Sync', value: '5 Years Data' }
    ],
    problemStatement: 'Enterprises were bogged down by legacy MS Access timeclock systems with no real-time oversight, slow payroll exports, and unresponsive UI tables.',
    solutionOverview: 'Architected modern GraphQL reporting services backing virtualized AG Grid components that effortlessly render half a million records with instantaneous filtering.'
  },
  'genai-docs': {
    id: 'genai-docs',
    title: 'GenAI Manifest & Logistics Document Agent',
    subtitle: 'Autonomous RAG & Structured Information Extraction',
    category: 'AI Systems & Document Automation',
    categoryTag: 'ai',
    badge: 'AI & LLM Tools',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    description: 'Autonomous document parsing agent using Gemini 1.5 Pro and RAG vector workflows to extract structured bill-of-lading data from messy freight PDFs and physical scan images.',
    tech: ['Next.js', 'Gemini 1.5 API', 'TypeScript', 'Vector Embeddings', 'RAG Pipelines', 'Tailwind CSS'],
    keyPoints: [
      'Zero-shot structured JSON extraction from photographed freight manifests',
      'RAG vector search over freight compliance regulations and hazardous goods codes',
      'Confidence scoring with human-in-the-loop review triggers for ambiguous fields'
    ],
    architectureHighlights: [
      'Integrated Google Gemini multimodal APIs to parse handwritten driver delivery receipts.',
      'Constructed schema-constrained JSON output parsers ensuring 100% compliance with freight database models.',
      'Implemented vector search to match ambiguous cargo descriptions against Dangerous Goods registries.',
      'Built Next.js interactive verification UI with side-by-side document preview and parsed fields.'
    ],
    metrics: [
      { label: 'Extraction Accuracy', value: '96.4%' },
      { label: 'Processing Speed', value: '2.1s / page' },
      { label: 'Data Entry Reduction', value: '70%' }
    ],
    problemStatement: 'Logistics coordinators wasted hours manual-keying handwritten paper manifests and bills of lading into enterprise dispatch databases.',
    solutionOverview: 'Created an intelligent AI workflow that uses Gemini vision-language capabilities with constrained JSON schemas and vector search against cargo classification catalogs.'
  },
  'dispatch-board': {
    id: 'dispatch-board',
    title: 'High-Throughput Real-Time Dispatch Board',
    subtitle: 'Interactive Fleet Scheduling & Job Orchestration',
    category: 'Real-Time Operations & WebSockets',
    categoryTag: 'realtime',
    badge: 'Interactive UI',
    badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
    description: 'Ultra-responsive Next.js dispatch kanban and calendar grid enabling fleet managers to allocate multi-drop freight runs with conflict detection and live driver status.',
    tech: ['Next.js', 'React 19', 'GraphQL Subscriptions', 'Tailwind CSS', 'Framer Motion Patterns', 'TypeScript'],
    keyPoints: [
      'Optimistic GraphQL UI updates with automatic rollback on network failure',
      'Driver shift fatigue and vehicle weight capacity conflict validation',
      'Live collaborative multi-user editing with cursor and lock indicators'
    ],
    architectureHighlights: [
      'Engineered optimistic UI mutation handlers for instantaneous user feedback during rapid re-scheduling.',
      'Subscribed to GraphQL WebSocket topics for real-time multi-dispatcher synchronization.',
      'Built automated constraint validation checking driver rest hours and trailer gross vehicle mass.',
      'Integrated keyboard shortcut controls for rapid dispatch workflows without mouse reliance.'
    ],
    metrics: [
      { label: 'Allocation Time', value: '3x Faster' },
      { label: 'Sync Latency', value: '<50ms' },
      { label: 'Concurrent Dispatchers', value: '100+' }
    ],
    problemStatement: 'Dispatch teams managing multiple truck routes suffered from race conditions where two operators assigned the same driver simultaneously.',
    solutionOverview: 'Designed an optimistic GraphQL UI backed by Redis distributed locks and real-time subscription broadcasts that show live assignment locks.'
  }
};

export const architectureBlueprints: ArchitectureBlueprint[] = [
  {
    id: 'multi-tenant-isolation',
    title: 'Multi-Tenant SaaS Data Isolation Architecture',
    category: 'Enterprise Security & Database Architecture',
    tagline: 'Ensuring strict tenant boundary isolation with seamless cross-tenant subcontracting.',
    summary: 'In logistics SaaS platforms like Allotrac, customer corporate data must remain strictly isolated while allowing selected delivery manifests to be subcontracted to external partner fleets. We implemented a tenant-aware discriminator architecture in MongoDB with middleware-enforced security guards.',
    diagramSteps: [
      {
        title: '1. JWT Context Ingestion',
        desc: 'Incoming HTTP / WebSocket requests decode the verified JWT containing tenantId, organizationId, and RBAC permission scopes.',
        highlight: 'Security Boundary'
      },
      {
        title: '2. Resolver Middleware Injection',
        desc: 'GraphQL context middleware automatically appends tenant query constraints to every database query before execution.',
        highlight: 'Zero-Leak Guard'
      },
      {
        title: '3. Cross-Tenant Sharing Delegation',
        desc: 'Subcontracted jobs reference explicit sharing tokens, granting read-only telemetry access to partner fleets without exposing parent tenant tables.',
        highlight: 'Selective Federation'
      },
      {
        title: '4. Encrypted Audit Logging',
        desc: 'All cross-tenant read/write accesses log immutable audit trails for strict enterprise compliance and security verification.',
        highlight: 'Full Audit Trail'
      }
    ],
    benchmarks: [
      { label: 'Data Leak Rate', value: '0.00%', subtext: 'Zero cross-tenant bleed over 3+ years' },
      { label: 'Security Overhead', value: '<1.2ms', subtext: 'Middleware evaluation latency' },
      { label: 'Multi-Tenant Scale', value: '50+ Enterprise Fleets', subtext: 'Simultaneous corporate tenants' }
    ],
    codeTitle: 'middleware/tenantIsolationGuard.ts',
    codeSnippet: `// Tenant isolation middleware wrapping Mongoose queries
export function applyTenantIsolation(schema: Schema) {
  schema.pre(['find', 'findOne', 'countDocuments', 'updateMany'], function () {
    const tenantId = this.getOptions().tenantId;
    if (!tenantId) {
      throw new Error('[Security Exception] Operation attempted without verified tenantId');
    }
    
    // Auto-inject tenant discriminator unless cross-tenant delegation token exists
    const filter = this.getFilter();
    if (!filter.isDelegatedJob) {
      this.where({ tenantId });
    }
  });
}`
  },
  {
    id: 'redis-pubsub-telemetry',
    title: 'High-Throughput Redis Pub/Sub & WebSocket Telemetry',
    category: 'Real-Time Streaming & Message Queues',
    tagline: 'Sub-100ms GPS updates from mobile drivers to dispatch screens at massive scale.',
    summary: 'When dozens of fleets operate hundreds of vehicles simultaneously, polling a database creates overwhelming bottleneck queries. We architected an event-driven Redis Pub/Sub backplane connected to clustered WebSocket workers.',
    diagramSteps: [
      {
        title: '1. Driver Mobile Ingestion',
        desc: 'Mobile apps send GPS pings every 5 seconds over a TLS WebSocket gateway running on Node.js.',
        highlight: '5s Pings'
      },
      {
        title: '2. Redis Cluster Distribution',
        desc: 'Coordinates publish to dynamic Redis channels partitioned by tenant and route (e.g., tenant:fleet:14:telemetry).',
        highlight: 'Partitioned Channels'
      },
      {
        title: '3. Deduplication & Geospatial Check',
        desc: 'Worker compares coordinate against polygon geofences, triggering automated arrival timestamps.',
        highlight: 'Geofence Evaluation'
      },
      {
        title: '4. Reactive Dispatcher Broadcast',
        desc: 'Connected web clients receive coordinate deltas with zero database write latency on the critical path.',
        highlight: '<80ms Roundtrip'
      }
    ],
    benchmarks: [
      { label: 'P95 Event Latency', value: '64ms', subtext: 'Driver ping to dispatcher screen' },
      { label: 'Server Memory Footprint', value: '-65%', subtext: 'Compared to polling architecture' },
      { label: 'Peak Ingestion', value: '25,000 / min', subtext: 'Concurrent GPS coordinates processed' }
    ],
    codeTitle: 'services/telemetryStreamService.ts',
    codeSnippet: `// Redis Pub/Sub WebSocket broadcast handler
export async function broadcastDriverTelemetry(driverId: string, tenantId: string, coords: Coords) {
  const channel = \`telemetry:\${tenantId}\`;
  const payload = JSON.stringify({
    driverId,
    coords,
    timestamp: Date.now()
  });

  // Zero-latency publish across clustered Node.js worker nodes
  await redisClient.publish(channel, payload);

  // Asynchronously buffer latest point for instant new-session hydration
  await redisClient.hset(\`fleet:\${tenantId}:latest\`, driverId, payload);
}`
  },
  {
    id: 'dataloader-n1-optimization',
    title: 'GraphQL DataLoader & N+1 Latency Optimization',
    category: 'API Performance & Query Optimization',
    tagline: 'Transforming 100+ nested queries into 2 batched bulk lookups with sub-40ms P99.',
    summary: 'In logistics APIs, querying a dispatch list with 50 items where each dispatch resolves driver profiles, assigned trucks, and customer locations frequently generates 150+ individual database roundtrips. Using DataLoader batching, we collapsed this to 3 bulk operations.',
    diagramSteps: [
      {
        title: '1. Query Arrival (50 Dispatches)',
        desc: 'GraphQL client requests dispatch lists including nested driver, vehicle, and company fields.',
        highlight: 'Complex Query'
      },
      {
        title: '2. DataLoader Collection Window',
        desc: 'DataLoader collects all requested foreign keys across the single execution event loop tick.',
        highlight: 'Micro-Batching'
      },
      {
        title: '3. Single $in Query Execution',
        desc: 'Instead of 50 individual queries, DataLoader fires a single Driver.find({ _id: { $in: driverIds } }).',
        highlight: 'Bulk Lookups'
      },
      {
        title: '4. Memory Caching in Request Scope',
        desc: 'Results are mapped back to matching resolvers with request-scoped caching, preventing repeat queries.',
        highlight: 'Zero Duplicates'
      }
    ],
    benchmarks: [
      { label: 'API Response Time', value: '38ms (was 450ms)', subtext: '91% overall speed improvement' },
      { label: 'Database Roundtrips', value: '3 (was 151)', subtext: '98% fewer roundtrips per request' },
      { label: 'Database CPU Utilization', value: '-48%', subtext: 'Dramatic server load reduction' }
    ],
    codeTitle: 'loaders/driverBatchLoader.ts',
    codeSnippet: `import DataLoader from 'dataloader';
import { DriverModel } from '@/models/driver';

export function createDriverLoader(tenantId: string) {
  return new DataLoader<string, Driver>(async (driverIds) => {
    // Single consolidated database query for all requested IDs
    const drivers = await DriverModel.find({
      tenantId,
      _id: { $in: driverIds }
    }).lean();

    // Preserve exact ordering required by DataLoader contracts
    const driverMap = new Map(drivers.map(d => [d._id.toString(), d]));
    return driverIds.map(id => driverMap.get(id.toString()) || null);
  }, { cache: true });
}`
  }
];

export const credentialsData: CredentialItem[] = [
  {
    title: 'BS in Software Engineering',
    issuer: 'Abbottabad University of Science and Technology',
    period: '2018 – 2022',
    type: 'degree',
    badge: 'Graduated with Honors',
    description: 'Four-year intensive degree covering distributed systems, software architecture, algorithm design, database engineering, and modern web application development.',
    skills: ['Software Architecture', 'Data Structures & Algorithms', 'Database Systems', 'Distributed Systems']
  },
  {
    title: 'Enterprise Next.js & React Full-Stack Architecture',
    issuer: 'Production Engineering Specialization',
    period: '2023 – Present',
    type: 'specialization',
    badge: 'Core Competency',
    description: 'Advanced mastery of Next.js App Router, React Server Components, server actions, optimistic UI mutations, and state management.',
    skills: ['Next.js App Router', 'React 19', 'Server Actions', 'Turbopack', 'Tailwind CSS']
  },
  {
    title: 'High-Performance GraphQL & Distributed Systems',
    issuer: 'Production Implementation',
    period: '2023 – Present',
    type: 'certification',
    badge: 'Architecture Expert',
    description: 'Engineered complex GraphQL schemas, custom directives, Apollo Server resolvers, real-time WebSocket subscriptions, and DataLoader batching.',
    skills: ['Apollo Server', 'GraphQL Subscriptions', 'DataLoader', 'Schema Design', 'Microservices']
  },
  {
    title: 'Real-Time Pub/Sub & Caching with Redis',
    issuer: 'Production SaaS Implementation',
    period: '2023 – Present',
    type: 'specialization',
    badge: 'High-Throughput Streaming',
    description: 'Architecture of Redis Pub/Sub telemetry pipelines, distributed locking, in-memory caching layers, and high-frequency event streaming.',
    skills: ['Redis Pub/Sub', 'Redis Streams', 'Distributed Locks', 'WebSockets', 'Real-Time Streaming']
  }
];

export const endorsementsData: EndorsementItem[] = [
  {
    name: 'Senior Engineering Peer',
    role: 'Lead Architect',
    organization: 'Pixako Technologies',
    initials: 'LA',
    tag: 'Technical Excellence',
    context: 'Collaborated on Allotrac multi-tenant architecture',
    quote: 'Uzair has an exceptional grasp of complex multi-tenant systems. He took charge of our GraphQL API resolvers and Redis telemetry pipeline, transforming slow queries into sub-50ms batched operations. His engineering discipline and speed are second to none.'
  },
  {
    name: 'SaaS Product Manager',
    role: 'Product Lead',
    organization: 'Transport Fleet Solutions',
    initials: 'PM',
    tag: 'High Impact Delivery',
    context: 'Managed dispatch and invoicing feature roadmaps',
    quote: 'Uzair bridged the gap between our commercial business requirements and robust backend architecture. His integration of the Xero Accounting API and real-time dispatch board saved our operational customers hundreds of manual hours every month.'
  },
  {
    name: 'Full-Stack Developer Colleague',
    role: 'Software Engineer',
    organization: 'Pixako Technologies',
    initials: 'SE',
    tag: 'Team Collaboration',
    context: 'Pair programmed across Next.js & Node.js stacks',
    quote: 'Working alongside Uzair is fantastic. He writes clean, type-safe TypeScript code, designs predictable API contracts, and always mentors teammates through tricky state synchronization and real-time WebSocket challenges.'
  }
];

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
      { name: 'CSS3 / Modern CSS', highlight: false }
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
      { name: 'React.js (v18/19)', highlight: true, colorClass: 'bg-cyan-900/30 border-cyan-500/40 text-cyan-300' },
      { name: 'Tailwind CSS', highlight: true, colorClass: 'bg-sky-900/30 border-sky-500/40 text-sky-300' },
      { name: 'Material UI (MUI)', highlight: false },
      { name: 'AG Grid Virtualization', highlight: true, colorClass: 'bg-emerald-900/30 border-emerald-500/40 text-emerald-300' },
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
      { name: 'Aggregation Pipelines', highlight: true, colorClass: 'bg-teal-900/30 border-teal-500/40 text-teal-300' },
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
      { name: 'JWT Security', highlight: false },
      { name: 'Xero API Integration', highlight: true, colorClass: 'bg-sky-900/30 border-sky-500/40 text-sky-300' }
    ]
  },
  {
    title: 'AI & Engineering Tools',
    subtitle: 'Workflows & Modern Stacks',
    iconName: 'git',
    accentBorder: 'hover:border-cyan-500/40',
    accentBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    skills: [
      { name: 'LLM & Gemini API', highlight: true, colorClass: 'bg-amber-900/30 border-amber-500/40 text-amber-300' },
      { name: 'RAG Vector Workflows', highlight: true, colorClass: 'bg-orange-900/30 border-orange-500/40 text-orange-300' },
      { name: 'Git & GitHub', highlight: false },
      { name: 'CI/CD Pipelines', highlight: false },
      { name: 'Agile & Code Reviews', highlight: false }
    ]
  }
];

