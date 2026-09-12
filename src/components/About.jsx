import useReveal from '../hooks/useReveal'

const POINTS = [
  'Ingredients sourced daily from local farms and markets.',
  'Every dish finished by hand, plated to order — nothing sits and waits.',
  'A wine and cocktail list chosen to match the season\u2019s menu.',
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section section-alt" ref={ref}>
      <div className="container about-grid">
        <div className="about-media" data-reveal>
          <img
            src="https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?q=80&w=900&auto=format&fit=crop"
            alt="A dessert being plated in the Savoria kitchen"
          />
          <div className="about-badge">
            <strong>12+</strong>
            <span>YEARS OF CRAFT</span>
          </div>
        </div>

        <div>
          <span className="section-eyebrow" data-reveal>Our Story</span>
          <h2 className="section-title" data-reveal style={{ '--reveal-delay': '0.08s', maxWidth: '14ch' }}>
            Food made the slow way, served without pretense
          </h2>
          <p className="section-desc" data-reveal style={{ '--reveal-delay': '0.16s' }}>
            Savoria started as a single wood-fired oven and a short menu.
            Twelve years later the oven's still here — the menu's just grown
            around it.
          </p>

          <ul className="about-list">
            {POINTS.map((p, i) => (
              <li key={p} data-reveal style={{ '--reveal-delay': `${0.22 + i * 0.08}s` }}>
                <span className="tick">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
