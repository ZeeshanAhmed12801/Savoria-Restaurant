import useReveal from '../hooks/useReveal'

export default function Reservation() {
  const ref = useReveal()

  function handleSubmit(e) {
    e.preventDefault()
    alert('Thanks! Your table request has been noted — we\'ll confirm shortly.')
  }

  return (
    <section id="reservation" className="section" ref={ref}>
      <div className="container">
        <div className="reservation">
          <div data-reveal>
            <span className="section-eyebrow">Reserve a Table</span>
            <h2 className="section-title" style={{ maxWidth: '13ch' }}>
              An evening worth planning for
            </h2>
            <p className="section-desc" style={{ marginTop: 18, maxWidth: '42ch' }}>
              Tell us when you'd like to come in and for how many — we'll
              hold your table and have it ready when you arrive.
            </p>
          </div>

          <form className="res-form" onSubmit={handleSubmit} data-reveal style={{ '--reveal-delay': '0.12s' }}>
            <input type="text" placeholder="Full name" required />
            <input type="tel" placeholder="Phone number" required />
            <input type="date" required />
            <select defaultValue="" required>
              <option value="" disabled>Time</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
              <option>8:00 PM</option>
              <option>9:00 PM</option>
            </select>
            <select defaultValue="" className="full" required>
              <option value="" disabled>Guests</option>
              <option>2 guests</option>
              <option>4 guests</option>
              <option>6 guests</option>
              <option>8+ guests</option>
            </select>
            <button type="submit" className="btn btn-solid full" style={{ justifyContent: 'center' }}>
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
