import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BarChart3, Users, BookOpen, Calendar, Shield, Settings } from 'lucide-react'
import { members, resources, events, posts } from '@/data/seed'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside style={{
        width: 260, background: 'var(--color-navy)', padding: '1.5rem 1rem',
        display: 'flex', flexDirection: 'column', gap: '0.25rem', flexShrink: 0
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', marginBottom: '2rem', padding: '0.5rem' }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--color-haiti-blue) 0%, var(--color-gold) 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '0.9rem'
          }}>Y</div>
          <div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem' }}>YHDN Admin</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>Dashboard</div>
          </div>
        </Link>
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'members', label: 'Members', icon: Users },
          { id: 'resources', label: 'Resources', icon: BookOpen },
          { id: 'events', label: 'Events', icon: Calendar },
          { id: 'settings', label: 'Settings', icon: Settings },
        ].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem',
              background: activeTab === tab.id ? 'rgba(255,255,255,0.1)' : 'transparent',
              border: 'none', color: activeTab === tab.id ? 'white' : 'rgba(255,255,255,0.6)',
              borderRadius: 'var(--radius-md)', cursor: 'pointer', width: '100%', textAlign: 'left',
              fontSize: '0.9rem', fontWeight: activeTab === tab.id ? 600 : 400,
            }}>
            <tab.icon size={18} /> {tab.label}
          </button>
        ))}

        <div style={{ marginTop: 'auto' }}>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', marginTop: '1rem' }}>
            <Shield size={16} style={{ color: 'var(--color-gold)', marginBottom: '0.5rem' }} />
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
              Admin access requires Supabase authentication. Connect your database to enable full CRUD.
            </p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, background: 'var(--color-ivory)', padding: '2rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>Dashboard</h1>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
          {[
            { label: 'Total Members', value: members.length, icon: Users, color: 'var(--color-haiti-blue)' },
            { label: 'Resources', value: resources.length, icon: BookOpen, color: 'var(--color-gold)' },
            { label: 'Events', value: events.length, icon: Calendar, color: 'var(--color-success)' },
            { label: 'Posts', value: posts.length, icon: BarChart3, color: 'var(--color-haiti-red)' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: '1.5rem' }}>
              <s.icon size={24} style={{ color: s.color, marginBottom: '0.5rem' }} />
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-navy)' }}>{s.value}</div>
              <div style={{ color: 'var(--color-slate)', fontSize: '0.85rem' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Recent Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {posts.slice(0, 3).map(p => (
              <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: 'var(--color-ivory)', borderRadius: 'var(--radius-md)' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{p.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-slate)' }}>{p.type} · {new Date(p.published_at).toLocaleDateString()}</div>
                </div>
                <span className="badge badge-blue">{p.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Supabase connection note */}
        <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(43, 94, 167, 0.08)', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--color-haiti-blue)' }}>
          <h4 style={{ color: 'var(--color-haiti-blue)', marginBottom: '0.5rem' }}>🔌 Database Not Connected</h4>
          <p style={{ color: 'var(--color-charcoal-light)', fontSize: '0.88rem', lineHeight: 1.7 }}>
            This dashboard is running on local seed data. To enable live data and full CRUD operations, connect your Supabase instance by adding <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to your <code>.env</code> file.
          </p>
        </div>
      </main>
    </div>
  )
}
