import { Link } from 'react-router-dom'
import { boardMembers, testimonials, committees } from '@/data/seed'
import { ArrowRight, Users, Globe, Award, Heart, BookOpen, Briefcase, GraduationCap, HeartHandshake } from 'lucide-react'

const iconMap: Record<string, any> = { BookOpen, Briefcase, GraduationCap, Users, Heart, Globe, Award, HeartHandshake }

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero" style={{ padding: '8rem 0 4rem' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>About <span style={{ color: 'var(--color-gold)' }}>YHDN</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Empowering and connecting budding Haitian medical professionals worldwide.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-narrow" style={{ maxWidth: 800 }}>
          <div className="badge badge-blue" style={{ marginBottom: '1rem' }}>Our Mission</div>
          <h2 style={{ marginBottom: '1.5rem' }}>Excellence, Community, Service</h2>
          <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.9, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
            The Young Haitian Doctors Network (YHDN) exists to empower and connect budding Haitian medical professionals worldwide. Our mission is to promote excellence in medicine, foster professional and personal growth, and strengthen the global Haitian medical community through collaboration, mentorship, and service.
          </p>
          <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.9, fontSize: '1.05rem' }}>
            Our organization aims to create a robust network that supports members' professional journeys, nurtures academic and career achievements, and addresses healthcare disparities in underserved communities. Through initiatives in mentorship, community outreach and professional development, YHDN is committed to uplifting the Haitian medical community and fostering a legacy of excellence, leadership and service.
          </p>
        </div>
      </section>

      {/* Committees */}
      <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Our Committees</h2>
            <p style={{ color: 'var(--color-slate)', marginTop: '0.5rem' }}>Seven dedicated committees driving our mission forward.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {committees.map((c, i) => (
              <div key={c.id} className="card" style={{ padding: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{c.name}</h4>
                <p style={{ color: 'var(--color-slate)', fontSize: '0.85rem', lineHeight: 1.7 }}>{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Board of Directors</h2>
            <p style={{ color: 'var(--color-slate)', marginTop: '0.5rem' }}>The leaders guiding YHDN's vision and growth.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {boardMembers.map(m => (
              <div key={m.id} className="card" style={{ display: 'flex', gap: '1.25rem', padding: '1.5rem' }}>
                <div style={{
                  width: 80, height: 80, borderRadius: 'var(--radius-lg)', flexShrink: 0,
                  background: m.profile_photo_url ? `url(${m.profile_photo_url}) center/cover` : 'var(--color-navy)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.5rem',
                }}>
                  {!m.profile_photo_url && m.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>{m.name}</h4>
                  <div className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>{m.role}</div>
                  <p style={{ color: 'var(--color-slate)', fontSize: '0.82rem', lineHeight: 1.7 }}>{m.bio?.slice(0, 150)}…</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Make an Impact?</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2rem' }}>
            Join a network that's shaping the future of healthcare for Haitian and Black communities.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/join" className="btn btn-gold btn-lg">Become a Member <ArrowRight size={16} /></Link>
            <a href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-6887" target="_blank" rel="noopener" className="btn btn-white btn-lg">Donate Today</a>
          </div>
        </div>
      </section>
    </div>
  )
}
