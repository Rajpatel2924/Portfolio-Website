import { motion } from 'framer-motion';
import { type HTMLMotionProps } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type RevealDirection = 'start' | 'end' | 'center';
type AnimateOn = 'view' | 'hover' | 'inViewHover' | 'click';
type ClickMode = 'once' | 'toggle';

type DecryptedTextProps = HTMLMotionProps<'span'> & {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: RevealDirection;
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: AnimateOn;
  clickMode?: ClickMode;
  startDelay?: number;
};

const styles = {
  wrapper: {
    display: 'inline-block',
    whiteSpace: 'pre-wrap',
  },
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    border: 0,
  },
} as const;

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  clickMode = 'once',
  startDelay = 0,
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isDecrypted, setIsDecrypted] = useState(animateOn !== 'click');
  const [direction, setDirection] = useState<'forward' | 'reverse'>('forward');

  const containerRef = useRef<HTMLSpanElement | null>(null);
  const orderRef = useRef<number[]>([]);
  const pointerRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const availableChars = useMemo(() => {
    return useOriginalCharsOnly
      ? Array.from(new Set(text.split(''))).filter((char) => char !== ' ')
      : characters.split('');
  }, [characters, text, useOriginalCharsOnly]);

  const shuffleText = useCallback(
    (originalText: string, currentRevealed: Set<number>) => {
      return originalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (currentRevealed.has(i)) return originalText[i];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join('');
    },
    [availableChars],
  );

  const computeOrder = useCallback(
    (len: number) => {
      const order: number[] = [];
      if (len <= 0) return order;
      if (revealDirection === 'start') {
        for (let i = 0; i < len; i += 1) order.push(i);
        return order;
      }
      if (revealDirection === 'end') {
        for (let i = len - 1; i >= 0; i -= 1) order.push(i);
        return order;
      }

      const middle = Math.floor(len / 2);
      let offset = 0;
      while (order.length < len) {
        if (offset % 2 === 0) {
          const idx = middle + offset / 2;
          if (idx >= 0 && idx < len) order.push(idx);
        } else {
          const idx = middle - Math.ceil(offset / 2);
          if (idx >= 0 && idx < len) order.push(idx);
        }
        offset += 1;
      }
      return order.slice(0, len);
    },
    [revealDirection],
  );

  const fillAllIndices = useCallback(() => {
    const indices = new Set<number>();
    for (let i = 0; i < text.length; i += 1) indices.add(i);
    return indices;
  }, [text]);

  const removeRandomIndices = useCallback((set: Set<number>, count: number) => {
    const arr = Array.from(set);
    for (let i = 0; i < count && arr.length > 0; i += 1) {
      const idx = Math.floor(Math.random() * arr.length);
      arr.splice(idx, 1);
    }
    return new Set(arr);
  }, []);

  const encryptInstantly = useCallback(() => {
    const emptySet = new Set<number>();
    setRevealedIndices(emptySet);
    setDisplayText(shuffleText(text, emptySet));
    setIsDecrypted(false);
  }, [shuffleText, text]);

  const triggerDecrypt = useCallback(() => {
    if (sequential) {
      orderRef.current = computeOrder(text.length);
      pointerRef.current = 0;
    }
    setRevealedIndices(new Set());
    setDirection('forward');
    setIsAnimating(true);
  }, [computeOrder, sequential, text.length]);

  const triggerReverse = useCallback(() => {
    const fullSet = fillAllIndices();
    if (sequential) {
      orderRef.current = computeOrder(text.length).slice().reverse();
      pointerRef.current = 0;
    }
    setRevealedIndices(fullSet);
    setDisplayText(shuffleText(text, fullSet));
    setDirection('reverse');
    setIsAnimating(true);
  }, [computeOrder, fillAllIndices, sequential, shuffleText, text]);

  useEffect(() => {
    if (!isAnimating) return;

    let currentIteration = 0;

    const getNextIndex = (revealedSet: Set<number>) => {
      if (sequential && orderRef.current.length) {
        return orderRef.current[pointerRef.current++] ?? 0;
      }
      const textLength = text.length;
      if (revealDirection === 'end') return textLength - 1 - revealedSet.size;
      if (revealDirection === 'center') {
        const middle = Math.floor(textLength / 2);
        const offset = Math.floor(revealedSet.size / 2);
        const nextIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;
        if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) return nextIndex;
        for (let i = 0; i < textLength; i += 1) {
          if (!revealedSet.has(i)) return i;
        }
      }
      return revealedSet.size;
    };

    intervalRef.current = setInterval(() => {
      setRevealedIndices((prevRevealed) => {
        if (sequential) {
          if (direction === 'forward') {
            if (prevRevealed.size < text.length) {
              const nextIndex = getNextIndex(prevRevealed);
              const newRevealed = new Set(prevRevealed);
              newRevealed.add(nextIndex);
              setDisplayText(shuffleText(text, newRevealed));
              return newRevealed;
            }
            if (intervalRef.current) clearInterval(intervalRef.current);
            setIsAnimating(false);
            setIsDecrypted(true);
            return prevRevealed;
          }

          if (pointerRef.current < orderRef.current.length) {
            const idxToRemove = orderRef.current[pointerRef.current++];
            const newRevealed = new Set(prevRevealed);
            newRevealed.delete(idxToRemove);
            setDisplayText(shuffleText(text, newRevealed));
            return newRevealed;
          }

          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsAnimating(false);
          setIsDecrypted(false);
          return prevRevealed;
        }

        if (direction === 'forward') {
          setDisplayText(shuffleText(text, prevRevealed));
          currentIteration += 1;
          if (currentIteration >= maxIterations) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setIsAnimating(false);
            setDisplayText(text);
            setIsDecrypted(true);
          }
          return prevRevealed;
        }

        const currentSet = prevRevealed.size === 0 ? fillAllIndices() : prevRevealed;
        const removeCount = Math.max(1, Math.ceil(text.length / Math.max(1, maxIterations)));
        const nextSet = removeRandomIndices(currentSet, removeCount);
        setDisplayText(shuffleText(text, nextSet));
        currentIteration += 1;
        if (nextSet.size === 0 || currentIteration >= maxIterations) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsAnimating(false);
          setIsDecrypted(false);
          setDisplayText(shuffleText(text, new Set()));
          return new Set();
        }
        return nextSet;
      });
    }, speed);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [direction, fillAllIndices, isAnimating, maxIterations, removeRandomIndices, revealDirection, sequential, shuffleText, speed, text]);

  const handleClick = () => {
    if (animateOn !== 'click') return;
    if (clickMode === 'once') {
      if (isDecrypted) return;
      triggerDecrypt();
      return;
    }
    if (isDecrypted) {
      triggerReverse();
    } else {
      triggerDecrypt();
    }
  };

  const triggerHoverDecrypt = useCallback(() => {
    if (isAnimating) return;
    setRevealedIndices(new Set());
    setIsDecrypted(false);
    setDisplayText(text);
    setDirection('forward');
    setIsAnimating(true);
  }, [isAnimating, text]);

  const resetToPlainText = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsAnimating(false);
    setRevealedIndices(new Set());
    setDisplayText(text);
    setIsDecrypted(true);
    setDirection('forward');
  }, [text]);

  useEffect(() => {
    if (animateOn !== 'view' && animateOn !== 'inViewHover') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            window.setTimeout(triggerDecrypt, startDelay);
            setHasAnimated(true);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 },
    );

    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [animateOn, hasAnimated, startDelay, triggerDecrypt]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      if (animateOn === 'click') {
        encryptInstantly();
      } else if (animateOn === 'view' || animateOn === 'inViewHover') {
        encryptInstantly();
      } else {
        setDisplayText(text);
        setIsDecrypted(true);
      }
      setRevealedIndices(new Set());
      setDirection('forward');
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [animateOn, encryptInstantly, text]);

  const animateProps =
    animateOn === 'hover' || animateOn === 'inViewHover'
      ? {
          onMouseEnter: triggerHoverDecrypt,
          onMouseLeave: resetToPlainText,
        }
      : animateOn === 'click'
        ? {
            onClick: handleClick,
          }
        : {};

  return (
    <motion.span className={parentClassName} ref={containerRef} style={styles.wrapper} {...animateProps} {...props}>
      <span style={styles.srOnly}>{displayText}</span>
      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const isRevealedOrDone = revealedIndices.has(index) || (!isAnimating && isDecrypted);
          return (
            <span key={`${char}-${index}`} className={isRevealedOrDone ? className : encryptedClassName}>
              {char}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}
