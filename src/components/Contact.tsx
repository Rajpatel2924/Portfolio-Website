import { Award, BadgeCheck, CalendarCheck, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  { by: 'ResQ-Her', text: 'Safety first' },
  { by: 'PolicyGuard', text: 'Offline AI review' },
  { by: 'RajGharana', text: 'Luxury commerce' },
  { by: 'BioBalance', text: 'Health-aware meals' },
  { by: 'Portfolio', text: 'Built with care' },
];

const certifications = [
  {
    title: 'Full Stack Development',
    platform: 'Project Based Learning',
    date: 'React, Node, Python',
    detail: 'Built production-style web apps with clean UI, APIs, auth flows, and deployment pipelines.',
    badge: 'Core Stack',
  },
  {
    title: 'Oracle Certified Foundations Associate',
    platform: 'Oracle University',
    date: 'Issued Sep 12, 2025',
    detail: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate recognition for AI, ML, and cloud fundamentals.',
    badge: 'Oracle AI',
  },
  {
    title: 'Production Deployment',
    platform: 'Vercel + GitHub',
    date: 'Live portfolio workflow',
    detail: 'Managed source control, build validation, preview releases, and production deployment on Vercel.',
    badge: 'DevOps',
  },
  {
    title: 'Commerce Integrations',
    platform: 'RajGharana',
    date: 'Clerk and Razorpay',
    detail: 'Integrated authentication and payment-ready commerce flows for a polished luxury shopping experience.',
    badge: 'Product Build',
  },
];

export function Contact() {
  return (
    <>
      <section id="reviews" className="reviews-view">
        <div className="view-shell">
          <div className="section-title">
            <h2>Some Reviews</h2>
            <span />
          </div>
        </div>

        <div className="reviews-list">
          {reviews.map((review, index) => (
            <motion.div
              className={`review-item ${index % 2 === 0 ? 'align-end' : 'align-start'}`}
              key={review.text}
              initial={{ opacity: 0, x: index % 2 === 0 ? 140 : -140, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.72, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>{review.by}</span>
              <strong>&quot;{review.text}&quot;</strong>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="certifications" className="certifications-view">
        <div className="cert-top-band" />
        <div className="view-shell certifications-shell">
          <div className="section-title">
            <h2>Licenses &amp; certifications</h2>
            <span />
          </div>

          <div className="cert-intro">
            <p>
              A compact snapshot of the tools, workflows, and product skills I have been sharpening through
              real projects and hands-on builds.
            </p>
            <div className="cert-summary" aria-label="Certification summary">
              <span>
                <BadgeCheck size={17} />
                Project verified
              </span>
              <span>
                <CalendarCheck size={17} />
                Recently practiced
              </span>
            </div>
          </div>

          <div className="cert-grid">
            {certifications.map((item, index) => (
              <motion.article
                className="cert-card"
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className="cert-head">
                  <Award size={26} />
                  <span>{item.badge}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.platform}</p>
                <div className="cert-detail">{item.detail}</div>
                <div className="cert-meta">{item.date}</div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-view">
        <div className="zebra-strip" />
        <div className="contact-box">
          <div className="contact-box-inner">
            <p className="contact-label">Get in touch</p>
            <h2>Let&apos;s Work Together</h2>
            <p>
              I&apos;m open for new opportunities, internships, and ambitious projects.
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <div className="contact-methods">
              <a href="mailto:rajpatel805233@gmail.com">
                <Mail size={18} />
                rajpatel805233@gmail.com
              </a>
              <a href="tel:+919506794037">
                <Phone size={18} />
                +91 9506794037
              </a>
              <span>
                <MapPin size={18} />
                Kanpur, Uttar Pradesh
              </span>
            </div>

            <a className="ai-button" href="mailto:rajpatel805233@gmail.com">
              Say Hello
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
