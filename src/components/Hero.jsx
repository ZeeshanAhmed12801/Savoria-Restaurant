import useReveal from '../hooks/useReveal'

const CATEGORIES = [
  { name: 'Burgers', icon: '🍔', img: 'https://images.unsplash.com/photo-1667329829058-ac191ba4a905?q=80&w=600&auto=format&fit=crop' },
  { name: 'Pizza', icon: '🍕', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop' },
  { name: 'Pasta', icon: '🍝', img: 'https://images.unsplash.com/photo-1734356959885-54fe2e99c1cd?q=80&w=600&auto=format&fit=crop' },
  { name: 'Steak', icon: '🥩', img: 'https://images.unsplash.com/photo-1543900348-f03d06be7653?q=80&w=600&auto=format&fit=crop' },
  { name: 'Salads', icon: '🥗', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop' },
  { name: 'Desserts', icon: '🍰', img: 'https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?q=80&w=600&auto=format&fit=crop' },
  { name: 'Drinks', icon: '🥤', img: 'https://images.unsplash.com/photo-1632995561645-86a7777d3e7a?q=80&w=600&auto=format&fit=crop' },
]

const STATS = [
  { icon: '⭐', num: '4.9', label: 'Rating' },
  { icon: '🍽️', num: '50+', label: 'Dishes' },
  { icon: '👨‍🍳', num: 'Expert', label: 'Chefs' },
  { icon: '👥', num: '10K+', label: 'Happy Customers' },
]

export default function Hero() {
  const ref = useReveal()

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="container">
        <div className="hero-grid">
          <div>
            <span className="eyebrow-pill" data-reveal>🍴 Fine Dining Experience</span>

            <h1 className="hero-title">
              <span data-reveal style={{ '--reveal-delay': '0.05s' }}>Taste the</span>
              <em data-reveal style={{ '--reveal-delay': '0.16s' }}>Difference</em>
            </h1>

            <p className="hero-sub" data-reveal style={{ '--reveal-delay': '0.26s' }}>
              Experience delicious food crafted with passion, served in a warm
              and unforgettable setting.
            </p>

            <div className="hero-actions" data-reveal style={{ '--reveal-delay': '0.34s' }}>
              <a href="#menu" className="btn btn-solid">🍽️ Explore Menu</a>
              <a href="#reservation" className="btn btn-outline">📅 Book a Table</a>
            </div>

            <div className="hero-stats">
              {STATS.map((s, i) => (
                <div
                  className="stat"
                  key={s.label}
                  data-reveal
                  style={{ '--reveal-delay': `${0.4 + i * 0.08}s` }}
                >
                  <span className="stat-icon">{s.icon}</span>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" data-reveal style={{ '--reveal-delay': '0.2s' }}>
            <img
              src="https://images.unsplash.com/photo-1543900348-f03d06be7653?q=80&w=1200&auto=format&fit=crop"
              alt="Signature grilled steak plated with rosemary and vegetables"
            />
            <div className="hero-visual-tag">
              <span>Chef's Signature</span>
              <span>🔥 Flame Grilled</span>
            </div>
          </div>
        </div>

        <div className="category-strip">
          {CATEGORIES.map((c, i) => (
            <a
              href="#menu"
              className="category-card"
              key={c.name}
              data-reveal
              style={{ '--reveal-delay': `${0.1 + i * 0.06}s` }}
            >
              <img src={c.img} alt={c.name} loading="lazy" />
              <div className="category-label">
                <span>{c.icon}</span>
                <span>{c.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
