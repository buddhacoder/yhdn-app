import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function Mentor() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', training_level: '', request_type: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would hit Supabase
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div>
        <section className="gradient-hero" style={{ padding: '8rem 0 4rem' }} />
        <section style={{ padding: '6rem 0', textAlign: 'center', background: 'var(--color-ivory)' }}>
          <CheckCircle size={56} style={{ color: 'var(--color-success)', marginBottom: '1.5rem' }} />
          <h2>Request Submitted!</h2>
          <p style={{ color: 'var(--color-slate)', maxWidth: 450, margin: '0.75rem auto 0', lineHeight: 1.7 }}>
            Thank you for reaching out. A member of our mentorship committee will review your request and connect you with an appropriate mentor soon.
          </p>
        </section>
      </div>
    )
  }

  return (
    <div>
      <section className="gradient-hero" style={{ padding: '8rem 0 4rem' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>Request a <span style={{ color: 'var(--color-gold)' }}>Mentor</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0.75rem auto 0', fontSize: '1.1rem' }}>
            Connect with an experienced Haitian physician who understands your journey.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow" style={{ maxWidth: 650 }}>
          <form onSubmit={handleSubmit} className="card" style={{ padding: '2.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label className="label">Full Name *</label>
              <input className="input" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label className="label">Email *</label>
              <input className="input" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label className="label">Training Level</label>
              <select className="select" value={form.training_level} onChange={e => setForm({ ...form, training_level: e.target.value })}>
                <option value="">Select your level</option>
                <option value="student">Medical Student</option>
                <option value="resident">Resident</option>
                <option value="fellow">Fellow</option>
                <option value="attending">Attending</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label className="label">What do you need help with?</label>
              <select className="select" value={form.request_type} onChange={e => setForm({ ...form, request_type: e.target.value })}>
                <option value="">Select a topic</option>
                <option value="eras">ERAS / Residency Application</option>
                <option value="personal_statement">Personal Statement Review</option>
                <option value="interviews">Interview Preparation</option>
                <option value="usmle">USMLE Prep</option>
                <option value="specialty">Specialty Selection</option>
                <option value="didnt_match">I Didn't Match</option>
                <option value="career">Career Guidance</option>
                <option value="other">Something Else</option>
              </select>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <label className="label">Your Message</label>
              <textarea className="textarea" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us a bit about what you're looking for in a mentor..." />
            </div>
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              <Send size={16} /> Submit Mentorship Request
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
