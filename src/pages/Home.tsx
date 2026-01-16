import { motion } from "framer-motion";
import { photographerInfo } from "@/data/photographer";
import { getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SEOHead } from "@/components/seo/SEOHead";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Homepage with immersive hero section and featured projects grid
 * Showcases photographer's best work with minimal, elegant design
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead />

      <div className="min-h-screen">
        {/* Hero Section - Full viewport with featured image, mobile-optimized height */}
        <section className="relative h-[60svh] md:min-h-[100svh] w-full overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.opacity = "0";
              }}
            >
              <source src="https://www.pexels.com/download/video/1536322/" type="video/mp4" />
            </video>
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 md:from-black/40 md:via-black/20 md:to-black/60" />
          </div>

          {/* Hero Content */}
          <div className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 md:px-6 py-20">
            <motion.div
              className="text-center space-y-4 md:space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extralight tracking-wider md:tracking-widest text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {photographerInfo.name.toUpperCase()}
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl lg:text-2xl font-light tracking-wide text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {photographerInfo.tagline}
              </motion.p>

              <motion.p
                className="text-sm md:text-base lg:text-lg font-light leading-relaxed text-white/80 max-w-2xl mx-auto px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {photographerInfo.heroIntroduction}
              </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 md:bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <ScrollReveal>
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">About My Work</h2>
                <div className="space-y-4 text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                  <p>{photographerInfo.biography.split("\n\n")[0]}</p>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm md:text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <span>Learn More About Me</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 md:py-24 lg:py-32 border-t border-border">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4 px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">Featured Projects</h2>
              <p className="text-base md:text-lg text-muted-foreground font-light tracking-wide">A selection of recent work</p>
            </div>
          </ScrollReveal>

          {/* Projects Grid - Better spacing on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 px-4 md:px-0">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
                showCategory={true}
                index={index}
              />
            ))}
          </div>

          {/* View All Link */}
          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-10 md:mt-16 px-4 md:px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-base md:text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="size-4 md:size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
