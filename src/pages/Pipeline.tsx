import { Link } from 'react-router-dom'
import { BookOpen, ListChecks, Users, ChevronDown, ChevronUp, BarChart3, Share2, Plus, MessageSquare, X } from 'lucide-react'
import { useState } from 'react'
import { matchData } from '@/data/seed'
import { useInView, useCountUp } from '@/hooks/useScrollAnimation'

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useInView(0.1)
  return (
    <div ref={ref} className={`reveal ${isInView ? 'revealed' : ''} delay-${delay} ${className}`}>
      {children}
    </div>
  )
}
function MatchStat({ value, label, suffix = '%' }: { value: number; label: string; suffix?: string }) {
  const { ref, isInView } = useInView(0.3)
  const count = useCountUp(value, 1800, isInView)
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-gold)', lineHeight: 1 }}>
        {suffix === '+' ? count.toLocaleString() : count}{suffix}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginTop: '0.3rem' }}>{label}</div>
    </div>
  )
}

const modules = [
  { stage: 'Preclinical', title: 'Building Your Foundation', color: 'var(--color-haiti-blue)', desc: 'Strong academic foundation and early clinical exposure.',
    checklist: ['Master Step 1 high-yield concepts early', 'Join interest groups and start building your CV', 'Seek research opportunities', 'Begin shadowing in target specialties', 'Connect with YHDN mentors in your specialty of interest'],
    resources: ['USMLE Study Guide', 'YHDN Mentorship Program'] },
  { stage: 'USMLE', title: 'Conquering the Boards', color: 'var(--color-gold)', desc: 'Strategic study plans and proven exam strategies.',
    checklist: ['Create a study schedule 3–6 months in advance', 'Use UWorld, First Aid, Pathoma, and Sketchy strategically', 'Take practice exams and track progress', 'Form a study group with YHDN peers', 'Prioritize wellness — burnout is real'],
    resources: ['Tips for Studying for the USMLE'] },
  { stage: 'ERAS', title: 'Residency Application Mastery', color: 'var(--color-haiti-red)', desc: 'Personal statement, CV, and program selection tactics.',
    checklist: ['Research programs thoroughly before applying', 'Draft personal statement early — get multiple reviews', 'Optimize your ERAS CV with YHDN mentor guidance', 'Request letters of recommendation 3+ months ahead', 'Use a strategic, data-driven program list'],
    resources: ['Tips on Residency Application (ERAS)', 'Personal Statement Writing Guide'] },
  { stage: 'Interviews', title: 'Interview Excellence', color: 'var(--color-haiti-blue-light)', desc: 'Preparation, presentation, and confident storytelling.',
    checklist: ['Practice behavioral and specialty-specific questions', 'Prepare your "Tell me about yourself" response', 'Research each program before every interview', 'Have prepared questions that show genuine interest', 'Follow up with thank-you notes'],
    resources: ['Tips on Interviewing for Residency'] },
  { stage: 'Rank List', title: 'Making Your Decision', color: 'var(--color-gold)', desc: 'Ranking strategically, not emotionally.',
    checklist: ['Rank programs based on fit, not prestige alone', 'Consider location, culture, mentorship, moonlighting', 'Talk to current residents at programs', 'Trust your instinct — you know where you belong', 'Have a backup plan and stay connected to YHDN mentors'],
    resources: ['Mentorship Program Overview'] },
  { stage: 'SOAP', title: 'If You Don\'t Match', color: 'var(--color-haiti-red)', desc: 'The SOAP process is not the end. It\'s a redirection.',
    checklist: ['Stay calm — SOAP has real opportunities', 'Prepare your SOAP application documents immediately', 'Apply broadly and follow up aggressively', 'Lean on your YHDN community for support', 'Consider research years, prelim years, or reapplication'],
    resources: ['SOAP Process Navigator', "I Didn't Match Support Page"] },
]

const whisperPosts = [
  {
    id: 1,
    tag: 'URGENT',
    title: 'M1/M2: Mass Gen Summer Research Plug',
    author: 'PGY-2 Anesthesia',
    timestamp: 'Posted 2h ago',
    content: 'My PI at Mass Gen needs a data extraction assistant for the summer. It pays nothing but practically guarantees a co-author spot on a JAHA paper. I can fast-track your resume if you understand basic regressions. DM me directly.',
    action: 'DM for Intro'
  },
  {
    id: 2,
    tag: 'BEWARE',
    title: 'Away Rotation at [Redacted] Surgery',
    author: 'MS4',
    timestamp: 'Posted 5h ago',
    content: 'Just finished my sub-I. Multiple instances of outright racism from the PD. They will smile during interviews but the actual clinical culture is toxic. Do not burn your VSLO tokens here.',
    action: 'See Full Report'
  },
  {
    id: 3,
    tag: 'OPPORTUNITY',
    title: 'Unfilled PGY-1 Prelim spot - NYC',
    author: 'Chief Resident, IM',
    timestamp: 'Posted 1d ago',
    content: 'One of our prelims had to drop out due to visa issues. We are looking for an immediate fill outside the match. I have the program coordinator\'s direct cell. Need someone who can start July 1.',
    action: 'Get Coordinator Number'
  }
]

export default function Pipeline() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <section className="gradient-hero" style={{ padding: '8rem 0 4rem' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>Career <span style={{ color: 'var(--color-gold)' }}>Pipeline</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0.75rem auto 0', fontSize: '1.1rem' }}>
            Your guided path from medical school to residency and beyond. Built by Haitian doctors who\'ve walked this road.
          </p>
        </div>
      </section>

      {/* NRMP Match Stats Banner */}
      <section style={{ background: 'var(--color-navy)', borderTop: '3px solid', borderImage: 'linear-gradient(90deg, var(--color-haiti-blue) 0%, var(--color-haiti-blue) 50%, var(--color-haiti-red) 50%, var(--color-haiti-red) 100%) 1' }}>
        <div className="container-narrow" style={{ padding: '2.5rem 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <BarChart3 size={18} style={{ color: 'var(--color-gold)' }} />
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>NRMP {matchData.year} Match Data</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem' }}>
            <MatchStat value={matchData.totalApplicants} label="Total Applicants" suffix="+" />
            <MatchStat value={matchData.usMdSeniorMatchRate} label="US MD Match Rate" />
            <MatchStat value={matchData.usDoSeniorMatchRate} label="US DO Match Rate" />
            <MatchStat value={matchData.pgy1MatchRate} label="Overall PGY-1 Rate" />
            <MatchStat value={matchData.totalPositions} label="Positions Offered" suffix="+" />
          </div>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <a href={matchData.source} target="_blank" rel="noopener" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>Source: NRMP.org</a>
          </div>
        </div>
      </section>

      {/* Unlisted Openings */}
      <section className="section-padding" style={{ background: 'var(--color-charcoal)', position: 'relative' }}>
        <div className="container-narrow">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <div style={{ width: 12, height: 12, background: 'var(--color-haiti-red)', borderRadius: '50%' }}></div>
                <h2 style={{ color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Unlisted Openings</h2>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: 600 }}>
                Public job boards are where opportunities go to die. This is our live backchannel for warm intros, off-cycle spots, and systemic warnings.
              </p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn" 
              style={{ background: 'var(--color-gold)', color: 'var(--color-navy)', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}
            >
              <Plus size={18} /> Post an Opening
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {whisperPosts.map(post => (
              <div key={post.id} style={{ background: 'var(--color-navy)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderLeft: post.tag === 'BEWARE' ? '4px solid var(--color-haiti-red)' : '4px solid var(--color-gold)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', background: post.tag === 'BEWARE' ? 'var(--color-haiti-red)' : post.tag === 'URGENT' ? 'white' : 'var(--color-gold)', color: post.tag === 'URGENT' ? 'var(--color-charcoal)' : 'white', padding: '0.2rem 0.6rem', borderRadius: 2 }}>
                      {post.tag}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontFamily: 'monospace' }}>{post.timestamp}</span>
                  </div>
                  <span style={{ color: 'var(--color-gold)', fontSize: '0.8rem', fontWeight: 600 }}>{post.author}</span>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>{post.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{post.content}</p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href={`mailto:hello@yhdn.org?subject=Intro Request: ${post.title}`} className="btn btn-sm" style={{ background: 'white', color: 'var(--color-navy)', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, textDecoration: 'none' }}>
                    <MessageSquare size={16} /> Request Intro
                  </a>
                  <button 
                    onClick={() => {
                      const text = `*YHDN URGENT OPPORTUNITY*\n\n*${post.title}*\n_${post.author} - ${post.tag}_\n\n${post.content}\n\n*Action Required:* ${post.action}\n\nView details on the YHDN Pipeline.`;
                      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="btn btn-sm" 
                    style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <Share2 size={16} /> Forward to WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Opportunity Submission Modal */}
          {isModalOpen && (
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(10,22,40,0.85)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', animation: 'fadeIn 0.2s ease-out' }}>
              <div style={{ background: 'white', width: '100%', maxWidth: 500, padding: '2.5rem', position: 'relative', borderRadius: 4, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
                <button onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-slate)', padding: '0.5rem' }}>
                  <X size={20} />
                </button>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', fontSize: '1.6rem', marginBottom: '0.5rem' }}>Post an Opportunity</h3>
                <p style={{ color: 'var(--color-slate)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.5 }}>Bypass public boards. Share a resident opening, research plug, or systemic warning directly to the YHDN network.</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Opportunity Headline</label>
                    <input placeholder="e.g. Intern Spot Open at MGH" className="input" style={{ width: '100%' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Tag</label>
                      <select className="select" style={{ width: '100%' }}>
                        <option>OPPORTUNITY</option>
                        <option>URGENT</option>
                        <option>BEWARE</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Your Status</label>
                      <input placeholder="e.g. PGY-3 Anesthesia" className="input" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>The Unredacted Details</label>
                    <textarea placeholder="Provide the raw details, contact info, and clear next steps..." className="input" rows={4} style={{ width: '100%', resize: 'vertical' }}></textarea>
                  </div>
                  <button onClick={() => { setIsModalOpen(false); alert('Opportunity submitted to YHDN Admin for verification.') }} className="btn btn-lg" style={{ background: 'var(--color-haiti-red)', color: 'white', border: 'none', width: '100%', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                    Submit for Broadcast
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* The Legacy Pipeline */}
      <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow" style={{ maxWidth: 850 }}>
          <Reveal>
            <h2 style={{ marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Standard Operations Protocol</h2>
            <p style={{ color: 'var(--color-charcoal-light)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>The formal timeline you still need to follow, heavily optimized by YHDN attendings.</p>
          </Reveal>
          {/* Progress bar */}
          <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '3rem' }}>
            {modules.map((m, i) => (
              <div key={i} style={{ flex: 1, height: 6, borderRadius: 3, background: m.color, opacity: expandedIdx !== null && i <= expandedIdx ? 1 : 0.2, transition: 'opacity 0.3s', cursor: 'pointer' }}
                onClick={() => setExpandedIdx(i)} />
            ))}
          </div>

          {modules.map((mod, i) => (
            <div key={i} className="card" style={{ marginBottom: '1rem', overflow: 'hidden' }}>
              <button onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)', background: mod.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-navy)' }}>{mod.title}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-slate)' }}>{mod.stage}</div>
                  </div>
                </div>
                {expandedIdx === i ? <ChevronUp size={20} style={{ color: 'var(--color-slate)' }} /> : <ChevronDown size={20} style={{ color: 'var(--color-slate)' }} />}
              </button>
              {expandedIdx === i && (
                <div style={{ padding: '0 1.5rem 1.5rem', animation: 'fadeIn 0.3s ease' }}>
                  <p style={{ color: 'var(--color-charcoal-light)', marginBottom: '1.25rem', lineHeight: 1.7 }}>{mod.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                        <ListChecks size={16} /> Action Checklist
                      </div>
                      {mod.checklist.map((item, j) => (
                        <div key={j} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.88rem', color: 'var(--color-charcoal)' }}>
                          <span style={{ color: mod.color, flexShrink: 0 }}>✓</span> {item}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                        <BookOpen size={16} /> Related Resources
                      </div>
                      {mod.resources.map((r, j) => (
                        <Link key={j} to="/resources" style={{ display: 'block', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-md)', background: 'var(--color-ivory)', marginBottom: '0.5rem', fontSize: '0.88rem', textDecoration: 'none', color: 'var(--color-haiti-blue)' }}>
                          {r} →
                        </Link>
                      ))}
                      <Link to="/mentor" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', fontWeight: 600, fontSize: '0.85rem', marginTop: '0.75rem', textDecoration: 'none' }}>
                        <Users size={14} /> Request a Mentor
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
