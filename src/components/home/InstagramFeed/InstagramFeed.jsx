import { FiInstagram } from 'react-icons/fi'
import { instagramBg } from '../../../data/homeData'
import styles from './InstagramFeed.module.css'

export default function InstagramFeed() {
  return (
    <section
      className={styles.wrap}
      style={{ backgroundImage: `url(${instagramBg})` }}
    >
      <div className={styles.overlay}>
        <span className={styles.iconCircle}>
          <FiInstagram size={20} />
        </span>
        <h2>Follow @shawonetc3</h2>
        <p>Join our community to inspire your desires</p>
      </div>
    </section>
  )
}