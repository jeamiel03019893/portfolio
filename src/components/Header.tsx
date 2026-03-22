import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = navItems.map((item) => item.href.slice(1));

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b'>
      <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
        <a href='#' className='text-xl font-bold tracking-tight'>
          Emiel Azucena
        </a>

        <ul className='hidden md:flex items-center gap-8'>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    'text-sm transition-colors pb-1',
                    isActive
                      ? 'text-foreground border-b-2 border-violet-500'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className='flex items-center gap-3'>
          <span className='hidden md:inline-flex rounded-full bg-violet-500 text-white text-xs font-semibold px-3 py-1'>
            Open to Work
          </span>
          <button
            className='md:hidden p-2 text-muted-foreground hover:text-foreground'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label='Toggle menu'
          >
            {mobileMenuOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className='md:hidden border-t bg-background'>
          <ul className='container mx-auto px-4 py-4 flex flex-col gap-4'>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='text-muted-foreground hover:text-foreground transition-colors'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className='flex justify-center pt-2'>
              <span className='rounded-full bg-violet-500 text-white text-xs font-semibold px-3 py-1'>
                Open to Work
              </span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
