import { useState } from 'react'
import { CheckCircle, ArrowRight, Star, Users, BookOpen, Heart, GraduationCap, Award, Globe, HeartHandshake, Briefcase } from 'lucide-react'
import { benefits } from '@/data/seed'

const iconMap: Record<string, any> = { BookOpen, Briefcase, GraduationCap, Users, Heart, Globe, Award, HeartHandshake }

export default function Join() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', specialty: '', training_level: '', location: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div>
        <section className="gradient-hero" style={{ padding: '8rem 0 4rem' }} />
        <section style={{ padding: '6rem 0', textAlign: 'center', background: 'var(--color-ivory)' }}>
          <CheckCircle size={56} style={{ color: 'var(--color-success)', marginBottom: '1.5rem' }} />
          <h2>Welcome to YHDN!</h2>
          <p style={{ color: 'var(--color-slate)', maxWidth: 450, margin: '0.75rem auto 0', lineHeight: 1.7 }}>
            Your application has been submitted. A member of our team will review and reach out to you shortly. Welcome to the family.
          </p>
        </section>
      </div>
    )
  }

  return (
    <div>
      <section className="gradient-hero" style={{ padding: '8rem 0 4rem' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>Join <span style={{ color: 'var(--color-gold)' }}>YHDN</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 550, margin: '0.75rem auto 0', fontSize: '1.1rem' }}>
            Become part of a network that's shaping the future of healthcare for Haitian communities worldwide.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2.5rem' }}>
            {/* Benefits */}
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Member Benefits</h2>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {benefits.map((b, i) => {
                  const Icon = iconMap[b.icon] || Star
                  return (
                    <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)' }}>
                      <Icon size={24} style={{ color: 'var(--color-haiti-blue)', flexShrink: 0, marginTop: '0.1rem' }} />
                      <div>
                        <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>{b.title}</h4>
                        <p style={{ color: 'var(--color-slate)', fontSize: '0.82rem', lineHeight: 1.6 }}>{b.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="card" style={{ padding: '2.5rem' }}>
                <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>Apply for Membership</h2>
                <p style={{ color: 'var(--color-slate)', marginBottom: '2rem', fontSize: '0.9rem' }}>Fill out the form below and our team will be in touch.</p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="label">Full Name *</label>
                  <input className="input" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="label">Email *</label>
                  <input className="input" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="label">Specialty / Area of Interest</label>
                  <input className="input" value={form.specialty} onChange={e => setForm({ ...form, specialty: e.target.value })} placeholder="e.g. Internal Medicine, Pediatrics" />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="label">Training Level</label>
                  <select className="select" value={form.training_level} onChange={e => setForm({ ...form, training_level: e.target.value })}>
                    <option value="">Select your level</option>
                    <option value="student">Medical Student</option>
                    <option value="resident">Resident</option>
                    <option value="fellow">Fellow</option>
                    <option value="attending">Attending Physician</option>
                    <option value="ally">Ally / Supporter</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <label className="label">Location</label>
                  <input className="input" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} placeholder="City, State" />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Join the Network <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
