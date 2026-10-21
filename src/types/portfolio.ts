export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectFlowStep {
  step: number;
  title: string;
  desc: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryTag: 'all' | 'saas' | 'realtime' | 'ai' | 'analytics';
  badge: string;
  badgeColor: string;
  description: string;
  tech: string[];
  keyPoints: string[];
  architectureHighlights: string[];
  metrics?: ProjectMetric[];
  problemStatement?: string;
  solutionOverview?: string;
  architectureFlow?: ProjectFlowStep[];
  codeSnippet?: {
    title: string;
    language: string;
    code: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description?: string;
  bullets: string[];
  tech?: string[];
  type: 'work' | 'internship';
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: 'code' | 'layout' | 'server' | 'database' | 'shield' | 'git';
  accentBorder: string;
  accentBg: string;
  skills: { name: string; highlight?: boolean; colorClass?: string }[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp?: string;
}

export interface ArchitectureBlueprint {
  id: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  diagramSteps: {
    title: string;
    desc: string;
    highlight: string;
  }[];
  benchmarks: {
    label: string;
    value: string;
    subtext: string;
  }[];
  codeTitle: string;
  codeSnippet: string;
}

export interface CredentialItem {
  title: string;
  issuer: string;
  period: string;
  type: 'degree' | 'certification' | 'specialization';
  badge: string;
  description: string;
  skills: string[];
}

export interface EndorsementItem {
  name: string;
  role: string;
  organization: string;
  initials: string;
  quote: string;
  context: string;
  tag: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  sublabel: string;
  accentColor: string;
}

