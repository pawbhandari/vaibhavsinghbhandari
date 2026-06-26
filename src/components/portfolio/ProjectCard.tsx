import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

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
 * Project card component with glassmorphism hover overlay
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
    <div className="group block relative overflow-hidden rounded-xl bg-card border border-border/50 shadow-lg transform-gpu transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.3)] hover:border-brand-purple/50">
      {/* Video Container */}
      <div className={cn('relative overflow-hidden bg-muted rounded-t-xl', aspectRatioClasses[aspectRatio])}>
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
            <span className="text-muted-foreground text-sm font-medium">Loading Video...</span>
          </div>
        )}
        
        {project.videoUrl ? (
          <iframe
            src={project.videoUrl}
            className={cn(
              'absolute inset-0 w-full h-full transition-opacity duration-700',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={project.title}
            loading={index < 4 ? 'eager' : 'lazy'}
            onLoad={handleLoad}
          />
        ) : (
          <img
            src={project.coverImage}
            alt={project.title}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-110',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            loading={index < 4 ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={handleLoad}
          />
        )}

        {/* Category Badge */}
        {showCategory && (
          <div className="absolute top-4 right-4 z-10 pointer-events-none">
            <span className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-md border border-white/10 text-white rounded-full capitalize shadow-sm">
              {project.category.replace('_', ' ')}
            </span>
          </div>
        )}
      </div>
      
      {/* Content Area below video */}
      <Link to={`/project/${project.slug}`} className="block p-5 md:p-6 bg-card relative z-10 cursor-pointer">
        <h3 className="text-xl md:text-2xl font-bold tracking-wide text-foreground group-hover:text-brand-purple transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
        <div className="mt-4 flex items-center text-brand-purple text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
          View Project Details →
        </div>
      </Link>
    </div>
  );
});
