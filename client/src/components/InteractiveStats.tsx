import { useEffect, useRef, useState } from 'react';

/**
 * Interactive Statistics Component
 * 
 * Animated counters and interactive metrics with hover effects
 */

interface Stat {
  label: string;
  value: number;
  suffix: string;
  color: 'cyan' | 'magenta' | 'lime';
  icon: string;
}

const stats: Stat[] = [
  { label: 'Lines of Code', value: 50000, suffix: '+', color: 'cyan', icon: '💻' },
  { label: 'Happy Clients', value: 25, suffix: '+', color: 'magenta', icon: '😊' },
  { label: 'Projects Completed', value: 15, suffix: '', color: 'lime', icon: '✅' },
  { label: 'Coffee Cups', value: 1000, suffix: '+', color: 'cyan', icon: '☕' },
];

export default function InteractiveStats() {
  const [visibleStats, setVisibleStats] = useState<boolean[]>([false, false, false, false]);
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = counterRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleStats((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    counterRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/50 text-cyan-400';
      case 'magenta':
        return 'from-magenta-500/20 to-magenta-500/5 border-magenta-500/50 text-magenta-400';
      case 'lime':
        return 'from-lime-500/20 to-lime-500/5 border-lime-500/50 text-lime-400';
      default:
        return '';
    }
  };

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          ref={(el) => {
            counterRefs.current[index] = el;
          }}
          className={`bg-gradient-to-br ${getColorClasses(stat.color)} border rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group`}
        >
          <div className="text-3xl mb-3 group-hover:scale-125 transition-transform">
            {stat.icon}
          </div>

          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold">
              {visibleStats[index] ? (
                <CounterAnimation target={stat.value} />
              ) : (
                '0'
              )}
              <span className="text-lg">{stat.suffix}</span>
            </div>
            <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
          </div>

          {/* Animated background pulse */}
          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 rounded-lg animate-pulse" style={{
              background: `radial-gradient(circle at center, ${stat.color === 'cyan' ? '#06b6d4' : stat.color === 'magenta' ? '#ec4899' : '#84cc16'}20, transparent)`,
            }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Counter Animation Component
 * 
 * Animates number counting from 0 to target
 */
function CounterAnimation({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(target * progress);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [target]);

  return <>{count}</>;
}
