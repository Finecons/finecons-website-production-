import { useEffect, useRef, useState } from 'react';

/**
 * useParallaxFloating
 * High-performance 60fps cursor-driven multi-depth parallax floating hook
 * inspired by 21st.dev (Daniel Petho) and Aceternity UI Parallax Hero.
 *
 * @param {Object} options
 * @param {number} options.damping - Lerp damping factor (default: 0.08)
 * @param {number} options.maxOffset - Maximum pixel movement at depth=1 (default: 20)
 * @returns {{ containerRef: React.RefObject, getFloatingStyle: (depth: number, extraTransform?: string) => Object }}
 */
export function useParallaxFloating({ damping = 0.08, maxOffset = 22 } = {}) {
  const containerRef = useRef(null);
  const [offsets, setOffsets] = useState({ x: 0, y: 0 });

  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect touch / reduced motion to prevent battery drain
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      isHoveredRef.current = true;
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized coordinates from -1 to 1
      const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
      const normY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));

      targetRef.current = { x: normX, y: normY };
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      targetRef.current = { x: 0, y: 0 };
    };

    const loop = () => {
      // Lerp smoothing: current += (target - current) * damping
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * damping;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * damping;

      setOffsets({
        x: Number(currentRef.current.x.toFixed(4)),
        y: Number(currentRef.current.y.toFixed(4)),
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [damping]);

  /**
   * Helper to compute individual element transform based on its depth
   */
  const getFloatingStyle = (depth = 1, extraTransform = '') => {
    const moveX = (offsets.x * depth * maxOffset).toFixed(2);
    const moveY = (offsets.y * depth * maxOffset).toFixed(2);
    const transform = `translate3d(${moveX}px, ${moveY}px, 0) ${extraTransform}`.trim();

    return {
      transform,
      willChange: 'transform',
      transition: 'transform 0.1s cubic-bezier(0.2, 0, 0, 1)',
    };
  };

  return { containerRef, getFloatingStyle };
}

export default useParallaxFloating;
