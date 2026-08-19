import { useState } from 'react'
import { FiPlay, FiStar } from 'react-icons/fi'
import Button from '../../common/Button/Button'
import styles from './Hero.module.css'

const slides = [0, 1, 2]

export default function Hero() {
  const [active, setActive] = useState(0)

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1>The Perfect Space to Enjoy Fantastic Food</h1>
          <p>
            Festive dining at Farthings where we are strong believers in using the very best
            produce
          </p>
          <div className={styles.ctaRow}>
            <Button variant="primary">See Our Menus</Button>
            <button className={styles.playBtn}>
              <span className={styles.playCircle}>
                <FiPlay size={16} />
              </span>
              Video
            </button>
          </div>

          <div className={styles.dots}>
            {slides.map((i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={styles.imageWrap}>
          <img src="/images/hero-dish.jpg" alt="Grilled steak with fresh vegetables" />
          <div className={styles.priceCard}>
            <span className={styles.badge}>Weekly Special</span>
            <span className={styles.pizzaImgWrap}>
              <img src="/images/hero-pizza.png" alt="Sicilian Pizza" />
            </span>
            <div>
              <strong>$90.85</strong>
              <p>Sicilian Pizza</p>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar key={i} size={12} fill="#ffcd1e" color="#ffcd1e" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
