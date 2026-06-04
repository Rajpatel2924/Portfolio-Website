import { Code2, Database, Gauge, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Frontend Systems',
    summary: 'Accessible, responsive interfaces with reusable React components.',
    Icon: Code2,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend Foundations',
    summary: 'APIs, persistence, auth patterns, and data workflows that stay understandable.',
    Icon: Database,
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  },
  {
    category: 'Product Polish',
    summary: 'Interaction details, visual hierarchy, and microcopy that help users move faster.',
    Icon: Palette,
    skills: ['UI Design', 'Wireframes', 'Design Systems', 'Accessibility'],
  },
  {
    category: 'Performance',
    summary: 'Lean bundles, sensible state, and page experiences that feel fast on real devices.',
    Icon: Gauge,
    skills: ['Vite', 'Optimization', 'Debugging', 'Testing'],
  },
];

export function Skills() {
  return (
    <section className="section-band skills-band">
      <div className="section-shell">
        <div className="section-heading align-left">
          <span className="section-kicker">Capabilities</span>
          <h2>Skills & Expertise</h2>
          <p>Core tools and habits I use to take an idea from rough prototype to usable product.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.Icon;

            return (
              <motion.article
                className="skill-card"
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="skill-card-header">
                  <span>
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3>{group.category}</h3>
                </div>
                <p>{group.summary}</p>
                <div className="skill-chip-row">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
