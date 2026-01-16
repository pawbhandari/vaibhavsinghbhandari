import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Camera, User, ChevronRight, Home } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { getProjectBySlug } from '@/data/projects';
import { ImageWithLightbox } from '@/components/portfolio/ImageWithLightbox';
import { Lightbox } from '@/components/portfolio/Lightbox';

/**
 * Project detail page with hero image, gallery, and full-screen lightbox
 * Features smooth animations and immersive image viewing experience
 */
export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 404 if project not found
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />
      
      <div className="min-h-screen">
        {/* Breadcrumb Navigation */}
        <motion.nav
          className="fixed top-20 left-0 right-0 z-40 px-4 md:px-6 lg:px-8 py-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-md rounded-full px-4 py-2 shadow-sm border border-border/50">
              <Link 
                to="/" 
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Home className="size-4" />
                <span className="hidden sm:inline">Home</span>
              </Link>
              <ChevronRight className="size-3 text-muted-foreground/50" />
              <Link 
                to="/portfolio" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </Link>
              <ChevronRight className="size-3 text-muted-foreground/50" />
              <span className="text-sm font-medium text-foreground truncate max-w-[150px] sm:max-w-none">
                {project.title}
              </span>
            </div>
          </div>
        </motion.nav>
        {/* Hero Image - Full width with auto height on mobile for full visibility */}
      <motion.div
        className="relative w-full overflow-hidden bg-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-auto md:h-[60vh] lg:h-[70vh] object-contain md:object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </motion.div>

      {/* Project Info Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <motion.div
          className="space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Title and Category */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-wide">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3 md:gap-6 text-xs md:text-sm text-muted-foreground font-light">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Calendar className="size-3.5 md:size-4" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 capitalize">
                <span>•</span>
                <span>{project.category}</span>
              </div>
              {project.location && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <MapPin className="size-3.5 md:size-4" />
                    <span>{project.location}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div className="space-y-4">
            <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-foreground">
              {project.description}
            </p>
          </div>

          {/* Technical Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-2 md:pt-4">
            {project.camera && (
              <div className="space-y-1.5 md:space-y-2">
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-light tracking-wide uppercase text-muted-foreground">
                  <Camera className="size-3.5 md:size-4" />
                  <span>Camera</span>
                </div>
                <p className="text-sm md:text-base font-light text-foreground">{project.camera}</p>
              </div>
            )}
            {project.client && (
              <div className="space-y-1.5 md:space-y-2">
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-light tracking-wide uppercase text-muted-foreground">
                  <User className="size-3.5 md:size-4" />
                  <span>Client</span>
                </div>
                <p className="text-sm md:text-base font-light text-foreground">{project.client}</p>
              </div>
            )}
          </div>
        </motion.div>
      </section>

        {/* Video Gallery */}
        {project.videos && project.videos.length > 0 && (
          <section className="py-8 md:py-12 lg:py-16">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 space-y-6 md:space-y-8 lg:space-y-12">
              {project.videos.map((video, index) => (
                <ScrollReveal key={video.id} delay={index * 0.1}>
                  <div 
                    className={`relative w-full overflow-hidden rounded-md md:rounded-lg ${
                      video.aspectRatio === 'portrait' 
                        ? 'aspect-[9/16] max-w-xs md:max-w-sm lg:max-w-md mx-auto' 
                        : video.aspectRatio === 'square'
                        ? 'aspect-square max-w-sm md:max-w-xl lg:max-w-2xl mx-auto'
                        : 'aspect-video'
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
          </section>
        )}

        {/* Lightbox - only show if project has images */}
        {project.images && project.images.length > 0 && (
          <Lightbox
            images={project.images}
            currentIndex={currentImageIndex}
            isOpen={lightboxOpen}
            onClose={closeLightbox}
            onNavigate={setCurrentImageIndex}
          />
        )}
      </div>
    </>
  );
}
