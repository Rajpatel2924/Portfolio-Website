import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './BlobCursor.css';

type BlobCursorProps = {
  blobType?: 'circle' | 'square';
  className?: string;
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  followCursor?: boolean;
  autoAnimate?: boolean;
  zIndex?: number;
};

export default function BlobCursor({
  blobType = 'circle',
  className,
  fillColor = '#5227FF',
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = 'rgba(255,255,255,0.8)',
  opacities = [0.6, 0.6, 0.6],
  shadowColor = 'rgba(0,0,0,0.75)',
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = 'blob',
  filterStdDeviation = 30,
  filterColorMatrixValues = '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10',
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = 'power3.out',
  slowEase = 'power1.out',
  followCursor = true,
  autoAnimate = false,
  zIndex = 100,
}: BlobCursorProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const blobsRef = useRef<Array<HTMLDivElement | null>>([]);

  const updateOffset = useCallback(() => {
    if (!containerRef.current) return { left: 0, top: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
  }, []);

  const moveBlobs = useCallback(
    (clientX: number, clientY: number) => {
      const { left, top } = updateOffset();

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: clientX - left,
          y: clientY - top,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase,
        });
      });
    },
    [fastDuration, fastEase, slowDuration, slowEase, updateOffset],
  );

  useEffect(() => {
    if (!followCursor) return;

    const onPointerMove = (event: PointerEvent) => {
      moveBlobs(event.clientX, event.clientY);
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) moveBlobs(touch.clientX, touch.clientY);
    };

    const onResize = () => updateOffset();

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
    };
  }, [followCursor, moveBlobs, updateOffset]);

  useEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    moveBlobs(rect.left + rect.width * 0.68, rect.top + rect.height * 0.58);
  }, [moveBlobs]);

  useEffect(() => {
    if (!autoAnimate || !containerRef.current) return;

    const timelines: gsap.core.Timeline[] = [];

    const startAnimation = () => {
      timelines.splice(0).forEach((timeline) => timeline.kill());
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      blobsRef.current.forEach((el, index) => {
        if (!el) return;

        const offset = index * 0.035;
        gsap.set(el, {
          x: rect.width * (0.68 + offset),
          y: rect.height * (0.58 - offset),
          scale: 1,
        });

        const timeline = gsap.timeline({
          repeat: -1,
          yoyo: true,
          delay: index * 0.28,
        });

        timeline
          .to(el, {
            x: rect.width * (0.72 - offset),
            y: rect.height * (0.5 + offset),
            scale: 1.04 - index * 0.03,
            duration: 7.5 + index,
            ease: 'sine.inOut',
          })
          .to(el, {
            x: rect.width * (0.64 + offset),
            y: rect.height * (0.64 - offset),
            scale: 0.98 + index * 0.02,
            duration: 8.5 + index,
            ease: 'sine.inOut',
          });

        timelines.push(timeline);
      });
    };

    startAnimation();
    window.addEventListener('resize', startAnimation);

    return () => {
      window.removeEventListener('resize', startAnimation);
      timelines.forEach((timeline) => timeline.kill());
    };
  }, [autoAnimate]);

  return (
    <div ref={containerRef} className={`blob-container ${className ?? ''}`} style={{ zIndex }} aria-hidden="true">
      {useFilter && (
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={filterStdDeviation} />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div className="blob-main" style={{ filter: useFilter ? `url(#${filterId})` : undefined }}>
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              blobsRef.current[i] = el;
            }}
            className="blob"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: blobType === 'circle' ? '50%' : '0%',
              backgroundColor: fillColor,
              opacity: opacities[i],
              boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 0 ${shadowColor}`,
            }}
          >
            <div
              className="inner-dot"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                top: (sizes[i] - innerSizes[i]) / 2,
                left: (sizes[i] - innerSizes[i]) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === 'circle' ? '50%' : '0%',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
