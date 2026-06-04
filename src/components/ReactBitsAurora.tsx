import type { CSSProperties } from 'react';

const lightBeams = [
  { className: 'aurora-beam beam-mint' },
  { className: 'aurora-beam beam-blue' },
  { className: 'aurora-beam beam-coral' },
  { className: 'aurora-beam beam-gold' },
];

const sparkles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  style: {
    '--x': `${(index * 17) % 100}%`,
    '--y': `${(index * 29) % 100}%`,
    '--delay': `${(index % 6) * -0.9}s`,
    '--scale': `${0.55 + (index % 5) * 0.14}`,
  } as CSSProperties,
}));

export function ReactBitsAurora() {
  return (
    <div className="reactbits-aurora" aria-hidden="true">
      <div className="aurora-gradient">
        {lightBeams.map((beam) => (
          <span key={beam.className} className={beam.className} />
        ))}
      </div>
      <div className="aurora-dot-field">
        {sparkles.map((sparkle) => (
          <span key={sparkle.id} style={sparkle.style} />
        ))}
      </div>
      <div className="aurora-grid-scan" />
      <div className="aurora-vignette" />
    </div>
  );
}
