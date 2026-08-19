import styles from './SectionHeading.module.css'

export default function SectionHeading({ eyebrow, title, align = 'left', maxWidth }) {
  return (
    <div className={`${styles.wrap} ${align === 'center' ? styles.center : ''}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title} style={maxWidth ? { maxWidth } : undefined}>
        {title}
      </h2>
      <span className={styles.underline} />
    </div>
  )
}
