import { memo } from "react";
import { projects } from "@/data/projects";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { SEOHead } from "@/components/seo/SEOHead";

/**
 * Portfolio page with masonry grid - optimized for performance
 * Uses CSS animations for faster initial render
 */
function Portfolio() {
  return (
    <>
      <SEOHead
        title="Portfolio"
        description="Browse my complete photography portfolio featuring portraits, landscapes, editorial work, architecture, and documentary projects."
      />

      <div className="min-h-screen">
        {/* Hero Section - CSS animations */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">Portfolio</h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
              A curated collection of videos spanning diverse subjects and styles
            </p>
          </div>
        </section>

        {/* Portfolio Grid - Edge to edge */}
        <section className="py-12 md:py-16 px-2 md:px-4">
          <PortfolioGrid projects={projects} />
        </section>

        {/* Bottom spacing */}
        <div className="h-24" />
      </div>
    </>
  );
}

export default memo(Portfolio);
