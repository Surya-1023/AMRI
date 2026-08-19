import PageHero from '../components/PageHero.jsx'
import { Link } from 'react-router-dom'

const events = [
  {
    tag: '5-Day FDP',
    title: 'Mathematics for AI & Emerging Tech',
    detail: '₹150 · E-Certificate provided on completion.',
    cta: 'Register now',
    to: '/register?event=fdp',
  },
  {
    tag: 'Research Workshop',
    title: 'Research Methods & Innovation',
    detail: 'Hands-on sessions on research design and innovation methodology.',
    cta: 'Register now',
    to: '/register?event=workshop',
  },
  {
    id: 'conference',
    tag: 'International Conference',
    title: 'Mathematics & Technology',
    detail: 'A gathering of researchers exploring the intersection of mathematics and emerging technology.',
    cta: 'Register interest',
    to: '/register?event=conference',
  },
]

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Upcoming events at AMRI"
        description="Workshops, faculty programmes and conferences for the AMRI community."
        symbol="∇"
      />

      <section className="bg-paper">
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-6">
          {events.map((ev) => (
            <div
              key={ev.title}
              id={ev.id}
              className="border border-ink/15 p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            >
              <div>
                <p className="eyebrow text-pen">{ev.tag}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">{ev.title}</h3>
                <p className="mt-2 text-sm text-ink-soft max-w-md">{ev.detail}</p>
              </div>
              <Link to={ev.to} className="btn-ink inline-flex items-center justify-center px-6 py-3 text-xs whitespace-nowrap">
                {ev.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
