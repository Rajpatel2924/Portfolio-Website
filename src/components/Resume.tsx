import { Download, FileText, GraduationCap, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const resumeHighlights = [
  'Full stack developer focused on React, JavaScript, Python, and product-focused UI.',
  'Built deployed projects across safety technology, AI policy analysis, luxury commerce, and health recommendations.',
  'Hands-on with GitHub workflows, Vercel deployments, authentication, payment flows, and responsive interfaces.',
];

const resumeFacts = [
  {
    label: 'Location',
    value: 'Kanpur, Uttar Pradesh',
    icon: MapPin,
  },
  {
    label: 'Focus',
    value: 'Full stack web apps',
    icon: FileText,
  },
  {
    label: 'Learning',
    value: 'AI, cloud, and product engineering',
    icon: GraduationCap,
  },
];

export function Resume() {
  return (
    <section id="resume" className="resume-view">
      <div className="view-shell resume-shell">
        <motion.div
          className="resume-copy"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <h2>Resume</h2>
            <span />
          </div>

          <p className="resume-kicker">Available for internships, product builds, and web development roles.</p>
          <h3>Raj Patel</h3>
          <p className="resume-summary">
            A concise snapshot of my current development profile, practical project work, and the tools I use to
            turn ideas into deployed software.
          </p>

          <div className="resume-actions">
            <a className="ai-button" href="mailto:rajpatel805233@gmail.com?subject=Resume%20Request%20-%20Raj%20Patel">
              <Mail size={18} />
              Request Resume
            </a>
            <a className="ghost-button" href="#contact">
              <Download size={18} />
              Contact Details
            </a>
          </div>
        </motion.div>

        <motion.div
          className="resume-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.58, delay: 0.1 }}
        >
          <div className="resume-card-top">
            <span>Resume Snapshot</span>
            <strong>2026</strong>
          </div>

          <ul className="resume-highlights">
            {resumeHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="resume-facts">
            {resumeFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label}>
                  <Icon size={18} />
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
