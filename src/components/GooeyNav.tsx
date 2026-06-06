import { useEffect, useRef, useState } from 'react';
import './GooeyNav.css';

export type GooeyNavItem = {
  label: string;
  href: string;
};

type Particle = {
  start: [number, number];
  end: [number, number];
  time: number;
  scale: number;
  color: number;
  rotate: number;
};

type GooeyNavProps = {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
};

const noise = (n = 1) => n / 2 - Math.random() * n;

const getXY = (distance: number, pointIndex: number, totalPoints: number): [number, number] => {
  const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
  return [distance * Math.cos(angle), distance * Math.sin(angle)];
};

const createParticle = (
  i: number,
  time: number,
  distances: [number, number],
  radius: number,
  particleCount: number,
  colors: number[],
): Particle => {
  const rotate = noise(radius / 10);
  return {
    start: getXY(distances[0], particleCount - i, particleCount),
    end: getXY(distances[1] + noise(7), particleCount - i, particleCount),
    time,
    scale: 1 + noise(0.2),
    color: colors[Math.floor(Math.random() * colors.length)],
    rotate: rotate > 0 ? (rotate + radius / 20) * 10 : (rotate - radius / 20) * 10,
  };
};

export default function GooeyNav({
  items,
  animationTime = 600,
  particleCount = 12,
  particleDistances = [54, 8],
  particleR = 80,
  timeVariance = 240,
  colors = [1, 2, 3, 1, 2, 3, 4],
  initialActiveIndex = 0,
}: GooeyNavProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLUListElement | null>(null);
  const filterRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const makeParticles = (element: HTMLSpanElement) => {
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i += 1) {
      const time = animationTime * 2 + noise(timeVariance * 2);
      const particleData = createParticle(i, time, particleDistances, particleR, particleCount, colors);
      element.classList.remove('active');

      window.setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', `${particleData.start[0]}px`);
        particle.style.setProperty('--start-y', `${particleData.start[1]}px`);
        particle.style.setProperty('--end-x', `${particleData.end[0]}px`);
        particle.style.setProperty('--end-y', `${particleData.end[1]}px`);
        particle.style.setProperty('--time', `${particleData.time}ms`);
        particle.style.setProperty('--scale', `${particleData.scale}`);
        particle.style.setProperty('--color', `var(--gooey-color-${particleData.color}, var(--theme-4))`);
        particle.style.setProperty('--rotate', `${particleData.rotate}deg`);

        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => element.classList.add('active'));
        window.setTimeout(() => {
          particle.remove();
        }, time);
      }, 30);
    }
  };

  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };

  const activate = (element: HTMLElement, index: number) => {
    if (activeIndex === index) return;
    setActiveIndex(index);
    updateEffectPosition(element);

    if (filterRef.current) {
      filterRef.current.querySelectorAll('.particle').forEach((particle) => particle.remove());
      makeParticles(filterRef.current);
    }

    if (textRef.current) {
      textRef.current.classList.remove('active');
      void textRef.current.offsetWidth;
      textRef.current.classList.add('active');
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeAnchor = navRef.current.querySelectorAll('a')[activeIndex];
    if (activeAnchor) {
      updateEffectPosition(activeAnchor);
      textRef.current?.classList.add('active');
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveAnchor = navRef.current?.querySelectorAll('a')[activeIndex];
      if (currentActiveAnchor) updateEffectPosition(currentActiveAnchor);
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      <nav aria-label="Primary navigation">
        <ul ref={navRef}>
          {items.map((item, index) => (
            <li key={item.label} className={activeIndex === index ? 'active' : ''}>
              <a
                href={item.href}
                onClick={(event) => activate(event.currentTarget, index)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') activate(event.currentTarget, index);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />
    </div>
  );
}
