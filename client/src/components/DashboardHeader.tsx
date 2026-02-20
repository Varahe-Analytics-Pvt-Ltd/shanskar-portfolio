/**
 * Dashboard Header Component
 * 
 * Modern navigation and hero section with neon accents
 */

export default function DashboardHeader() {
  return (
    <header className="border-b border-cyan-500/30 backdrop-blur-sm bg-slate-950/50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-magenta-400 rounded-lg flex items-center justify-center font-bold text-slate-950">
            SB
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Shanskar Bansal</h1>
            <p className="text-xs text-cyan-400">AI Engineer • Political Tech</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="#projects" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
            Projects
          </a>
          <a href="#expertise" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
            Expertise
          </a>
          <a href="#contact" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-400 hover:to-magenta-400 text-slate-950 font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/50">
          Connect
        </button>
      </div>
    </header>
  );
}
