import { useEffect, useState } from 'react';

/**
 * Data Visualization Component
 * 
 * Advanced charts and graphs showing portfolio metrics
 */

interface DataPoint {
  label: string;
  value: number;
  color: string;
}

export default function DataVisualization() {
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0, 0]);

  useEffect(() => {
    const targetValues = [85, 92, 78, 88, 95];
    const interval = setInterval(() => {
      setAnimatedValues((prev) =>
        prev.map((val, idx) => {
          const target = targetValues[idx];
          const diff = target - val;
          return val + diff * 0.05;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const chartData: DataPoint[] = [
    { label: 'AI/ML', value: animatedValues[0], color: 'from-cyan-500 to-cyan-400' },
    { label: 'Full-Stack', value: animatedValues[1], color: 'from-magenta-500 to-magenta-400' },
    { label: 'DevOps', value: animatedValues[2], color: 'from-lime-500 to-lime-400' },
    { label: 'Political Tech', value: animatedValues[3], color: 'from-cyan-500 to-magenta-400' },
    { label: 'Data Science', value: animatedValues[4], color: 'from-magenta-500 to-lime-400' },
  ];

  return (
    <section className="py-12 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Vertical Bar Chart */}
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-cyan-500/20 rounded-lg p-8 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-cyan-400 mb-6">Expertise Distribution</h3>

          <div className="flex items-end justify-around h-64 gap-4">
            {chartData.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 flex-1">
                <div className="w-full bg-slate-800 rounded-t-lg overflow-hidden relative h-48">
                  <div
                    className={`w-full bg-gradient-to-t ${item.color} rounded-t-lg transition-all duration-500`}
                    style={{
                      height: `${Math.min(animatedValues[index], 100)}%`,
                    }}
                  />
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-white opacity-0 hover:opacity-100 transition-opacity">
                    {Math.round(animatedValues[index])}%
                  </div>
                </div>
                <span className="text-xs text-gray-400 text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Radial Progress */}
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-magenta-500/20 rounded-lg p-8 backdrop-blur-sm flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold text-magenta-400 mb-6 w-full">Overall Proficiency</h3>

          <div className="relative w-40 h-40">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
              {/* Background circle */}
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="rgba(0, 255, 200, 0.1)"
                strokeWidth="8"
              />

              {/* Progress circle */}
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 70}`}
                strokeDashoffset={`${2 * Math.PI * 70 * (1 - Math.min(animatedValues[0], 100) / 100)}`}
                strokeLinecap="round"
                className="transition-all duration-500"
              />

              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                {Math.round(Math.min(animatedValues[0], 100))}%
              </div>
              <div className="text-xs text-gray-400">Mastery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-lime-500/20 rounded-lg p-8 backdrop-blur-sm">
        <h3 className="text-xl font-bold text-lime-400 mb-6">Career Timeline</h3>

        <div className="space-y-6">
          {[
            { year: '2019', title: 'Started AI Journey', desc: 'Began exploring machine learning and NLP' },
            { year: '2020', title: 'Full-Stack Development', desc: 'Mastered React, Node.js, and databases' },
            { year: '2021', title: 'Political Tech Focus', desc: 'Specialized in governance and civic tech' },
            { year: '2024', title: 'Senior Consultant', desc: 'Leading AI projects at Varahe Analytics' },
          ].map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-lime-500 to-lime-400 ring-4 ring-slate-950" />
                {index < 3 && <div className="w-1 h-12 bg-gradient-to-b from-lime-500/50 to-transparent" />}
              </div>

              <div className="pb-6">
                <div className="text-sm font-bold text-lime-400">{item.year}</div>
                <div className="text-white font-semibold">{item.title}</div>
                <div className="text-sm text-gray-400">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
