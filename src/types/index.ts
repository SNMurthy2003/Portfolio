// Navigation Types
export type PageType = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

export interface NavItem {
  id: PageType;
  label: string;
  icon: string;
}

// Theme Types
export type ThemeColor = '#ff3b3b' | '#ff9500' | '#00c853' | '#2979ff' | '#ff4081';
export type ThemeMode = 'dark' | 'light';

export interface ThemeContextType {
  accentColor: ThemeColor;
  setAccentColor: (color: ThemeColor) => void;
  themeMode: ThemeMode;
  toggleThemeMode: () => void;
}

// Service Types
export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

// Portfolio Types
export type PortfolioCategory = 'all' | 'web' | 'mobile' | 'design';

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: Exclude<PortfolioCategory, 'all'>;
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
}

// Contact Types
export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Skill Types
export interface SkillCategory {
  id: number;
  title: string;
  icon: string;
  skills: string[];
}

// About Types
export interface PersonalDetail {
  label: string;
  value: string;
}
