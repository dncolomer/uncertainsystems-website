import { CircleDot } from "lucide-react";

const items = [
  ["Brain Configuration", "The full physical state of a human brain at a specific point in time."],
  ["Knowledge = Proximity", "A useful configuration is close enough to retrieve, apply, and transform."],
  ["Learning = Transformation", "Learning is movement through configuration space, ideally with less wasted effort."],
  ["Non-Invasive Path", "Start with software attention loops, then add world models, stimulation, and biofeedback."],
];

export default function SciencePage() {
  return (
    <main className="site-shell subpage-shell">
      <section className="image-section science-bg page-hero">
        <div className="page-container split-grid">
          <div>
            <span className="eyebrow">Science</span>
            <h1>A holistic model of knowledge.</h1>
          </div>
          <div className="stacked-list">
            {items.map(([title, text], index) => (
              <div className="list-card" key={title}>
                <CircleDot size={18} />
                <p><strong>{title}</strong><br />{text}</p>
                <span>0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
