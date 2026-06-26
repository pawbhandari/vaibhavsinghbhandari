import { memo, useMemo } from "react";
import { photographerInfo } from "@/data/photographer";
import { getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SEOHead } from "@/components/seo/SEOHead";
import { ArrowRight, Video, Scissors, Layers, MonitorPlay } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Homepage with immersive hero section and featured projects grid
 * Showcases video editor's best work - optimized for performance
 */
function Home() {
  // Memoize featured projects to prevent recalculation
  const featuredProjects = useMemo(() => getFeaturedProjects(), []);

  return (
    <>
      <SEOHead />

      <div className="min-h-screen">
        {/* Hero Section - Full viewport with featured video, mobile-optimized height */}
        <section className="relative h-[85svh] md:min-h-[100svh] w-full overflow-hidden bg-black">
          {/* Background Video using Stock footage */}
          <div className="absolute inset-0 pointer-events-none">
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
              <source src="https://videos.pexels.com/video-files/1536322/1536322-hd_1920_1080_30fps.mp4" type="video/mp4" />
            </video>
            {/* Gradient Overlay for text readability and cinematic feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-brand-purple/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
          </div>

          {/* Hero Content */}
          <div className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 md:px-6 py-20 z-10">
            <div className="text-center space-y-6 md:space-y-8 max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-700">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-wider md:tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                {photographerInfo.name.toUpperCase()}
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl font-medium tracking-wide text-brand-blue animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 drop-shadow-md">
                {photographerInfo.tagline}
              </p>

              <p className="text-sm md:text-base lg:text-lg font-light leading-relaxed text-white/80 max-w-2xl mx-auto px-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                {photographerInfo.heroIntroduction}
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
                <Link to="/portfolio" className="w-full sm:w-auto px-8 py-3 bg-brand-purple hover:bg-brand-purple/80 text-white rounded-full font-medium transition-colors shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                  View My Work
                </Link>
                <Link to="/contact" className="w-full sm:w-auto px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-medium transition-all">
                  Hire Me
                </Link>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 md:bottom-12 animate-in fade-in duration-700 delay-1000">
              <ScrollIndicator />
            </div>
          </div>
        </section>

        {/* Skills Showcase Section */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-background relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto text-center space-y-12 md:space-y-16 relative z-10">
            <ScrollReveal>
              <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">Creative Arsenal</h2>
                <div className="space-y-4 text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                  <p>{photographerInfo.biography.split("\n\n")[0]}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="flex flex-col items-center p-6 bg-card border border-border/50 rounded-2xl backdrop-blur-sm shadow-xl transition-transform hover:-translate-y-2 hover:border-brand-purple/50">
                  <Scissors className="size-10 mb-4 text-brand-purple" />
                  <h3 className="text-lg font-medium">Short Form</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">High-retention reels & shorts</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-card border border-border/50 rounded-2xl backdrop-blur-sm shadow-xl transition-transform hover:-translate-y-2 hover:border-brand-blue/50">
                  <Video className="size-10 mb-4 text-brand-blue" />
                  <h3 className="text-lg font-medium">Long Form</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">Documentaries & YouTube</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-card border border-border/50 rounded-2xl backdrop-blur-sm shadow-xl transition-transform hover:-translate-y-2 hover:border-brand-purple/50">
                  <MonitorPlay className="size-10 mb-4 text-brand-purple" />
                  <h3 className="text-lg font-medium">3D Motion</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">Dynamic 3D reels & VFX</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-card border border-border/50 rounded-2xl backdrop-blur-sm shadow-xl transition-transform hover:-translate-y-2 hover:border-brand-blue/50">
                  <Layers className="size-10 mb-4 text-brand-blue" />
                  <h3 className="text-lg font-medium">Design</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">Thumbnails & branding</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="flex justify-center pt-8">
                <div className="flex flex-wrap justify-center gap-4 text-muted-foreground/80 font-mono text-sm">
                  <span className="px-4 py-2 bg-secondary rounded-full">Adobe Premiere Pro</span>
                  <span className="px-4 py-2 bg-secondary rounded-full">After Effects</span>
                  <span className="px-4 py-2 bg-secondary rounded-full">Photoshop</span>
                  <span className="px-4 py-2 bg-secondary rounded-full">Illustrator</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-card/50 relative border-t border-border/30">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-20 space-y-4 px-4 md:px-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-wide">Featured Edits</h2>
              <p className="text-base md:text-lg text-brand-blue font-medium tracking-wide">A selection of recent work</p>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-4 md:px-8 max-w-7xl mx-auto">
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
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center mt-12 md:mt-20 px-4 md:px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-brand-purple/50 text-foreground rounded-full hover:bg-brand-purple/10 transition-all font-medium tracking-wide"
              >
                <span>View All Projects</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1 text-brand-purple" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}

export default memo(Home);
