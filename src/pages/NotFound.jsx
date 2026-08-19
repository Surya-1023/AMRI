import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="max-w-xl mx-auto px-6 py-32 text-center">
        <p className="font-display text-6xl text-gold mb-4">?</p>
        <h1 className="font-display text-2xl font-semibold">Page not found</h1>
        <p className="mt-3 text-ink-soft">This page doesn't exist — like an unsolved conjecture.</p>
        <Link to="/" className="btn-ink inline-flex mt-8 px-6 py-3 text-sm">
          Back to home
        </Link>
      </div>
    </section>
  )
}
