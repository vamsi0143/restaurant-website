import { FaGooglePlay, FaApple } from 'react-icons/fa'
import styles from './AppPromo.module.css'

const bullets = ['Higher Reach - Minimal Effort', 'Showcase your Brand', 'Exclusive offers & discounts']

export default function AppPromo() {
  return (
    <section className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Best app for foods ordering</span>
          <h2>Manage Your Restaurant Anytime! Anywhere!</h2>
          <ul>
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className={styles.storeBtns}>
            <button className={`${styles.storeBtn} ${styles.googlePlay}`}>
              <FaGooglePlay size={18} />
              Google Play
            </button>
            <button className={`${styles.storeBtn} ${styles.appStore}`}>
              <FaApple size={18} />
              App Store
            </button>
          </div>
        </div>

        <div className={styles.visual}>
          <img className={styles.bikeImg} src="/restaurant-website/images/app-bike.png" alt="Delivery rider on a scooter" />
          <img className={styles.phoneImg} src="/restaurant-website/images/app-phone.png" alt="Food delivery app on a phone" />
          <img className={styles.pizzaImg} src="/restaurant-website/images/app-pizza.png" alt="Pizza" />
          <img className={styles.bowlImg} src="/restaurant-website/images/app-bowl.png" alt="Bowl of food" />
        </div>
      </div>
    </section>
  )
}
