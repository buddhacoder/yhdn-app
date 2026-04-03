import { Link } from 'react-router-dom'
import { Heart, Clock, ArrowRight, Phone, Users, BookOpen, Shield, MessageCircle } from 'lucide-react'

export default function DidntMatch() {
  return (
    <div>
      {/* Hero — emotionally grounding */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-navy) 0%, #1a1a2e 100%)', padding: '8rem 0 4rem' }}>
        <div className="container-narrow" style={{ textAlign: 'center', maxWidth: 700 }}>
          <Heart size={48} style={{ color: 'var(--color-haiti-red-muted)', marginBottom: '1.5rem' }} />
          <h1 style={{ color: 'white', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            You Didn't Match. <br /><span style={{ color: 'var(--color-gold)' }}>You Are Not Alone.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: 1.8 }}>
            This is one of the hardest days in medicine. But it is not the end of your story. Thousands of excellent physicians didn't match on their first attempt. You are still worthy. You are still capable. And we are here with you.
          </p>
        </div>
      </section>

      {/* Immediate Grounding */}
      <section style={{ background: 'var(--color-ivory)', padding: '3rem 0' }}>
        <div className="container-narrow" style={{ maxWidth: 750, textAlign: 'center' }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-card)', borderLeft: '4px solid var(--color-gold)' }}>
            <Shield size={28} style={{ color: 'var(--color-gold)', marginBottom: '0.75rem' }} />
            <h3 style={{ marginBottom: '0.75rem' }}>Before You Do Anything Else</h3>
            <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8 }}>
              Take a breath. This outcome does not define your intelligence, your dedication, or your future in medicine. The match process is imperfect, competitive, and sometimes unjust. What happened today is a moment — not a verdict.
            </p>
          </div>
        </div>
      </section>

      {/* Next 48 Hours */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-narrow" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <Clock size={24} style={{ color: 'var(--color-haiti-red)' }} />
            <h2>The Next 48 Hours</h2>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              { step: '1', title: 'Contact your medical school advisor immediately', detail: 'They have resources and may have information about SOAP positions.' },
              { step: '2', title: 'Prepare your SOAP application materials', detail: 'Update your personal statement, CV, and have your letters of recommendation ready. SOAP moves fast.' },
              { step: '3', title: 'Cast a wide net', detail: 'Apply to programs you might not have initially considered. Getting in anywhere is the priority right now.' },
              { step: '4', title: 'Reach out to your YHDN community', detail: 'We have members who\'ve navigated SOAP successfully and can help you prepare.' },
              { step: '5', title: 'Take care of yourself', detail: 'Eat. Sleep. Move your body. Call someone you trust. This is a marathon, not a sprint.' },
            ].map(item => (
              <div key={item.step} className="card" style={{ display: 'flex', gap: '1.25rem', padding: '1.5rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-haiti-red)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>{item.step}</div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.3rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--color-slate)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next 7 Days */}
      <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow" style={{ maxWidth: 800 }}>
          <h2 style={{ marginBottom: '2rem' }}>The Next 7 Days & Beyond</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: BookOpen, title: 'SOAP Process', desc: 'If eligible, the SOAP round offers unmatched applicants a structured way to secure a position. Prepare thoroughly and apply broadly.' },
              { icon: Users, title: 'Research Year', desc: 'A research year can strengthen your application dramatically. Many who take this path match in stronger programs the second time.' },
              { icon: Phone, title: 'Preliminary Year', desc: 'A prelim position keeps you in a clinical environment, builds your skills, and shows programs you\'re committed.' },
              { icon: MessageCircle, title: 'Mentorship & Support', desc: 'Connect with YHDN mentors who\'ve been through this. They can guide your next steps with empathy and practical advice.' },
            ].map((card, i) => (
              <div key={i} className="card" style={{ padding: '1.75rem' }}>
                <card.icon size={28} style={{ color: 'var(--color-haiti-blue)', marginBottom: '0.75rem' }} />
                <h4 style={{ marginBottom: '0.5rem' }}>{card.title}</h4>
                <p style={{ color: 'var(--color-slate)', fontSize: '0.9rem', lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Support CTA */}
      <section className="gradient-navy" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ color: 'white', marginBottom: '0.75rem' }}>We Believe in You</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 550, margin: '0 auto 2rem', fontSize: '1.05rem' }}>
            Your path may look different than you planned. That doesn't make it less meaningful. We're here to walk it with you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/mentor" className="btn btn-gold btn-lg">Request a Mentor <ArrowRight size={16} /></Link>
            <Link to="/resources" className="btn btn-white btn-lg">SOAP Resources</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
