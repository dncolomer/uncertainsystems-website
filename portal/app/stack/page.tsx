import { BarChart3, Brain, ExternalLink, GitFork, GraduationCap, Sparkles } from "lucide-react";

const stack = [
  [Sparkles, "OpenLesson", "The Socratic think-aloud LLM harness.", "https://openlesson.academy"],
  [Brain, "GHC Dataset", "Real-time human cognition traces from people explaining their reasoning.", "https://huggingface.co/datasets/unsys/ghc"],
  [BarChart3, "GHC Benchmark", "Evaluation for how closely model reasoning matches actual human reasoning.", "https://github.com/dncolomer/ghc-benchmark"],
  [GraduationCap, "Classroom", "Simulator for training synthetic tutors and synthetic students at scale.", ""],
];

export default function StackPage() {
  return (
    <main className="site-shell subpage-shell">
      <section className="image-section roadmap-bg page-hero">
        <div className="page-container">
          <div className="section-heading">
            <span className="eyebrow">Stack</span>
            <h1>Software, data, benchmarks, and simulation for automating learning.</h1>
          </div>
          <div className="card-grid four">
            {stack.map(([Icon, title, text, href]) => (
              <article className="glass-panel compact" key={title as string}>
                <Icon size={24} />
                <h3>{title as string}</h3>
                <p>{text as string}</p>
                {href ? (
                  <a href={href as string} target="_blank" rel="noopener" className="text-link">
                    Open <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="muted-link">Coming soon</span>
                )}
              </article>
            ))}
          </div>
          <div className="section-footer-link">
            <a href="https://github.com/dncolomer" target="_blank" rel="noopener" className="btn-secondary">
              GitHub <GitFork size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
