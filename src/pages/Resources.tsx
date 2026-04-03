import { useState } from 'react'
import { Search, ExternalLink, BookOpen } from 'lucide-react'
import { resources } from '@/data/seed'

export default function Resources() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const categories = [...new Set(resources.map(r => r.category))]

  const filtered = resources.filter(r => {
    if (search && !r.title.toLowerCase().includes(search.toLowerCase()) && !r.description?.toLowerCase().includes(search.toLowerCase())) return false
    if (category && r.category !== category) return false
    return true
  })

  return (
    <div>
      <section className="gradient-hero" style={{ padding: '8rem 0 4rem' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>Resource <span style={{ color: 'var(--color-gold)' }}>Library</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0.75rem auto 0', fontSize: '1.1rem' }}>
            Guides, tips, and tools to help you succeed at every stage of your medical career.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow">
          <div className="card" style={{ padding: '1.25rem', marginBottom: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem' }}>
              <div style={{ position: 'relative' }}>
                <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-slate)' }} />
                <input className="input" placeholder="Search resources..." value={search} onChange={e => setSearch(e.target.value)} style={{ paddingLeft: '2.5rem' }} />
              </div>
              <select className="select" value={category} onChange={e => setCategory(e.target.value)} style={{ minWidth: 200 }}>
                <option value="">All Categories</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.25rem' }}>
            {filtered.map(r => (
              <div key={r.id} className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                  <span className="badge badge-blue">{r.category}</span>
                  {r.is_featured && <span className="badge badge-gold">Featured</span>}
                </div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{r.title}</h3>
                <p style={{ color: 'var(--color-slate)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>{r.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {r.tags?.map(t => (
                    <span key={t} style={{ padding: '0.15rem 0.5rem', borderRadius: '9999px', background: 'var(--color-ivory)', fontSize: '0.75rem', color: 'var(--color-charcoal-light)' }}>{t}</span>
                  ))}
                </div>
                {r.source_url && (
                  <a href={r.source_url} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>
                    View Resource <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <BookOpen size={48} style={{ color: 'var(--color-slate)', marginBottom: '1rem', opacity: 0.5 }} />
              <h3 style={{ color: 'var(--color-slate)', fontWeight: 500 }}>No resources found</h3>
              <p style={{ color: 'var(--color-slate)', fontSize: '0.9rem' }}>Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
