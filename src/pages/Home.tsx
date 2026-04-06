import { Link } from 'react-router-dom'
import { Users, Calendar, Globe, Heart } from 'lucide-react'
import { testimonials, events, benefits, sponsors } from '@/data/seed'
import { useInView, useCountUp } from '@/hooks/useScrollAnimation'


/* ===== Animated Section Wrapper ===== */
function Reveal({ children, className = '', delay = 0, direction = 'up' }: {
  children: React.ReactNode; className?: string; delay?: number; direction?: 'up' | 'left' | 'right' | 'scale'
}) {
  const { ref, isInView } = useInView(0.1)
  const dirClass = direction === 'up' ? 'reveal' : direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal-scale'
  return (
    <div ref={ref} className={`${dirClass} ${isInView ? 'revealed' : ''} delay-${delay} ${className}`}>
      {children}
    </div>
  )
}

/* ===== Animated Counter ===== */
function StatCounter({ value, label, icon: Icon, color }: { value: number; suffix?: string; label: string; icon: React.ElementType; color: string }) {
  const { ref, isInView } = useInView(0.3)
  const count = useCountUp(value, 2000, isInView)
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <Icon size={28} style={{ color, marginBottom: '0.5rem' }} />
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1 }}>
        {count}+
      </div>
      <div style={{ color: 'var(--color-slate)', fontSize: '0.9rem', marginTop: '0.25rem' }}>{label}</div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* ===== SECTION 1: PHOTO HERO ===== */}
      <section className="cinema-section" style={{
        flexDirection: 'column', gap: '2rem', paddingTop: '5rem',
        backgroundImage: 'url(/hero-doctors.png)', backgroundSize: 'cover', backgroundPosition: 'center top',
        minHeight: '100vh', position: 'relative',
      }}>
        {/* Stark dark gradient overlay — no soft orbs */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.7) 40%, rgba(10,22,40,0.95) 100%)' }} />

        {/* Content — left-aligned for editorial feel */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'left', maxWidth: 1000, width: '100%', padding: '0 2rem' }}>
          
          {/* Deliberate Flag & Label Layout */}
          <div className="animate-fade-in-up stagger-1" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
            <img src="/haitian-flag.png" alt="Haitian Flag" style={{ width: 64, borderRadius: 2, boxShadow: '4px 4px 0px rgba(0,0,0,0.6)' }} />
            <div style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', borderBottom: '1px solid var(--color-gold)', paddingBottom: '0.25rem' }}>
              ✦ 350+ Members Strong
            </div>
          </div>
          
          {/* Bold Organization Title */}
          <h1 className="animate-fade-in-up stagger-2" style={{ fontFamily: 'var(--font-display)', color: 'white', marginBottom: '1.5rem', lineHeight: 1.05, fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(3rem, 6.5vw, 6rem)', letterSpacing: '-0.02em', textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}>
            Young Haitian<br />
            <span style={{ color: 'var(--color-gold)', fontStyle: 'italic', fontWeight: 400 }}>Doctors</span> Network
          </h1>
          
          <div className="animate-fade-in-up stagger-3" style={{ borderLeft: '4px solid var(--color-haiti-red)', paddingLeft: '1.5rem', marginBottom: '2.5rem', maxWidth: 640 }}>
            <p style={{ color: 'var(--color-gold)', fontFamily: 'Georgia, serif', fontSize: '1.25rem', fontStyle: 'italic', letterSpacing: '0.05em', marginBottom: '0.75rem', opacity: 0.95 }}>
              L'Union Fait La Force
            </p>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', lineHeight: 1.7 }}>
              Connecting Haitian Excellence in Medicine. We provide community, mentorship, and culturally grounded support for medical students, physicians, and allies worldwide.
            </p>
          </div>

          <div className="animate-fade-in-up stagger-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/pipeline" className="btn btn-editorial btn-lg">Get Career Help →</Link>
            <Link to="/join" className="btn btn-primary btn-lg">Join the Network</Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }}>
          <div style={{ width: 24, height: 38, borderRadius: 12, border: '2px solid rgba(255,255,255,0.4)', display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
            <div style={{ width: 4, height: 8, borderRadius: 2, background: 'rgba(255,255,255,0.6)', animation: 'float 2s ease-in-out infinite' }} />
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: STATS COUNTER ===== */}
      <section style={{ background: 'var(--color-surface)', borderBottom: '1px solid rgba(0,0,0,0.05)', borderTop: '3px solid', borderImage: 'linear-gradient(90deg, var(--color-haiti-blue) 0%, var(--color-haiti-blue) 50%, var(--color-haiti-red) 50%, var(--color-haiti-red) 100%) 1' }}>
        <div className="container-narrow" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', padding: '3.5rem 1.5rem' }}>
          <StatCounter value={350} label="Members Strong" icon={Users} color="var(--color-haiti-blue)" />
          <StatCounter value={10} label="Events in 4 States" icon={Calendar} color="var(--color-haiti-red)" />
          <StatCounter value={100} label="Lives Impacted" icon={Heart} color="var(--color-haiti-blue)" />
          <StatCounter value={7} label="Active Committees" icon={Globe} color="var(--color-haiti-red)" />
        </div>
      </section>

      {/* ===== SECTION 3: PATHWAY CARDS (ASYMMETRIC) ===== */}
      <section className="section-padding-generous" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow">
          <Reveal>
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Start Your Journey</h2>
              <p style={{ color: 'var(--color-slate)', maxWidth: 500, marginTop: '0.75rem', fontSize: '1.05rem' }}>Choose your path and get personalized guidance.</p>
            </div>
          </Reveal>

          {/* Featured first card — Brutalist/Editorial split */}
          <Reveal direction="left">
            <Link to="/pipeline" className="card" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
              textDecoration: 'none', marginBottom: '1.5rem', overflow: 'hidden',
              border: '1px solid var(--color-navy)'
            }}>
              <div style={{ padding: '3rem', borderRight: '1px solid var(--color-navy)', background: 'white' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--color-navy)', opacity: 0.15, lineHeight: 1, marginBottom: '1rem' }}>01</div>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.6rem', fontFamily: 'var(--font-display)' }}>I'm a Med Student</h3>
                <p style={{ color: 'var(--color-slate)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>USMLE prep, mentorship connections, preclinical guidance, and a community that gets it.</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-navy)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Get Started →
                </span>
              </div>
              <div style={{ backgroundImage: 'url(/pipeline-student.png)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: 300, filter: 'contrast(1.1) grayscale(20%)' }} />
            </Link>
          </Reveal>

          {/* Two smaller cards - Editorial style */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { number: '02', title: "I'm Applying to Residency", desc: 'ERAS tips, personal statement review, and interview preparation.', path: '/pipeline' },
              { number: '03', title: "I Didn't Match", desc: "Immediate support, next steps, and you're not alone in this.", path: '/didnt-match' },
            ].map((card, i) => (
              <Reveal key={card.number} delay={(i + 1) as 1 | 2} direction={i === 0 ? 'left' : 'right'}>
                <Link to={card.path} className="card" style={{ padding: '2.5rem', background: 'white', border: '1px solid var(--color-navy)', textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--color-navy)', opacity: 0.15, lineHeight: 1, marginBottom: '1rem' }}>{card.number}</div>
                  <h3 style={{ marginBottom: '0.75rem', fontSize: '1.3rem', fontFamily: 'var(--font-display)' }}>{card.title}</h3>
                  <p style={{ color: 'var(--color-slate)', fontSize: '0.9rem', lineHeight: 1.7, flex: 1 }}>{card.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-navy)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '1.5rem' }}>
                    Get Started →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: ABOUT PREVIEW (RAW/BRUTALIST) ===== */}
      <section className="section-padding" style={{ background: 'white', borderTop: '1px solid var(--color-navy)' }}>
        <div className="container-narrow" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
          <Reveal direction="left">
            <div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-navy)', borderBottom: '1px solid var(--color-navy)', display: 'inline-block', paddingBottom: '0.25rem', marginBottom: '2rem', fontWeight: 700 }}>
                Mission & Vision
              </div>
              <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-display)', fontSize: '2.5rem', lineHeight: 1.1 }}>Building a Community of Medical Leaders</h2>
              <p style={{ color: 'var(--color-charcoal)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                The Young Haitian Doctors Network was founded with a vision to unite Haitian medical professionals and trainees across the globe. Our organization aims to create a robust network that supports members' professional journeys, nurtures academic and career achievements, and addresses healthcare disparities.
              </p>
              <p style={{ color: 'var(--color-charcoal)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1.05rem' }}>
                Through initiatives in mentorship, community outreach and professional development, YHDN is committed to uplifting the Haitian medical community and fostering a legacy of excellence, leadership and service.
              </p>
              <Link to="/about" className="btn btn-secondary">Learn Our Story →</Link>
            </div>
          </Reveal>
          <Reveal direction="right" delay={2}>
            <div style={{ borderLeft: '1px solid rgba(10, 22, 40, 0.1)', paddingLeft: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {benefits.slice(0, 4).map((b, i) => (
                <Reveal key={i} delay={(i + 1) as 1 | 2 | 3 | 4} direction="up">
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--color-gold)', fontStyle: 'italic', fontWeight: 600 }}>0{i + 1}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-navy)', marginBottom: '0.35rem', letterSpacing: '-0.02em' }}>{b.title}</div>
                      <div style={{ color: 'var(--color-slate)', fontSize: '0.9rem', lineHeight: 1.6 }}>Core pillar supporting our overarching mission to elevate the community.</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== YHDN WHATSAPP CORE (FORMERLY CALL ROOM) ===== */}
      <section className="section-padding-generous" style={{ background: 'var(--color-charcoal)', borderTop: '2px solid var(--color-haiti-red)', borderBottom: '2px solid var(--color-haiti-red)', overflow: 'hidden' }}>
        <div className="container-narrow">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center' }}>
            <Reveal direction="left">
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: 12, height: 12, background: 'var(--color-haiti-red)', borderRadius: '50%' }}></div>
                  <div style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'white', fontWeight: 800 }}>
                    Live 24/7 Support Network
                  </div>
                </div>
                <h2 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', fontSize: '3.5rem', lineHeight: 1 }}>The WhatsApp Core</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                  YHDN didn't start in a boardroom—it started in a WhatsApp group where Haitian doctors traded survival strategies. Today, it remains our most protected asset.
                </p>
                <p style={{ color: 'var(--color-gold)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1.1rem', fontWeight: 600 }}>
                  Jump into our private, 24/7 channel. When standard advising fails and premed forums turn toxic, this is where you get the unredacted truth from residents who have navigated the exact same crisis.
                </p>
                <a href="https://chat.whatsapp.com/" target="_blank" rel="noopener" className="btn btn-lg" style={{ background: 'var(--color-haiti-red)', color: 'white', border: 'none', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 800, padding: '1rem 2rem', textDecoration: 'none', display: 'inline-block' }}>
                  Request Group Access  →
                </a>
              </div>
            </Reveal>
            <Reveal direction="right" delay={2}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: -10, right: 20, background: 'var(--color-gold)', color: 'var(--color-navy)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', padding: '0.2rem 0.5rem', textTransform: 'uppercase' }}>
                  Live Ping
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>// Encrypted Comms</div>
                
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderLeft: '3px solid var(--color-gold)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--color-gold)', fontSize: '0.8rem', fontWeight: 700 }}>Anonymous_MS2</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>2:14 AM</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', margin: 0, lineHeight: 1.4 }}>I just failed my first NBME. 185. My advisor told me to consider a different career. I'm shaking.</p>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderLeft: '3px solid var(--color-haiti-red)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--color-haiti-red)', fontSize: '0.8rem', fontWeight: 700 }}>Anesthesia_PGY3</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>2:17 AM</span>
                  </div>
                  <p style={{ color: 'white', fontSize: '0.9rem', margin: 0, lineHeight: 1.4, fontWeight: 500 }}>Ignore them immediately. I got a 183 on my first practice and matched Harvard. DM me right now, we are fixing your study schedule tonight.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: DIRECTORY PREVIEW ===== */}
      <section className="section-padding-generous gradient-navy">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ color: 'white', marginBottom: '1rem', fontFamily: 'var(--font-display)', fontSize: '3rem' }}>Haitian Doctors Around the World</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto 3rem', fontSize: '1.1rem', letterSpacing: '0.01em' }}>
              Explore our growing network of physicians, residents, and medical students across specialties and cities.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              {['Cardiology', 'Psychiatry', 'Pediatrics', 'Internal Medicine', 'Surgery', 'Emergency Medicine'].map(s => (
                <span key={s} style={{ padding: '0.6rem 1.25rem', background: 'transparent', color: 'white', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', border: '1px solid rgba(255,255,255,0.2)' }}>{s}</span>
              ))}
            </div>
            <Link to="/directory" className="btn btn-editorial btn-lg">Browse the Directory →</Link>
          </Reveal>
        </div>
      </section>

      {/* ===== SECTION 6: EVENTS ===== */}
      <section className="section-padding" style={{ background: 'var(--color-ivory)', borderBottom: '1px solid var(--color-navy)' }}>
        <div className="container-narrow">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--color-navy)', paddingBottom: '1.5rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem' }}>Upcoming Events</h2>
                <p style={{ color: 'var(--color-slate)', marginTop: '0.5rem', fontSize: '1.1rem' }}>Connect, learn, and grow with your community.</p>
              </div>
              <Link to="/events" className="btn btn-secondary">View All Events →</Link>
            </div>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {events.map((event, i) => (
              <Reveal key={event.id} delay={(i + 1) as 1 | 2 | 3} direction="up">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '2rem', padding: '2rem 0', borderBottom: '1px solid rgba(10, 22, 40, 0.1)', alignItems: 'center' }}>
                  <div style={{ color: 'var(--color-navy)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {event.event_date ? new Date(event.event_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'TBA'}
                  </div>
                  <div>
                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.4rem', fontFamily: 'var(--font-display)' }}>{event.title}</h3>
                    <p style={{ color: 'var(--color-slate)', fontSize: '0.95rem', lineHeight: 1.6 }}>{event.description?.slice(0, 100)}…</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ display: 'inline-block', padding: '0.35rem 1rem', border: '1px solid var(--color-navy)', color: 'var(--color-navy)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
                      {event.status}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: TESTIMONIALS (EDITORIAL) ===== */}
      <section className="section-padding-generous" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow">
          <Reveal>
            <div style={{ marginBottom: '4rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-navy)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '2.5rem' }}>Hear from Our Members</h2>
              <p style={{ color: 'var(--color-slate)', maxWidth: 500, marginTop: '0.75rem', fontSize: '1.1rem' }}>Discover how YHDN has impacted the lives and careers of its members.</p>
            </div>
          </Reveal>

          {/* Oversized pull-quote (first testimonial) */}
          {testimonials[0] && (
            <Reveal direction="left">
              <div style={{ marginBottom: '4rem', paddingLeft: '3rem', borderLeft: '2px solid var(--color-gold)' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontStyle: 'italic', color: 'var(--color-navy)', lineHeight: 1.4, marginBottom: '2rem', fontWeight: 400 }}>
                  "{testimonials[0].quote.slice(0, 220)}…"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: 44, height: 44, background: 'var(--color-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>
                    {testimonials[0].name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{testimonials[0].name}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-slate)' }}>{testimonials[0].role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* Remaining cards - Editorial List */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {testimonials.slice(1, 3).map((t, i) => (
              <Reveal key={t.id} delay={(i + 1) as 1 | 2} direction="up">
                <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(10,22,40,0.1)' }}>
                  <div style={{ fontSize: '3rem', color: 'var(--color-gold)', fontFamily: 'var(--font-display)', lineHeight: 0.5, marginBottom: '1rem' }}>"</div>
                  <p style={{ color: 'var(--color-charcoal)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                    {t.quote.slice(0, 200)}…
                  </p>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.name}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-slate)' }}>{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: SPONSORS + DONATE ===== */}
      <section className="section-padding gradient-navy">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Support the Mission</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 550, margin: '0 auto 2.5rem' }}>
              Your generous support helps us provide scholarships, mentorship, and community outreach programs.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              {sponsors.map(s => (
                <a key={s.id} href={s.website_url} target="_blank" rel="noopener"
                  style={{ padding: '1rem 2rem', background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-lg)', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {s.name}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={3}>
            <a href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-6887"
              target="_blank" rel="noopener" className="btn btn-editorial btn-lg">
              Help Us Make an Impact
            </a>
          </Reveal>
        </div>
      </section>

      {/* ===== SECTION 9: CTA ===== */}
      <section style={{ background: 'var(--color-ivory)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container-narrow">
          <Reveal direction="scale">
            {/* Mini flag as framing device */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <img src="/haitian-flag.png" alt="Haitian Flag" style={{ maxWidth: 80, opacity: 0.8, borderRadius: 4 }} />
            </div>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Join the Network?</h2>
            <p style={{ color: 'var(--color-slate)', maxWidth: 500, margin: '0 auto 0.5rem', fontSize: '1.05rem' }}>
              Become part of a vibrant community shaping the future of healthcare for Haitian and Black communities.
            </p>
            <p style={{ color: 'var(--color-gold)', fontFamily: 'Georgia, serif', fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '2rem' }}>
              L'Union Fait La Force — Unity Makes Strength
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/join" className="btn btn-primary btn-lg">Become a Member</Link>
              <a href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-6887"
                target="_blank" rel="noopener" className="btn btn-secondary btn-lg">
                Donate Today
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
