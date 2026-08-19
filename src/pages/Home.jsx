import Button from '../components/Button.jsx'
import { Link } from 'react-router-dom'

const whyAmri = [
  { symbol: '◇', title: 'Research', text: 'Research excellence and collaboration across academic institutions.' },
  { symbol: '∑', title: 'Mathematics', text: 'Advancing mathematical knowledge across pure and applied domains.' },
  { symbol: 'AI', title: 'Technology', text: 'Mathematics for AI, machine learning and data science.' },
  { symbol: '↗', title: 'Innovation', text: 'Turning mathematical ideas into real-world impact.' },
]

const researchAreas = [
  { title: 'Pure Mathematics', items: ['Algebra', 'Analysis', 'Topology', 'Number Theory'] },
  { title: 'Applied Mathematics', items: ['Mathematical Modelling', 'Differential Equations', 'Optimization'] },
  { title: 'Computational Math', items: ['Numerical Methods', 'Scientific Computing', 'Python · MATLAB'] },
  { title: 'Graph & Fuzzy Mathematics', items: ['Graph Theory', 'Fuzzy Mathematics', 'Spectral Methods'] },
  { title: 'AI & Data Science', items: ['Machine Learning', 'Deep Learning', 'Mathematical AI'] },
  { title: 'Emerging Research', items: ['Network Science', 'Mathematical Biology', 'Quantum Mathematics'] },
]

const events = [
  {
    tag: '5-Day FDP',
    title: 'Mathematics for AI & Emerging Tech',
    meta: '₹150 · E-Certificate',
    cta: 'Register now',
    to: '/register?event=fdp',
  },
  {
    tag: 'Research Workshop',
    title: 'Research Methods & Innovation',
    meta: 'Limited seats',
    cta: 'Register now',
    to: '/register?event=workshop',
  },
  {
    tag: 'International Conference',
    title: 'Mathematics & Technology',
    meta: 'Call for papers open',
    cta: 'View details',
    to: '/events',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO — chalkboard */}
      <section className="chalk-board text-chalk relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-[0.06] font-display text-[26vw] leading-none">
          &#8721;
        </div>
        <div className="max-w-5xl mx-auto px-6 py-28 sm:py-36 relative text-center">
          <p className="eyebrow text-gold mb-6">Association for Mathematics, Research and Innovation</p>
          <h1 className="font-display font-semibold text-4xl sm:text-6xl leading-[1.05] tracking-tight">
            Advancing mathematics.
            <br />
            <span className="italic font-normal">Inspiring research.</span>
            <br />
            Creating innovation.
          </h1>
          <p className="mt-7 text-chalk/75 max-w-xl mx-auto leading-relaxed">
            A platform for mathematical research, academic collaboration, innovation
            and interdisciplinary knowledge exchange.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button to="/membership" variant="gold">Join AMRI</Button>
            <Button to="/programs" variant="chalk">Explore programs</Button>
          </div>
          <p className="mt-14 font-display text-xl tracking-[0.3em] text-chalk/40">
            &#9670; &#8721; &#8747; &#955; G(V,E) &#8711; AI &#9670;
          </p>
        </div>
      </section>

      {/* ABOUT preview — paper */}
      <section className="paper-grid">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="eyebrow text-pen mb-4">About AMRI</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Connecting mathematical knowledge with research &amp; innovation
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed">
            AMRI is an academic platform dedicated to promoting mathematics, research,
            innovation and interdisciplinary collaboration among students, researchers,
            faculty members and professionals.
          </p>
          <div className="mt-8">
            <Button to="/about" variant="ink">Learn more about AMRI →</Button>
          </div>
        </div>
      </section>

      {/* WHY AMRI */}
      <section className="bg-paper border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="font-display text-3xl font-semibold text-center mb-14">Why AMRI?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyAmri.map((item) => (
              <div key={item.title} className="border border-ink/15 p-6 hover:border-pen transition-colors">
                <span className="font-display text-2xl text-gold">{item.symbol}</span>
                <h3 className="mt-4 font-mono text-xs uppercase tracking-wider">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="chalk-board text-chalk">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="font-display text-3xl font-semibold text-center mb-14">Research Areas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchAreas.map((area) => (
              <div key={area.title} className="border border-chalk/20 p-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-gold">{area.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-chalk/80">
                  {area.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/research" variant="chalk">Explore research →</Button>
          </div>
        </div>
      </section>

      {/* PROGRAMS preview */}
      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="font-display text-3xl font-semibold text-center mb-4">Programs &amp; Initiatives</h2>
          <p className="text-center text-ink-soft max-w-xl mx-auto mb-14">
            Faculty development, hands-on workshops and research training that grow
            AMRI's community of mathematicians.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {['Faculty Development Programmes', 'Hands-on Workshops', 'Research Training'].map((p) => (
              <div key={p} className="border border-ink/15 p-6 text-center">
                <p className="font-mono text-xs uppercase tracking-wider text-pen">{p}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/programs" variant="ink">See all programs →</Button>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="bg-paper border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="font-display text-3xl font-semibold text-center mb-14">Upcoming Events</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((ev) => (
              <div key={ev.title} className="border border-ink/15 p-6 flex flex-col">
                <p className="eyebrow text-gold">{ev.tag}</p>
                <h3 className="font-display text-lg font-semibold mt-3">{ev.title}</h3>
                <p className="text-sm text-ink-soft mt-2 flex-1">{ev.meta}</p>
                <Link to={ev.to} className="btn-ink inline-flex items-center justify-center mt-5 px-5 py-2.5 text-xs">
                  {ev.cta}
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/events" variant="ink">View all events →</Button>
          </div>
        </div>
      </section>

      {/* RESEARCH & INNOVATION impact */}
      <section className="chalk-board text-chalk">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <p className="eyebrow text-gold mb-4">Research &amp; Innovation</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            From mathematical ideas to real-world impact
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4 font-mono text-xs uppercase tracking-wider text-chalk/80">
            {['Healthcare', 'AI & ML', 'Agriculture', 'Networks'].map((t) => (
              <span key={t} className="border border-chalk/25 px-4 py-2">{t}</span>
            ))}
          </div>
          <p className="mt-8 font-display italic text-gold text-lg">Mathematical Innovation</p>
          <div className="mt-8">
            <Button to="/research" variant="gold">Discover our research →</Button>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="bg-paper">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="font-display text-3xl font-semibold">AMRI Community</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-3 font-mono text-xs uppercase tracking-wider text-ink-soft">
            <span>Students</span>
            <span>Research Scholars</span>
            <span>Faculty</span>
            <span>Professionals</span>
          </div>
          <p className="mt-8 text-ink-soft tracking-wide">Connect &bull; Collaborate &bull; Create</p>
        </div>
      </section>

      {/* BECOME A MEMBER */}
      <section className="bg-paper border-y border-ink/10">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="font-display text-3xl font-semibold">Become a Member</h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Be part of a growing mathematical research community.
          </p>
          <div className="mt-8">
            <Button to="/membership" variant="gold">Join AMRI today →</Button>
          </div>
        </div>
      </section>

      {/* NEWS & UPDATES */}
      <section className="bg-paper">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="font-display text-3xl font-semibold text-center mb-12">News &amp; Updates</h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
            {[
              'New Research Opportunities',
              'Upcoming FDP',
              'AMRI Membership Open',
              'Workshops & Seminars',
              'Awards & Achievements',
              'Research Collaborations',
            ].map((n) => (
              <div key={n} className="flex items-center gap-3 border-b border-ink/10 pb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span className="text-sm text-ink-soft">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
