import { useState } from 'react'
import { Search, MapPin, Stethoscope, GraduationCap } from 'lucide-react'
import { members } from '@/data/seed'

export default function Directory() {
  const [search, setSearch] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [location, setLocation] = useState('')
  const [level, setLevel] = useState('')

  const filtered = members.filter(m => {
    if (search && !m.name.toLowerCase().includes(search.toLowerCase()) && !m.specialty.toLowerCase().includes(search.toLowerCase())) return false
    if (specialty && m.specialty !== specialty) return false
    if (location && !m.location.includes(location)) return false
    if (level && m.training_level !== level) return false
    return true
  })

  const specialties = [...new Set(members.map(m => m.specialty))]
  const levels = ['student', 'resident', 'fellow', 'attending']

  return (
    <div>
      <section className="gradient-hero" style={{ padding: '8rem 0 4rem' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>Member <span style={{ color: 'var(--color-gold)' }}>Directory</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0.75rem auto 0', fontSize: '1.1rem' }}>
            Haitian doctors around the world. Find a colleague, a mentor, or a friend.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow">
          {/* Filters */}
          <div className="card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ position: 'relative' }}>
                <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-slate)' }} />
                <input className="input" placeholder="Search by name or specialty" value={search} onChange={e => setSearch(e.target.value)} style={{ paddingLeft: '2.5rem' }} />
              </div>
              <select className="select" value={specialty} onChange={e => setSpecialty(e.target.value)}>
                <option value="">All Specialties</option>
                {specialties.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <select className="select" value={level} onChange={e => setLevel(e.target.value)}>
                <option value="">All Training Levels</option>
                {levels.map(l => <option key={l} value={l}>{l.charAt(0).toUpperCase() + l.slice(1)}</option>)}
              </select>
            </div>
          </div>

          {/* Results */}
          <div style={{ marginBottom: '1rem', color: 'var(--color-slate)', fontSize: '0.9rem' }}>{filtered.length} member{filtered.length !== 1 && 's'} found</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {filtered.map(m => (
              <div key={m.id} className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 'var(--radius-lg)', flexShrink: 0,
                    background: m.profile_photo_url ? `url(${m.profile_photo_url}) center/cover` : 'linear-gradient(135deg, var(--color-haiti-blue), var(--color-navy))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.2rem',
                  }}>{!m.profile_photo_url && m.name.charAt(0)}</div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{m.name}</h4>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.82rem', color: 'var(--color-haiti-blue)' }}>
                        <Stethoscope size={13} /> {m.specialty}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.82rem', color: 'var(--color-slate)' }}>
                        <MapPin size={13} /> {m.location}
                      </span>
                    </div>
                    <span className="badge badge-blue">{m.training_level}</span>
                    {m.bio && <p style={{ color: 'var(--color-slate)', fontSize: '0.82rem', lineHeight: 1.6, marginTop: '0.75rem' }}>{m.bio}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <GraduationCap size={48} style={{ color: 'var(--color-slate)', marginBottom: '1rem', opacity: 0.5 }} />
              <h3 style={{ color: 'var(--color-slate)', fontWeight: 500 }}>No members found</h3>
              <p style={{ color: 'var(--color-slate)', fontSize: '0.9rem' }}>Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
