import { memo, useMemo } from 'react';
import type { Project } from '@/types';
import { ProjectCard } from './ProjectCard';

interface PortfolioGridProps {
  projects: Project[];
}

/**
 * Professional portfolio grid using CSS columns for Masonry layout
 * Mixes vertical and horizontal thumbnails seamlessly.
 */
export const PortfolioGrid = memo(function PortfolioGrid({ projects }: PortfolioGridProps) {
  // Extract aspect ratio from project data
  const getAspectRatio = (project: Project): 'portrait' | 'landscape' | 'square' => {
    if (project.videos && project.videos.length > 0 && project.videos[0].aspectRatio) {
      return project.videos[0].aspectRatio;
    }
    // Default to portrait since most of the user's content is reels/tiktok style
    return 'portrait';
  };
  // Memoize the grid items to prevent unnecessary re-renders
  const gridItems = useMemo(() => 
    projects.map((project, index) => (
      <div
        key={project.id}
        className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both break-inside-avoid inline-block w-full mb-4 md:mb-6 lg:mb-8"
        style={{ animationDelay: `${Math.min(index * 50, 300)}ms`, animationDuration: '400ms' }}
      >
        <ProjectCard
          project={project}
          aspectRatio={getAspectRatio(project)}
          showCategory={true}
          index={index}
        />
      </div>
    )), [projects]
  );

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0">
      {gridItems}
    </div>
  );
});
