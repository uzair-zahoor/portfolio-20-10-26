export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  badgeColor: string;
  description: string;
  tech: string[];
  keyPoints: string[];
  architectureHighlights: string[];
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
