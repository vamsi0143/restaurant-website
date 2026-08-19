import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Wire these up to your existing auth components/logic —
          these are placeholders so routing works end to end. */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="*" element={<Home />} />
    </Routes>
  )
}
