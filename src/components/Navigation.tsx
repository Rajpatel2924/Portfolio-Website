import { BriefcaseBusiness, Camera, Code2, Mail, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

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

  return (
    <>
      <motion.header
        className="top-nav"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a className="mono-logo" href="#home" aria-label="Raj Patel home">
          <span>R</span>
          <span>P</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>

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

      <aside className="side-rail side-rail-left" aria-hidden="true">
        <div className="vertical-mark">
          {'RAJPATEL'.split('').map((letter, index) => (
            <span key={`${letter}-${index}`}>{letter}</span>
          ))}
        </div>
        <a className="cv-link" href="#contact">
          Curriculum Vitae | CV
        </a>
      </aside>

      <aside className="side-rail side-rail-right" aria-label="Social links">
        <a href="https://github.com/Rajpatel2924" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Code2 size={18} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <Camera size={18} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <BriefcaseBusiness size={18} />
        </a>
        <a href="mailto:rajpatel805233@gmail.com" aria-label="Email">
          <Mail size={18} />
        </a>
        <span className="rail-email">rajpatel805233@gmail.com</span>
      </aside>
    </>
  );
}
