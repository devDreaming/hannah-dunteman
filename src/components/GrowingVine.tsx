import { useEffect, useRef, useState } from 'react';

interface GrowingVineProps {
  isDark: boolean;
}

// Main vine path — organic curve along the right side
const MAIN_PATH =
  'M30 0 C25 40, 10 60, 15 100 S35 140, 25 180 S5 220, 18 260 S40 300, 22 340 S8 380, 20 420 S38 460, 25 500 S10 540, 20 580';

// Branch paths that fork off the main stem
const BRANCHES = [
  { d: 'M25 500 C35 490, 45 475, 50 460', at: 0.14 },
  { d: 'M20 420 C10 410, 0 395, -5 380', at: 0.28 },
  { d: 'M22 340 C32 330, 42 315, 48 300', at: 0.41 },
  { d: 'M18 260 C8 250, -2 235, -8 220', at: 0.55 },
  { d: 'M25 180 C35 170, 45 155, 50 140', at: 0.69 },
  { d: 'M15 100 C5 90, -5 80, -10 65', at: 0.83 },
];

// Small leaves at branch tips
const LEAVES = [
  { cx: 50, cy: 460, at: 0.17, rot: 30 },
  { cx: -5, cy: 380, at: 0.31, rot: -30 },
  { cx: 48, cy: 300, at: 0.44, rot: 30 },
  { cx: -8, cy: 220, at: 0.58, rot: -30 },
  { cx: 50, cy: 140, at: 0.72, rot: 30 },
  { cx: -10, cy: 65, at: 0.86, rot: -30 },
];

const GROWTH_DURATION = 6000;

export default function GrowingVine({ isDark }: GrowingVineProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mainPathRef = useRef<SVGPathElement>(null);
  const branchRefs = useRef<(SVGPathElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);
  const hasStarted = useRef(false);

  // Start growing when section enters viewport
  useEffect(() => {
    const section = sectionRef.current?.closest('section');
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startTimeRef.current = null;
          observer.disconnect();

          const animate = (timestamp: number) => {
            if (startTimeRef.current === null) startTimeRef.current = timestamp;
            const elapsed = timestamp - startTimeRef.current;
            const raw = Math.min(1, elapsed / GROWTH_DURATION);
            setProgress(1 - Math.pow(1 - raw, 2));
            if (raw < 1) rafRef.current = requestAnimationFrame(animate);
          };
          rafRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const mainLength = mainPathRef.current?.getTotalLength() ?? 1200;

  const strokeColor = isDark
    ? 'url(#vineGradientDark)'
    : 'url(#vineGradientLight)';

  const leafColor = isDark ? '#818cf8' : '#f4a6aa';

  return (
    <div ref={sectionRef} className="absolute right-4 top-0 bottom-0 w-16 pointer-events-none hidden md:block">
      <svg
        viewBox="0 0 60 580"
        fill="none"
        preserveAspectRatio="none"
        className="h-full w-full"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="vineGradientDark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="vineGradientLight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f6b57e" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f4a6aa" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Main vine stem */}
        <path
          ref={mainPathRef}
          d={MAIN_PATH}
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: mainLength,
            strokeDashoffset: -(mainLength * (1 - progress)),
          }}
        />

        {/* Branches */}
        {BRANCHES.map((branch, i) => {
          const branchVisible = progress >= branch.at;
          const branchProgress = branchVisible
            ? Math.min(1, (progress - branch.at) / 0.12)
            : 0;
          const branchLength = branchRefs.current[i]?.getTotalLength() ?? 100;

          return (
            <path
              key={i}
              ref={(el) => { branchRefs.current[i] = el; }}
              d={branch.d}
              stroke={strokeColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              style={{
                strokeDasharray: branchLength,
                strokeDashoffset: branchLength * (1 - branchProgress),
              }}
            />
          );
        })}

        {/* Leaves */}
        {LEAVES.map((leaf, i) => {
          const leafVisible = progress >= leaf.at;
          return (
            <ellipse
              key={i}
              cx={leaf.cx}
              cy={leaf.cy}
              rx="4"
              ry="6"
              fill={leafColor}
              transform={`rotate(${leaf.rot} ${leaf.cx} ${leaf.cy})`}
              style={{
                opacity: leafVisible ? 0.5 : 0,
                transition: 'opacity 0.4s ease-out',
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
