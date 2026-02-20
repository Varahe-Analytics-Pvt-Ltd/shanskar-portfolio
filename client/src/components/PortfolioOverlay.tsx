import { useState } from 'react';

/**
 * Portfolio Overlay System
 * 
 * Interactive sections that appear over the GTA game canvas
 * - Projects showcase
 * - Expertise areas
 * - Contact information
 * - About section
 */

interface Section {
  id: string;
  title: string;
  icon: string;
  description: string;
}

const sections: Section[] = [
  {
    id: 'projects',
    title: 'Projects',
    icon: '📁',
    description: 'View my featured projects and GitHub repositories',
  },
  {
    id: 'expertise',
    title: 'Expertise',
    icon: '🧠',
    description: 'AI Engineering, Data Science, Political Tech',
  },
  {
    id: 'about',
    title: 'About',
    icon: '👤',
    description: 'Learn more about my background and experience',
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: '📧',
    description: 'Get in touch via email, GitHub, or LinkedIn',
  },
];

export default function PortfolioOverlay() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top Navigation Menu */}
      <div className="absolute top-8 right-8 pointer-events-auto">
        <div className="flex gap-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              className="px-4 py-2 bg-black/70 backdrop-blur border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-mono text-sm transition-all rounded"
              title={section.description}
            >
              {section.icon} {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Section Modal */}
      {activeSection && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setActiveSection(null)}
          />

          {/* Modal Content */}
          <div className="relative bg-black/90 border-2 border-cyan-500 rounded-lg p-8 max-w-2xl max-h-96 overflow-y-auto z-10">
            {/* Close button */}
            <button
              onClick={() => setActiveSection(null)}
              className="absolute top-4 right-4 text-cyan-500 hover:text-white text-2xl font-bold"
            >
              ✕
            </button>

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <div>
                <h2 className="text-3xl font-bold text-cyan-500 mb-4 flex items-center gap-2">
                  📁 Featured Projects
                </h2>
                <div className="space-y-4 text-gray-200">
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h3 className="font-bold text-white">DataNautX</h3>
                    <p className="text-sm">Advanced data intelligence platform with AI-powered analytics</p>
                  </div>
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h3 className="font-bold text-white">OmniMetric</h3>
                    <p className="text-sm">Comprehensive metrics and monitoring system for governance</p>
                  </div>
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h3 className="font-bold text-white">CommentLens</h3>
                    <p className="text-sm">Social media sentiment analysis and political discourse tracking</p>
                  </div>
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h3 className="font-bold text-white">AdVault</h3>
                    <p className="text-sm">Political advertisement tracking and analysis system</p>
                  </div>
                </div>
              </div>
            )}

            {/* Expertise Section */}
            {activeSection === 'expertise' && (
              <div>
                <h2 className="text-3xl font-bold text-cyan-500 mb-4 flex items-center gap-2">
                  🧠 Core Expertise
                </h2>
                <div className="space-y-4 text-gray-200">
                  <div>
                    <h3 className="font-bold text-white mb-2">AI & Machine Learning</h3>
                    <p className="text-sm">LLMs, NLP, Computer Vision, Deep Learning, RAG Systems</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Political Technology</h3>
                    <p className="text-sm">Governance systems, electoral data, policy analysis, civic tech</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Full-Stack Development</h3>
                    <p className="text-sm">React, Node.js, Python, MongoDB, PostgreSQL, Cloud Infrastructure</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Data Science</h3>
                    <p className="text-sm">Analytics, Visualization, Statistical Analysis, Big Data Processing</p>
                  </div>
                </div>
              </div>
            )}

            {/* About Section */}
            {activeSection === 'about' && (
              <div>
                <h2 className="text-3xl font-bold text-cyan-500 mb-4 flex items-center gap-2">
                  👤 About Me
                </h2>
                <div className="space-y-4 text-gray-200">
                  <p>
                    I'm an AI Engineer and Political Sector Technologist passionate about building intelligent systems for governance and civic engagement.
                  </p>
                  <p>
                    Currently working as Senior Consultant & Data Scientist at Varahe Analytics, focusing on practical AI applications for political and social impact.
                  </p>
                  <p>
                    My work bridges the gap between cutting-edge AI technology and real-world governance challenges, creating solutions that matter.
                  </p>
                  <div className="mt-4 pt-4 border-t border-cyan-500">
                    <p className="font-bold text-white">Interests:</p>
                    <p className="text-sm">AI for governance, Political data analysis, Civic technology, Open data initiatives</p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Section */}
            {activeSection === 'contact' && (
              <div>
                <h2 className="text-3xl font-bold text-cyan-500 mb-4 flex items-center gap-2">
                  📧 Get in Touch
                </h2>
                <div className="space-y-4 text-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-500 font-bold">📧</span>
                    <a
                      href="mailto:shanskarbansal@gmail.com"
                      className="text-cyan-400 hover:text-cyan-200 transition-colors"
                    >
                      shanskarbansal@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-500 font-bold">🔗</span>
                    <a
                      href="https://github.com/shanskarBansal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-200 transition-colors"
                    >
                      github.com/shanskarBansal
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-500 font-bold">💼</span>
                    <a
                      href="https://linkedin.com/in/shanskarbansal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-200 transition-colors"
                    >
                      linkedin.com/in/shanskarbansal
                    </a>
                  </div>
                  <div className="mt-4 pt-4 border-t border-cyan-500">
                    <p className="text-sm">Feel free to reach out for collaborations, opportunities, or just to chat about AI and governance tech!</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
