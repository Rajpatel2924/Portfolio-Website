import { ArrowUpRight, Code2, HeartPulse, Landmark, ShieldCheck, Siren } from 'lucide-react';
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
  live?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ResQ-Her',
    description:
      'Rapid-response safety app for women with silent SOS, live location sharing, trusted contact alerts, and discreet evidence capture.',
    tags: ['JavaScript', 'TypeScript', 'Python', 'CSS'],
    accent: 'coral',
    Icon: Siren,
    github: 'https://github.com/Rajpatel2924/ResQ-Her',
  },
  {
    id: 2,
    title: 'PolicyGuard',
    description:
      'Offline LLM policy analyzer built to inspect, evaluate, and flag policy concerns without depending on a hosted model workflow.',
    tags: ['Python', 'LLM', 'Policy Analysis', 'Offline Tool'],
    accent: 'gold',
    Icon: ShieldCheck,
    github: 'https://github.com/Rajpatel2924/PolicyGuard',
  },
  {
    id: 3,
    title: 'RajGharana',
    description:
      'Luxury fashion eCommerce platform with a polished storefront, authentication, checkout flow, and Razorpay payment integration.',
    tags: ['Next.js', 'JavaScript', 'Clerk', 'Razorpay'],
    accent: 'blue',
    Icon: Landmark,
    github: 'https://github.com/Rajpatel2924/RajGharana',
    live: 'https://raj-gharana.vercel.app',
  },
  {
    id: 4,
    title: 'BioBalance',
    description:
      'Full-stack health app that recommends healthier meals from vital parameters like blood pressure, blood sugar, and oxygen level.',
    tags: ['JavaScript', 'Python', 'CSS', 'HTML'],
    accent: 'mint',
    Icon: HeartPulse,
    github: 'https://github.com/Rajpatel2924/Biobalance',
  },
];

export function Projects() {
  return (
    <section className="section-band">
      <div className="section-shell">
        <div className="section-heading">
          <span className="section-kicker">GitHub projects</span>
          <h2>Featured Projects</h2>
          <p>Four selected builds from my GitHub, spanning safety, AI policy analysis, commerce, and health tech.</p>
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
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Code2 size={17} aria-hidden="true" />
                    Code
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <ArrowUpRight size={17} aria-hidden="true" />
                      Live
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
