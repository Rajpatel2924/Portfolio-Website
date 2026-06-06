import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import profileImage from '../assets/professional-avatar.jpg';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'My Self', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'My Work', href: '#projects' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>

      <motion.header
        className="top-nav"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a className="profile-logo" href="#home" aria-label="Raj Patel home">
          <img src={profileImage} alt="" />
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>

        <a className="cv-top-link" href="#contact">
          Curriculum Vitae | CV
        </a>

        <button
          className="mobile-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.header>

      {isOpen && (
        <motion.nav
          className="mobile-menu"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          ))}
        </motion.nav>
      )}

      <aside className="social-rail" aria-label="Social links">
        <a href="https://github.com/Rajpatel2924" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
          <TwitterIcon />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
      </aside>

      <aside className="email-rail" aria-label="Email">
        <span className="rail-email">rajpatel805233@gmail.com</span>
      </aside>
    </>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.2.8-.6v-2c-3.4.7-4.1-1.5-4.1-1.5-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.3-3.3 4.3 4.3 0 0 1 .1-3.2s1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0C18 3.2 19 3.5 19 3.5a4.3 4.3 0 0 1 .1 3.2 4.7 4.7 0 0 1 1.3 3.3c0 4.7-2.8 5.7-5.5 6 .5.4.9 1.1.9 2.3v3.8c0 .4.2.7.8.6A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.5 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.2-.8.5-1.6.8-2.6 1A4 4 0 0 0 11.4 9c0 .3 0 .6.1.9A11.3 11.3 0 0 1 3.3 5.7a4 4 0 0 0 1.2 5.4c-.7 0-1.3-.2-1.8-.5v.1a4 4 0 0 0 3.2 3.9c-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1a4 4 0 0 0 3.7 2.8 8.1 8.1 0 0 1-5 1.7H1.8a11.4 11.4 0 0 0 6.2 1.8c7.4 0 11.5-6.1 11.5-11.5V9c.8-.6 1.5-1.3 2-2.2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.1 8.8h3.1v10H5.1v-10Zm1.5-4.9a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Zm4.1 4.9h3v1.4h.1c.4-.8 1.5-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8v5.5h-3.1v-4.9c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v5h-3.1v-10Z" />
    </svg>
  );
}
