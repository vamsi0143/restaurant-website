import SectionHeading from '../../common/SectionHeading/SectionHeading'
import { experts } from '../../../data/homeData'
import styles from './Experts.module.css'

export default function Experts() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Meet Our Experts" align="center" />

        <div className={styles.grid}>
          {experts.map((expert) => (
            <div className={styles.card} key={expert.id}>
              <div className={styles.photoWrap}>
                <img src={expert.image} alt={expert.name} />

                <div className={styles.namePlate}>
                  <span className={styles.role}>{expert.role}</span>
                  <h3>{expert.name}</h3>
                  <div className={styles.dots}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <img
                    src="/restaurant-website/images/signature.png"
                    alt="Signature"
                    class="signature"
                  />
                </div>
              </div>



            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
