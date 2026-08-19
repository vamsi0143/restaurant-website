import { useState } from 'react'
import { GiCakeSlice, GiSteak, GiCoffeeCup, GiHamburger } from 'react-icons/gi'
import { categoryTabs, bbqMenuItems } from '../../../data/homeData'
import styles from './CategoryTabs.module.css'

const icons = {
  cake: GiCakeSlice,
  steak: GiSteak,
  coffee: GiCoffeeCup,
  burger: GiHamburger,
}

export default function CategoryTabs() {
  const [active, setActive] = useState('dessert')

  return (
    <section className={`section ${styles.wrap}`}>
      <div className="container">
        <div className={styles.tabs}>
          {categoryTabs.map((tab) => {
            const Icon = icons[tab.icon]
            const isActive = active === tab.id
            return (
              <button
                key={tab.id}
                className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                onClick={() => setActive(tab.id)}
              >
                <Icon size={26} className={styles.tabIcon} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        <div className={styles.panel}>
          <div className={styles.panelImage}>
            <img src="/images/bbq-plate.png" alt="Grilled chicken plate" />
          </div>
          <div className={styles.panelContent}>
            <h3>BBQ</h3>
            <ul>
              {bbqMenuItems.map((item) => (
                <li key={item.id}>
                  <div className={styles.itemLine}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemDots} />
                    <span className={styles.itemPrice}>{item.price}</span>
                  </div>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
