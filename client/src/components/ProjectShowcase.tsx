/**
 * Project Showcase Component
 * 
 * Display featured projects with modern card design
 */

interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
  color: 'cyan' | 'magenta' | 'lime';
  icon: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'DataNautX',
    description: 'Advanced data intelligence platform with AI-powered analytics and real-time insights',
    tags: ['Python', 'React', 'MongoDB', 'AI/ML'],
    color: 'cyan',
    icon: '📊',
  },
  {
    id: 2,
    name: 'OmniMetric',
    description: 'Comprehensive metrics and monitoring system for governance and policy analysis',
    tags: ['Node.js', 'PostgreSQL', 'Analytics', 'Governance'],
    color: 'magenta',
    icon: '📈',
  },
  {
    id: 3,
    name: 'CommentLens',
    description: 'Social media sentiment analysis and political discourse tracking system',
    tags: ['NLP', 'Twitter API', 'React', 'Real-time'],
    color: 'lime',
    icon: '💬',
  },
  {
    id: 4,
    name: 'AdVault',
    description: 'Political advertisement tracking and analysis platform with comprehensive reporting',
    tags: ['Web Scraping', 'Data Analysis', 'Visualization', 'Politics'],
    color: 'cyan',
    icon: '📢',
  },
];

export default function ProjectShowcase() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'from-cyan-500/10 to-cyan-500/5 border-cyan-500/30 hover:border-cyan-400';
      case 'magenta':
        return 'from-magenta-500/10 to-magenta-500/5 border-magenta-500/30 hover:border-magenta-400';
      case 'lime':
        return 'from-lime-500/10 to-lime-500/5 border-lime-500/30 hover:border-lime-400';
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`bg-gradient-to-br ${getColorClasses(project.color)} border rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-slate-800/50 group cursor-pointer`}
        >
          <div className="flex items-start justify-between mb-4">
            <span className="text-4xl">{project.icon}</span>
            <div className={`w-2 h-2 rounded-full ${getAccentColor(project.color)} group-hover:scale-150 transition-transform`} />
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {project.name}
          </h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs px-3 py-1 rounded-full bg-slate-800/50 border ${getAccentColor(project.color)} border-current/30`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hover indicator */}
          <div className="mt-4 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <span className={`${getAccentColor(project.color)}`}>Learn more</span>
            <span className={`${getAccentColor(project.color)}`}>→</span>
          </div>
        </div>
      ))}
    </div>
  );
}
