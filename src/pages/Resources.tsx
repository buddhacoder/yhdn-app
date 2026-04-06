import { useState } from 'react'
import { Search, ExternalLink, BookOpen, GraduationCap, Calendar, Building2, DollarSign, FlaskConical, BarChart3 } from 'lucide-react'
import { resources, externalResources } from '@/data/seed'
import { useInView } from '@/hooks/useScrollAnimation'

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useInView(0.1)
  return (
    <div ref={ref} className={`reveal ${isInView ? 'revealed' : ''} delay-${delay} ${className}`}>
      {children}
    </div>
  )
}

const typeIcons: Record<string, React.ElementType> = {
  conference: Calendar,
  organization: Building2,
  scholarship: DollarSign,
  study: GraduationCap,
  data: BarChart3,
  research: FlaskConical,
}

const typeColors: Record<string, string> = {
  conference: 'var(--color-haiti-blue)',
  organization: 'var(--color-gold)',
  scholarship: 'var(--color-success)',
  study: 'var(--color-haiti-red)',
  data: 'var(--color-charcoal)',
  research: 'var(--color-info)',
}

export default function Resources() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [extFilter, setExtFilter] = useState('')
  const categories = [...new Set(resources.map(r => r.category))]
  const extTypes = [...new Set(externalResources.map(r => r.type))]

  const filtered = resources.filter(r => {
    if (search && !r.title.toLowerCase().includes(search.toLowerCase()) && !r.description?.toLowerCase().includes(search.toLowerCase())) return false
    if (category && r.category !== category) return false
    return true
  })

  const filteredExt = externalResources.filter(r => {
    if (search && !r.name.toLowerCase().includes(search.toLowerCase()) && !r.description?.toLowerCase().includes(search.toLowerCase())) return false
    if (extFilter && r.type !== extFilter) return false
    return true
  })

  return (
    <div>
      <section className="gradient-hero" style={{ padding: '8rem 0 4rem' }}>
        <div className="container-narrow" style={{ textAlign: 'left', borderLeft: '4px solid var(--color-haiti-red)', paddingLeft: '2rem' }}>
          <h1 style={{ color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em' }}>High-Yield <span style={{ color: 'var(--color-gold)' }}>Strategic</span> Archives</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 700, margin: '1rem 0 0', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Stop fighting the gatekeepers. These are the visceral, unredacted blueprints our residents used to survive unmet realities, bypass standard networking, and score 260+ on the USMLE.
          </p>
        </div>
      </section>

      {/* YHDN Resources */}
      <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow">
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 12, height: 12, background: 'var(--color-haiti-red)', borderRadius: '50%' }}></div>
              <h2 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Unlocked Vault Files</h2>
            </div>
          </Reveal>
          <div className="card" style={{ padding: '1.25rem', marginBottom: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem' }}>
              <div style={{ position: 'relative' }}>
                <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-slate)' }} />
                <input className="input" placeholder="Search archives..." value={search} onChange={e => setSearch(e.target.value)} style={{ paddingLeft: '2.5rem' }} />
              </div>
              <select className="select" value={category} onChange={e => setCategory(e.target.value)} style={{ minWidth: 200 }}>
                <option value="">All Areas</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.25rem' }}>
            {filtered.map((r, i) => (
              <Reveal key={r.id} delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
                <div className="card" style={{ padding: '2rem', height: '100%', background: 'var(--color-charcoal)', color: 'white', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>// {r.category}</span>
                    {r.is_featured && <span style={{ background: 'var(--color-haiti-red)', color: 'white', fontSize: '0.65rem', padding: '0.3rem 0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, borderRadius: 2 }}>Classified</span>}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)', lineHeight: 1.4 }}>{r.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{r.description}</p>
                  
                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                      {r.tags?.map(t => (
                        <span key={t} style={{ padding: '0.2rem 0.5rem', border: '1px dotted rgba(255,255,255,0.3)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t}</span>
                      ))}
                    </div>
                    {r.source_url && (
                      <a href={r.source_url} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-ivory)', textDecoration: 'none', borderBottom: '1px solid var(--color-haiti-red)', paddingBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Access File <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <BookOpen size={40} style={{ color: 'var(--color-slate)', marginBottom: '0.75rem', opacity: 0.4 }} />
              <p style={{ color: 'var(--color-slate)' }}>No institutional archives found. Try adjusting your parameters.</p>
            </div>
          )}
        </div>
      </section>

      {/* External Resources */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-narrow">
          <Reveal>
            <h2 style={{ marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Institutional Bypass: Power & Capital</h2>
            <p style={{ color: 'var(--color-charcoal-light)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: 800 }}>
              Stop playing fair. Here are the funding workarounds, high-leverage conferences, and systemic cheat codes the establishment doesn't advertise to us.
            </p>
          </Reveal>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <button onClick={() => setExtFilter('')} className="btn btn-sm" style={{ background: !extFilter ? 'var(--color-navy)' : 'var(--color-ivory)', color: !extFilter ? 'white' : 'var(--color-charcoal)', border: 'none', borderRadius: '9999px', fontSize: '0.82rem', padding: '0.35rem 1rem' }}>
              All
            </button>
            {extTypes.map(t => (
              <button key={t} onClick={() => setExtFilter(t)} className="btn btn-sm" style={{ background: extFilter === t ? 'var(--color-navy)' : 'var(--color-ivory)', color: extFilter === t ? 'white' : 'var(--color-charcoal)', border: 'none', borderRadius: '9999px', fontSize: '0.82rem', padding: '0.35rem 1rem', textTransform: 'capitalize' }}>
                {t}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.25rem' }}>
            {filteredExt.map((r, i) => {
              const Icon = typeIcons[r.type] || BookOpen
              const color = typeColors[r.type] || 'var(--color-slate)'
              return (
                <Reveal key={r.id} delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
                  <a href={r.url} target="_blank" rel="noopener" className="card" style={{ padding: '1.5rem', textDecoration: 'none', display: 'block', borderLeft: `4px solid ${color}`, height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <Icon size={22} style={{ color, flexShrink: 0 }} />
                      <span style={{ textTransform: 'capitalize', fontSize: '0.75rem', fontWeight: 600, color, background: `${color}15`, padding: '0.15rem 0.6rem', borderRadius: '9999px' }}>{r.type}</span>
                    </div>
                    <h3 style={{ fontSize: '1.02rem', marginBottom: '0.5rem', color: 'var(--color-navy)' }}>{r.name}</h3>
                    <p style={{ color: 'var(--color-slate)', fontSize: '0.85rem', lineHeight: 1.7 }}>{r.description}</p>
                    {'date' in r && (r as { date?: string }).date && (
                      <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--color-charcoal-light)' }}>
                        📅 {(r as { date?: string }).date} {'location' in r && (r as { location?: string }).location && `· 📍 ${(r as { location?: string }).location}`}
                      </div>
                    )}
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.75rem', fontSize: '0.82rem', fontWeight: 600, color }}>
                      Visit <ExternalLink size={12} />
                    </span>
                  </a>
                </Reveal>
              )
            })}
          </div>

          {filteredExt.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <BookOpen size={40} style={{ color: 'var(--color-slate)', marginBottom: '0.75rem', opacity: 0.4 }} />
              <p style={{ color: 'var(--color-slate)' }}>No external resources found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
