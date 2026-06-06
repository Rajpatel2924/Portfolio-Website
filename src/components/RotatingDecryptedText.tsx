import { useEffect, useState } from 'react';
import DecryptedText from './DecryptedText';

type RotatingDecryptedTextProps = {
  phrases: string[];
  interval?: number;
};

export default function RotatingDecryptedText({ phrases, interval = 3400 }: RotatingDecryptedTextProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (phrases.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % phrases.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, phrases.length]);

  return (
    <DecryptedText
      key={`${activeIndex}-${phrases[activeIndex]}`}
      text={phrases[activeIndex]}
      speed={38}
      maxIterations={14}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}"
      animateOn="view"
      className="hero-decrypted-revealed"
      parentClassName="hero-decrypted-piece"
      encryptedClassName="hero-decrypted-encrypted"
    />
  );
}
