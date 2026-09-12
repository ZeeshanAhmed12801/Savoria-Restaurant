import { useState } from 'react'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#chefs', label: 'Chefs' },
  { href: '#reservation', label: 'Reservation' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="brand">
          <span className="brand-mark">🍳</span>
          <span>
            <span className="brand-name">Savoria</span>
            <span className="brand-sub" style={{ display: 'block' }}>Restaurant</span>
          </span>
        </a>

        <nav>
          <ul className="nav-links">
            {LINKS.map((l, i) => (
              <li key={l.href}>
                <a href={l.href} className={i === 0 ? 'active' : ''}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <button className="cart-btn" aria-label="Cart">
            🧺
            <span className="cart-badge">0</span>
          </button>
          <a href="#reservation" className="btn btn-solid" style={{ padding: '12px 22px' }}>
            📅 Book a Table
          </a>
          <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="container" style={{ paddingBottom: 18 }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
