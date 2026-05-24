import Link from "next/link";
import { ArrowRight, Brain, Building2, CircleDot, GraduationCap, Radio, Users } from "lucide-react";

const pillars = [
  {
    title: "Problem",
    kicker: "Low ROI Learning",
    text: "For most people, learning is physically and mentally expensive. Attention, retention, and deep understanding still require too much effort for the output they get back.",
  },
  {
    title: "Vision",
    kicker: "Self-Driving Learning",
    text: "We are building non-invasive technology that guarantees the same or more human learning with significantly less physical and mental effort.",
  },
  {
    title: "Goal",
    kicker: "More Attention, Same Energy",
    text: "Increase attention markers without a proportional energy cost to the user, then compound that into a full automation stack for human learning.",
  },
];

const science = [
  "Brain configuration is the full physical state of a human brain at a specific point in time.",
  "Knowledge is proximity: how close one configuration is to another useful configuration.",
  "Learning is transformation through configuration space.",
];

const roadmap = [
  ["Today", "OpenLesson v1: LLM harness for Socratic think-aloud coaching."],
  ["Near-Term", "Socratic interruption model plus other world models."],
  ["Medium-Term", "Non-invasive brain-stimulation headset, starting with tDCS."],
  ["Future", "Full automation: hardware, software, and biofeedback loops."],
];

const markets = [
  {
    icon: Users,
    title: "Individuals",
    text: "People who want to learn deeply without turning every hard topic into a high-friction grind.",
  },
  {
    icon: Building2,
    title: "Enterprises",
    text: "Teams that need people to understand complex products, systems, and decisions faster and with less wasted training time.",
  },
  {
    icon: Radio,
    title: "Educators",
    text: "Schools, academies, and tutors that want practice environments where learners reveal how they think, not just what they answer.",
  },
  {
    icon: GraduationCap,
    title: "Builders",
    text: "Researchers and developers building tools, agents, datasets, and interfaces around real human learning traces.",
  },
];

export default function Home() {
  return (
    <main className="site-shell -mt-[72px] pt-[72px]">
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="page-container hero-grid hero-grid-single">
          <div className="hero-copy">
            <span className="eyebrow">Uncertain Systems</span>
            <h1>Automating Human Learning</h1>
            <p>
              We are building self-driving technology for learning: non-invasive systems that raise attention and understanding without asking humans to burn proportionally more energy.
            </p>
            <div className="hero-actions">
              <a href="https://openlesson.academy" target="_blank" rel="noopener" className="btn-primary">
                Open OpenLesson <ArrowRight size={16} />
              </a>
              <Link href="/science" className="btn-secondary">Read the thesis</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container card-grid three">
          {pillars.map((item) => (
            <article className="glass-panel" key={item.title}>
              <span className="panel-index">{item.title}</span>
              <h3>{item.kicker}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="science" className="image-section science-bg">
        <div className="page-container split-grid">
          <div>
            <span className="eyebrow">The Science</span>
            <h2>A more holistic definition of knowledge.</h2>
          </div>
          <div className="stacked-list">
            {science.map((item, index) => (
              <div className="list-card" key={item}>
                <CircleDot size={18} />
                <p>{item}</p>
                <span>0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="page-section product-section">
        <div className="product-band">
          <div className="product-band-bg" />
          <div className="page-container product-band-content">
            <span className="eyebrow">Our First Product</span>
            <h2>OpenLesson raises attention without turning learning into a grind.</h2>
            <p>
              OpenLesson turns any hard topic into a Socratic think-aloud session. It asks the learner to expose their current model, identifies the precise gap, and keeps them moving with low-friction coaching.
            </p>
            <a href="https://openlesson.academy" target="_blank" rel="noopener" className="btn-primary">
              Open OpenLesson <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="page-container">
          <blockquote>
            “Identifying the precise gap in my knowledge is what the Socratic method does so well. I didn’t realize I didn’t know how that part worked until that direct question was asked of me.”
          </blockquote>
          <span>User feedback</span>
        </div>
      </section>

      <section className="image-section roadmap-bg">
        <div className="page-container">
          <div className="section-heading left">
            <span className="eyebrow">Roadmap</span>
            <h2>From OpenLesson to the Neo Chair.</h2>
          </div>
          <div className="roadmap-grid">
            {roadmap.map(([time, text]) => (
              <article className="roadmap-card" key={time}>
                <span>{time}</span>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <div className="section-heading">
            <span className="eyebrow">Who It Is For</span>
            <h2>Learning automation for people, teams, educators, and builders.</h2>
          </div>
          <div className="card-grid four">
            {markets.map((market) => (
              <article className="glass-panel compact" key={market.title}>
                <market.icon size={24} />
                <h3>{market.title}</h3>
                <p>{market.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="image-section gtm-bg final-cta">
        <div className="page-container final-grid">
          <div>
            <span className="eyebrow">Who Trusts Us</span>
            <h2>Current projects using Uncertain Systems work.</h2>
          </div>
          <div className="content-card">
            <Brain size={28} />
            <h3>Who are we working for?</h3>
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
