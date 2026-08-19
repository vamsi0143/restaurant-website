import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { footerLinks } from '../../../data/homeData'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.decorLeft} src="/images/footer-decor-left.png" alt="" aria-hidden="true" />
      <img className={styles.decorRight} src="/images/footer-decor-right.png" alt="" aria-hidden="true" />

      <div className="container">
        <div className={styles.hoursBar}>
          <div>
            <strong>TasteNest</strong>
          </div>
          <div>
            <span>Tuesday - Saturday: 12:00pm - 23:00pm</span>
            <span>Closed on Sunday</span>
          </div>
          <div>5 star rated on TripAdvisor</div>
        </div>

        <div className={styles.columns}>
          <div className={styles.col}>
            <h4>TasteNest</h4>
            <p>Festive dining where we are strong believers in using the very best produce.</p>
          </div>

          <div className={styles.col}>
            <h4>About</h4>
            <ul>
              {footerLinks.about.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Menu</h4>
            <ul>
              {footerLinks.menu.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Newsletter</h4>
            <p>Get recent news and updates.</p>
            <form className={styles.subscribe} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 TasteNest | All shawonetc3 Themes</span>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook">
              <FiFacebook size={16} />
            </a>
            <a href="#" aria-label="Instagram">
              <FiInstagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
