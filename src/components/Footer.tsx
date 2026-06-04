import { BriefcaseBusiness, Code2, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const quickLinks = ['Home', 'Projects', 'Skills', 'Contact'];

const socialLinks = [
  { Icon: Code2, href: 'https://github.com', label: 'GitHub' },
  { Icon: BriefcaseBusiness, href: 'https://linkedin.com', label: 'LinkedIn' },
  { Icon: MessageCircle, href: 'https://twitter.com', label: 'Twitter' },
  { Icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a className="brand-mark" href="#home">
            <span>RP</span>
            <strong>Rudra Patel</strong>
          </a>
          <p>Building React products with sharp UI, practical motion, and a calm user experience.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          <h3>Explore</h3>
          <div className="footer-links">
            {quickLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
        >
          <h3>Social</h3>
          <div className="footer-socials">
            {socialLinks.map((link) => {
              const Icon = link.Icon;

              return (
                <a key={link.label} href={link.href} aria-label={link.label}>
                  <Icon size={19} />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <span>© {currentYear} Rudra Patel. All rights reserved.</span>
        <span>Built with React and Framer Motion.</span>
      </div>
    </footer>
  );
}
