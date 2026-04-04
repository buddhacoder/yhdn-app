import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

/* ===== Nav structure: 6 items with dropdown groups ===== */
type NavItem = { label: string; path: string; desc?: string }
type NavGroup = { label: string; children: NavItem[] }
type NavEntry = NavItem | NavGroup

const isGroup = (e: NavEntry): e is NavGroup => 'children' in e

const nav: NavEntry[] = [
  { label: 'Home', path: '/' },
  {
    label: 'About', children: [
      { label: 'Our Story', path: '/about', desc: 'Mission, leadership & history' },
      { label: 'Culture & Wellness', path: '/culture', desc: 'Haitian identity in medicine' },
      { label: 'History', path: '/history', desc: 'Our journey since founding' },
      { label: 'Sponsors', path: '/sponsors', desc: 'Partners who support YHDN' },
    ],
  },
  {
    label: 'Careers', children: [
      { label: 'Career Pipeline', path: '/pipeline', desc: 'Med school to residency guide' },
      { label: 'Resources', path: '/resources', desc: 'Tools, scholarships & data' },
      { label: 'Mentorship', path: '/mentor', desc: 'Connect with a mentor' },
    ],
  },
  {
    label: 'Community', children: [
      { label: 'Member Directory', path: '/directory', desc: 'Find YHDN members' },
      { label: 'Events', path: '/events', desc: 'Upcoming gatherings' },
      { label: 'Member Spotlight', path: '/spotlight', desc: 'Stories that inspire' },
    ],
  },
  { label: 'Contact', path: '/contact' },
]

/* ===== Dropdown component ===== */
function Dropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isActive = group.children.some(c => location.pathname === c.path)

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button style={{
        padding: '0.4rem 0.65rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem',
        fontWeight: isActive ? 600 : 400,
        color: isActive ? 'white' : 'rgba(255,255,255,0.7)',
        background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
        transition: 'all 0.2s ease', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: '0.25rem',
        fontFamily: 'inherit',
      }}>
        {group.label}
        <ChevronDown size={13} style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none', opacity: 0.6 }} />
      </button>

      {/* Panel */}
      <div style={{
        position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
        paddingTop: 8, opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 0.2s ease, transform 0.2s ease',
        zIndex: 100,
      }}>
        <div style={{
          background: 'rgba(10, 22, 40, 0.97)', backdropFilter: 'blur(16px)',
          borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.08)',
          padding: '0.5rem', minWidth: 240,
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        }}>
          {group.children.map(child => (
            <Link
              key={child.path}
              to={child.path}
              style={{
                display: 'block', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)',
                textDecoration: 'none', transition: 'background 0.15s ease',
                background: location.pathname === child.path ? 'rgba(255,255,255,0.08)' : 'transparent',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = location.pathname === child.path ? 'rgba(255,255,255,0.08)' : 'transparent' }}
            >
              <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'white', lineHeight: 1.3 }}>{child.label}</div>
              {child.desc && <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{child.desc}</div>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const location = useLocation()

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: 'rgba(10, 22, 40, 0.95)', backdropFilter: 'blur(12px)',
    }}>
      {/* Flag accent stripe */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--color-haiti-blue) 0%, var(--color-haiti-blue) 50%, var(--color-haiti-red) 50%, var(--color-haiti-red) 100%)' }} />

      <div className="container-narrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{ position: 'relative', width: 56, height: 56, flexShrink: 0 }}>
            <img src="/yhdn-logo.jpeg" alt="YHDN Logo" style={{
              width: 56, height: 56, borderRadius: '50%', objectFit: 'cover',
              border: '2.5px solid var(--color-gold)',
              boxShadow: '0 2px 12px rgba(212, 168, 67, 0.25)',
              position: 'relative', zIndex: 10,
            }} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: 'white', lineHeight: 1.2 }}>YHDN</div>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Young Haitian Doctors Network</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }} className="desktop-nav">
          {nav.map((entry, i) =>
            isGroup(entry) ? (
              <Dropdown key={i} group={entry} />
            ) : (
              <Link key={entry.path} to={entry.path} style={{
                padding: '0.4rem 0.65rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem',
                fontWeight: location.pathname === entry.path ? 600 : 400,
                color: location.pathname === entry.path ? 'white' : 'rgba(255,255,255,0.7)',
                background: location.pathname === entry.path ? 'rgba(255,255,255,0.1)' : 'transparent',
                transition: 'all 0.2s ease', textDecoration: 'none', whiteSpace: 'nowrap',
              }}>{entry.label}</Link>
            )
          )}
          <Link to="/join" className="btn btn-gold btn-sm" style={{ marginLeft: '0.75rem', fontSize: '0.85rem', padding: '0.4rem 1.25rem' }}>
            Join YHDN
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="mobile-toggle" style={{
          display: 'none', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem',
        }}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu" style={{ background: 'var(--color-navy)', padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', maxHeight: 'calc(100dvh - 72px)', overflowY: 'auto' }}>
          {nav.map((entry, i) => {
            if (isGroup(entry)) {
              const expanded = mobileExpanded === entry.label
              return (
                <div key={i}>
                  <button onClick={() => setMobileExpanded(expanded ? null : entry.label)} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
                    padding: '0.75rem 1rem', color: 'rgba(255,255,255,0.8)', background: 'none', border: 'none',
                    fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'inherit', borderRadius: 'var(--radius-md)',
                  }}>
                    {entry.label}
                    <ChevronDown size={16} style={{ transition: 'transform 0.2s', transform: expanded ? 'rotate(180deg)' : 'none', opacity: 0.5 }} />
                  </button>
                  {expanded && (
                    <div style={{ paddingLeft: '1rem', paddingBottom: '0.5rem' }}>
                      {entry.children.map(child => (
                        <Link key={child.path} to={child.path} onClick={() => setIsOpen(false)} style={{
                          display: 'block', padding: '0.6rem 1rem', color: 'rgba(255,255,255,0.7)',
                          textDecoration: 'none', borderRadius: 'var(--radius-md)', fontSize: '0.9rem',
                          background: location.pathname === child.path ? 'rgba(255,255,255,0.1)' : 'transparent',
                        }}>{child.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }
            return (
              <Link key={entry.path} to={entry.path} onClick={() => setIsOpen(false)} style={{
                display: 'block', padding: '0.75rem 1rem', color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none', borderRadius: 'var(--radius-md)', fontSize: '0.95rem',
                background: location.pathname === entry.path ? 'rgba(255,255,255,0.1)' : 'transparent',
              }}>{entry.label}</Link>
            )
          })}
          <Link to="/join" className="btn btn-gold" style={{ width: '100%', marginTop: '0.75rem' }} onClick={() => setIsOpen(false)}>Join YHDN</Link>
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
