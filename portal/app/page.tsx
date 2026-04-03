import Link from "next/link";
import { ArrowDown, Blocks, TrendingUp, Radio, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-[72px] pt-[72px]">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `url('/images/hero-bg.jpg') center top / cover no-repeat, linear-gradient(180deg, #1a3a5c 0%, #0d2440 50%, #061a2e 100%)`,
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-deep-indigo/60 via-deep-indigo/50 to-deep-indigo" />
        <div className="absolute inset-0 z-0 stars-bg" />
        <div
          className="absolute inset-0 z-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='100' r='2' fill='%23D4AF37' fill-opacity='0.3'/%3E%3Ccircle cx='200' cy='50' r='1.5' fill='%23D4AF37' fill-opacity='0.3'/%3E%3Ccircle cx='300' cy='100' r='2' fill='%23D4AF37' fill-opacity='0.3'/%3E%3Ccircle cx='150' cy='200' r='1.5' fill='%23D4AF37' fill-opacity='0.3'/%3E%3Ccircle cx='250' cy='200' r='1.5' fill='%23D4AF37' fill-opacity='0.3'/%3E%3Ccircle cx='200' cy='300' r='2' fill='%23D4AF37' fill-opacity='0.3'/%3E%3Cpath d='M100 100 L200 50 L300 100 M150 200 L200 300 L250 200' stroke='%23D4AF37' stroke-opacity='0.1' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "400px 400px",
          }}
        />

        <div className="relative z-10 text-center max-w-3xl px-4 md:px-8">
          <h1 className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="block text-marble-white text-5xl md:text-7xl drop-shadow-lg">
              Uncertain
            </span>
            <span className="block text-metallic text-5xl md:text-7xl drop-shadow-lg">
              Systems
            </span>
          </h1>
          <p
            className="font-[family-name:var(--font-display)] text-base md:text-xl tracking-[0.1em] text-marble-white/90 mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Accelerating Human Educational Technology
          </p>
          <p
            className="text-lg text-marble-white/80 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Infrastructure for Human Education in an AI-driven World.
            An open ecosystem dedicated to education accelerationism.
          </p>
          <a
            href="#portal"
            className="btn-outline animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Explore the Portal
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-gradient-to-b from-deep-indigo to-sea-indigo/80">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Our Vision</span>
            <h2 className="text-3xl md:text-4xl text-marble-white">
              Educational Accelerationism
            </h2>
          </div>
          <div className="text-center mb-16 max-w-3xl mx-auto space-y-6">
            <p className="text-lg leading-relaxed text-marble-white/80">
              We believe in the radical acceleration of human learning capacity through
              open technology. Every tool we build is a step toward a future where
              knowledge flows freely, where learning adapts to the learner, and where
              the barriers between curiosity and mastery dissolve.
            </p>
            <p className="text-lg leading-relaxed text-marble-white/80">
              Modern AI is overwhelmingly trained on finalized, edited, high-quality text — never
              on the live, uncertain, error-filled process of human discovery. By systematically
              collecting and structuring authentic cognition, we supply the missing signal needed
              to train models that truly understand and augment human thought.
            </p>
            <p className="text-lg leading-relaxed text-marble-white/80">
              This is not just education. This is <em className="text-gold not-italic font-medium">acceleration</em>.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "◈", title: "Open Source", text: "Every line of code, freely available. Build with us, build upon us." },
              { icon: "◈", title: "AI-Native", text: "Intelligence amplified. Human potential unlocked through machine partnership." },
              { icon: "◈", title: "Community", text: "Collective wisdom, shared progress. We accelerate together." },
            ].map((p) => (
              <div
                key={p.title}
                className="glass text-center p-8 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(0,26,51,0.4)] transition-all duration-300"
              >
                <div className="text-3xl text-gold mb-4 drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  {p.icon}
                </div>
                <h3 className="text-lg text-marble-white mb-2">{p.title}</h3>
                <p className="text-sm text-slate-gray">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Cards */}
      <section id="portal" className="py-24 bg-sea-indigo relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[20%] w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-[20%] w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="section-label">The Portal</span>
            <h2 className="text-3xl md:text-4xl text-marble-white">
              Explore the Ecosystem
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                href: "/tools",
                icon: <Blocks size={32} />,
                title: "The Stack",
                desc: "Our modular open tools for education acceleration — openLesson, GHC Dataset, Benchmark, and more.",
              },
              {
                href: "/investors",
                icon: <TrendingUp size={32} />,
                title: "Investors",
                desc: "Stake $UNSYS, earn dividends, become a partner. On-chain revenue sharing on Solana.",
              },
              {
                href: "/socials",
                icon: <Radio size={32} />,
                title: "Socials",
                desc: "Follow the journey on YouTube, X, and beyond.",
              },
              {
                href: "/blog",
                icon: <BookOpen size={32} />,
                title: "Blog",
                desc: "Updates, insights, and thoughts on educational accelerationism.",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="glass p-8 group hover:translate-y-[-4px] transition-all duration-300"
              >
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl text-marble-white mb-2 group-hover:text-gold transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-marble-white/60 leading-relaxed">
                  {card.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What is Uncertain Systems? */}
      <section className="py-24 bg-gradient-to-b from-sea-indigo to-deep-indigo">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="section-label">The Pitch</span>
            <h2 className="text-3xl md:text-4xl text-marble-white">
              What is Uncertain Systems?
            </h2>
          </div>

          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h3 className="text-2xl text-gold mb-8">
              Accelerating Human Education Through True AI Tutoring
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-10">
            <div>
              <h4 className="text-lg text-gold font-medium mb-3">The Axiom</h4>
              <p className="text-lg leading-relaxed text-marble-white/80">
                We are already using AI to teach humans. The next leap is using AI to tutor
                them—helping every learner achieve genuine independent mastery. A tutor's job is
                not to answer questions; it is to transform a student's mind so they no longer
                need the tutor.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-gold font-medium mb-3">The Core Problem</h4>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-marble-white/80">
                  Today's large language models are powerful knowledge engines, yet they still
                  cannot serve as real human tutors. Cognition remains a black box. We do not
                  understand how the brain actually works, and therefore our current AI
                  models—trained on data that is at least one degree removed from live human
                  reasoning—cannot either.
                </p>
                <p className="text-lg leading-relaxed text-marble-white/80">
                  A February 2026 paper ("Large Language Models as Students Who Think Aloud")
                  confirms what practitioners already see: state-of-the-art LLMs are overly
                  coherent, verbose, and confidently wrong when faced with genuine novice
                  reasoning and metacognition. They simulate tutoring; they do not replicate it.
                </p>
                <p className="text-lg leading-relaxed text-marble-white/80">
                  As a result, AI today integrates horizontally into edTech—great for search,
                  flashcards, and content delivery—but it has not delivered the vertical
                  breakthrough required for true mastery.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg text-gold font-medium mb-3">Cognitive Equivalence</h4>
              <p className="text-lg leading-relaxed text-marble-white/80">
                Any two human brains are, in principle, equivalent. If Brain B can solve problem
                X and Brain A cannot, there must exist a transformation path from config A →
                config B that is biologically compatible with Person A. The challenge is
                discovering that path efficiently, scalably, and without invasive hardware.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-gold font-medium mb-3">
                Our Solution: A Full Vertical Stack Built for Now and the Future
              </h4>
              <p className="text-lg leading-relaxed text-marble-white/80 mb-8">
                We are not waiting for Neuralink or perfect neuroscience. We are building what is
                possible today while creating the data foundation for tomorrow through LLM
                Harnesses—the same methodology that turned raw models into production-grade coding
                assistants over the last two years. Our stack is deliberately vertical:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {[
              {
                icon: "◈",
                title: "Data Layer",
                text: (
                  <>
                    <strong className="text-marble-white">GHC Dataset</strong> (Grounded Human
                    Cognition): High-fidelity, real-time learning traces that close the gap
                    between training data and actual novice cognition.
                    <br /><br />
                    <strong className="text-marble-white">GHC Benchmark</strong>: A rigorous
                    cognitive evaluation suite.
                  </>
                ),
              },
              {
                icon: "◈",
                title: "Software Layer",
                text: (
                  <>
                    <strong className="text-marble-white">openLesson</strong>: The core AI-native
                    tutoring platform. Built as an agentic harness that probes, diagnoses, and
                    guides learners toward independent mastery rather than spoon-feeding answers.
                  </>
                ),
              },
              {
                icon: "◈",
                title: "Simulator & Hardware Layer",
                text: (
                  <>
                    <strong className="text-marble-white">Classroom</strong>: Our Educational
                    Simulator and Dojo. This is where we train synthetic Tutors and Synthetic
                    Students at scale. Classroom also serves as the software foundation that powers
                    our hardware devices, creating immersive, real-world learning environments that
                    go far beyond the screen.
                  </>
                ),
              },
            ].map((p) => (
              <div
                key={p.title}
                className="glass text-center p-8 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(0,26,51,0.4)] transition-all duration-300"
              >
                <div className="text-3xl text-gold mb-4 drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  {p.icon}
                </div>
                <h3 className="text-lg text-marble-white mb-2">{p.title}</h3>
                <p className="text-sm text-slate-gray leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
