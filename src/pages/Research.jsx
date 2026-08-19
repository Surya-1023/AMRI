import PageHero from '../components/PageHero.jsx'
import Button from '../components/Button.jsx'

const areas = [
  { title: 'Pure Mathematics', items: ['Algebra', 'Analysis', 'Topology', 'Number Theory'] },
  { title: 'Applied Mathematics', items: ['Mathematical Modelling', 'Differential Equations', 'Optimization'] },
  { title: 'Computational Mathematics', items: ['Numerical Methods', 'Scientific Computing', 'Python · MATLAB', 'Mathematical Tools'] },
  { title: 'Graph & Fuzzy Mathematics', items: ['Graph Theory', 'Fuzzy Mathematics', 'Spectral Methods'] },
  { title: 'AI & Data Science', items: ['Machine Learning', 'Deep Learning', 'Data Analytics', 'Mathematical AI'] },
  { title: 'Emerging Research', items: ['TDA', 'Network Science', 'Mathematical Biology', 'Quantum Mathematics'] },
]

export default function Research() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Six areas. One shared language."
        description="From pure theory to applied computation, AMRI's research spans the full breadth of modern mathematics."
        symbol="λ"
      />

      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((area) => (
              <div key={area.title} className="border border-ink/15 p-6 hover:border-pen transition-colors">
                <h3 className="font-display text-lg font-semibold">{area.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
                  {area.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-ink-soft mb-6">Want to collaborate on a research project or join a working group?</p>
            <Button to="/contact" variant="ink">Get in touch →</Button>
          </div>
        </div>
      </section>
    </>
  )
}
