/**
 * Contact Call-to-Action Component
 * 
 * Modern contact section with links and form
 */

export default function ContactCTA() {
  return (
    <section className="py-12 border-t border-cyan-500/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side - Text */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Let's Build Something
            </span>
            <br />
            <span className="text-white">Amazing Together</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          {/* Contact Links */}
          <div className="space-y-3">
            <a
              href="mailto:shanskarbansal@gmail.com"
              className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors group"
            >
              <span className="text-xl">📧</span>
              <span>shanskarbansal@gmail.com</span>
              <span className="text-xl opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>

            <a
              href="https://github.com/shanskarBansal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-magenta-400 hover:text-magenta-300 transition-colors group"
            >
              <span className="text-xl">🔗</span>
              <span>github.com/shanskarBansal</span>
              <span className="text-xl opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>

            <a
              href="https://linkedin.com/in/shanskarbansal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lime-400 hover:text-lime-300 transition-colors group"
            >
              <span className="text-xl">💼</span>
              <span>linkedin.com/in/shanskarbansal</span>
              <span className="text-xl opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          </div>
        </div>

        {/* Right side - Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-sm text-gray-400">Collaborations</div>
          </div>

          <div className="bg-gradient-to-br from-magenta-500/10 to-magenta-500/5 border border-magenta-500/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-magenta-400 mb-2">24/7</div>
            <div className="text-sm text-gray-400">Available</div>
          </div>

          <div className="bg-gradient-to-br from-lime-500/10 to-lime-500/5 border border-lime-500/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-lime-400 mb-2">100%</div>
            <div className="text-sm text-gray-400">Dedicated</div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
            <div className="text-sm text-gray-400">Years Exp</div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-12 pt-12 border-t border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-gray-400 mb-2">Ready to start your next project?</p>
          <p className="text-white font-semibold">Let's make it happen</p>
        </div>

        <div className="flex gap-4">
          <button className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 rounded-lg font-semibold transition-all">
            Send Email
          </button>
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-400 hover:to-magenta-400 text-slate-950 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-cyan-500/50">
            Schedule Call
          </button>
        </div>
      </div>
    </section>
  );
}
