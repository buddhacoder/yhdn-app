import { Link } from 'react-router-dom'
import { Heart, Utensils, Dumbbell, BookOpen, Globe, ArrowRight } from 'lucide-react'

export default function Culture() {
  return (
    <div>
      <section className="gradient-hero" style={{ padding: '8rem 0 4rem' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>Culture & <span style={{ color: 'var(--color-gold)' }}>Wellness</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0.75rem auto 0', fontSize: '1.1rem' }}>
            Health education that sees you. Wellness guidance that understands where you come from.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-narrow" style={{ maxWidth: 750, textAlign: 'center' }}>
          <Globe size={36} style={{ color: 'var(--color-haiti-blue)', marginBottom: '1rem' }} />
          <h2 style={{ marginBottom: '1rem' }}>Culturally Grounded Care</h2>
          <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.9, fontSize: '1.05rem' }}>
            Health doesn't exist in a vacuum. For Haitian communities, effective care must be rooted in cultural understanding — our food traditions, our spiritual practices, our family structures, and our lived experiences. This section provides health guidance that respects and honors Haitian identity.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow">
          <div style={{ display: 'grid', gap: '2rem' }}>
            {/* Creole Health Ed */}
            <div className="card" style={{ padding: '2rem', borderLeft: '4px solid var(--color-haiti-blue)' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                <BookOpen size={28} style={{ color: 'var(--color-haiti-blue)', flexShrink: 0, marginTop: '0.25rem' }} />
                <div>
                  <h3 style={{ marginBottom: '0.75rem' }}>Haitian Creole + English Health Education</h3>
                  <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8, marginBottom: '1rem' }}>
                    Access patient education materials designed for the Haitian community — available in both Haitian Creole and English. Topics include hypertension management, diabetes, mental health awareness, prenatal care, and childhood immunizations.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['Tansyon (Hypertension)', 'Dyabèt (Diabetes)', 'Sante Mantal (Mental Health)', 'Swen Gwosès (Prenatal Care)', 'Vaksen Timoun (Immunizations)'].map(t => (
                      <span key={t} className="badge badge-blue">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Nutrition */}
            <div className="card" style={{ padding: '2rem', borderLeft: '4px solid var(--color-gold)' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                <Utensils size={28} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '0.25rem' }} />
                <div>
                  <h3 style={{ marginBottom: '0.75rem' }}>Culturally Sensitive Nutrition</h3>
                  <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8, marginBottom: '1rem' }}>
                    Haitian cuisine is rich, flavorful, and deeply connected to identity. Rather than telling you to abandon your food culture, we provide guidance on how to enjoy traditional dishes in healthier ways — because nutrition advice that ignores who you are doesn't work.
                  </p>
                  <div style={{ background: 'var(--color-ivory)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal)', lineHeight: 1.7 }}>
                      <strong>Example:</strong> Diri ak sos pwa (rice and bean sauce) is a staple that provides excellent fiber and plant-based protein. Pairing it with leafy greens and moderating sodium can make this beloved dish a heart-healthy foundation of your diet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fitness / Wellness */}
            <div className="card" style={{ padding: '2rem', borderLeft: '4px solid var(--color-haiti-red)' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                <Dumbbell size={28} style={{ color: 'var(--color-haiti-red)', flexShrink: 0, marginTop: '0.25rem' }} />
                <div>
                  <h3 style={{ marginBottom: '0.75rem' }}>Culturally Grounded Wellness</h3>
                  <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8, marginBottom: '1rem' }}>
                    Wellness isn't a luxury — it's a necessity, especially in medicine. Our approach acknowledges the unique pressures faced by Haitian medical professionals: the weight of community expectations, the drive to "make it" for your family, and the cultural tendency to put everyone else first.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    {[
                      { title: 'Physical Health', desc: 'Movement, rest, and nutrition for medical professionals.' },
                      { title: 'Mental Health', desc: 'Breaking the stigma. Therapy is strength, not weakness.' },
                      { title: 'Community Care', desc: 'You don\'t have to carry everything alone.' },
                    ].map((w, i) => (
                      <div key={i} style={{ padding: '1rem', background: 'var(--color-ivory)', borderRadius: 'var(--radius-md)' }}>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>{w.title}</h4>
                        <p style={{ fontSize: '0.82rem', color: 'var(--color-slate)', lineHeight: 1.6 }}>{w.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container-narrow">
          <Heart size={32} style={{ color: 'var(--color-gold)', marginBottom: '1rem' }} />
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Your Health Matters</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 500, margin: '0 auto 2rem' }}>
            Take care of yourself so you can take care of others. Connect with our Wellness Committee.
          </p>
          <Link to="/join" className="btn btn-gold btn-lg">Join the Community <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  )
}
