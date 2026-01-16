import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  showCategory?: boolean;
  index?: number;
}

// Static aspect ratio classes
const aspectRatioClasses = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3] md:aspect-[3/2]',
  square: 'aspect-square'
} as const;

/**
 * Project card component with image, hover overlay - memoized for performance
 * CSS-only animations instead of framer-motion for better FPS
 */
export const ProjectCard = memo(function ProjectCard({ 
  project, 
  aspectRatio = 'landscape', 
  showCategory = true,
  index = 0 
}: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  const handleLoad = useCallback(() => setIsLoaded(true), []);

  return (
    <Link
      to={`/project/${project.slug}`}
      className="group block relative overflow-hidden rounded-lg md:rounded-sm transform-gpu"
    >
      {/* Image Container */}
      <div className={cn('relative overflow-hidden bg-muted', aspectRatioClasses[aspectRatio])}>
        {/* Loading placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
        
        <img
          src={project.coverImage}
          alt={project.title}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-transform duration-500 will-change-transform',
            isLoaded ? 'opacity-100' : 'opacity-0',
            'md:group-hover:scale-105'
          )}
          loading={index < 4 ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
        />
        
        {/* Overlay with gradient and text - CSS transitions only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent md:from-black/80 md:via-black/20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 space-y-1 md:space-y-2">
            <h3 className="text-white text-lg md:text-xl lg:text-2xl font-light tracking-wide line-clamp-2">
              {project.title}
            </h3>
            {showCategory && (
              <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-white/80 font-light tracking-wide">
                <span className="capitalize">{project.category}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
            )}
          </div>
        </div>

        {/* Subtle hover border effect - desktop only */}
        <div className="hidden md:block absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300" />
      </div>
    </Link>
  );
});
