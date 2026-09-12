export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 14 }}>
              <span className="brand-mark">🍳</span>
              <span>
                <span className="brand-name">Savoria</span>
              </span>
            </div>
            <p>
              Fine dining crafted with passion, served with warmth — a table
              is always waiting for you.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#chefs">Chefs</a></li>
            </ul>
          </div>

          <div>
            <h4>Hours</h4>
            <ul>
              <li><p>Mon – Fri: 5pm – 11pm</p></li>
              <li><p>Sat – Sun: 12pm – 12am</p></li>
            </ul>
          </div>

          <div>
            <h4>Visit Us</h4>
            <ul>
              <li><p>221 Harbor Lane, Downtown</p></li>
              <li><p>+1 (555) 012-3456</p></li>
              <li><p>hello@savoria.restaurant</p></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Savoria Restaurant. All rights reserved.</span>
          <span>Crafted with passion.</span>
        </div>
      </div>
    </footer>
  )
}
