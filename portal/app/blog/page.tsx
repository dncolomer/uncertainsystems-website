import { ArrowRight } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string | null;
  url: string;
}

const ARTICLES: Article[] = [
  {
    id: "1",
    title: "Uncertain Systems Data Provider Verification Process",
    excerpt:
      "At Uncertain Systems, we take trust and quality extremely seriously especially when it comes to Data Providers (DPs) who will supply critical data to power the GHC dataset.",
    image: null,
    url: "https://x.com/uncertainsys/status/2044680886881497508",
  },
  {
    id: "2",
    title: "Understanding the Uncertainty Systems Data Provider Program",
    excerpt:
      "At Uncertainty Systems, we're building the highest-quality, fully attributable dataset for AI through the GHC dataset. A key piece of that vision is the Data Provider Program.",
    image: null,
    url: "https://x.com/uncertainsys/status/2044000988915245152",
  },
  {
    id: "3",
    title: "Blockchain Proofs for Agentic Tutoring at OpenLesson",
    excerpt:
      "I'm building OpenLesson.academy — a system where your personal AI agent becomes your full-time tutor using real Think-Aloud pedagogy.",
    image: null,
    url: "https://x.com/uncertainsys/status/2043968455087407257",
  },
  {
    id: "4",
    title: "The Future of Agentic Learning Companions",
    excerpt:
      "Imagine waking up to an AI companion that already knows what motivates you, quietly tracks your real progress, and turns learning into something that feels natural.",
    image: null,
    url: "https://x.com/uncertainsys/status/2043827626893021617",
  },
  {
    id: "5",
    title: "The Think-Aloud Foundation of OpenLesson.academy",
    excerpt:
      "In today's world of endless online courses, videos, and AI tools, most platforms still follow the same basic model: deliver information, test recall, and move on.",
    image: null,
    url: "https://x.com/uncertainsys/status/2026235364671648202",
  },
  {
    id: "6",
    title: "Raw Brains",
    excerpt:
      "Thinking is messy. Even the smartest people in the world sound uncertain, backtrack, get stuck, laugh at their own dumb ideas, and occasionally have genuine breakthroughs.",
    image: null,
    url: "https://x.com/uncertainsys/status/2024644823660273733",
  },
  {
    id: "7",
    title: "Uncertain Systems – Education Accelerationism Ecosystem",
    excerpt:
      "Uncertain Systems is an open-source ecosystem dedicated to education accelerationism. Our mission is to create tools that enable genuine, transparent co-evolution between humans and AI.",
    image: null,
    url: "https://x.com/uncertainsys/status/2023706311062430107",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-[calc(100vh-72px)]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-indigo via-sea-indigo/40 to-deep-indigo" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_30%,rgba(212,175,55,0.1),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="section-label">Updates & Insights</span>
            <h1 className="text-3xl md:text-5xl text-marble-white mb-4">
              Blog
            </h1>
            <p className="text-lg text-marble-white/60 max-w-2xl mx-auto">
              Thoughts on educational accelerationism, AI-native tutoring, and
              the future of human learning.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass overflow-hidden hover:translate-y-[-4px] transition-all duration-300 block"
              >
                {/* Image / Placeholder */}
                <div className="relative h-44 overflow-hidden">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gold/15 via-sea-indigo/30 to-deep-indigo flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-marble-white/20"
                      >
                        <path
                          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-indigo via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h2 className="text-lg text-marble-white mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-marble-white/60 leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>

                  {/* Read on X Link */}
                  <div className="flex items-center gap-2 text-sm text-gold/70 group-hover:text-gold transition-colors">
                    <span>Read on X</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
