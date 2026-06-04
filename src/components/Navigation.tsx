import { Mail, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="site-nav"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-shell">
        <a className="brand-mark" href="#home" aria-label="Rudra Patel home">
          <span>RP</span>
          <strong>Rudra Patel</strong>
        </a>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
          <a className="nav-cta" href="#contact">
            <Mail size={17} aria-hidden="true" />
            Let's talk
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="mobile-nav"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
        >
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setIsOpen(false)}>
            <Mail size={17} aria-hidden="true" />
            Let's talk
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
