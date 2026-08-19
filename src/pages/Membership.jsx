import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

const tiers = [
  { name: 'Student', text: 'For students exploring mathematical research.', points: ['Access to workshops', 'Young Researchers network', 'Newsletter'] },
  { name: 'Research Scholar', text: 'For active scholars and PhD candidates.', points: ['Research training', 'Conference discounts', 'Collaboration matching'] },
  { name: 'Faculty & Professional', text: 'For faculty members and industry professionals.', points: ['FDP priority access', 'Industry–academia network', 'Speaking opportunities'] },
]

export default function Membership() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Become a member"
        description="Be part of a growing mathematical research community — connect, collaborate, create."
        symbol="+"
      />

      <section className="bg-paper">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid sm:grid-cols-3 gap-5 mb-20">
            {tiers.map((t) => (
              <div key={t.name} className="border border-ink/15 p-6">
                <h3 className="font-display text-lg font-semibold">{t.name}</h3>
                <p className="mt-2 text-sm text-ink-soft">{t.text}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-ink-soft">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-2"><span className="text-gold">·</span>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-lg mx-auto border border-ink/15 p-8">
            <h3 className="font-display text-2xl font-semibold mb-6 text-center">Join AMRI today</h3>
            {submitted ? (
              <p className="text-center text-pen">
                Thanks for your interest — a membership coordinator will reach out to
                the email you provided shortly.
              </p>
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
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft mb-1">I am a</label>
                  <select className="w-full border border-ink/20 px-4 py-2.5 bg-paper focus:outline-none focus:border-pen">
                    <option>Student</option>
                    <option>Research Scholar</option>
                    <option>Faculty Member</option>
                    <option>Professional</option>
                  </select>
                </div>
                <button type="submit" className="btn-gold w-full py-3 text-sm mt-2">
                  Submit application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
