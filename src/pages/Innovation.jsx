import PageHero from '../components/PageHero.jsx'
import Button from '../components/Button.jsx'

const domains = ['Healthcare', 'AI & ML', 'Agriculture', 'Networks']

export default function Innovation() {
  return (
    <>
      <PageHero
        eyebrow="Innovation"
        title="From mathematical ideas to real-world impact"
        description="Mathematical innovation applied across healthcare, AI, agriculture and network science."
        symbol="↗"
      />

      <section className="bg-paper">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {domains.map((d) => (
              <span key={d} className="border border-ink/20 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-ink-soft">
                {d}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-display text-3xl text-gold">Ideas</p>
              <p className="mt-2 text-sm text-ink-soft">Theoretical mathematics as a starting point</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold">Models</p>
              <p className="mt-2 text-sm text-ink-soft">Formalized into computational and analytical models</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold">Applications</p>
              <p className="mt-2 text-sm text-ink-soft">Deployed to solve real interdisciplinary problems</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button to="/research" variant="ink">Explore the research behind it →</Button>
          </div>
        </div>
      </section>
    </>
  )
}
