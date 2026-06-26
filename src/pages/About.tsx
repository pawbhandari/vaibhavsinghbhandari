import { motion } from "framer-motion";
import { Instagram, Linkedin, Video, Scissors, Layers, MonitorPlay, Award } from "lucide-react";
import { photographerInfo } from "@/data/photographer";
import { Separator } from "@/components/ui/separator";
import { SEOHead } from "@/components/seo/SEOHead";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * About page with editor biography, skills, and services
 * Cinematic dark theme with glassmorphism touches
 */
export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${photographerInfo.name}, ${photographerInfo.tagline}. ${photographerInfo.biography.split("\n\n")[0]}`}
        image={photographerInfo.portraitImage}
      />

      <div className="min-h-screen bg-background pb-20">
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 blur-[150px] pointer-events-none rounded-full" />

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-blue">
                The Creator
              </h1>
              <p className="text-lg md:text-xl text-brand-purple font-medium tracking-wide">
                Behind The Screen
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portrait and Biography - Split Layout */}
        <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
            {/* Portrait Image */}
            <ScrollReveal>
              <div className="relative group">
                {/* Glow behind image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple to-brand-blue opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-700" />

                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-card border border-white/10 shadow-2xl z-10">
                  <img
                    src="https://ik.imagekit.io/6qlriee6f/final.jpeg"
                    alt={photographerInfo.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
                </div>

                {/* Social Links Badge */}
                <div className="absolute -bottom-6 -right-2 md:-right-6 z-20 flex items-center gap-3 bg-card/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  {photographerInfo.socialLinks.instagram && (
                    <a
                      href={photographerInfo.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 rounded-xl hover:bg-brand-purple/20 hover:text-brand-purple transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="size-6" />
                    </a>
                  )}
                  {photographerInfo.socialLinks.linkedin && (
                    <a
                      href={photographerInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 rounded-xl hover:bg-brand-blue/20 hover:text-brand-blue transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-6" />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* Biography and Info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                {/* Name and Tagline */}
                <div className="space-y-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" />
                  <h2 className="text-4xl md:text-5xl font-bold tracking-wide">{photographerInfo.name}</h2>
                  <p className="text-xl text-muted-foreground font-medium tracking-wide">{photographerInfo.tagline}</p>
                </div>

                {/* Biography Text */}
                <div className="space-y-4 prose prose-invert max-w-none">
                  {photographerInfo.biography.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-base md:text-lg font-light leading-relaxed text-foreground/80">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="p-4 bg-card/50 rounded-xl border border-border/50">
                    <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-medium">Location</p>
                    <p className="font-medium">{photographerInfo.location}</p>
                  </div>
                  <div className="p-4 bg-card/50 rounded-xl border border-border/50">
                    <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-medium">Availability</p>
                    <p className="font-medium text-brand-purple">{photographerInfo.availability}</p>
                  </div>
                  <div className="p-4 bg-card/50 rounded-xl border border-border/50 col-span-2">
                    <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-medium">Email</p>
                    <a href={`mailto:${photographerInfo.email}`} className="font-medium text-brand-blue hover:underline">
                      {photographerInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Separator className="my-12 md:my-24 max-w-7xl mx-auto bg-border/30" />

        {/* Services Section */}
        <section className="px-4 md:px-8 max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
              <p className="text-muted-foreground">What I can bring to your next project</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border/50 hover:border-brand-purple/50 transition-colors group">
                <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-purple/20 transition-colors">
                  <Scissors className="text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Short Form Content</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">High-energy, engaging reels and TikToks optimized for algorithm retention and viral growth.</p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border/50 hover:border-brand-blue/50 transition-colors group">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
                  <Video className="text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Long Form Editing</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Paced documentary, YouTube, and podcast editing focused on storytelling and narrative flow.</p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border/50 hover:border-brand-purple/50 transition-colors group">
                <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-purple/20 transition-colors">
                  <MonitorPlay className="text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">3D Reels & VFX</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Eye-catching 3D product motion graphics and visual effects that make brands stand out.</p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border/50 hover:border-brand-blue/50 transition-colors group">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
                  <Layers className="text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Graphic Design</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">YouTube thumbnails, brand identity, and social media assets to complement video content.</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Tools & Recognition */}
        <section className="mt-24 px-4 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24">
          <ScrollReveal>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <Layers className="text-brand-purple" />
                Software & Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                {['Adobe Premiere Pro', 'After Effects', 'Photoshop', 'Illustrator', 'DaVinci Resolve', 'Blender', 'Figma'].map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium border border-border/50">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <Award className="text-brand-blue" />
                Recognition & Clients
              </h2>
              <div className="space-y-4">
                {photographerInfo.awards.map((award, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-card/40 rounded-xl border border-border/30">
                    <div className="mt-1 w-2 h-2 rounded-full bg-brand-blue flex-shrink-0" />
                    <p className="text-foreground/90">{award}</p>
                  </div>
                ))}

                <div className="pt-6">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Trusted By Niches In</p>
                  <div className="flex flex-wrap gap-2">
                    {photographerInfo.clients.map((client) => (
                      <span key={client} className="text-sm text-foreground/80 px-3 py-1 bg-white/5 rounded-md">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
