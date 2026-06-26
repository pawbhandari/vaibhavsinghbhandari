import type { Project, ProjectVideo } from "@/types";

// ========================================
// Cover Images - imported from assets
// We'll use these as fallbacks if needed, but our new design prioritizes video embeds
// ========================================
import shortFormCover from "@/assets/covers/short-form.png";
import threeDReelsCover from "@/assets/covers/3d-reels.png";
import longFormCover from "@/assets/covers/long-form.png";
import personalProjectCover from "@/assets/covers/personal-project.png";
import freelanceProjectsCover from "@/assets/covers/freelance-projects.png";

// Helper function to format Vimeo URLs for embedding cleanly
const formatVimeoUrl = (id: string) => `https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479`;

// Helper function to format YouTube URLs for embedding
const formatYouTubeUrl = (id: string) => `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;

// ========================================
// Projects Data
// ========================================
export const projects: Project[] = [
  {
    id: "2",
    title: "Documentary Edit",
    category: "documentary",
    slug: "documentary-edit",
    coverImage: longFormCover,
    description: "Long-form documentary style editing focusing on pacing, emotional narrative, and seamless b-roll integration.",
    videoUrl: formatVimeoUrl("1204546738"),
    videos: [
      {
        id: "doc-1",
        src: formatVimeoUrl("1204546738"),
        alt: "Documentary Edit",
        aspectRatio: "landscape",
        type: "vimeo",
      }
    ],
  },
  {
    id: "yt-1",
    title: "YouTube Feature Edit",
    category: "documentary",
    slug: "youtube-feature-edit",
    coverImage: longFormCover,
    description: "High-quality YouTube feature edit focused on seamless storytelling and retention.",
    videoUrl: formatYouTubeUrl("fnmbKE7EjYs"),
    videos: [
      {
        id: "yt-v1",
        src: formatYouTubeUrl("fnmbKE7EjYs"),
        alt: "YouTube Feature Edit",
        aspectRatio: "landscape",
        type: "youtube",
      }
    ],
  },
  {
    id: "1",
    title: "Subtitle Animation",
    category: "subtitle",
    slug: "subtitle-animation",
    coverImage: shortFormCover,
    description: "Dynamic and engaging subtitle animations for short-form content. Retaining audience attention through kinetic typography and visual pacing.",
    videoUrl: formatVimeoUrl("1204546737"),
    videos: [
      {
        id: "sub-1",
        src: formatVimeoUrl("1204546737"),
        alt: "Subtitle Animation",
        aspectRatio: "portrait",
        type: "vimeo",
      }
    ],
  },
  {
    id: "3",
    title: "Podcast Highlights",
    category: "podcast",
    slug: "podcast-highlights",
    coverImage: personalProjectCover,
    description: "High-energy podcast snippets edited for social media reach. Multi-cam switching, color grading, and motion graphics.",
    videoUrl: formatVimeoUrl("1154313456"),
    videos: [
      {
        id: "pod-1",
        src: formatVimeoUrl("1154313456"),
        alt: "Podcast Highlights",
        aspectRatio: "portrait",
        type: "vimeo",
      }
    ],
  },
  {
    id: "4",
    title: "Music Video",
    category: "music_video",
    slug: "music-video",
    coverImage: threeDReelsCover,
    description: "Creative music video editing with beat-syncing, color grading, and visual effects to match the track's energy.",
    videoUrl: formatVimeoUrl("1154249350"),
    videos: [
      {
        id: "mv-1",
        src: formatVimeoUrl("1154249350"),
        alt: "Music Video",
        aspectRatio: "portrait",
        type: "vimeo",
      }
    ],
  },
  {
    id: "5",
    title: "Ad Video / Commercial",
    category: "ad_video",
    slug: "ad-video",
    coverImage: freelanceProjectsCover,
    description: "High-conversion commercial video editing for brands. Clean, professional, and persuasive visual storytelling.",
    videoUrl: formatVimeoUrl("1154248989"),
    videos: [
      {
        id: "ad-1",
        src: formatVimeoUrl("1154248989"),
        alt: "Ad Video",
        aspectRatio: "portrait",
        type: "vimeo",
      }
    ],
  },
  {
    id: "6",
    title: "Wedding Video",
    category: "wedding_video",
    slug: "wedding-video",
    coverImage: longFormCover,
    description: "Cinematic and emotional wedding videography edits. Capturing special moments with perfect sound design and color grading.",
    videoUrl: formatVimeoUrl("1154244497"),
    videos: [
      {
        id: "wed-1",
        src: formatVimeoUrl("1154244497"),
        alt: "Wedding Video",
        aspectRatio: "portrait",
        type: "vimeo",
      }
    ],
  }
];

// ========================================
// Helper Functions
// ========================================

/**
 * Get a single project by slug
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

/**
 * Get all projects from a specific category
 */
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};

/**
 * Get all unique categories
 */
export const getAllCategories = (): string[] => {
  return Array.from(new Set(projects.map((p) => p.category)));
};

/**
 * Get featured projects
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4); // Return first 4 for the homepage grid
};

/**
 * Get adjacent projects for navigation
 */
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};

/**
 * Get all videos for a project
 */
export const getAllProjectVideos = (projectId: string): ProjectVideo[] => {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return [];

  const mainVideo: ProjectVideo = {
    id: `${projectId}-main`,
    src: project.videoUrl!,
    alt: project.title,
    aspectRatio: "portrait", // Defaulting to portrait as most are
  };

  return [mainVideo, ...(project.videos || [])];
};

/**
 * Get projects by aspect ratio type
 */
export const getProjectsByAspectRatio = (aspectRatio: "portrait" | "landscape" | "square"): Project[] => {
  return projects.filter((project) => {
    if (!project.videos) return aspectRatio === "landscape";
    return project.videos.some((v) => v.aspectRatio === aspectRatio);
  });
};

// Re-export types for convenience
export type { Project, ProjectVideo } from "@/types";
