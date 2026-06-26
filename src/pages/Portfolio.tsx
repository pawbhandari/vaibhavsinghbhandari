import { memo } from "react";
import { projects } from "@/data/projects";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { SEOHead } from "@/components/seo/SEOHead";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Portfolio page with masonry grid - optimized for performance
 * Showcases video editing and design projects
 */
function Portfolio() {
  return (
    <>
      <SEOHead
        title="Portfolio"
        description="Browse my complete video editing portfolio featuring documentaries, short-form reels, 3D motion graphics, and commercial projects."
      />

      <div className="min-h-screen bg-background">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-brand-purple/10 blur-[120px] pointer-events-none rounded-b-[100%]" />

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-purple">
              Selected Works
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide max-w-2xl mx-auto">
              A curated collection of edits spanning diverse formats and visual styles
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="pb-24 px-4 md:px-8 max-w-7xl mx-auto pt-8">
          <PortfolioGrid projects={projects} />
        </section>
      </div>
    </>
  );
}

export default memo(Portfolio);
