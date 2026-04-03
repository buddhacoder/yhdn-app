import { useState } from 'react'
import { Mail, Phone, Camera, Play, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <section className="gradient-hero" style={{ padding: '8rem 0 4rem' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>Get in <span style={{ color: 'var(--color-gold)' }}>Touch</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0.75rem auto 0', fontSize: '1.1rem' }}>
            Questions, ideas, or partnerships? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Contact Information</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <a href="mailto:info@yhdn.org" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'var(--color-charcoal)' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-lg)', background: 'var(--color-haiti-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={20} style={{ color: 'white' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Email</div>
                    <div style={{ color: 'var(--color-haiti-blue)', fontSize: '0.9rem' }}>info@yhdn.org</div>
                  </div>
                </a>
                <a href="tel:5615011408" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'var(--color-charcoal)' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-lg)', background: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={20} style={{ color: 'white' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Phone</div>
                    <div style={{ color: 'var(--color-charcoal-light)', fontSize: '0.9rem' }}>(561) 501-1408</div>
                  </div>
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-lg)', background: 'var(--color-haiti-red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={20} style={{ color: 'white' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Location</div>
                    <div style={{ color: 'var(--color-charcoal-light)', fontSize: '0.9rem' }}>South Florida & Nationwide</div>
                  </div>
                </div>
              </div>

              <h3 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Follow Us</h3>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="https://www.instagram.com/yhd_network" target="_blank" rel="noopener" style={{ width: 44, height: 44, borderRadius: 'var(--radius-lg)', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-card)', color: 'var(--color-charcoal)' }}>
                  <Camera size={20} />
                </a>
                <a href="http://www.youtube.com/@YoungHaitianDoctorsNetwork" target="_blank" rel="noopener" style={{ width: 44, height: 44, borderRadius: 'var(--radius-lg)', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-card)', color: 'var(--color-charcoal)' }}>
                  <Play size={20} />
                </a>
              </div>
            </div>

            {/* Form */}
            {submitted ? (
              <div className="card" style={{ padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle size={56} style={{ color: 'var(--color-success)', marginBottom: '1.5rem' }} />
                <h2>Message Sent!</h2>
                <p style={{ color: 'var(--color-slate)', marginTop: '0.5rem' }}>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card" style={{ padding: '2.5rem' }}>
                <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send Us a Message</h2>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="label">Full Name *</label>
                  <input className="input" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="label">Email *</label>
                  <input className="input" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="label">Subject</label>
                  <select className="select" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="membership">Membership</option>
                    <option value="sponsorship">Sponsorship / Partnership</option>
                    <option value="mentorship">Mentorship Program</option>
                    <option value="events">Events</option>
                    <option value="media">Media / Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <label className="label">Message *</label>
                  <textarea className="textarea" required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
