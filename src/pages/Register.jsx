import { useSearchParams, Link } from 'react-router-dom'
import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

const eventNames = {
  fdp: 'Mathematics for AI & Emerging Tech (5-Day FDP)',
  workshop: 'Research Methods & Innovation Workshop',
  conference: 'Mathematics & Technology — International Conference',
}

export default function Register() {
  const [params] = useSearchParams()
  const eventKey = params.get('event')
  const eventName = eventNames[eventKey] || 'an AMRI event'
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero eyebrow="Registration" title="Register your interest" symbol="✓" />

      <section className="bg-paper">
        <div className="max-w-lg mx-auto px-6 py-20">
          <div className="border border-ink/15 p-8">
            <p className="eyebrow text-pen mb-2">You're registering for</p>
            <h3 className="font-display text-xl font-semibold mb-6">{eventName}</h3>

            {submitted ? (
              <div className="text-center py-6">
                <p className="text-pen font-display text-lg">Registration received</p>
                <p className="mt-2 text-sm text-ink-soft">
                  Confirmation and further details will be emailed to you shortly.
                </p>
                <Link to="/events" className="btn-ink inline-flex mt-6 px-6 py-2.5 text-xs">
                  Back to events
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft mb-1">Full name</label>
                  <input required type="text" className="w-full border border-ink/20 px-4 py-2.5 bg-paper focus:outline-none focus:border-pen" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft mb-1">Email</label>
                  <input required type="email" className="w-full border border-ink/20 px-4 py-2.5 bg-paper focus:outline-none focus:border-pen" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft mb-1">Affiliation</label>
                  <input type="text" placeholder="University / Organization" className="w-full border border-ink/20 px-4 py-2.5 bg-paper focus:outline-none focus:border-pen" />
                </div>
                <button type="submit" className="btn-gold w-full py-3 text-sm mt-2">Confirm registration</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
