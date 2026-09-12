import useReveal from '../hooks/useReveal'

const DISHES = [
  {
    name: 'Flame-Grilled Ribeye',
    price: '$34',
    desc: 'Char-grilled ribeye with rosemary, roasted potatoes and charred vegetables.',
    img: 'https://images.unsplash.com/photo-1543900348-f03d06be7653?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Wood-Fired Margherita',
    price: '$18',
    desc: 'San Marzano tomato, fresh mozzarella and basil on a blistered thin crust.',
    img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Tagliatelle Ragù',
    price: '$21',
    desc: 'Slow-braised ragù tossed with hand-cut tagliatelle and shaved parmesan.',
    img: 'https://images.unsplash.com/photo-1734356959885-54fe2e99c1cd?q=80&w=900&auto=format&fit=crop',
  },
]

export default function Menu() {
  const ref = useReveal()

  return (
    <section id="menu" className="section" ref={ref}>
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow" data-reveal>From the Kitchen</span>
          <h2 className="section-title" data-reveal style={{ '--reveal-delay': '0.08s' }}>
            Dishes worth the drive
          </h2>
          <p className="section-desc" data-reveal style={{ '--reveal-delay': '0.16s' }}>
            A small, ever-changing selection built around what's freshest —
            these three are the ones people keep coming back for.
          </p>
        </div>

        <div className="menu-grid">
          {DISHES.map((d, i) => (
            <article
              className="dish-card"
              key={d.name}
              data-reveal
              style={{ '--reveal-delay': `${0.1 + i * 0.1}s` }}
            >
              <div className="dish-media">
                <img src={d.img} alt={d.name} loading="lazy" />
              </div>
              <div className="dish-body">
                <div className="dish-row">
                  <h3 className="dish-name">{d.name}</h3>
                  <span className="dish-price">{d.price}</span>
                </div>
                <p className="dish-desc">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
