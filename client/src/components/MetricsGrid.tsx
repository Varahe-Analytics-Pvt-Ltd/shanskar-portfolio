import { useEffect, useState } from 'react';

interface MetricCard {
  label: string;
  value: string | number;
  unit: string;
  icon: string;
  color: 'cyan' | 'magenta' | 'lime';
}

interface Props {
  isLoaded: boolean;
}

export default function MetricsGrid({ isLoaded }: Props) {
  const [metrics, setMetrics] = useState<MetricCard[]>([
    { label: 'Projects Shipped', value: 15, unit: '+', icon: '🚀', color: 'cyan' },
    { label: 'GitHub Stars', value: 2.4, unit: 'K', icon: '⭐', color: 'magenta' },
    { label: 'Years Experience', value: 5, unit: '+', icon: '📅', color: 'lime' },
    { label: 'Tech Stack', value: 20, unit: '+', icon: '⚙️', color: 'cyan' },
  ]);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/50 hover:border-cyan-400';
      case 'magenta':
        return 'from-magenta-500/20 to-magenta-500/5 border-magenta-500/50 hover:border-magenta-400';
      case 'lime':
        return 'from-lime-500/20 to-lime-500/5 border-lime-500/50 hover:border-lime-400';
      default:
        return '';
    }
  };

  const getTextColor = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'text-cyan-400';
      case 'magenta':
        return 'text-magenta-400';
      case 'lime':
        return 'text-lime-400';
      default:
        return '';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${getColorClasses(metric.color)} border rounded-lg p-6 backdrop-blur-sm transition-all duration-500 hover:shadow-lg cursor-pointer transform hover:scale-105 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            transitionDelay: isLoaded ? `${index * 100}ms` : '0ms',
          }}
        >
          <div className="flex items-start justify-between mb-4">
            <span className="text-3xl">{metric.icon}</span>
            <div className={`text-xs px-2 py-1 rounded bg-slate-800/50 border ${getTextColor(metric.color)}`}>
              LIVE
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-gray-400 text-sm">{metric.label}</p>
            <div className="flex items-baseline gap-1">
              <span className={`text-4xl font-bold ${getTextColor(metric.color)}`}>
                {metric.value}
              </span>
              <span className="text-lg text-gray-500">{metric.unit}</span>
            </div>
          </div>

          {/* Animated progress bar */}
          <div className="mt-4 h-1 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${
                metric.color === 'cyan'
                  ? 'from-cyan-500 to-cyan-400'
                  : metric.color === 'magenta'
                  ? 'from-magenta-500 to-magenta-400'
                  : 'from-lime-500 to-lime-400'
              } rounded-full`}
              style={{
                width: `${60 + Math.random() * 40}%`,
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
