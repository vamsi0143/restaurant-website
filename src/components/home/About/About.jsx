import SectionHeading from '../../common/SectionHeading/SectionHeading'
import { aboutCards } from '../../../data/homeData'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.top}>
          <SectionHeading eyebrow="About the food restaurant" title="New Ground with Dishes to be Enjoyed" />
          <div className={styles.blurb}>
            <p>
              Nisl quam nestibulum ac quam nec elite auctan ligula. Orci varius net feugiat ornare
              met at urient monte nascete ridiculus mus. Integer posuere erat a ante venenatis.
            </p>
            <div className={styles.author}>
              <img src="/restaurant-website/images/author.png" alt="Willimes James" />
              <div>
                <strong>Willimes James</strong>
                <span>Director and Chief Operations Officer</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          {aboutCards.map((card, index) => (
            <div
              className={`${styles.card} ${index === 1 ? styles.cardOffset : ''}`}
              key={card.id}
            >
              <img src={card.image} alt={card.title} />
              <span className={styles.cardLabel}>{card.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
