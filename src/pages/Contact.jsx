import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch with AMRI" symbol="@" />

      <section className="bg-paper">
        <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14">
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Details</h3>
            <ul className="space-y-3 text-sm text-ink-soft">
              <li><span className="font-mono text-xs uppercase text-pen block mb-0.5">Email</span>contact@amri.org</li>
              <li><span className="font-mono text-xs uppercase text-pen block mb-0.5">Location</span>AMRI Research Centre, India</li>
              <li><span className="font-mono text-xs uppercase text-pen block mb-0.5">Social</span>LinkedIn · YouTube</li>
            </ul>
          </div>

          <div>
            {submitted ? (
              <p className="text-pen">Message sent — we'll respond within two business days.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft mb-1">Name</label>
                  <input required type="text" className="w-full border border-ink/20 px-4 py-2.5 bg-paper focus:outline-none focus:border-pen" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft mb-1">Email</label>
                  <input required type="email" className="w-full border border-ink/20 px-4 py-2.5 bg-paper focus:outline-none focus:border-pen" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft mb-1">Message</label>
                  <textarea required rows={4} className="w-full border border-ink/20 px-4 py-2.5 bg-paper focus:outline-none focus:border-pen" />
                </div>
                <button type="submit" className="btn-ink w-full py-3 text-sm mt-2">Send message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
