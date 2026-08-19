import SectionHeading from '../../common/SectionHeading/SectionHeading'
import { recentNews } from '../../../data/homeData'
import styles from './RecentNews.module.css'

export default function RecentNews() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Recent News" align="center" />

        <div className={styles.grid}>
          {recentNews.map((post) => (
            <article className={styles.card} key={post.id}>
              <div className={styles.imageWrap}>
                <img src={post.image} alt={post.title} />
              </div>
              <div className={styles.body}>
                <span className={styles.date}>{post.date}</span>
                <h3>{post.title}</h3>
                <div className={styles.authorRow}>
                  <img className={styles.avatar} src={post.avatar} alt={post.author} />
                  <span>{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
