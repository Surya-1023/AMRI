export default function PageHero({ eyebrow, title, description, symbol = '∑' }) {
  return (
    <section className="chalk-board text-chalk relative overflow-hidden">
      <span className="pointer-events-none select-none absolute -right-6 -top-10 text-[220px] font-display text-chalk/5">
        {symbol}
      </span>
      <div className="max-w-5xl mx-auto px-6 py-24 relative">
        <p className="eyebrow text-gold mb-4">{eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-chalk/75 max-w-xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  )
}
