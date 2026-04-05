import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingAudio from '@/components/ui/FloatingAudio'
import { useEffect } from 'react'

export default function AppShell() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const isAdmin = pathname.startsWith('/admin')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {!isAdmin && <Navbar />}
      <main style={{ flex: 1, paddingTop: isAdmin ? 0 : '72px' }}>
        <Outlet />
      </main>
      {!isAdmin && <FloatingAudio />}
      {!isAdmin && <Footer />}
    </div>
  )
}
