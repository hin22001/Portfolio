/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  responsibilities: string[];
  keyResult: string;
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Automation' | 'Systems' | 'Support';
  summary: string;
  contribution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  architecture?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: 'Proficient' | 'Advanced' | 'Familiar'; context: string }[];
}

export interface TransferableStrength {
  title: string;
  quote: string;
  practicalApplication: string;
  impact: string;
}

export interface SocialSkill {
  title: string;
  quote: string;
  workplaceExample: string;
}

export interface EducationItem {
  degree: string;
  major: string;
  institution: string;
  years: string;
  gpa?: string;
  honors?: string;
  coursework: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  status: 'Active' | 'In Progress';
}

export interface PortfolioProfile {
  name: string;
  title: string;
  headline: string;
  targetRoles: string;
  heroTagline: string;
  bio: string;
  strengthsAndGoals: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  status: string;
  languages: { name: string; proficiency: string }[];
  interests: string[];
}
