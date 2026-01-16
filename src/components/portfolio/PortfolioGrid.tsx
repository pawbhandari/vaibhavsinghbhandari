import { memo, useMemo } from 'react';
import type { Project } from '@/types';
import { ProjectCard } from './ProjectCard';

interface PortfolioGridProps {
  projects: Project[];
}

/**
 * Professional portfolio grid using CSS Grid - optimized for performance
 * Uses CSS animations instead of framer-motion for smoother scrolling
 * Responsive: 3 columns desktop, 2 tablet, 1 mobile
 */
export const PortfolioGrid = memo(function PortfolioGrid({ projects }: PortfolioGridProps) {
  // Memoize the grid items to prevent unnecessary re-renders
  const gridItems = useMemo(() => 
    projects.map((project, index) => (
      <div
        key={project.id}
        className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
        style={{ animationDelay: `${Math.min(index * 50, 300)}ms`, animationDuration: '400ms' }}
      >
        <ProjectCard
          project={project}
          aspectRatio="landscape"
          showCategory={true}
          index={index}
        />
      </div>
    )), [projects]
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0">
      {gridItems}
    </div>
  );
});
