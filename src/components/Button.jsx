import { Link } from 'react-router-dom'

const variantClass = {
  chalk: 'btn-chalk text-chalk',
  ink: 'btn-ink text-ink',
  gold: 'btn-gold',
}

/**
 * Button — renders as an internal <Link>, an external <a>, or a <button>
 * depending on which props are passed.
 */
export default function Button({ to, href, onClick, variant = 'ink', children, className = '' }) {
  const base = `inline-flex items-center gap-2 px-6 py-3 text-sm ${variantClass[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  )
}
