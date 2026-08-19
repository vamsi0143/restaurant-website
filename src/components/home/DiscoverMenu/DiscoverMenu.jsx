import SectionHeading from '../../common/SectionHeading/SectionHeading'
import { discoverMenu } from '../../../data/homeData'
import styles from './DiscoverMenu.module.css'

export default function DiscoverMenu() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Discover Menu" align="center" />
        <div className={styles.grid}>
          {discoverMenu.map((item) => (
            <div className={styles.card} key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className={styles.overlay}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <div className={styles.priceTag}>
                <strong>{item.price}</strong>
                <span>person</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
