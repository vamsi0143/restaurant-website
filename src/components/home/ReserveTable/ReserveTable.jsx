import { useState } from 'react'
import styles from './ReserveTable.module.css'

const initialForm = { guests: '', date: '', time: '', name: '', phone: '' }

export default function ReserveTable() {
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hook this up to your booking API.
    console.log('Reservation request:', form)
    alert('Thanks! Your table request has been submitted.')
    setForm(initialForm)
  }

  return (
    <section className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.heading}>
          <h2>Reserve a Table</h2>
          <p>Discover our New Menu!</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="number"
            name="guests"
            placeholder="No of Guest"
            min="1"
            value={form.guests}
            onChange={handleChange}
            required
          />
          <input type="date" name="date" placeholder="Date" value={form.date} onChange={handleChange} required />
          <input type="time" name="time" placeholder="Time" value={form.time} onChange={handleChange} required />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone No"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
