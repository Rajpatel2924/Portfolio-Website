import { ArrowDown, BriefcaseBusiness, Code2, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import heroImage from '../assets/hero.png';

const highlights = [
  { value: '15+', label: 'Projects shipped' },
  { value: '2 yrs', label: 'Building apps' },
  { value: '8', label: 'Core tools' },
];

const titleWords = ['Rudra', 'Patel', 'builds', 'clean,', 'expressive', 'web', 'experiences.'];

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.18,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="hero-section">
      <div className="section-shell hero-grid">
        <motion.div
          className="hero-copy"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="eyebrow" variants={itemVariants}>
            <Sparkles size={16} aria-hidden="true" />
            Available for thoughtful web work
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="animated-title" aria-label="Rudra Patel builds clean, expressive web experiences.">
              {titleWords.map((word, index) => (
                <motion.span
                  aria-hidden="true"
                  key={`${word}-${index}`}
                  initial={{ opacity: 0, filter: 'blur(14px)', y: 28 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  transition={{
                    duration: 0.68,
                    delay: 0.28 + index * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <p className="hero-subtitle">
              Full-stack developer focused on polished interfaces, reliable React apps,
              and product details that make software feel effortless.
            </p>
          </motion.div>

          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a className="button button-primary" href="#projects" whileHover={{ y: -3 }}>
              View work
              <ArrowDown size={18} aria-hidden="true" />
            </motion.a>
            <motion.a className="button button-secondary" href="#contact" whileHover={{ y: -3 }}>
              Start a conversation
            </motion.a>
          </motion.div>

          <motion.div className="social-row" variants={itemVariants} aria-label="Social links">
            <a href="https://github.com" aria-label="GitHub">
              <Code2 size={20} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <BriefcaseBusiness size={20} />
            </a>
            <a href="mailto:hello@example.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="portrait-frame">
            <img src={heroImage} alt="Portfolio portrait illustration" />
          </div>
          <div className="availability-card">
            <span className="status-dot" />
            Open to internships and freelance projects
          </div>
        </motion.div>

        <motion.div
          className="hero-highlights"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.62 }}
        >
          {highlights.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
