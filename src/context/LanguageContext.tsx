'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations, translationsEn, translationsUrdu } from '@/data/translations';
import { 
  personalInfo as personalInfoEn, 
  heroStats as heroStatsEn, 
  heroBadges as heroBadgesEn, 
  experienceData as experienceDataEn, 
  impactStats as impactStatsEn, 
  projectsData as projectsDataEn, 
  architectureBlueprints as architectureBlueprintsEn, 
  credentialsData as credentialsDataEn, 
  endorsementsData as endorsementsDataEn, 
  skillsCategories as skillsCategoriesEn 
} from '@/data/portfolioData';
import { 
  personalInfoUrdu, 
  heroStatsUrdu, 
  heroBadgesUrdu, 
  experienceDataUrdu, 
  impactStatsUrdu, 
  projectsDataUrdu, 
  architectureBlueprintsUrdu, 
  credentialsDataUrdu, 
  endorsementsDataUrdu, 
  skillsCategoriesUrdu 
} from '@/data/portfolioDataUrdu';
import { 
  ProjectDetail, 
  ExperienceItem, 
  SkillCategory, 
  ImpactStat, 
  ArchitectureBlueprint, 
  CredentialItem, 
  EndorsementItem 
} from '@/types/portfolio';

export interface LocalizedPortfolioData {
  personalInfo: typeof personalInfoEn;
  heroStats: typeof heroStatsEn;
  heroBadges: string[];
  experienceData: ExperienceItem[];
  impactStats: ImpactStat[];
  projectsData: Record<string, ProjectDetail>;
  architectureBlueprints: ArchitectureBlueprint[];
  credentialsData: CredentialItem[];
  endorsementsData: EndorsementItem[];
  skillsCategories: SkillCategory[];
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRTL: boolean;
  dir: 'ltr' | 'rtl';
  t: Translations;
  data: LocalizedPortfolioData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('portfolio_lang') as Language | null;
      if (savedLang && (savedLang === 'en' || savedLang === 'ur')) {
        setLanguageState(savedLang);
      }
    } catch {
      // localStorage may fail in restricted/private modes
    }
    setMounted(true);
  }, []);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem('portfolio_lang', newLang);
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  const isRTL = language === 'ur';
  const dir = isRTL ? 'rtl' : 'ltr';

  // Synchronize document element attributes whenever language changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = dir;
      if (isRTL) {
        document.documentElement.classList.add('rtl-mode');
      } else {
        document.documentElement.classList.remove('rtl-mode');
      }
    }
  }, [language, dir, isRTL]);

  const t = language === 'ur' ? translationsUrdu : translationsEn;

  const data: LocalizedPortfolioData = {
    personalInfo: language === 'ur' ? (personalInfoUrdu as typeof personalInfoEn) : personalInfoEn,
    heroStats: language === 'ur' ? impactStatsUrdu && heroStatsUrdu : heroStatsEn,
    heroBadges: language === 'ur' ? heroBadgesUrdu : heroBadgesEn,
    experienceData: language === 'ur' ? experienceDataUrdu : experienceDataEn,
    impactStats: language === 'ur' ? impactStatsUrdu : impactStatsEn,
    projectsData: language === 'ur' ? projectsDataUrdu : projectsDataEn,
    architectureBlueprints: language === 'ur' ? architectureBlueprintsUrdu : architectureBlueprintsEn,
    credentialsData: language === 'ur' ? credentialsDataUrdu : credentialsDataEn,
    endorsementsData: language === 'ur' ? endorsementsDataUrdu : endorsementsDataEn,
    skillsCategories: language === 'ur' ? skillsCategoriesUrdu : skillsCategoriesEn,
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isRTL,
        dir,
        t,
        data,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
