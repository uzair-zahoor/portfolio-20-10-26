export type Language = 'en' | 'ur';

export interface Translations {
  // Navigation
  navAbout: string;
  navProjects: string;
  navArchitecture: string;
  navSystemsLab: string;
  navSkills: string;
  navExperience: string;
  navImpact: string;
  navAiLab: string;
  navAskAi: string;
  navContact: string;

  // Hero
  heroAvailable: string;
  heroLocation: string;
  heroHeadline1: string;
  heroHeadlineHighlight: string;
  heroHeadline2: string;
  heroBioIntro: string;
  heroBioRole: string;
  heroBioCompany: string;
  heroBioExp: string;
  heroBioStack: string;
  heroViewWork: string;
  heroBlueprints: string;
  heroSystemsLab: string;
  heroDownloadResume: string;

  // About
  aboutBadge: string;
  aboutTitle: string;
  aboutRoleLabel: string;
  aboutDomainLabel: string;
  aboutDomainValue: string;
  aboutStackLabel: string;
  aboutStackValue: string;
  aboutEducationLabel: string;
  aboutQuote: string;
  aboutP1Role: string;
  aboutP1Text: string;
  aboutP2Text: string;
  aboutP3Text: string;
  aboutRbacTitle: string;
  aboutRbacDesc: string;
  aboutRealtimeTitle: string;
  aboutRealtimeDesc: string;
  aboutQueryTitle: string;
  aboutQueryDesc: string;
  aboutFinTitle: string;
  aboutFinDesc: string;

  // Projects
  projectsBadge: string;
  projectsTitle: string;
  projectsSubtitle: string;
  filterAll: string;
  filterSaas: string;
  filterRealtime: string;
  filterAi: string;
  filterAnalytics: string;
  projectKeyHighlights: string;
  projectExploreArch: string;

  // Project Modal
  modalTabOverview: string;
  modalTabArchitecture: string;
  modalTabCode: string;
  modalProblemTitle: string;
  modalSolutionTitle: string;
  modalHighlightsTitle: string;
  modalKeyMetrics: string;
  modalFlowTitle: string;
  modalCopyCode: string;
  modalCopiedCode: string;
  modalClose: string;

  // Architecture Showcase
  archBadge: string;
  archTitle: string;
  archSubtitle: string;
  archRunSim: string;
  archSimulating: string;
  archMetricsTitle: string;
  archCodeTitle: string;
  archCopySnippet: string;
  archCopiedSnippet: string;

  // Technical Playground
  playBadge: string;
  playTitle: string;
  playSubtitle: string;
  playTabSim: string;
  playTabStream: string;
  playSelectTenant: string;
  playSelectQuery: string;
  playExecBtn: string;
  playExecuting: string;
  playStreamPause: string;
  playStreamResume: string;
  playStreamClear: string;
  playLiveEvents: string;
  playPayload: string;

  // Skills
  skillsBadge: string;
  skillsTitle: string;
  skillsSubtitle: string;

  // Experience
  expBadge: string;
  expTitle: string;
  expSubtitle: string;

  // Impact & Credentials
  impactBadge: string;
  impactTitle: string;
  impactSubtitle: string;
  credBadge: string;
  credTitle: string;
  credSubtitle: string;
  endorseBadge: string;
  endorseTitle: string;
  endorseSubtitle: string;

  // AI Lab & Modal
  aiLabBadge: string;
  aiLabTitle: string;
  aiLabDesc: string;
  aiLabChatBtn: string;
  aiModalTitle: string;
  aiModalSubtitle: string;
  aiModalInitial: string;
  aiModalPlaceholder: string;
  aiModalSend: string;
  aiModalSuggested: string;
  aiModalSuggestion1: string;
  aiModalSuggestion2: string;
  aiModalSuggestion3: string;
  aiModalSuggestion4: string;

  // Contact
  contactBadge: string;
  contactTitle: string;
  contactSubtitle: string;
  contactNameLabel: string;
  contactNamePlaceholder: string;
  contactEmailLabel: string;
  contactEmailPlaceholder: string;
  contactTopicLabel: string;
  contactMsgLabel: string;
  contactMsgPlaceholder: string;
  contactSendBtn: string;
  contactSendingBtn: string;
  contactSuccess: string;
  contactCopyEmail: string;
  contactCopiedEmail: string;
  contactOfficeHours: string;
  contactAfterHours: string;
  contactDirectChannels: string;

  // Footer
  footerBuilt: string;
}

export const translationsEn: Translations = {
  // Navigation
  navAbout: 'About',
  navProjects: 'Projects',
  navArchitecture: 'Architecture',
  navSystemsLab: 'Systems Lab',
  navSkills: 'Skills',
  navExperience: 'Experience',
  navImpact: 'Impact',
  navAiLab: 'AI Lab',
  navAskAi: 'Ask AI Copilot',
  navContact: 'Contact',

  // Hero
  heroAvailable: 'Open to High-Impact SaaS Roles & Consulting',
  heroLocation: 'Islamabad (PKT UTC+5)',
  heroHeadline1: 'Engineering ',
  heroHeadlineHighlight: 'Scalable Next.js SaaS.',
  heroHeadline2: 'Solving Complex Multi-Tenant Systems.',
  heroBioIntro: "I'm",
  heroBioRole: 'at',
  heroBioCompany: 'Pixako Technologies Pvt. Ltd.',
  heroBioExp: 'with 3+ years of experience engineering production-grade React/Next.js SaaS, GraphQL microservices, and real-time Redis Pub/Sub backbones.',
  heroBioStack: '',
  heroViewWork: 'View Production Work',
  heroBlueprints: 'Architecture Blueprints',
  heroSystemsLab: 'Live Systems Lab',
  heroDownloadResume: 'Download Resume',

  // About
  aboutBadge: 'Professional Overview',
  aboutTitle: 'Software Engineer specializing in multi-tenant SaaS and modern Next.js systems.',
  aboutRoleLabel: 'Current Role',
  aboutDomainLabel: 'Primary Domain',
  aboutDomainValue: 'Multi-Tenant Transport SaaS',
  aboutStackLabel: 'Core Stack',
  aboutStackValue: 'Next.js, React, Node, GraphQL, MongoDB',
  aboutEducationLabel: 'Education',
  aboutQuote: '“Designing resilient backend workflows, tenant-isolated data architectures, and dynamic React user experiences.”',
  aboutP1Role: 'Software Engineer',
  aboutP1Text: 'with over 3+ years of professional experience building production-grade web applications and multi-tenant SaaS platforms.',
  aboutP2Text: 'Currently at Pixako Technologies, I contribute to the core full-stack architecture for Allotrac—a high-throughput multi-tenant transport management SaaS platform. My day-to-day work centers on designing tenant-isolated data access patterns, building GraphQL resolvers and subscriptions, implementing real-time WebSockets with Redis Pub/Sub, and optimizing database queries using DataLoader.',
  aboutP3Text: 'Holding a BS in Software Engineering from Abbottabad University of Science and Technology, I maintain a deep commitment to clean architecture, role-based security systems (RBAC), third-party integrations (such as Xero API), and reactive frontend interfaces.',
  aboutRbacTitle: 'Tenant Isolation & RBAC',
  aboutRbacDesc: 'Multi-tenant schemas, cross-tenant resource sharing, and permission controls.',
  aboutRealtimeTitle: 'Real-Time Pub/Sub Streams',
  aboutRealtimeDesc: 'Redis Pub/Sub channels, WebSockets, and high-frequency vehicle telemetry.',
  aboutQueryTitle: 'Query Optimization & DataLoader',
  aboutQueryDesc: '85% query latency reduction and elimination of N+1 database bottlenecks.',
  aboutFinTitle: 'Financial APIs & Automation',
  aboutFinDesc: 'Xero Accounting API integrations and automated tenant invoice generation.',

  // Projects
  projectsBadge: 'Production Portfolio',
  projectsTitle: 'Featured Engineering Projects',
  projectsSubtitle: 'High-throughput SaaS platforms, real-time telemetry backbones, automated financial engines, and AI workflows.',
  filterAll: 'All Projects',
  filterSaas: 'Enterprise SaaS',
  filterRealtime: 'Real-Time Streaming',
  filterAi: 'AI & Document Tools',
  filterAnalytics: 'Analytics & HR Tech',
  projectKeyHighlights: 'Architecture Highlights',
  projectExploreArch: 'Explore Architecture',

  // Project Modal
  modalTabOverview: 'System Overview',
  modalTabArchitecture: 'Architecture & Flow',
  modalTabCode: 'Production Code Snippet',
  modalProblemTitle: 'The Engineering Challenge',
  modalSolutionTitle: 'Architectural Solution',
  modalHighlightsTitle: 'Key Architectural Highlights',
  modalKeyMetrics: 'Key Performance Metrics',
  modalFlowTitle: 'Data Flow Pipeline',
  modalCopyCode: 'Copy Snippet',
  modalCopiedCode: 'Copied!',
  modalClose: 'Close',

  // Architecture Showcase
  archBadge: 'System Architecture Blueprints',
  archTitle: 'Production SaaS Architecture',
  archSubtitle: 'Deep dive into multi-tenant isolation, real-time event streaming, and database optimization patterns.',
  archRunSim: 'Simulate Data Flow',
  archSimulating: 'Simulating Execution...',
  archMetricsTitle: 'Production Benchmarks & Scale',
  archCodeTitle: 'Production Implementation',
  archCopySnippet: 'Copy Code',
  archCopiedSnippet: 'Copied!',

  // Technical Playground
  playBadge: 'Interactive Systems Lab',
  playTitle: 'Live Systems Architecture Lab',
  playSubtitle: 'Simulate multi-tenant GraphQL query execution and live Redis telemetry event streams directly in your browser.',
  playTabSim: 'GraphQL Query Simulator',
  playTabStream: 'Live Redis Telemetry Stream',
  playSelectTenant: 'Select Corporate Tenant',
  playSelectQuery: 'Select Operation',
  playExecBtn: 'Execute Scoped Query',
  playExecuting: 'Executing via DataLoader...',
  playStreamPause: 'Pause Stream',
  playStreamResume: 'Resume Stream',
  playStreamClear: 'Clear Events',
  playLiveEvents: 'Live Events',
  playPayload: 'Live Payload Data',

  // Skills
  skillsBadge: 'Expertise Matrix',
  skillsTitle: 'Skills & Production Tooling',
  skillsSubtitle: 'Technologies and frameworks I utilize daily to build scalable web applications.',

  // Experience
  expBadge: 'Work History',
  expTitle: 'Professional Experience',
  expSubtitle: 'Proven track record engineering high-throughput multi-tenant SaaS platforms.',

  // Impact & Credentials
  impactBadge: 'Quantifiable Production Impact',
  impactTitle: 'Engineering Milestones at Scale',
  impactSubtitle: 'Measurable performance and reliability gains delivered across multi-tenant production deployments.',
  credBadge: 'Academic & Specializations',
  credTitle: 'Academic & Specializations',
  credSubtitle: 'Formal degrees, specialized technical certifications, and production competencies.',
  endorseBadge: 'Peer Endorsements',
  endorseTitle: 'What Colleagues & Leaders Say',
  endorseSubtitle: 'Testimonials from engineering architects, product managers, and peers.',

  // AI Lab & Modal
  aiLabBadge: 'AI Systems Engineering',
  aiLabTitle: 'AI Systems & Autonomous Workflows',
  aiLabDesc: 'Beyond full-stack web applications, I actively research and build AI Integrations, RAG Vector Workflows, and LLM Agent Tools in Next.js environments to automate intelligent business workflows.',
  aiLabChatBtn: 'Chat With My AI Representative',
  aiModalTitle: "Uzair's AI Representative",
  aiModalSubtitle: 'Trained on Uzair Zahoor production engineering profile',
  aiModalInitial: "Hi! I'm Uzair's AI representative. Feel free to ask about his engineering experience at Pixako Technologies, Allotrac, multi-tenant GraphQL architectures, or contact details!",
  aiModalPlaceholder: 'Ask about Uzair, Allotrac, DataLoader, architecture...',
  aiModalSend: 'Send',
  aiModalSuggested: 'Suggested inquiries:',
  aiModalSuggestion1: 'Tell me about Allotrac SaaS',
  aiModalSuggestion2: 'How does multi-tenant isolation work?',
  aiModalSuggestion3: 'How was GraphQL latency reduced?',
  aiModalSuggestion4: 'How can I contact Uzair?',

  // Contact
  contactBadge: 'Direct Channel',
  contactTitle: "Let's Build Something Scalable.",
  contactSubtitle: 'Open to senior software engineering roles, SaaS architecture consulting, and technical discussions.',
  contactNameLabel: 'Your Name',
  contactNamePlaceholder: 'e.g. Alex Henderson',
  contactEmailLabel: 'Your Email',
  contactEmailPlaceholder: 'alex@company.com',
  contactTopicLabel: 'Inquiry Topic',
  contactMsgLabel: 'Message',
  contactMsgPlaceholder: 'Tell me about your team, tech stack, or upcoming engineering challenges...',
  contactSendBtn: 'Send Direct Message',
  contactSendingBtn: 'Transmitting Message...',
  contactSuccess: "Message sent successfully! Uzair will get back to you shortly.",
  contactCopyEmail: 'Copy Email',
  contactCopiedEmail: 'Copied!',
  contactOfficeHours: 'Active Office Hours (PKT)',
  contactAfterHours: 'After Hours (PKT)',
  contactDirectChannels: 'Direct Contact Channels',

  // Footer
  footerBuilt: 'Built with Next.js (App Router) & Tailwind CSS.'
};

export const translationsUrdu: Translations = {
  // Navigation
  navAbout: 'تعارف',
  navProjects: 'پروجیکٹس',
  navArchitecture: 'آرکیٹیکچر',
  navSystemsLab: 'سسٹمز لیب',
  navSkills: 'مہارتیں',
  navExperience: 'تجربہ',
  navImpact: 'اسناد و اثرات',
  navAiLab: 'اے آئی لیب',
  navAskAi: 'اے آئی کاپیلوٹ',
  navContact: 'رابطہ',

  // Hero
  heroAvailable: 'ہائی امپیکٹ ساس رولز اور کنسلٹنگ کے لیے دستیاب',
  heroLocation: 'اسلام آباد (PKT UTC+5)',
  heroHeadline1: 'تیاری اور انجینئرنگ ',
  heroHeadlineHighlight: 'اسکیل ایبل نیکسٹ جے ایس ساس سسٹمز کی۔',
  heroHeadline2: 'پیچیدہ ملٹی ٹیننٹ سسٹمز کا حل۔',
  heroBioIntro: 'میں',
  heroBioRole: 'ہوں، ملازم برائے',
  heroBioCompany: 'پکساکو ٹیکنالوجیز',
  heroBioExp: 'جن کے پاس پروڈکشن گریڈ ری ایکٹ/نیکسٹ جے ایس ساس، گراف کیو ایل مائیکرو سروسز اور ریئل ٹائم ریڈس پب/سب بیک بون تیار کرنے کا ۳+ سال کا تجربہ ہے۔',
  heroBioStack: '',
  heroViewWork: 'پیداواری کام دیکھیں',
  heroBlueprints: 'آرکیٹیکچر کے خاکے',
  heroSystemsLab: 'لائیو سسٹمز لیب',
  heroDownloadResume: 'ریزیومے ڈاؤنلوڈ کریں',

  // About
  aboutBadge: 'پیشہ ورانہ جائزہ',
  aboutTitle: 'سافٹ ویئر انجینئر — ملٹی ٹیننٹ ساس اور جدید نیکسٹ جے ایس سسٹمز میں مہارت۔',
  aboutRoleLabel: 'موجودہ عہدہ',
  aboutDomainLabel: 'بنیادی شعبہ',
  aboutDomainValue: 'ملٹی ٹیننٹ ٹرانسپورٹ ساس',
  aboutStackLabel: 'مرکزی اسٹیک',
  aboutStackValue: 'نیکسٹ جے ایس، ری ایکٹ، نوڈ، گراف کیو ایل، مونگو',
  aboutEducationLabel: 'تعلیم',
  aboutQuote: '“مضبوط بیک اینڈ ورک فلوز، ٹیننٹ آئسولیٹڈ ڈیٹا آرکیٹیکچر اور متحرک ری ایکٹ یوزر تجربات کی تیاری۔”',
  aboutP1Role: 'سافٹ ویئر انجینئر',
  aboutP1Text: 'جس کے پاس پروڈکشن گریڈ ویب ایپلی کیشنز اور ملٹی ٹیننٹ ساس (SaaS) پلیٹ فارمز تیار کرنے کا ۳+ سال سے زائد پیشہ ورانہ تجربہ ہے۔',
  aboutP2Text: 'فی الوقت پکساکو ٹیکنالوجیز میں، میں الوٹراک (Allotrac) کے کور فل اسٹیک آرکیٹیکچر میں کلیدی کردار ادا کر رہا ہوں—جو لاجسٹکس اور فلیٹ آپریشنز کا ایک ہائی تھرو پٹ ساس پلیٹ فارم ہے۔ میری روزمرہ ذمہ داریوں میں ٹیننٹ آئسولیٹڈ ڈیٹا پیٹرنز بنانا، گراف کیو ایل ریزولورز اور سبسکرپشنز تعمیر کرنا، ریڈس پب/سب کے ساتھ ریئل ٹائم ویب ساکٹس لاگو کرنا اور ڈیٹا لوڈر کے ذریعے ڈیٹا بیس کو تیز بنانا شامل ہے۔',
  aboutP3Text: 'ایبٹ آباد یونیورسٹی آف سائنس اینڈ ٹیکنالوجی سے بی ایس سافٹ ویئر انجینئرنگ کی ڈگری کے حامل ہونے کے ناطے، میں کلین کوڈ، رول بیسڈ سیکیورٹی (RBAC)، بیرونی انضمامات (جیسے زیرو اکاؤنٹنگ اے پی آئی) اور تیز رفتار فرنٹ اینڈ انٹرفیسز کے لیے پرعزم ہوں۔',
  aboutRbacTitle: 'ٹیننٹ آئسولیشن اور آر بی اے سی',
  aboutRbacDesc: 'ملٹی ٹیننٹ ڈیٹا بیس ماڈلز، اداروں کے درمیان وسائل کی شراکت داری، اور سخت سیکیورٹی۔',
  aboutRealtimeTitle: 'ریئل ٹائم اسٹریمنگ اور پب/سب',
  aboutRealtimeDesc: 'ریڈس پب/سب، ویب ساکٹس، اور گاڑیوں کی ہائی فریکوئنسی ٹیلی میٹری۔',
  aboutQueryTitle: 'کوئیری پرفارمنس اور ڈیٹا لوڈر',
  aboutQueryDesc: '85 فیصد تک تاخیر میں کمی اور N+1 مسائل کا مکمل خاتمہ۔',
  aboutFinTitle: 'مالیاتی آٹومیشن اور اے پی آئیز',
  aboutFinDesc: 'زیرو اکاؤنٹنگ اے پی آئی اور جاب کیوز برائے خودکار ٹیننٹ انوائسنگ۔',

  // Projects
  projectsBadge: 'پیداواری پورٹ فولیو',
  projectsTitle: 'نمایاں انجینئرنگ پروجیکٹس',
  projectsSubtitle: 'اعلیٰ صلاحیت کے ساس پلیٹ فارمز، ریئل ٹائم ٹیلی میٹری، خودکار مالیاتی نظام اور جدید اے آئی ورک فلوز۔',
  filterAll: 'تمام پروجیکٹس',
  filterSaas: 'انٹرپرائز ساس',
  filterRealtime: 'ریئل ٹائم اسٹریمنگ',
  filterAi: 'اے آئی اور دستاویزات',
  filterAnalytics: 'اینالیٹکس اور ایچ آر',
  projectKeyHighlights: 'آرکیٹیکچر کی اہم جھلکیاں',
  projectExploreArch: 'مکمل آرکیٹیکچر دیکھیں',

  // Project Modal
  modalTabOverview: 'سسٹم کا جائزہ',
  modalTabArchitecture: 'آرکیٹیکچر اور بہاؤ',
  modalTabCode: 'پروڈکشن کوڈ',
  modalProblemTitle: 'انجینئرنگ چیلنج اور مسئلہ',
  modalSolutionTitle: 'آرکیٹیکچرل حل',
  modalHighlightsTitle: 'اہم تکنیکی نکات',
  modalKeyMetrics: 'کارکردگی کے میٹرکس',
  modalFlowTitle: 'ڈیٹا کا بہاؤ (پائپ لائن)',
  modalCopyCode: 'کوڈ کاپی کریں',
  modalCopiedCode: 'کاپی ہو گیا!',
  modalClose: 'بند کریں',

  // Architecture Showcase
  archBadge: 'سسٹم کے خاکے',
  archTitle: 'پیداواری سسٹمز کا تفصیلی آرکیٹیکچر',
  archSubtitle: 'ملٹی ٹیننٹ تنہائی، ریئل ٹائم ایونٹ سٹریمنگ، اور ڈیٹا بیس آپٹیمائزیشن کے عملی ڈیزائنز۔',
  archRunSim: 'ڈیٹا فلو کی سمیولیشن چلائیں',
  archSimulating: 'سمیولیشن جاری ہے...',
  archMetricsTitle: 'پیداواری بینچ مارکس اور پیمانے',
  archCodeTitle: 'پروڈکشن نفاذ',
  archCopySnippet: 'کوڈ کاپی کریں',
  archCopiedSnippet: 'کاپی ہو گیا!',

  // Technical Playground
  playBadge: 'انٹرایکٹو لیب',
  playTitle: 'لائیو سسٹمز آرکیٹیکچر لیب',
  playSubtitle: 'براہ راست اپنے براؤزر میں ٹیننٹ کوئیری ایگزیکیوشن اور ریئل ٹائم ٹیلی میٹری سٹریم کا مشاہدہ کریں۔',
  playTabSim: 'گراف کیو ایل کوئیری سمیولیٹر',
  playTabStream: 'لائیو ریڈس ٹیلی میٹری سٹریم',
  playSelectTenant: 'کارپوریٹ ٹیننٹ منتخب کریں',
  playSelectQuery: 'آپریشن / کوئیری منتخب کریں',
  playExecBtn: 'کوئیری چلائیں',
  playExecuting: 'ڈیٹا لوڈر کے ذریعے پروسیسنگ...',
  playStreamPause: 'سٹریم روکیں',
  playStreamResume: 'سٹریم بحال کریں',
  playStreamClear: 'ایونٹس صاف کریں',
  playLiveEvents: 'لائیو ایونٹس',
  playPayload: 'لائیو پے لوڈ ڈیٹا',

  // Skills
  skillsBadge: 'تکنیکی مہارتیں',
  skillsTitle: 'مہارتیں اور پروڈکشن ٹولز',
  skillsSubtitle: 'وہ جدید ٹیکنالوجیز اور فریم ورکس جنہیں میں روزمرہ اسکیل ایبل ایپلی کیشنز کے لیے استعمال کرتا ہوں۔',

  // Experience
  expBadge: 'کام کی تاریخ',
  expTitle: 'پیشہ ورانہ تجربہ',
  expSubtitle: 'اعلیٰ کارکردگی والے ملٹی ٹیننٹ ساس سسٹمز کی تیاری کا تسلیم شدہ ریکارڈ۔',

  // Impact & Credentials
  impactBadge: 'پیمائش کے قابل نتائج',
  impactTitle: 'پیمانے پر انجینئرنگ کے سنگ میل',
  impactSubtitle: 'ملٹی ٹیننٹ پیداواری سسٹمز میں حاصل کی گئی پیمائش شدہ کارکردگی۔',
  credBadge: 'تعلیمی اسناد اور مہارتیں',
  credTitle: 'تعلیمی اسناد اور تخصص',
  credSubtitle: 'ڈگریاں، پیشہ ورانہ اسناد، اور پروڈکشن گریڈ مہارتیں۔',
  endorseBadge: 'رفقاء کی تصدیق',
  endorseTitle: 'رہنماؤں اور رفقائے کار کے تاثرات',
  endorseSubtitle: 'لیڈ آرکیٹیکٹس، پروڈکٹ مینیجرز، اور انجینئرنگ ساتھیوں کی آراء۔',

  // AI Lab & Modal
  aiLabBadge: 'اے آئی سسٹمز انجینئرنگ',
  aiLabTitle: 'اے آئی سسٹمز اور خودکار ورک فلوز',
  aiLabDesc: 'فل اسٹیک ویب ایپلی کیشنز کے ساتھ ساتھ میں نیکسٹ جے ایس میں جدید اے آئی انٹیگریشنز، آر اے جی ویکٹر ورک فلوز اور ایل ایل ایم ایجنٹ ٹولز کی تعمیر میں سرگرم ہوں۔',
  aiLabChatBtn: 'میرے اے آئی نمائندے سے گفتگو کریں',
  aiModalTitle: 'عزیر کا اے آئی کاپیلوٹ',
  aiModalSubtitle: 'عزیر ظہور کے پروڈکشن انجینئرنگ ریکارڈ پر مبنی',
  aiModalInitial: 'خوش آمدید! میں عزیر کا اے آئی نمائندہ ہوں۔ آپ مجھ سے پکساکو ٹیکنالوجیز میں ان کے کام، الوٹراک ملٹی ٹیننٹ آرکیٹیکچر، گراف کیو ایل ڈیٹا لوڈر، یا رابطے کے بارے میں کچھ بھی دریافت کر سکتے ہیں!',
  aiModalPlaceholder: 'عزیر کے سسٹمز، ڈیٹا لوڈر یا آرکیٹیکچر کے متعلق پوچھیں...',
  aiModalSend: 'ارسال',
  aiModalSuggested: 'تجویز کردہ سوالات:',
  aiModalSuggestion1: 'الوٹراک ساس کے بارے میں بتائیں',
  aiModalSuggestion2: 'ملٹی ٹیننٹ آرکیٹیکچر کیسے کام کرتا ہے؟',
  aiModalSuggestion3: 'گراف کیو ایل کی تاخیر کیسے کم کی؟',
  aiModalSuggestion4: 'عزیر سے رابطہ کیسے کریں؟',

  // Contact
  contactBadge: 'رابطہ چینل',
  contactTitle: 'آئیں مل کر ایک نیا سسٹم بنائیں۔',
  contactSubtitle: 'میں سینئر سافٹ ویئر انجینئرنگ رولز، ساس آرکیٹیکچر مشاورت اور تکنیکی گفتگو کے لیے دستیاب ہوں۔',
  contactNameLabel: 'آپ کا نام',
  contactNamePlaceholder: 'مثلاً: علی احمد',
  contactEmailLabel: 'آپ کا ای میل',
  contactEmailPlaceholder: 'ali@company.com',
  contactTopicLabel: 'رابطے کا مقصد',
  contactMsgLabel: 'پیغام',
  contactMsgPlaceholder: 'اپنی ٹیم، ٹیکنالوجی اسٹیک یا آنے والے انجینئرنگ چیلنجز کے بارے میں بتائیں...',
  contactSendBtn: 'براہ راست پیغام بھیجیں',
  contactSendingBtn: 'پیغام ارسال ہو رہا ہے...',
  contactSuccess: 'پیغام کامیابی سے موصول ہو گیا! عزیر جلد آپ سے رابطہ کریں گے۔',
  contactCopyEmail: 'ای میل کاپی کریں',
  contactCopiedEmail: 'کاپی ہو گیا!',
  contactOfficeHours: 'دفتر کے اوقات (PKT)',
  contactAfterHours: 'دفتر کے اوقات کے بعد (PKT)',
  contactDirectChannels: 'براہ راست رابطے کے ذرائع',

  // Footer
  footerBuilt: 'تمام حقوق محفوظ ہیں۔ نیکسٹ جے ایس (ایپ راؤٹر) اور ٹیل ونڈ سی ایس ایس سے تیار کردہ۔'
};
