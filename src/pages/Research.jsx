import PageHero from '../components/PageHero.jsx'
import Button from '../components/Button.jsx'
import { Code2, Activity, Layers, Database } from 'lucide-react'

const tools = [
  { icon: Code2, name: 'Python' },
  { icon: Activity, name: 'MATLAB' },
  { icon: Layers, name: 'Desmos graphing calculator' },
  { icon: Database, name: 'GeoGebra' },
]

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
        </div>
      </section>

      {/* COMPUTATIONAL MATHEMATICS & TOOLS */}
      <section className="chalk-board text-chalk">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="font-display text-3xl font-semibold">Computational Mathematics &amp; Tools</h2>
          <p className="mt-4 text-chalk/75 leading-relaxed max-w-2xl">
            At AMRI, we leverage powerful computational tools to solve complex
            mathematical problems. Our research methodology heavily relies on:
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {tools.map(({ icon: Icon, name }) => (
              <div
                key={name}
                className="flex items-center gap-4 border border-chalk/20 px-6 py-5 hover:border-gold transition-colors"
              >
                <Icon className="w-5 h-5 text-gold shrink-0" strokeWidth={2} />
                <span className="font-mono text-sm uppercase tracking-wider">{name}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-chalk/75 leading-relaxed max-w-2xl">
            These tools allow us to perform advanced simulations, data analysis and
            mathematical modeling — turning abstract theories into visual and
            tangible results.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mt-16 text-center">
            <p className="text-ink-soft mb-6">Want to collaborate on a research project or join a working group?</p>
            <Button to="/contact" variant="ink">Get in touch →</Button>
          </div>
        </div>
      </section>
    </>
  )
}