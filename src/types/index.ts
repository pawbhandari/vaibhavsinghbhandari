/**
 * Core TypeScript interfaces for Frame Portfolio
 * Based on SPECIFICATION.md data model requirements
 */

export type ProjectCategory = 'subtitle' | 'documentary' | 'podcast' | 'music_video' | 'ad_video' | 'wedding_video' | 'short_form' | '3d_reels' | 'long_form' | 'personal_projects' | 'freelance_projects';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface ProjectVideo {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  type?: 'vimeo' | 'youtube' | 'instagram';
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year?: string;
  coverImage: string;
  images?: ProjectImage[];
  description: string;
  client?: string;
  camera?: string;
  location?: string;
  slug: string;
  videoUrl?: string;
  videos?: ProjectVideo[];
}

export interface PhotographerInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  awards: string[];
  clients: string[];
  education: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    behance?: string;
  };
  portraitImage: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'editorial' | 'commercial' | 'personal';
  message: string;
  timestamp: Date;
}
