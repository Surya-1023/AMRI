import PageHero from '../components/PageHero.jsx'
import Button from '../components/Button.jsx'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About AMRI"
        title="Connecting mathematical knowledge with research and innovation"
        description="AMRI is an academic platform dedicated to promoting mathematics, research, innovation and interdisciplinary collaboration."
        symbol="∫"
      />

      <section className="bg-paper">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <p className="text-ink-soft leading-relaxed text-lg">
            AMRI — the Association for Mathematics, Research and Innovation — brings
            together students, researchers, faculty members and professionals around
            a shared belief: that mathematics is the connective tissue of research and
            technological progress. We build the programmes, spaces and networks that
            turn mathematical curiosity into published research and applied innovation.
          </p>

          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            <div className="border-t-2 border-pen pt-4">
              <h3 className="font-display text-xl font-semibold">Mission</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                Advance mathematical knowledge and its application across research and industry.
              </p>
            </div>
            <div className="border-t-2 border-pen pt-4">
              <h3 className="font-display text-xl font-semibold">Vision</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                A connected community where mathematical ideas become real-world impact.
              </p>
            </div>
            <div className="border-t-2 border-pen pt-4">
              <h3 className="font-display text-xl font-semibold">Values</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                Rigor, collaboration, accessibility and interdisciplinary curiosity.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button to="/membership" variant="gold">Join AMRI</Button>
          </div>
        </div>
      </section>
    </>
  )
}
