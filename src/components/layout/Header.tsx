import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState, memo } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { photographerInfo } from '@/data/photographer';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

/**
 * Main header component with cinematic glassmorphism
 */
export const Header = memo(function Header() {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Header is transparent only on homepage hero when not scrolled
  const isTransparent = location.pathname === '/' && !isScrolled;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-in slide-in-from-top',
        isTransparent
          ? 'bg-transparent py-4'
          : 'bg-background/70 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'text-lg md:text-xl font-bold tracking-widest transition-all duration-300 hover:scale-105',
              isTransparent
                ? 'text-white'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue'
            )}
          >
            {photographerInfo.name.toUpperCase()}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative text-sm uppercase font-medium tracking-widest transition-colors duration-300 group",
                    isTransparent 
                      ? "text-white hover:text-white/80" 
                      : isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.name}
                  {/* Cinematic underline effect */}
                  <div className={cn(
                    "absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-1/2"
                  )} />
                </Link>
              );
            })}
            
            {/* Let's Work Button (Only show when scrolled or not on home) */}
            <div className={cn("transition-opacity duration-300", isTransparent ? "opacity-0 pointer-events-none hidden lg:block" : "opacity-100")}>
              <Link to="/contact" className="px-6 py-2.5 bg-brand-purple/10 hover:bg-brand-purple border border-brand-purple/30 hover:border-brand-purple text-foreground hover:text-white rounded-full text-sm font-medium tracking-wide transition-all shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                Hire Me
              </Link>
            </div>
            
            <ThemeToggle />
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    'size-10 min-h-[44px] min-w-[44px] rounded-full border border-transparent transition-colors',
                    isTransparent 
                      ? 'text-white hover:bg-white/10 hover:border-white/20' 
                      : 'hover:bg-muted border-border/50'
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 p-0 border-l border-white/10 bg-background/95 backdrop-blur-xl">
                <nav className="flex flex-col mt-20 px-8">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "py-6 text-2xl font-bold tracking-wider transition-colors border-b border-border/30 first:border-t relative group",
                          isActive ? "text-brand-purple" : "text-foreground hover:text-foreground/80"
                        )}
                      >
                        {link.name}
                        {isActive && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-purple" />
                        )}
                      </Link>
                    );
                  })}
                  
                  <div className="mt-12">
                    <Link 
                      to="/contact" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center w-full py-4 bg-brand-purple text-white rounded-xl font-medium tracking-wide text-lg shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                    >
                      Start a Project
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
});
