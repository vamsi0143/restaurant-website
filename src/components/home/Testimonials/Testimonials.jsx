import { useState } from 'react'
import SectionHeading from '../../common/SectionHeading/SectionHeading'
import { testimonials } from '../../../data/homeData'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  return (
    <section className="section">
      <div className={`container ${styles.inner}`}>

        {/* LEFT CONTENT */}
        <div className={styles.copy}>
          <SectionHeading
            eyebrow="Testimonials & Reviews"
            title="Our Customer Feedbacks"
            maxWidth="240px"
          />

          <div className={styles.quoteBox}>
            <p>&ldquo;{current.quote}&rdquo;</p>
            <strong>{current.name}</strong>
            <span className={styles.quoteCircle}></span>
          </div>

          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''
                  }`}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT COLLAGE */}
        <div className={styles.collage}>
          <div className={styles.redBase}></div>

          <img
            className={styles.topImg}
            src="/restaurant-website/images/testimonial-1.png"
            alt="Coffee on a wooden table"
          />

          <img
            className={styles.bottomImg}
            src="/restaurant-website/images/testimonial-2.png"
            alt="Dessert plate"
          />
        </div>

      </div>
    </section>
  )
}