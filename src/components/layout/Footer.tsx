import { Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

/**
 * Enhanced footer with CTA and quick links
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/30 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand & CTA */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">
              {photographerInfo.name.toUpperCase()}
            </h2>
            <p className="text-lg text-muted-foreground font-medium max-w-sm">
              {photographerInfo.tagline}
            </p>
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="group inline-flex items-center gap-3 text-lg font-medium tracking-wide hover:text-brand-purple transition-colors"
              >
                Let's work together
                <span className="p-2 rounded-full bg-brand-purple/10 group-hover:bg-brand-purple group-hover:text-white transition-colors">
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Navigation</h3>
            <nav className="flex flex-col gap-4">
              <Link to="/" className="hover:text-brand-purple transition-colors font-medium">Home</Link>
              <Link to="/portfolio" className="hover:text-brand-purple transition-colors font-medium">Selected Works</Link>
              <Link to="/about" className="hover:text-brand-purple transition-colors font-medium">The Creator</Link>
              <Link to="/contact" className="hover:text-brand-purple transition-colors font-medium">Contact</Link>
            </nav>
          </div>

          {/* Socials & Info */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Connect</h3>
            <div className="flex flex-col gap-4">
              {photographerInfo.socialLinks.instagram && (
                <a
                  href={photographerInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:text-brand-purple transition-colors font-medium"
                >
                  <Instagram className="size-5" />
                  <span>Instagram</span>
                </a>
              )}
              {photographerInfo.socialLinks.linkedin && (
                <a
                  href={photographerInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:text-brand-blue transition-colors font-medium"
                >
                  <Linkedin className="size-5" />
                  <span>LinkedIn</span>
                </a>
              )}
              <a
                href={`mailto:${photographerInfo.email}`}
                className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {photographerInfo.email}
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-medium">
            © {currentYear} {photographerInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-medium">
            Based in {photographerInfo.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
