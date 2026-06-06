import { ArrowRight, Code2, Database, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '../assets/professional-avatar.jpg';
import BlobCursor from './BlobCursor';
import RotatingDecryptedText from './RotatingDecryptedText';

const orbitItems = [
  { label: 'React', Icon: Code2, className: 'orbit-one' },
  { label: 'Python', Icon: Database, className: 'orbit-two' },
  { label: 'AI', Icon: Sparkles, className: 'orbit-three' },
  { label: 'Security', Icon: ShieldCheck, className: 'orbit-four' },
];

const heroTagline = [
  'A full stack developer',
  'I Build things for the Web',
  'A Traveller',
];

export function Hero() {
  return (
    <section className="hero-view">
      <BlobCursor
        className="hero-blob-background"
        blobType="circle"
        fillColor="#f2d56c"
        trailCount={3}
        sizes={[760, 640, 520]}
        innerSizes={[34, 22, 16]}
        innerColor="rgba(255,255,255,0.4)"
        opacities={[0.9, 0.32, 0.18]}
        shadowColor="rgba(201,85,82,0.07)"
        shadowBlur={48}
        shadowOffsetX={0}
        shadowOffsetY={34}
        filterId="hero-yellow-blob"
        filterStdDeviation={16}
        useFilter={true}
        followCursor={true}
        autoAnimate={false}
        zIndex={0}
      />

      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero-kicker">G&apos;day, I&apos;m</span>
          <h1>
            Raj Patel,
          </h1>
          <div className="hero-decrypted-line" aria-label="A full stack developer, I build things for the web and a traveller">
            <RotatingDecryptedText phrases={heroTagline} />
          </div>
          <p>
            A dedicated full-stack developer who loves creating useful things for
            the internet. I build clean interfaces, practical tools, and products
            that solve real problems across safety, commerce, AI, and health tech.
          </p>

          <div className="hero-actions">
            <a className="ai-button" href="#contact">
              Contact me!
              <ArrowRight size={17} />
            </a>
            <a className="ghost-button" href="https://github.com/Rajpatel2924" target="_blank" rel="noreferrer">
              <Code2 size={17} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-stage"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-portrait-shell">
            <div className="hero-portrait-filter" />
            <img src={heroImage} alt="Professional animated portrait of Raj Patel" />
          </div>

          {orbitItems.map(({ label, Icon, className }) => (
            <motion.div
              className={`orbit-chip ${className}`}
              key={label}
              animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: orbitItems.findIndex((item) => item.label === label) * 0.35 }}
            >
              <Icon size={18} />
              {label}
            </motion.div>
          ))}

          <div className="hero-code-card">
            <Mail size={17} />
            <span>rajpatel805233@gmail.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
