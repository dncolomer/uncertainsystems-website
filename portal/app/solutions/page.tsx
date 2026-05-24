import { Building2, GraduationCap, Radio, Users } from "lucide-react";

const solutions = [
  [Users, "Individuals", "For people who want to understand hard topics without burning unnecessary mental energy."],
  [Building2, "Enterprises", "For organizations that need employees, candidates, or customers to internalize complex systems faster."],
  [Radio, "Teams", "For groups that need shared understanding around products, workflows, research, or strategy."],
  [GraduationCap, "Educators", "For schools, academies, tutors, and certification programs that need better practice loops."],
];

export default function SolutionsPage() {
  return (
    <main className="site-shell subpage-shell">
      <section className="image-section gtm-bg page-hero">
        <div className="page-container">
          <div className="section-heading">
            <span className="eyebrow">Who It Is For</span>
            <h1>Learning automation for individuals, enterprises, teams, and educators.</h1>
          </div>
          <div className="card-grid four">
            {solutions.map(([Icon, title, text]) => (
              <article className="glass-panel compact" key={title as string}>
                <Icon size={24} />
                <h3>{title as string}</h3>
                <p>{text as string}</p>
              </article>
            ))}
          </div>
          <div className="solutions-trust content-card">
            <span className="eyebrow">Who Trusts Us</span>
            <h2>Current projects</h2>
            <div className="trust-list">
              <a href="https://thewiser.org" target="_blank" rel="noopener">
                <strong>TheWiser.org</strong>
                <span>Learning and knowledge infrastructure project</span>
              </a>
              <a href="https://dantes.io" target="_blank" rel="noopener">
                <strong>Dantes.io</strong>
                <span>Current client project</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
