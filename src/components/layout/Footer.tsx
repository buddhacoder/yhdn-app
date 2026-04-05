import { Link } from 'react-router-dom'
import { Mail, Phone, Camera, Play } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-navy)', color: 'rgba(255,255,255,0.8)' }}>
      {/* Haitian flag stripe */}
      <div style={{ height: 3, background: 'linear-gradient(90deg, var(--color-haiti-blue) 0%, var(--color-haiti-blue) 50%, var(--color-haiti-red) 50%, var(--color-haiti-red) 100%)' }} />
      <div style={{ paddingTop: '4rem' }}>
      <div className="container-narrow">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', paddingBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img 
                src="/yhdn-logo.jpeg" 
                alt="YHDN Logo" 
                style={{ height: 48, objectFit: 'contain', borderRadius: 2 }} 
              />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: 'white' }}>YHDN</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>Young Haitian Doctors Network</div>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}>
              Empowering young Haitian physicians through mentorship, networking, and community service.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <a href="https://www.instagram.com/yhd_network" target="_blank" rel="noopener"
                style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}><Camera size={20} /></a>
              <a href="http://www.youtube.com/@YoungHaitianDoctorsNetwork" target="_blank" rel="noopener"
                style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}><Play size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Navigate</h4>
            {[
              { label: 'About Us', path: '/about' },
              { label: 'Resources', path: '/resources' },
              { label: 'Events', path: '/events' },
              { label: 'Directory', path: '/directory' },
              { label: 'Mentorship', path: '/mentor' },
              { label: "I Didn't Match", path: '/didnt-match' },
            ].map(l => (
              <Link key={l.path} to={l.path} style={{
                display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem',
                padding: '0.3rem 0', textDecoration: 'none', transition: 'color 0.2s',
              }}>{l.label}</Link>
            ))}
          </div>

          {/* Get Involved */}
          <div>
            <h4 style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Get Involved</h4>
            {[
              { label: 'Join YHDN', path: '/join' },
              { label: 'Become a Sponsor', path: '/sponsors' },
              { label: 'Spotlight', path: '/spotlight' },
              { label: 'Culture & Wellness', path: '/culture' },
              { label: 'Career Pipeline', path: '/pipeline' },
            ].map(l => (
              <Link key={l.path} to={l.path} style={{
                display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem',
                padding: '0.3rem 0', textDecoration: 'none', transition: 'color 0.2s',
              }}>{l.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="mailto:info@yhdn.org" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>
                <Mail size={16} /> info@yhdn.org
              </a>
              <a href="tel:5615011408" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>
                <Phone size={16} /> (561) 501-1408
              </a>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-6887"
                target="_blank" rel="noopener" className="btn btn-editorial btn-sm"
                style={{ width: '100%' }}>
                Donate Today
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem 0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
              © {new Date().getFullYear()} Young Haitian Doctors Network, INC. All rights reserved.
            </p>
            {/* Optional Audio Anthem */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,0,0,0.2)', padding: '0.2rem 0.5rem', borderRadius: 4, border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Anthem</span>
              <audio controls controlsList="nodownload noplaybackrate" style={{ height: 24, maxWidth: 220, outline: 'none' }}>
                <source src="/nou-leve-ansanm.mp3" type="audio/mpeg" />
              </audio>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </div>
    </footer>
  )
}
