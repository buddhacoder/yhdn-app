import { Link } from 'react-router-dom'
import { BookOpen, ListChecks, Users, ChevronDown, ChevronUp, BarChart3 } from 'lucide-react'
import { useState } from 'react'
import { matchData } from '@/data/seed'
import { useInView, useCountUp } from '@/hooks/useScrollAnimation'

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

export default function Pipeline() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0)

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

      <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-narrow" style={{ maxWidth: 850 }}>
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
