/**
 * Skills Visualization Component
 * 
 * Display expertise areas with animated progress bars
 */

interface Skill {
  category: string;
  items: { name: string; level: number }[];
  color: 'cyan' | 'magenta' | 'lime';
}

const skills: Skill[] = [
  {
    category: 'AI & Machine Learning',
    color: 'cyan',
    items: [
      { name: 'LLMs & GPT', level: 95 },
      { name: 'NLP & Text Analysis', level: 90 },
      { name: 'Computer Vision', level: 85 },
      { name: 'RAG Systems', level: 88 },
    ],
  },
  {
    category: 'Full-Stack Development',
    color: 'magenta',
    items: [
      { name: 'React & TypeScript', level: 92 },
      { name: 'Node.js & Backend', level: 90 },
      { name: 'Database Design', level: 88 },
      { name: 'DevOps & Cloud', level: 85 },
    ],
  },
  {
    category: 'Political Technology',
    color: 'lime',
    items: [
      { name: 'Governance Systems', level: 92 },
      { name: 'Electoral Data', level: 88 },
      { name: 'Policy Analysis', level: 85 },
      { name: 'Civic Tech', level: 87 },
    ],
  },
];

export default function SkillsVisualization() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'from-cyan-500 to-cyan-400';
      case 'magenta':
        return 'from-magenta-500 to-magenta-400';
      case 'lime':
        return 'from-lime-500 to-lime-400';
      default:
        return '';
    }
  };

  const getAccentColor = (color: string) => {
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {skills.map((skillGroup, groupIndex) => (
        <div key={groupIndex} className="space-y-6">
          <h3 className={`text-xl font-bold ${getAccentColor(skillGroup.color)}`}>
            {skillGroup.category}
          </h3>

          <div className="space-y-4">
            {skillGroup.items.map((skill, itemIndex) => (
              <div key={itemIndex} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">{skill.name}</span>
                  <span className={`text-xs font-bold ${getAccentColor(skillGroup.color)}`}>
                    {skill.level}%
                  </span>
                </div>

                {/* Animated progress bar */}
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getColorClasses(skillGroup.color)} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: `${skill.level}%`,
                      animation: `slideIn 0.8s ease-out ${itemIndex * 0.1}s both`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <style>{`
        @keyframes slideIn {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: var(--width);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
