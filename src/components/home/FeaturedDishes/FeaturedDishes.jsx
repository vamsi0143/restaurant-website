import { useState } from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import SectionHeading from '../../common/SectionHeading/SectionHeading'
import { featuredDishes } from '../../../data/homeData'
import styles from './FeaturedDishes.module.css'

export default function FeaturedDishes() {
  const [active, setActive] = useState(0)

  return (
    <section className={`section ${styles.wrap}`}>
      <div className="container">
        <SectionHeading title="Featured Dishes" align="center" />

        <div className={styles.grid}>
          {featuredDishes.map((dish) => (
            <div className={styles.card} key={dish.id}>
              {dish.onSale && <span className={styles.saleBadge}>Sale</span>}
              <div className={styles.imageWrap}>
                <img src={dish.image} alt={dish.name} />
                <button className={styles.cartBtn} aria-label={`Add ${dish.name} to cart`}>
                  <FiShoppingBag size={16} />
                </button>
              </div>
              <h3>{dish.name}</h3>
              <div className={styles.prices}>
                <span className={styles.oldPrice}>{dish.oldPrice}</span>
                <span className={styles.price}>{dish.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {featuredDishes.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to dish ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
