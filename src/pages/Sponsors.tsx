import { Link } from 'react-router-dom'
import { sponsors } from '@/data/seed'
import { Heart, ArrowRight, ExternalLink } from 'lucide-react'

const tierColors: Record<string, string> = { gold: 'var(--color-gold)', silver: '#94A3B8', partner: 'var(--color-haiti-blue)' }

export default function Sponsors() {
  return (
    <div>
      <section className="gradient-hero" style={{ padding: '8rem 0 4rem' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>Our <span style={{ color: 'var(--color-gold)' }}>Sponsors</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0.75rem auto 0', fontSize: '1.1rem' }}>
            Organizations and individuals who make our mission possible.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {sponsors.map(s => (
              <div key={s.id} className="card" style={{ padding: '2rem', borderTop: `4px solid ${tierColors[s.tier || 'partner']}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.15rem' }}>{s.name}</h3>
                  <span className="badge" style={{ background: `${tierColors[s.tier || 'partner']}20`, color: tierColors[s.tier || 'partner'] }}>{s.tier}</span>
                </div>
                <p style={{ color: 'var(--color-slate)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{s.description}</p>
                {s.website_url && (
                  <a href={s.website_url} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600, fontSize: '0.9rem' }}>
                    Visit Website <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Become a Sponsor */}
          <div className="card" style={{ padding: '3rem', textAlign: 'center', background: 'var(--color-navy)', color: 'white' }}>
            <Heart size={36} style={{ color: 'var(--color-gold)', marginBottom: '1rem' }} />
            <h2 style={{ color: 'white', marginBottom: '0.75rem' }}>Become a Sponsor</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Partner with YHDN to support scholarships, mentorship programs, and community health initiatives. Your investment creates lasting impact.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-gold btn-lg">Become a Partner <ArrowRight size={16} /></Link>
              <a href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-6887" target="_blank" rel="noopener" className="btn btn-white btn-lg">
                <Heart size={16} /> Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
