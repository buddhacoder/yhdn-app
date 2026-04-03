import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function History() {
  return (
    <div>
      <section className="gradient-hero" style={{ padding: '8rem 0 4rem' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>Our <span style={{ color: 'var(--color-gold)' }}>Story</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0.75rem auto 0', fontSize: '1.1rem' }}>How a group of young Haitian physicians built a movement.</p>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-narrow" style={{ maxWidth: 750 }}>
          <div style={{ position: 'relative', paddingLeft: '2.5rem', borderLeft: '3px solid var(--color-gold)' }}>
            {[
              { year: 'The Beginning', text: 'The Young Haitian Doctors Network was born from a simple but powerful observation: Haitian medical professionals and trainees across the United States often felt isolated, lacking the culturally grounded mentorship and community support that could make the difference between struggling alone and thriving together.' },
              { year: 'A Vision Takes Shape', text: 'Founded by young Haitian medical professionals, YHDN was created to unite a community scattered across medical schools, residency programs, and attending positions nationwide. The founders envisioned a network where a Haitian medical student in Chicago could connect with a resident in Miami, or a fellow in Boston could mentor an applicant in New York.' },
              { year: 'Building Momentum', text: 'What started as a small group quickly grew to over 350 members. YHDN hosted events across 4 states, established 7 active committees, and directly impacted over 100 lives through mentorship, career guidance, and community outreach.' },
              { year: 'Haiti Initiative', text: 'Recognizing the deep connection to Haiti, YHDN launched the Haiti Initiative Project — organizing medical outreach programs aimed at improving healthcare access in underserved communities on the island. This committee leverages the expertise of our network to address critical health needs.' },
              { year: 'Looking Forward', text: 'Today, YHDN continues to grow, innovate, and serve. With a robust board of directors, dedicated committee leaders, and an ever-expanding network, we are building a legacy of excellence, leadership, and service that will uplift generations of Haitian physicians to come.' },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '3rem', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-2.85rem', top: '0.25rem', width: 12, height: 12, borderRadius: '50%', background: 'var(--color-gold)', border: '3px solid white' }} />
                <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>{item.year}</div>
                <p style={{ color: 'var(--color-charcoal)', lineHeight: 1.9, fontSize: '1rem' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-navy" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Be Part of the Story</h2>
          <Link to="/join" className="btn btn-gold btn-lg">Join YHDN <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  )
}
