import { BriefcaseBusiness, Code2, Palette, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import profileImage from '../assets/raj-hero-photo.jpeg';

const skills = [
  'JavaScript / TypeScript',
  'React.js',
  'Next.js',
  'Node.js',
  'Python',
  'MongoDB',
  'AI Tools',
  'Razorpay',
  'Clerk',
  'Responsive UI',
  'Git / GitHub',
  'Vercel',
];

const portfolioStats = [
  {
    label: 'LeetCode',
    value: '200+',
    detail: 'solved',
  },
  {
    label: 'Contest Rating',
    value: '1529',
  },
  {
    label: 'GitHub Repos',
    value: '7',
    detail: 'public',
  },
  {
    label: 'Best Rank',
    value: '6000',
    detail: 'weekly',
  },
];

const experiences = [
  {
    company: 'Portfolio Projects',
    role: 'Full Stack Developer',
    duration: '2025 - Present',
    bullets: [
      'Built and deployed project-focused web applications using modern JavaScript, React, and backend tooling.',
      'Created user-facing products across women safety, healthcare recommendations, eCommerce, and AI policy analysis.',
      'Managed GitHub workflows, production deployments, and interface polish for portfolio-ready projects.',
    ],
  },
  {
    company: 'RajGharana',
    role: 'eCommerce Developer',
    duration: 'May 2026',
    bullets: [
      'Designed a luxury fashion storefront experience with clean product presentation and conversion-focused UI.',
      'Integrated authentication and payment flows using Clerk and Razorpay.',
      'Published the project as a live Vercel deployment with a production-ready GitHub repository.',
    ],
  },
  {
    company: 'PolicyGuard',
    role: 'AI Tool Builder',
    duration: 'Feb 2026',
    bullets: [
      'Built an offline LLM policy analyzer focused on practical review and policy-risk detection.',
      'Kept the tooling lightweight and Python-based for local-first analysis workflows.',
      'Structured the project so it can evolve into a reusable compliance and review assistant.',
    ],
  },
];

export function Skills() {
  const [selected, setSelected] = useState(0);
  const current = experiences[selected];

  return (
    <>
      <section className="about-view">
        <div className="view-shell about-grid">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
          >
            <div className="section-title">
              <h2>My Portfolio</h2>
              <span />
            </div>

            <div className="portfolio-kicker">Full stack developer / product builder</div>

            <p>
              Hello! My name is Raj Patel. I enjoy building useful digital products
              and exploring how software can make everyday problems easier to solve.
            </p>
            <p>
              My work spans safety technology, AI policy analysis, luxury commerce,
              and health-focused recommendations. I like projects where interface
              quality and engineering clarity both matter.
            </p>
            <p>
              Over time I have focused on turning ideas into deployed experiences
              with React, JavaScript, Python, GitHub, and Vercel.
            </p>

            <div className="portfolio-highlights" aria-label="Portfolio stats">
              {portfolioStats.map((stat) => (
                <span key={stat.label}>
                  <small>{stat.label}</small>
                  <strong>{stat.value}</strong>
                  {stat.detail}
                </span>
              ))}
            </div>

            <div className="skill-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <motion.div
              className="hover-image"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="hover-image-border" />
              <div className="hover-image-filter" />
              <img src={profileImage} alt="Raj Patel profile photo" />
              <div className="portfolio-image-badge">Raj Patel</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="experience-view">
        <div className="view-shell experience-shell">
          <div className="section-title">
            <h2>My Work Experiences</h2>
            <span />
          </div>

          <div className="experience-tabs">
            <div className="experience-tab-list" role="tablist" aria-label="Experience tabs">
              {experiences.map((experience, index) => (
                <button
                  className={selected === index ? 'selected' : ''}
                  key={experience.company}
                  type="button"
                  role="tab"
                  aria-selected={selected === index}
                  onClick={() => setSelected(index)}
                >
                  {experience.company}
                </button>
              ))}
            </div>

            <motion.div
              className="experience-panel"
              key={current.company}
              initial={{ opacity: 0, x: 28, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              role="tabpanel"
            >
              <div className="experience-eyebrow">Selected Experience</div>
              <div className="experience-title">
                <BriefcaseBusiness size={22} />
                <h3>
                  {current.role} <span>@ {current.company}</span>
                </h3>
              </div>
              <p className="experience-duration">{current.duration}</p>
              <ul>
                {current.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="capability-strip" aria-label="Capabilities">
            <span>
              <Code2 size={18} />
              Product Engineering
            </span>
            <span>
              <ShieldCheck size={18} />
              Safety & Policy
            </span>
            <span>
              <Palette size={18} />
              Interface Polish
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
