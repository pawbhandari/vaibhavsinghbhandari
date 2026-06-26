import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Video, PlayCircle, Layers } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

/**
 * Contact page with form and contact information
 * Cinematic design with glassmorphism touches
 */
export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description={`Get in touch with ${photographerInfo.name} for video editing inquiries, collaborations, and project bookings. ${photographerInfo.availability}`}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 lg:px-8 overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-purple/10 blur-[150px] pointer-events-none rounded-[100%]" />
          
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-purple">
                Let's Collaborate
              </h1>
              <p className="text-lg md:text-xl text-brand-blue font-medium tracking-wide">
                Ready to bring your vision to life?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="space-y-8 bg-card/40 p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-md">
                {/* Form decorative glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-purple/20 blur-[50px] rounded-full pointer-events-none" />
                
                <div className="space-y-4 relative z-10">
                  <h2 className="text-3xl font-bold tracking-wide">
                    Send a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you within 24-48 hours. <span className="text-brand-purple font-medium">{photographerInfo.availability}</span>
                  </p>
                </div>

                <div className="relative z-10">
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Information & Offerings */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-10 lg:pl-10">
                {/* What I can help with */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold tracking-wide">
                    What I can help you with
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-brand-purple/50 transition-colors">
                      <div className="p-3 rounded-lg bg-brand-purple/10 text-brand-purple">
                        <PlayCircle className="size-6" />
                      </div>
                      <div>
                        <h3 className="font-bold">Short-Form Content</h3>
                        <p className="text-sm text-muted-foreground">High-retention reels & TikToks</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-brand-blue/50 transition-colors">
                      <div className="p-3 rounded-lg bg-brand-blue/10 text-brand-blue">
                        <Video className="size-6" />
                      </div>
                      <div>
                        <h3 className="font-bold">Long-Form & YouTube</h3>
                        <p className="text-sm text-muted-foreground">Documentary style editing</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-brand-purple/50 transition-colors">
                      <div className="p-3 rounded-lg bg-brand-purple/10 text-brand-purple">
                        <Layers className="size-6" />
                      </div>
                      <div>
                        <h3 className="font-bold">Motion Graphics & 3D</h3>
                        <p className="text-sm text-muted-foreground">Visual effects and 3D reels</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-border/50" />

                {/* Direct Contact */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold tracking-wide">
                    Direct Contact
                  </h2>
                  <div className="space-y-4">
                    <a href={`mailto:${photographerInfo.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:bg-white/5 transition-colors group">
                      <div className="p-3 rounded-lg bg-secondary text-foreground group-hover:bg-brand-purple/20 group-hover:text-brand-purple transition-colors">
                        <Mail className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Email</p>
                        <p className="font-medium text-foreground">{photographerInfo.email}</p>
                      </div>
                    </a>
                    
                    <a href={`tel:${photographerInfo.phone}`} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:bg-white/5 transition-colors group">
                      <div className="p-3 rounded-lg bg-secondary text-foreground group-hover:bg-brand-blue/20 group-hover:text-brand-blue transition-colors">
                        <Phone className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Phone</p>
                        <p className="font-medium text-foreground">{photographerInfo.phone}</p>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50">
                      <div className="p-3 rounded-lg bg-secondary text-foreground">
                        <MapPin className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Location</p>
                        <p className="font-medium text-foreground">{photographerInfo.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="pt-4">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Connect on Social</p>
                  <div className="flex items-center gap-4">
                    {photographerInfo.socialLinks.instagram && (
                      <a href={photographerInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-4 bg-card rounded-xl border border-border/50 hover:bg-brand-purple/20 hover:text-brand-purple transition-all hover:-translate-y-1">
                        <Instagram className="size-6" />
                      </a>
                    )}
                    {photographerInfo.socialLinks.linkedin && (
                      <a href={photographerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-card rounded-xl border border-border/50 hover:bg-brand-blue/20 hover:text-brand-blue transition-all hover:-translate-y-1">
                        <Linkedin className="size-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <div className="h-24" />
      </div>
    </>
  );
}
