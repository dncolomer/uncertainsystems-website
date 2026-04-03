import { Play, MessageSquare } from "lucide-react";

export default function SocialsPage() {
  return (
    <div className="min-h-[calc(100vh-72px)] py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Connect</span>
          <h1 className="text-3xl md:text-5xl text-marble-white mb-4">Socials</h1>
          <p className="text-lg text-marble-white/60 max-w-xl mx-auto">
            Follow the journey. Stay updated on educational accelerationism, product launches, and community events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@uncertainsystems"
            target="_blank"
            rel="noopener"
            className="glass p-8 group hover:translate-y-[-4px] transition-all duration-300 text-center"
          >
            <div className="text-red-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
              <Play size={48} />
            </div>
            <h2 className="text-xl text-marble-white mb-2 group-hover:text-gold transition-colors">
              YouTube
            </h2>
            <p className="text-sm text-marble-white/60">
              Deep dives, tutorials, product demos, and discussions on edu/acc.
            </p>
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/uncertainsys"
            target="_blank"
            rel="noopener"
            className="glass p-8 group hover:translate-y-[-4px] transition-all duration-300 text-center"
          >
            <div className="text-marble-white mb-4 flex justify-center group-hover:scale-110 transition-transform">
              <MessageSquare size={48} />
            </div>
            <h2 className="text-xl text-marble-white mb-2 group-hover:text-gold transition-colors">
              X (Twitter)
            </h2>
            <p className="text-sm text-marble-white/60">
              Quick updates, thoughts, and highlights from the ecosystem.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
