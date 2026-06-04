import { ArrowUpRight, Code2, HeartPulse, Landmark, ShieldCheck, Siren } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ResQ-Her',
    description:
      'Rapid-response safety app for women with silent SOS, live location sharing, trusted contact alerts, and discreet evidence capture.',
    tags: 'JavaScript | TypeScript | Python | CSS',
    url: 'github.com/Rajpatel2924/ResQ-Her',
    github: 'https://github.com/Rajpatel2924/ResQ-Her',
    Icon: Siren,
    color: 'coral',
  },
  {
    title: 'PolicyGuard',
    description:
      'Offline LLM policy analyzer built to inspect, evaluate, and flag policy concerns without depending on a hosted model workflow.',
    tags: 'Python | LLM | Policy Analysis',
    url: 'github.com/Rajpatel2924/PolicyGuard',
    github: 'https://github.com/Rajpatel2924/PolicyGuard',
    Icon: ShieldCheck,
    color: 'gold',
  },
  {
    title: 'RajGharana',
    description:
      'Luxury fashion eCommerce platform with a polished storefront, authentication, checkout flow, and Razorpay payment integration.',
    tags: 'Next.js | JavaScript | Clerk | Razorpay',
    url: 'raj-gharana.vercel.app',
    github: 'https://github.com/Rajpatel2924/RajGharana',
    live: 'https://raj-gharana.vercel.app',
    Icon: Landmark,
    color: 'blue',
  },
  {
    title: 'BioBalance',
    description:
      'Full-stack health app that recommends healthier meals from vital parameters like blood pressure, blood sugar, and oxygen level.',
    tags: 'JavaScript | Python | CSS | HTML',
    url: 'github.com/Rajpatel2924/Biobalance',
    github: 'https://github.com/Rajpatel2924/Biobalance',
    Icon: HeartPulse,
    color: 'mint',
  },
];

function BrowserPreview({ project }: { project: (typeof projects)[number] }) {
  const Icon = project.Icon;

  return (
    <div className={`browser-window preview-${project.color}`}>
      <div className="browser-bar">
        <div className="browser-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-url">{project.url}</div>
      </div>
      <div className="preview-stage">
        <div className="preview-icon">
          <Icon size={62} />
        </div>
        <div className="preview-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section className="projects-view">
      <div className="view-shell projects-shell">
        <div className="section-title">
          <h2>Things I&apos;ve Worked on</h2>
          <span />
        </div>

        <div className="project-showcase">
          {projects.map((project, index) => {
            const flipped = index % 2 === 1;

            return (
              <motion.article
                className={`project-row ${flipped ? 'flipped' : ''}`}
                key={project.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-90px' }}
                transition={{ duration: 0.62 }}
              >
                <div className="project-window-side">
                  <BrowserPreview project={project} />
                </div>

                <div className="project-text-side">
                  <p className="featured-label">Featured Project</p>
                  <h3>{project.title}</h3>
                  <div className="project-description">{project.description}</div>
                  <p className="project-tech">{project.tags}</p>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Code2 size={17} />
                      Code
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <ArrowUpRight size={17} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
