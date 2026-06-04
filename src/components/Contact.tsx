import { ArrowRight, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const contactMethods = [
  { Icon: Mail, label: 'Email', value: 'rajpatel805233@gmail.com', href: 'mailto:rajpatel805233@gmail.com' },
  { Icon: Phone, label: 'Phone', value: '+91 9506794037', href: 'tel:+919506794037' },
  { Icon: MapPin, label: 'Location', value: 'Kanpur, Uttar Pradesh', href: '#' },
];

export function Contact() {
  return (
    <section className="section-band contact-band">
      <div className="section-shell contact-grid">
        <motion.div
          className="contact-copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-kicker">Contact</span>
          <h2>Have a project in mind?</h2>
          <p>
            Send a note about what you are building, where you are stuck, or what
            kind of experience you want to create. I will get back with a clear next step.
          </p>

          <div className="contact-list">
            {contactMethods.map((item) => {
              const Icon = item.Icon;

              return (
                <a key={item.label} href={item.href}>
                  <span>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span>
                    <strong>{item.label}</strong>
                    {item.value}
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <div className="form-header">
            <span>
              <MessageSquare size={20} aria-hidden="true" />
            </span>
            <h3>Quick message</h3>
          </div>

          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell me a little about your idea" />
          </label>
          <button className="button button-primary" type="submit">
            Send message
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
