import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Camera, User, ChevronRight, Home, Video } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { getProjectBySlug, getAllProjectVideos } from '@/data/projects';

/**
 * Project detail page with video hero and gallery
 * Features cinematic design elements and video-first focus
 */
export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  // 404 if project not found
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const allVideos = getAllProjectVideos(project.id);

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />
      
      <div className="min-h-screen bg-background">
        {/* Breadcrumb Navigation */}
        <motion.nav
          className="fixed top-20 left-0 right-0 z-40 px-4 md:px-6 lg:px-8 py-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-md rounded-full px-4 py-2 shadow-sm border border-border/50">
              <Link 
                to="/" 
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-brand-purple transition-colors"
              >
                <Home className="size-4" />
                <span className="hidden sm:inline">Home</span>
              </Link>
              <ChevronRight className="size-3 text-muted-foreground/50" />
              <Link 
                to="/portfolio" 
                className="text-sm text-muted-foreground hover:text-brand-purple transition-colors"
              >
                Portfolio
              </Link>
              <ChevronRight className="size-3 text-muted-foreground/50" />
              <span className="text-sm font-medium text-foreground truncate max-w-[150px] sm:max-w-none text-brand-blue">
                {project.title}
              </span>
            </div>
          </div>
        </motion.nav>

        {/* Hero Video Section */}
        <motion.div
          className="relative w-full overflow-hidden bg-black pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="max-w-5xl mx-auto px-4 relative z-10">
            {project.videoUrl ? (
              <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.15)] border border-white/10 bg-card">
                <iframe
                  src={project.videoUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-auto md:h-[60vh] lg:h-[70vh] object-cover rounded-xl shadow-2xl"
                loading="eager"
              />
            )}
          </div>
        </motion.div>

        {/* Project Info Section */}
        <section className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Title and Category */}
            <div className="space-y-4">
              <div className="w-20 h-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full mb-6" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-foreground">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3 md:gap-6 text-xs md:text-sm text-muted-foreground font-medium">
                {project.year && (
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <Calendar className="size-4 text-brand-purple" />
                    <span>{project.year}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 md:gap-2 capitalize">
                  <Video className="size-4 text-brand-blue" />
                  <span>{project.category.replace('_', ' ')}</span>
                </div>
                {project.location && (
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <MapPin className="size-4 text-brand-purple" />
                    <span>{project.location}</span>
                  </div>
                )}
              </div>
            </div>

            <Separator className="bg-border/50" />

            {/* Description */}
            <div className="space-y-4">
              <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-foreground/90">
                {project.description}
              </p>
            </div>

            {/* Technical Details */}
            {(project.camera || project.client) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4">
                {project.camera && (
                  <div className="space-y-2 p-4 rounded-lg bg-card/50 border border-border/50">
                    <div className="flex items-center gap-2 text-xs md:text-sm font-medium uppercase text-muted-foreground">
                      <Camera className="size-4 text-brand-purple" />
                      <span>Software/Tools</span>
                    </div>
                    <p className="text-sm md:text-base font-medium text-foreground">{project.camera}</p>
                  </div>
                )}
                {project.client && (
                  <div className="space-y-2 p-4 rounded-lg bg-card/50 border border-border/50">
                    <div className="flex items-center gap-2 text-xs md:text-sm font-medium uppercase text-muted-foreground">
                      <User className="size-4 text-brand-blue" />
                      <span>Client</span>
                    </div>
                    <p className="text-sm md:text-base font-medium text-foreground">{project.client}</p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </section>

        {/* Video Gallery (if multiple videos exist) */}
        {project.videos && project.videos.length > 1 && (
          <section className="py-12 md:py-20 bg-card/30 border-t border-border/30">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold tracking-wide">More from this project</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {project.videos.slice(1).map((video, index) => (
                  <ScrollReveal key={video.id} delay={index * 0.1}>
                    <div 
                      className={`relative w-full overflow-hidden rounded-xl border border-white/10 bg-card shadow-xl mx-auto ${
                        video.aspectRatio === 'portrait' 
                          ? 'aspect-[9/16] max-w-[320px]' 
                          : video.aspectRatio === 'square'
                          ? 'aspect-square max-w-md'
                          : 'aspect-video w-full'
                      }`}
                    >
                      {video.type === 'instagram' ? (
                        <iframe
                          src={video.src}
                          title={video.alt}
                          className="absolute inset-0 w-full h-full border-0"
                          allowFullScreen
                          scrolling="no"
                        />
                      ) : (
                        <iframe
                          src={video.src}
                          title={video.alt}
                          className="absolute inset-0 w-full h-full"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        />
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
