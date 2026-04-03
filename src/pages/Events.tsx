import { events } from '@/data/seed'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

export default function Events() {
  const upcoming = events.filter(e => e.status === 'upcoming')
  const past = events.filter(e => e.status === 'past')

  return (
    <div>
      <section className="gradient-hero" style={{ padding: '8rem 0 4rem' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>Our <span style={{ color: 'var(--color-gold)' }}>Events</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0.75rem auto 0', fontSize: '1.1rem' }}>
            Connect, learn, and grow with your community at our events across the country.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow">
          <h2 style={{ marginBottom: '1.5rem' }}>Upcoming Events</h2>
          {upcoming.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              {upcoming.map(e => (
                <div key={e.id} className="card" style={{ overflow: 'hidden' }}>
                  <div style={{ background: 'var(--color-haiti-blue)', padding: '1rem 1.5rem', color: 'white' }}>
                    <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>Upcoming</span>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ marginBottom: '0.75rem' }}>{e.title}</h3>
                    <p style={{ color: 'var(--color-slate)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>{e.description}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-charcoal-light)' }}>
                      {e.event_date && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Calendar size={14} /> {new Date(e.event_date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                      )}
                      {e.location && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <MapPin size={14} /> {e.location}
                        </span>
                      )}
                    </div>
                    {e.source_url && (
                      <a href={e.source_url} target="_blank" rel="noopener" className="btn btn-primary btn-sm" style={{ marginTop: '1.25rem' }}>
                        Event Details <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--color-slate)' }}>
              <Calendar size={48} style={{ opacity: 0.4, marginBottom: '1rem' }} />
              <p>No upcoming events at the moment. Check back soon!</p>
            </div>
          )}

          {past.length > 0 && (
            <>
              <h2 style={{ marginBottom: '1.5rem' }}>Past Events</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                {past.map(e => (
                  <div key={e.id} className="card" style={{ padding: '1.5rem', opacity: 0.75 }}>
                    <span className="badge badge-blue" style={{ marginBottom: '0.75rem' }}>Past</span>
                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.05rem' }}>{e.title}</h3>
                    <p style={{ color: 'var(--color-slate)', fontSize: '0.85rem' }}>{e.description?.slice(0, 100)}…</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
