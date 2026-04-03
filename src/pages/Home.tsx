import { Link } from 'react-router-dom'
import { ArrowRight, Users, Calendar, Heart, BookOpen, Stethoscope, GraduationCap, Globe, Star, ChevronRight } from 'lucide-react'
import { testimonials, events, benefits, sponsors } from '@/data/seed'

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="gradient-hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(43, 94, 167, 0.15) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212, 168, 67, 0.08) 0%, transparent 70%)' }} />
        <div className="container-narrow" style={{ position: 'relative', zIndex: 1, paddingTop: '2rem', paddingBottom: '4rem' }}>
          <div style={{ maxWidth: 720 }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.5rem', animation: 'fadeIn 0.6s ease' }}>
              <Star size={12} style={{ marginRight: 4 }} /> 350+ Members Strong
            </div>
            <h1 className="animate-fade-in-up" style={{ color: 'white', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Connecting Haitian <span style={{ color: 'var(--color-gold)' }}>Excellence</span> in Medicine
            </h1>
            <p className="animate-fade-in-up stagger-1" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: 600, marginBottom: '2.5rem' }}>
              Community, mentorship, career guidance, and culturally grounded support for Haitian medical students, residents, fellows, physicians, and allies worldwide.
            </p>
            <div className="animate-fade-in-up stagger-2" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/pipeline" className="btn btn-gold btn-lg">Get Career Help <ArrowRight size={18} /></Link>
              <Link to="/join" className="btn btn-primary btn-lg" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>Join the Network</Link>
              <Link to="/resources" className="btn btn-secondary btn-lg" style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.85)' }}>Explore Resources</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section style={{ background: 'white', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container-narrow" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', padding: '3rem 1.5rem' }}>
          {[
            { value: '350+', label: 'Members Strong', icon: Users },
            { value: '10+', label: 'Events in 4 States', icon: Calendar },
            { value: '100+', label: 'Lives Impacted', icon: Heart },
            { value: '7', label: 'Active Committees', icon: Globe },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <stat.icon size={28} style={{ color: 'var(--color-haiti-blue)', marginBottom: '0.5rem' }} />
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ color: 'var(--color-slate)', fontSize: '0.9rem', marginTop: '0.25rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PATHWAY ENTRY ===== */}
      <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Start Your Journey</h2>
            <p style={{ color: 'var(--color-slate)', maxWidth: 500, margin: '0.75rem auto 0', fontSize: '1.05rem' }}>Choose your path and get personalized guidance.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: "I'm a Med Student", desc: 'USMLE prep, mentorship connections, and preclinical guidance.', path: '/pipeline', icon: GraduationCap, color: 'var(--color-haiti-blue)' },
              { title: "I'm Applying to Residency", desc: 'ERAS tips, personal statement review, and interview preparation.', path: '/pipeline', icon: Stethoscope, color: 'var(--color-gold)' },
              { title: "I Didn't Match", desc: "Immediate support, next steps, and you're not alone in this.", path: '/didnt-match', icon: Heart, color: 'var(--color-haiti-red)' },
            ].map((card, i) => (
              <Link key={i} to={card.path} className="card" style={{ padding: '2rem', textDecoration: 'none', display: 'block', borderLeft: `4px solid ${card.color}` }}>
                <card.icon size={32} style={{ color: card.color, marginBottom: '1rem' }} />
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.2rem' }}>{card.title}</h3>
                <p style={{ color: 'var(--color-slate)', fontSize: '0.9rem', lineHeight: 1.7 }}>{card.desc}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: card.color, fontWeight: 600, fontSize: '0.9rem', marginTop: '1rem' }}>
                  Get Started <ChevronRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-narrow" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div className="badge badge-blue" style={{ marginBottom: '1rem' }}>About YHDN</div>
            <h2 style={{ marginBottom: '1.25rem' }}>Building a Community of Medical Leaders</h2>
            <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              The Young Haitian Doctors Network was founded with a vision to unite Haitian medical professionals and trainees across the globe. Our organization aims to create a robust network that supports members' professional journeys, nurtures academic and career achievements, and addresses healthcare disparities in underserved communities.
            </p>
            <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Through initiatives in mentorship, community outreach and professional development, YHDN is committed to uplifting the Haitian medical community and fostering a legacy of excellence, leadership and service.
            </p>
            <Link to="/about" className="btn btn-primary">Learn More <ArrowRight size={16} /></Link>
          </div>
          <div style={{ background: 'var(--color-ivory)', borderRadius: 'var(--radius-2xl)', padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {benefits.slice(0, 4).map((b, i) => (
              <div key={i} style={{ padding: '1.25rem', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)' }}>
                <BookOpen size={20} style={{ color: 'var(--color-haiti-blue)', marginBottom: '0.5rem' }} />
                <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-navy)' }}>{b.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIRECTORY PREVIEW ===== */}
      <section className="section-padding gradient-navy">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Haitian Doctors Around the World</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 550, margin: '0 auto 2rem', fontSize: '1.05rem' }}>
            Explore our growing network of physicians, residents, and medical students across specialties and cities.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {['Cardiology', 'Psychiatry', 'Pediatrics', 'Internal Medicine', 'Surgery', 'Emergency Medicine'].map(s => (
              <span key={s} style={{ padding: '0.4rem 1rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', border: '1px solid rgba(255,255,255,0.1)' }}>{s}</span>
            ))}
          </div>
          <Link to="/directory" className="btn btn-gold btn-lg">Browse the Directory <ArrowRight size={18} /></Link>
        </div>
      </section>

      {/* ===== EVENTS PREVIEW ===== */}
      <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2>Upcoming Events</h2>
              <p style={{ color: 'var(--color-slate)', marginTop: '0.5rem' }}>Connect, learn, and grow with your community.</p>
            </div>
            <Link to="/events" className="btn btn-secondary btn-sm">View All Events <ArrowRight size={14} /></Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {events.map(event => (
              <div key={event.id} className="card" style={{ padding: '1.75rem' }}>
                <div className="badge badge-blue" style={{ marginBottom: '1rem' }}>{event.status}</div>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.15rem' }}>{event.title}</h3>
                <p style={{ color: 'var(--color-slate)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>{event.description?.slice(0, 120)}…</p>
                <div style={{ display: 'flex', gap: '1rem', color: 'var(--color-charcoal-light)', fontSize: '0.85rem' }}>
                  {event.location && <span>📍 {event.location}</span>}
                  {event.event_date && <span>📅 {new Date(event.event_date).toLocaleDateString()}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Hear from Our Members</h2>
            <p style={{ color: 'var(--color-slate)', maxWidth: 500, margin: '0.75rem auto 0' }}>Discover how YHDN has impacted the lives and careers of its members.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {testimonials.slice(0, 3).map((t, i) => (
              <div key={t.id} className="card" style={{ padding: '2rem', borderTop: `3px solid ${i === 0 ? 'var(--color-gold)' : i === 1 ? 'var(--color-haiti-blue)' : 'var(--color-haiti-red)'}` }}>
                <div style={{ fontSize: '2rem', color: 'var(--color-gold)', fontFamily: 'Georgia, serif', lineHeight: 1 }}>"</div>
                <p style={{ color: 'var(--color-charcoal)', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  {t.quote.slice(0, 200)}…
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--color-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.85rem' }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-navy)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-slate)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPONSORS + DONATE ===== */}
      <section className="section-padding gradient-navy">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Support the Mission</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 550, margin: '0 auto 2.5rem' }}>
            Your generous support helps us provide scholarships, mentorship, and community outreach programs.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {sponsors.map(s => (
              <a key={s.id} href={s.website_url} target="_blank" rel="noopener"
                style={{ padding: '1rem 2rem', background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-lg)', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                {s.name}
              </a>
            ))}
          </div>
          <a href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-6887"
            target="_blank" rel="noopener" className="btn btn-gold btn-lg">
            <Heart size={18} /> Help Us Make an Impact
          </a>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ background: 'var(--color-ivory)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ marginBottom: '1rem' }}>Ready to Join the Network?</h2>
          <p style={{ color: 'var(--color-slate)', maxWidth: 500, margin: '0 auto 2rem', fontSize: '1.05rem' }}>
            Become part of a vibrant community shaping the future of healthcare for Haitian and Black communities.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/join" className="btn btn-primary btn-lg">Become a Member <ArrowRight size={18} /></Link>
            <a href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-6887"
              target="_blank" rel="noopener" className="btn btn-secondary btn-lg">
              Donate Today <Heart size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
