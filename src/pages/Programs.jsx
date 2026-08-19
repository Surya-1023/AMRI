import PageHero from '../components/PageHero.jsx'
import Button from '../components/Button.jsx'
import { Link } from 'react-router-dom'

const programs = [
  { title: 'FDP', subtitle: 'Faculty Development Programmes', text: 'Structured programmes helping faculty deepen research skills and pedagogy.' },
  { title: 'Workshops', subtitle: 'Hands-on mathematical & computational', text: 'Applied sessions in tools, techniques and computational mathematics.' },
  { title: 'Research Training', subtitle: 'Research skills for scholars', text: 'Methodology, writing and publishing support for emerging researchers.' },
  { title: 'Young Researchers', subtitle: 'Student & scholar network', text: 'A peer network connecting students and early-career researchers.' },
  { title: 'Mathematics Innovation', subtitle: 'Ideas → Models → Applications', text: 'Turning theoretical work into applied models and real prototypes.' },
  { title: 'Industry & Academia', subtitle: 'Collaborative research', text: 'Partnerships bridging academic mathematics with industry problems.' },
]

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs & Initiatives"
        title="Structured pathways for every stage of a research career"
        symbol="G(V,E)"
      />

      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((p) => (
              <div key={p.title} className="border border-ink/15 p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-pen">{p.title}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{p.subtitle}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-ink-soft mb-6">Ready to register for an upcoming programme?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/events" variant="ink">View events →</Button>
              <Link to="/register" className="btn-gold inline-flex items-center px-6 py-3 text-sm">
                Register now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
