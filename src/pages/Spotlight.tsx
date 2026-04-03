import { posts } from '@/data/seed'
import { Calendar } from 'lucide-react'

const typeColors: Record<string, string> = {
  news: 'var(--color-haiti-blue)', fundraiser: 'var(--color-gold)', highlight: 'var(--color-success)',
  blog: 'var(--color-charcoal-light)', announcement: 'var(--color-haiti-red)',
}

export default function Spotlight() {
  return (
    <div>
      <section className="gradient-hero" style={{ padding: '8rem 0 4rem' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}><span style={{ color: 'var(--color-gold)' }}>Spotlight</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0.75rem auto 0', fontSize: '1.1rem' }}>
            Celebrating our community's wins, news, fundraisers, and highlights.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
            {posts.map(p => (
              <div key={p.id} className="card" style={{ overflow: 'hidden' }}>
                <div style={{ background: typeColors[p.type] || 'var(--color-haiti-blue)', padding: '0.6rem 1.5rem' }}>
                  <span style={{ color: 'white', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.type}</span>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{p.title}</h3>
                  <p style={{ color: 'var(--color-slate)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>{p.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--color-charcoal-light)' }}>
                    <Calendar size={14} />
                    {new Date(p.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
