import useReveal from '../hooks/useReveal'

const CHEFS = [
  {
    name: 'Elena Moretti',
    role: 'Executive Chef',
    img: 'https://images.unsplash.com/photo-1701878198293-d1f3641efdb3?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Marcus Webb',
    role: 'Head Grill Chef',
    img: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Sofia Rossi',
    role: 'Pastry Chef',
    img: 'https://images.unsplash.com/photo-1731576089290-e6230a18dcb4?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'James Okafor',
    role: 'Sous Chef',
    img: 'https://images.unsplash.com/photo-1643834776503-891726ed42c6?q=80&w=600&auto=format&fit=crop',
  },
]

export default function Chefs() {
  const ref = useReveal()

  return (
    <section id="chefs" className="section" ref={ref}>
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow" data-reveal>Meet the Team</span>
          <h2 className="section-title" data-reveal style={{ '--reveal-delay': '0.08s' }}>
            The hands behind every plate
          </h2>
        </div>

        <div className="chef-grid">
          {CHEFS.map((c, i) => (
            <div className="chef-card" key={c.name} data-reveal style={{ '--reveal-delay': `${0.1 + i * 0.08}s` }}>
              <div className="chef-photo">
                <img src={c.img} alt={c.name} loading="lazy" />
              </div>
              <h3 className="chef-name">{c.name}</h3>
              <p className="chef-role">{c.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
