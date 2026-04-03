import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Pipeline', path: '/pipeline' },
  { label: 'Directory', path: '/directory' },
  { label: 'Resources', path: '/resources' },
  { label: 'Mentorship', path: '/mentor' },
  { label: 'Events', path: '/events' },
  { label: 'Spotlight', path: '/spotlight' },
  { label: 'Culture', path: '/culture' },
  { label: 'Sponsors', path: '/sponsors' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: 'rgba(10, 22, 40, 0.95)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div className="container-narrow" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '72px',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--color-haiti-blue) 0%, var(--color-gold) 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1rem', color: 'white',
          }}>Y</div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: 'white', lineHeight: 1.2 }}>YHDN</div>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Young Haitian Doctors Network</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                padding: '0.4rem 0.65rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.82rem',
                fontWeight: location.pathname === link.path ? 600 : 400,
                color: location.pathname === link.path ? 'white' : 'rgba(255,255,255,0.7)',
                background: location.pathname === link.path ? 'rgba(255,255,255,0.1)' : 'transparent',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >{link.label}</Link>
          ))}
          <Link to="/join" className="btn btn-gold btn-sm" style={{ marginLeft: '0.75rem', fontSize: '0.82rem', padding: '0.4rem 1rem' }}>
            Join YHDN
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-toggle"
          style={{
            display: 'none', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem',
          }}
        >{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu" style={{
          background: 'var(--color-navy)', padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block', padding: '0.75rem 1rem', color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none', borderRadius: 'var(--radius-md)', fontSize: '0.95rem',
                background: location.pathname === link.path ? 'rgba(255,255,255,0.1)' : 'transparent',
              }}
            >{link.label}</Link>
          ))}
          <Link to="/join" className="btn btn-gold" style={{ width: '100%', marginTop: '0.75rem' }}
            onClick={() => setIsOpen(false)}>Join YHDN</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 1025px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
