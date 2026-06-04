import { ArrowUpRight, Code2, Layers, LineChart, ShoppingBag, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  Icon: LucideIcon;
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Commerce Control Room',
    description: 'A storefront and admin workflow with inventory visibility, checkout states, and order review.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    accent: 'mint',
    Icon: ShoppingBag,
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Team Task Studio',
    description: 'A collaborative planning space for teams with focused boards, activity signals, and fast filters.',
    tags: ['React', 'Firebase', 'Tailwind', 'Redux'],
    accent: 'coral',
    Icon: Layers,
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Metrics Pulse',
    description: 'A data dashboard built for scanning trends, comparing KPIs, and catching operational changes.',
    tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    accent: 'blue',
    Icon: LineChart,
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Community Feed',
    description: 'A social app prototype with real-time posting, notifications, and lightweight profile flows.',
    tags: ['React', 'WebSockets', 'MongoDB', 'JWT'],
    accent: 'gold',
    Icon: Users,
    github: '#',
    live: '#',
  },
];

export function Projects() {
  return (
    <section className="section-band">
      <div className="section-shell">
        <div className="section-heading">
          <span className="section-kicker">Selected work</span>
          <h2>Featured Projects</h2>
          <p>Interface-focused builds with clean architecture, polished motion, and practical product thinking.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.Icon;

            return (
              <motion.article
                className={`project-card accent-${project.accent}`}
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="project-topline">
                  <span className="project-icon">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <span className="project-number">0{project.id}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github}>
                    <Code2 size={17} aria-hidden="true" />
                    Code
                  </a>
                  <a href={project.live}>
                    <ArrowUpRight size={17} aria-hidden="true" />
                    Live
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
