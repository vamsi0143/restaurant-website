import styles from './Button.module.css'

/**
 * variant: 'primary' (red) | 'accent' (yellow) | 'outline'
 */
export default function Button({ children, variant = 'primary', type = 'button', onClick, ...rest }) {
  return (
    <button type={type} className={`${styles.btn} ${styles[variant]}`} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
