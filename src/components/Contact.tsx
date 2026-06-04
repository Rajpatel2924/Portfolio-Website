import { Award, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  { by: 'ResQ-Her', text: 'Safety first' },
  { by: 'PolicyGuard', text: 'Offline AI review' },
  { by: 'RajGharana', text: 'Luxury commerce' },
  { by: 'BioBalance', text: 'Health-aware meals' },
  { by: 'Portfolio', text: 'Built with care' },
];

const certifications = [
  { title: 'Full Stack Development', platform: 'Project Based Learning', date: 'React, Node, Python' },
  { title: 'AI Policy Analysis', platform: 'PolicyGuard', date: 'Offline LLM tooling' },
  { title: 'Production Deployment', platform: 'Vercel + GitHub', date: 'Live portfolio workflow' },
  { title: 'Commerce Integrations', platform: 'RajGharana', date: 'Clerk and Razorpay' },
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
              initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55 }}
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
                  <Award size={28} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.platform}</p>
                <span>{item.date}</span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-view">
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
