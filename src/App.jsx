import { useLocation } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import AppRoutes from './routes/AppRoutes'

// Auth pages get a clean layout without the site header/footer.
const AUTH_ROUTES = ['/login', '/signup', '/forgot-password']

export default function App() {
  const { pathname } = useLocation()
  const isAuthPage = AUTH_ROUTES.includes(pathname)

  return (
    <>
      {!isAuthPage && <Header />}
      <main>
        <AppRoutes />
      </main>
      {!isAuthPage && <Footer />}
    </>
  )
}
