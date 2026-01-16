import type { Project, ProjectVideo } from "@/types";

// ========================================
// Cover Images - imported from assets
// ========================================
import shortFormCover from "@/assets/covers/short-form.png";
import threeDReelsCover from "@/assets/covers/3d-reels.png";
import longFormCover from "@/assets/covers/long-form.png";
import personalProjectCover from "@/assets/covers/personal-project.png";
import freelanceProjectsCover from "@/assets/covers/freelance-projects.png";

// ========================================
// Projects Data
// ========================================
export const projects: Project[] = [
  {
    id: "1",
    title: "Short Form",
    category: "short_form",
    slug: "short-form",
    coverImage: shortFormCover,
    description:
      "High-energy short-form content for social media - Reels, Shorts, TikTok videos with motion graphics and fast cuts.",
    videoUrl: "https://player.vimeo.com/video/1154313456?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    videos: [
      {
        id: "sf-1",
        src: "https://player.vimeo.com/video/1154313456?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        alt: "Hrithik Roshan Raw Video",
        aspectRatio: "portrait",
      },
    ],
  },

  {
    id: "2",
    title: "3D Reels",
    category: "3d_reels",
    slug: "3d-reels",
    coverImage: threeDReelsCover,
    description:
      "Dynamic 3D motion graphics reels with smooth animations and modern effects. Studio-quality 3D rendering and VFX.",
    videoUrl: "https://player.vimeo.com/video/1154314675?badge=0&autopause=0&player_id=0&app_id=58479",
    videos: [
      {
        id: "3d-1",
        src: "https://player.vimeo.com/video/1154314675?badge=0&autopause=0&player_id=0&app_id=58479",
        alt: "Portfolio 1",
        aspectRatio: "portrait",
      },
    ],
  },

  {
    id: "3",
    title: "Long Form",
    category: "long_form",
    slug: "long-form",
    coverImage: longFormCover,
    description:
      "Landscape cinematic videos, brand films, and long-format storytelling with professional color grading and sound design.",
    videoUrl: "https://player.vimeo.com/video/YOUR_LONG_FORM_VIDEO_ID", // Landscape format
    videos: [
      {
        id: "lf-1",
        src: "https://player.vimeo.com/video/YOUR_LONG_FORM_VIDEO_ID",
        alt: "Long Form Video",
        aspectRatio: "landscape",
      },
    ],
  },

  {
    id: "4",
    title: "Personal Projects",
    category: "personal_projects",
    slug: "personal-projects",
    coverImage: personalProjectCover,
    description:
      "Creative personal experiments showcasing unique editing styles, color grading, and conceptual storytelling.",
    videoUrl: "https://player.vimeo.com/video/1154249350?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    videos: [
      {
        id: "pp-1",
        src: "https://player.vimeo.com/video/1154249350?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        alt: "Punjabi Ajao Oyeeee",
        aspectRatio: "portrait",
      },
    ],
  },

  {
    id: "5",
    title: "Freelance Projects",
    category: "freelance_projects",
    slug: "freelance-projects",
    coverImage: freelanceProjectsCover,
    description:
      "Client work across various niches - commercial videos, tutorials, and promotional content demonstrating versatility.",
    videoUrl: "https://player.vimeo.com/video/YOUR_FREELANCE_VIDEO_ID", // Replace with your video
    videos: [
      {
        id: "fr-1",
        src: "https://player.vimeo.com/video/YOUR_FREELANCE_VIDEO_ID",
        alt: "Freelance Project",
        aspectRatio: "landscape",
      },
    ],
  },
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
 * Get featured projects (first 4)
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
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

  // Include main video + additional videos
  const mainVideo: ProjectVideo = {
    id: `${projectId}-main`,
    src: project.videoUrl,
    alt: project.title,
    aspectRatio: "landscape",
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
