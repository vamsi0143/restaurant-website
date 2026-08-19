import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart, FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import { navLinks } from '../../../data/homeData'
import Button from '../../common/Button/Button'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <img src="/images/logo.png" alt="TasteNest" />
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                  {link.hasDropdown && <FiChevronDown size={14} />}
                </Link>
              </li>
            ))}
          </ul>

          {/* Shown inside the mobile drawer only */}
          <div className={styles.mobileActions}>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Log in
            </Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>
              Sign up
            </Link>
          </div>
        </nav>

        <div className={styles.actions}>
          <Link to="/cart" className={styles.cartBtn} aria-label="Cart, 0 items">
            <FiShoppingCart size={18} />
            <span className={styles.cartBadge}>0</span>
          </Link>

          <Button variant="accent">Contact Us</Button>

          {/* Always-visible utility menu (separate from the mobile nav toggle) */}
          <button className={styles.linesBtn} aria-label="More options">
            <span />
            <span />
            <span />
          </button>

          <button
            className={styles.menuToggle}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
