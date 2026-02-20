/**
 * Enhanced Footer Component
 * 
 * Modern footer with social links, newsletter, and contact info
 */

export default function EnhancedFooter() {
  return (
    <footer className="border-t border-cyan-500/30 backdrop-blur-sm bg-slate-950/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-magenta-400 rounded-lg flex items-center justify-center font-bold text-slate-950 text-sm">
                SB
              </div>
              <span className="font-bold text-white">Shanskar</span>
            </div>
            <p className="text-sm text-gray-400">
              AI Engineer & Political Sector Technologist
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#expertise" className="hover:text-cyan-400 transition-colors">Expertise</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              <li><a href="#blog" className="hover:text-cyan-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://github.com/shanskarBansal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-magenta-400 transition-colors flex items-center gap-2"
                >
                  <span>GitHub</span>
                  <span className="opacity-0 group-hover:opacity-100">→</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/shanskarbansal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime-400 transition-colors flex items-center gap-2"
                >
                  <span>LinkedIn</span>
                  <span className="opacity-0 group-hover:opacity-100">→</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:shanskarbansal@gmail.com"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <span>Email</span>
                  <span className="opacity-0 group-hover:opacity-100">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Stay Updated</h4>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 bg-slate-800/50 border border-cyan-500/30 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
              <button className="w-full px-3 py-2 bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-400 hover:to-magenta-400 text-slate-950 font-semibold rounded text-sm transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2026 Shanskar Bansal. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
