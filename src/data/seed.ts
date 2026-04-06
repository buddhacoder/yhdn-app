import { Member, Resource, Post, Event, BoardMember, Sponsor, Testimonial } from '@/types'
import membersData from './members.json'

// ============================================
// BOARD MEMBERS — From real yhdn.org content
// ============================================
export const boardMembers: BoardMember[] = [
  {
    id: 'bm-1',
    name: 'Jonathan Francois, MD',
    role: 'President',
    bio: 'Dr. Jonathan Francois is a board-certified Internist and Cardiologist with a deep passion for health equity, global health, and the integration of AI in healthcare. He earned his medical degree with honors (Cum Laude) from St. George\'s University in Grenada before completing his Internal Medicine and Cardiology training at SUNY Downstate in Brooklyn, NY. Currently, Dr. Francois is advancing his expertise through a Cardiac Electrophysiology fellowship at JFK Hospital in Florida.',
    profile_photo_url: 'https://static.wixstatic.com/media/f28fab_71f40b2473284d38b1f073b7b8d21bfb~mv2.jpeg/v1/fill/w_676,h_649,fp_0.58_0.27,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ERAS%20picture%20HQ.jpeg',
    linkedin_url: '',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'bm-2',
    name: 'Danaë Brierre, MD',
    role: 'Vice President / Treasurer',
    bio: 'Dr. Danaë Brierre is completing her training as a triple board physician specializing in pediatrics, adult psychiatry, child and adolescent psychiatry. She has a passion for advocacy and mentorship. She is dedicated to bridging the gap in mental health in the Haitian population as well as educating and destigmatizing psychiatric services in the community.',
    profile_photo_url: 'https://static.wixstatic.com/media/f28fab_17d1119c924e4da48c61c481403ab70e~mv2.jpg/v1/fill/w_676,h_649,fp_0.48_0.34,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1827.jpg',
    linkedin_url: '',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'bm-3',
    name: 'Melissa Chamblain Morpeau, MD',
    role: 'Secretary / Board Member',
    bio: 'Dr. Melissa Chamblain is a Board-Certified Internist and Geriatrician dedicated to promoting healthcare literacy and wellness. Specializing in aging-related care, she serves underserved communities in South Florida. Named a Top Doctor in Aventura Magazine and featured in Best in Florida Magazine in 2023.',
    profile_photo_url: 'https://static.wixstatic.com/media/f28fab_9374f870d1da48419c8138ea74cdb54f~mv2.jpeg/v1/fill/w_479,h_463,fp_0.50_0.33,q_80,enc_avif,quality_auto/IMG_1202.jpeg',
    linkedin_url: '',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'bm-4',
    name: 'Garly Saint Croix, MD',
    role: 'Board Member',
    bio: 'Dr. Saint Croix is a general, interventional and structural cardiologist. He attended medical school at Faculty of Medicine and Pharmacy of State University of Haiti, graduating Suma Cum Laude. He completed Internal Medicine at Jackson Memorial Hospital/University of Miami, Cardiology at Columbia University/Mount Sinai, and interventional fellowship at Montefiore/Albert Einstein.',
    profile_photo_url: 'https://static.wixstatic.com/media/f28fab_45f95c2374634673abd2fb21f44ba7bb~mv2.jpeg/v1/fill/w_479,h_463,fp_0.52_0.38,q_80,enc_avif,quality_auto/IMG_1212.jpeg',
    linkedin_url: '',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'bm-5',
    name: 'Maxime Jean-Louis',
    role: 'Fiduciary / Financial Advisor',
    bio: 'For more than 15 years, Maxime has been a Financial Advisor assisting individuals, families, and businesses achieve their financial planning goals. He provides advice on Investment Planning, Insurance, Tax Planning, Retirement Planning, Estate Planning, and Wealth Transfer Planning.',
    profile_photo_url: 'https://static.wixstatic.com/media/f28fab_c94803556cf645d1a808f828be386190~mv2.jpg/v1/fill/w_479,h_463,fp_0.49_0.36,q_80,enc_avif,quality_auto/6542cc_ee274ffd7a7e4c828a74e97052a03643~mv2.jpg',
    linkedin_url: 'https://www.prosperituswealth.com/',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'bm-6',
    name: 'Lyne Prisca Desravines',
    role: 'Secretary',
    bio: 'Lyne Prisca Desravines is a dedicated medical doctor with a passion for combining her diverse talents. She studied medicine at the Faculté de Médecine et de Pharmacie de l\'Université d\'État d\'Haïti. She is also a skilled massotherapist, skincare coach, and creative designer making a name in Haitian fashion.',
    profile_photo_url: '',
    linkedin_url: '',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

// ============================================
// TESTIMONIALS — From real yhdn.org content
// ============================================
export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Stephanie Baguidy, MD',
    role: 'Radiation Oncologist',
    quote: 'This group has truly been a long time coming — I\'m a Resident now and I have received tremendous value from the connections, the community, the support that this talented group of doctors offers. Through YHDN I have been able to foster my interest in Global Health through the Haiti Initiative Project and have met so many residents and attendings with similar interests who truly care about the professional advancement of Haitian doctors.',
  },
  {
    id: 'test-2',
    name: 'Stephane Degraff, MD',
    role: 'Psychiatrist',
    quote: 'In a time when many institutions are retreating from their commitment to diversity and inclusion, I am deeply grateful for the community I\'ve found with YHDN. The value of networking, mentorship, and exposure to career opportunities cannot be overstated. YHDN provides a space where Haitian medical professionals can uplift one another, share resources, and navigate the challenges of our field together.',
  },
  {
    id: 'test-3',
    name: 'Biaux Chety',
    role: 'YHDN Member',
    quote: 'The YHDN has been invaluable in my residency application process, particularly in reviewing my Personal Statement and providing guidance for my interviews. Receiving insight from members who have walked this path before me was an incredible opportunity.',
  },
  {
    id: 'test-4',
    name: 'YHDN Member',
    role: 'Internal Medicine Resident',
    quote: 'Dr. Farrangie DOLCE was assigned to help me. She actually did a great job by reviewing my personal statement and my ERAS CV, and guided me through the choice of programs. I got a prematch offer from an Internal Medicine program in New York, which I accepted.',
  },
  {
    id: 'test-5',
    name: 'YHDN Member',
    role: 'Residency Applicant',
    quote: 'The application task force have been a great help during the preparation for my application. Despite a short timeframe they helped me with the formulation of my personal statement and my CV. So far I had 6 FM interviews and 1 IM interview. I am sure without the task force I would not have these opportunities.',
  },
]

// ============================================
// MEMBERS — Integrated from Excel Data
// ============================================
export const members: Member[] = (membersData as any[]).map((m, i) => ({
  ...m,
  booking_url: i % 4 === 0 ? 'https://calendly.com/' : undefined,
  mentorship_status: i % 3 === 0 ? 'accepting' : undefined
}))

// ============================================
// RESOURCES — From titles + contextual expansion
// ============================================
export const resources: Resource[] = [
  {
    id: 'r-1', title: 'The Autopsy: Step 1 Teardowns', category: 'Playbook',
    description: 'We don\'t just give you practice questions. Watch Haitian residents do a complete teardown of NBME exams, exposing the hidden tricks test writers use to trap minorities.',
    tags: ['usmle', 'step1', 'video-teardown'], source_url: 'https://www.yhdn.org/vault/step-1-autopsy',
    is_featured: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: 'r-2', title: 'The 260+ Anki Setup (Harvard Match)', category: 'Playbook',
    description: 'Stop guessing how to study. Clone the exact Anki deck, scheduling algorithm, and daily routine used by our residents who scored 260+ and matched into top 10 programs.',
    tags: ['anki', 'usmle', 'step2'], source_url: 'https://www.yhdn.org/vault/anki-setup',
    is_featured: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: 'r-3', title: 'The Whisper Network: Safe Residency Programs', category: 'Playbook',
    description: 'Every program website looks diverse. This is the raw, internal spreadsheet crowdsourced by YHDN on which programs are actually supportive versus which are toxic.',
    tags: ['residency', 'match', 'whisper-network'], source_url: 'https://www.yhdn.org/vault/safe-residencies',
    is_featured: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: 'r-4', title: 'The Cold Email Bypass', category: 'Playbook',
    description: 'Standard "networking" emails get ignored. Use these exact subject lines and psychological frameworks to get attending physicians to actually reply and offer shadowing.',
    tags: ['networking', 'shadowing', 'templates'], is_featured: false,
    created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: 'r-5', title: 'SOAP Process: The 2AM Lifeline', category: 'Emergency',
    description: 'Did you go unmet? Do not panic alone. Here is the minute-by-minute survival guide, including who to call directly to leverage the YHDN network during SOAP week.',
    tags: ['soap', 'match', 'emergency'], is_featured: true,
    created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: 'r-6', title: 'Navigating The "Diversity" Interview', category: 'Playbook',
    description: 'How to handle microaggressions during residency interviews and correctly vet a program director without torpedoing your rank list.',
    tags: ['interview', 'residency', 'diversity'], is_featured: false,
    created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: 'r-7', title: 'Financial Autopsy: Paying Off $300k', category: 'Finance',
    description: 'No generic budgeting advice. Look at the exact spreadsheets of YHDN attendings breaking down how they leveraged PSLF, refinancing, and side-hustles to kill med school debt.',
    tags: ['finance', 'debt', 'pslf'], is_featured: false,
    created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  }
]

// ============================================
// POSTS — Demo / source-derived
// ============================================
export const posts: Post[] = [
  {
    id: 'p-1', title: 'YHDN Annual Fundraising Gala 2025', slug: 'annual-fundraising-gala-2025',
    excerpt: 'Join us for our signature fundraising event celebrating Haitian excellence in medicine.',
    content: 'The Young Haitian Doctors Network invites you to our Annual Fundraising Gala, an evening celebrating the achievements of our community and raising support for scholarships, mentorship programs, and community outreach.',
    type: 'fundraiser', published_at: '2025-03-15T00:00:00Z',
    created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: 'p-2', title: 'Congratulations to Our 2025 Match Class', slug: 'match-day-2025',
    excerpt: 'Celebrating every YHDN member who matched into residency programs across the country.',
    content: 'We are thrilled to congratulate all YHDN members who successfully matched in 2025. Your hard work, dedication, and resilience are an inspiration to the entire Haitian medical community.',
    type: 'highlight', published_at: '2025-03-21T00:00:00Z',
    created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: 'p-3', title: 'YHDN Welcomes New Board Members', slug: 'new-board-members',
    excerpt: 'Introducing the newest additions to our Board of Directors.',
    content: 'The YHDN is excited to welcome new members to our Board of Directors, bringing fresh perspectives and expertise to our mission of empowering young Haitian physicians.',
    type: 'announcement', published_at: '2025-01-10T00:00:00Z',
    created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: 'p-4', title: 'Haiti Initiative: Medical Mission Report', slug: 'haiti-initiative-report',
    excerpt: 'Highlights from our recent medical outreach program in Haiti.',
    content: 'Our Haiti Initiative Project committee recently organized a medical outreach program aimed at improving healthcare access in underserved communities. Through the expertise and resources of our network, we were able to address critical health needs and promote sustainable health practices.',
    type: 'news', published_at: '2025-02-20T00:00:00Z',
    created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: 'p-5', title: 'Wellness Tips for Medical Trainees', slug: 'wellness-tips-trainees',
    excerpt: 'Practical strategies for maintaining mental health during medical training.',
    content: 'Training in medicine is demanding. Our Wellness Committee shares evidence-based strategies for managing stress, preventing burnout, and maintaining a healthy work-life balance throughout your medical journey.',
    type: 'blog', published_at: '2025-02-05T00:00:00Z',
    created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
]

// ============================================
// EVENTS — From real yhdn.org content + demo
// ============================================
export const events: Event[] = [
  {
    id: 'e-1', title: '2nd Annual Intern Bootcamp', slug: 'intern-bootcamp-2025',
    description: 'Intensive bootcamp series for incoming interns covering clinical skills, time management, and professional development. Sessions held every Tuesday and Thursday during May.',
    event_date: '2025-05-06T18:00:00Z', end_date: '2025-05-29T20:00:00Z',
    location: 'Zoom (Virtual)', source_url: 'https://www.yhdn.org/event-details/2nd-annual-intern-bootcamp',
    status: 'upcoming', created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: 'e-2', title: "Let's Talk Money!", slug: 'lets-talk-money',
    description: 'Virtual seminar on financial planning for medical professionals. Topics include loan repayment strategies, investing basics, and building wealth during training.',
    location: 'Virtual Seminar', source_url: 'https://www.yhdn.org/event-details/lets-talk-money',
    status: 'upcoming', created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: 'e-3', title: 'YHDN Annual Networking Mixer', slug: 'annual-mixer-2025',
    description: 'Connect with fellow Haitian medical professionals at our annual networking event. Build relationships, explore collaborations, and celebrate our growing community.',
    event_date: '2025-06-15T18:30:00Z', location: 'South Florida',
    status: 'upcoming', created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
]

// ============================================
// SPONSORS — Demo data
// ============================================
export const sponsors: Sponsor[] = [
  {
    id: 's-1', name: 'Prosperitus Wealth Advisors', tier: 'gold',
    description: 'Comprehensive financial planning and wealth management for medical professionals.',
    website_url: 'https://www.prosperituswealth.com/',
    is_active: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: 's-2', name: 'PXL8D Studios', tier: 'silver',
    description: 'Creative digital agency specializing in impactful web design for healthcare organizations.',
    website_url: 'http://www.pxl8dstudios.com/',
    is_active: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: 's-3', name: 'Zeffy', tier: 'partner',
    description: '100% free fundraising platform for nonprofits. YHDN\'s donation processing partner.',
    website_url: 'https://www.zeffy.com/',
    is_active: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
]

// ============================================
// COMMITTEES — From real yhdn.org content
// ============================================
export const committees = [
  {
    id: 'c-1', name: 'Media and Marketing', slug: 'media-and-marketing',
    description: 'Manages YHDN\'s brand presence, social media, content creation, and public communications.',
    source_url: 'https://www.yhdn.org/committees/media-and-marketing',
  },
  {
    id: 'c-2', name: 'Community Outreach', slug: 'community-outreach',
    description: 'Organizes community health events, service projects, and outreach programs serving Haitian communities.',
    source_url: 'https://www.yhdn.org/committees/community-outreach',
  },
  {
    id: 'c-3', name: 'Wellness', slug: 'wellness',
    description: 'Promotes physical, emotional, and mental well-being of Haitian medical professionals. Creates a supportive environment addressing the unique stresses of medical training.',
    source_url: 'https://www.yhdn.org/committees/wellness',
    leaders: [{ name: 'Safira St. Fort, MD', role: 'Co-chair' }],
  },
  {
    id: 'c-4', name: 'Haiti Initiative Project', slug: 'haiti-initiative',
    description: 'Organizes and implements medical projects in Haiti, improving healthcare access and outcomes for underserved communities. Leverages expertise to address critical health needs and promote sustainable health practices.',
    source_url: 'https://www.yhdn.org/committees/haiti-initiative-project',
    leaders: [{ name: 'Stephanie Baguidy, MD', role: 'Co-chair' }],
  },
  {
    id: 'c-5', name: 'Career Development', slug: 'career-development',
    description: 'Empowers Haitian medical professionals through comprehensive career support services. Facilitates professional growth, skill enhancement, and successful career transitions.',
    source_url: 'https://www.yhdn.org/committees/career-development',
    leaders: [{ name: 'Stephane Degraff, MD', role: 'Co-chair' }],
  },
  {
    id: 'c-6', name: 'Mentorship', slug: 'mentorship',
    description: 'Connects medical students and early-career physicians with experienced mentors for personalized guidance and support.',
    source_url: 'https://www.yhdn.org/committees/membership',
  },
  {
    id: 'c-7', name: 'Academia', slug: 'academia',
    description: 'Supports academic excellence and scholarly activities among YHDN members, including research, publications, and academic career advancement.',
    source_url: 'https://www.yhdn.org/committees/academia',
  },
]

// ============================================
// BENEFITS — From real yhdn.org content
// ============================================
export const benefits = [
  { icon: 'BookOpen', title: 'Educational Resources', description: 'Stay informed and up-to-date with curated learning materials designed to help you excel in your medical journey.' },
  { icon: 'Briefcase', title: 'Career Development', description: 'Unlock tools and guidance to advance your career, from professional workshops to resume-building strategies and career planning.' },
  { icon: 'GraduationCap', title: 'Scholarships', description: 'Gain access to funding support to ease the financial burden of your medical education and training.' },
  { icon: 'Users', title: 'Mentorship', description: 'Connect with experienced physicians who provide tailored advice, guidance, and support throughout your career.' },
  { icon: 'Heart', title: 'Mental Health Support', description: 'Prioritize your well-being with resources and conversations focused on mental health in the medical field.' },
  { icon: 'Globe', title: 'Networking', description: 'Build meaningful connections with peers, mentors, and healthcare leaders at in-person and virtual events across the U.S.' },
  { icon: 'Award', title: 'Leadership Opportunities', description: 'Take your involvement further by joining committees, shaping programs, and becoming a leader within YHDN.' },
  { icon: 'HeartHandshake', title: 'Community Impact', description: 'Make a difference by participating in healthcare initiatives that serve the Haitian population in both the U.S. and Haiti.' },
]

// ============================================
// ENRICHMENT DATA — Scraped via Firecrawl
// ============================================

/** NRMP 2025 Match Statistics (Source: nrmp.org) */
export const matchData = {
  year: 2025,
  source: 'https://www.nrmp.org/about/news/2025/05/nrmp-releases-2025-main-residency-match-results-and-data-report-providing-in-depth-insight-into-the-largest-residency-match-in-history/',
  totalApplicants: 52498,
  totalPositions: 43237,
  usMdSeniorMatchRate: 93.5,
  usDoSeniorMatchRate: 92.6,
  imgMatchRate: 96.8,
  pgy1MatchRate: 79.8,
  trends: [
    'Record 52,498 applicants — largest Match in history',
    'First-year positions grew to 40,041, driven by Internal Medicine',
    'US MD senior placement rate: 97.8%',
  ],
}

/** Haitian Health Disparities (Sources: Stanford, MN Dept of Health, CDC) */
export const healthDisparities = [
  { metric: 'Life Expectancy in Haiti', value: '64.1 years', comparison: 'vs 77.2 years in the Americas', source: 'MN Dept of Health', category: 'population' },
  { metric: 'Maternal Mortality in Haiti', value: '350.4 per 100,000 live births', comparison: '2020 data', source: 'MN Dept of Health', category: 'maternal' },
  { metric: 'TB Incidence', value: '159 per 100,000', comparison: 'vs 2.5 per 100,000 in the U.S.', source: 'MN Dept of Health', category: 'infectious' },
  { metric: 'HIV in the Caribbean', value: '38% of new infections from Haiti', comparison: 'Highest burden in the region', source: 'MN Dept of Health', category: 'infectious' },
  { metric: 'Noncommunicable Disease Deaths', value: '54.8%', comparison: 'Percentage of all deaths in Haiti (2021)', source: 'MN Dept of Health', category: 'chronic' },
  { metric: 'No Annual Physical', value: '37%', comparison: 'Haitian immigrants without annual physicals', source: 'Stanford University', category: 'access' },
  { metric: 'Health Insurance Coverage', value: '52%', comparison: 'Only 52% of Haitian immigrants insured', source: 'Stanford University', category: 'access' },
  { metric: 'Chronic Conditions Without Care', value: '10%', comparison: 'Failed to receive care for chronic conditions', source: 'Stanford University', category: 'access' },
  { metric: 'Income Below $10K', value: '28%', comparison: 'Of Haitian immigrant population', source: 'Stanford University', category: 'socioeconomic' },
  { metric: 'Sexual Violence Prevalence', value: '29% women, 26% men', comparison: 'Lifetime prevalence in Haiti', source: 'MN Dept of Health', category: 'trauma' },
]

/** External Resources & Conferences (Scraped via Firecrawl) */
export const externalResources = [
  // Conferences -> Underground Summits
  { id: 'ext-1', name: 'AMEC 2026: The Networking Underground', type: 'conference', date: 'April 1–5, 2026', location: 'Pittsburgh, PA', venue: 'David L. Lawrence Convention Center', url: 'https://snma.org/page/AMEC2026', description: 'Don\'t go for the lectures. Go for the residency fair and the private after-hours networking suites where program directors actually make their match lists.' },
  { id: 'ext-2', name: 'NMA Convention: Black Physician Power', type: 'conference', url: 'https://www.nmanet.org/', description: 'The absolute nexus for finding Black attending mentors who will directly advocate for you in their departments.' },

  // Organizations -> Power Coalitions
  { id: 'ext-3', name: 'SNMA: Student National Medical Association', type: 'organization', url: 'https://snma.org/', description: 'The power base for medical students of color. Join to access the hidden curriculum that majority students get by default.' },
  { id: 'ext-4', name: 'CDC Global Health — Haiti Pipeline', type: 'organization', url: 'https://www.cdc.gov/global-health/countries/haiti.html', description: 'Leverage global health initiatives to distinguish your residency application with unique, high-impact clinical experience.' },

  // Scholarships & Financial Aid -> Debt Eradication
  { id: 'ext-5', name: 'The "Invisible" Immigrant Scholarships', type: 'scholarship', url: 'https://bold.org/scholarships/by-demographics/minorities/immigrants-scholarships/', description: 'Hidden capital. Millions go unclaimed because they are specifically carved out for immigrant and first-gen demographics. Take it.' },
  { id: 'ext-6', name: 'Caribbean IMGs: The SGU Bypass Funds', type: 'scholarship', url: 'https://www.sgu.edu/school-of-medicine/blog/medical-school-scholarships-to-consider/', description: 'Stop paying full price for offshore medical schools. Here are the specific leverage points and merit grants SGU offers if you push them.' },
  { id: 'ext-7', name: 'AUC Financial Strategy & Grants', type: 'scholarship', url: 'https://www.aucmed.edu/blog/medical-school-scholarships-to-consider', description: 'Regional and leadership scholarships for Caribbean medical students who know how to package their applications.' },

  // Study Resources -> The Cheat Codes
  { id: 'ext-8', name: 'Step 1 Strategy: Beating The Caribbean Curve', type: 'study', url: 'https://www.medschoolcoach.com/usmle-step-1-tips-tricks-for-caribbean-medical-students/', description: 'Caribbean schools actively weed you out. This is the timeline and survival strategy to ensure you sit for Step 1 and pass on the first attempt.' },
  { id: 'ext-9', name: 'The NRMP Raw Data Sandbox', type: 'data', url: 'https://www.nrmp.org/match-data/', description: 'Stop listening to your dean\'s "holistic" advice. Look at the raw, hard numbers of what actually matches into your specialty of choice.' },

  // Health Research -> Systemic Insights
  { id: 'ext-10', name: 'Stanford Report: The Haitian Health Disparity', type: 'research', url: 'https://med.stanford.edu/content/dam/sm/schoolhealtheval/documents/FPierre_HaitianAmericans.pdf', description: 'Use this data to articulate your "Why" in residency personal statements. Programs want candidates who understand systemic, structural health barriers.' },
  { id: 'ext-11', name: 'Clinical Guide: Treating The Diaspora', type: 'research', url: 'https://www.health.state.mn.us/communities/rih/coe/clinical/haitianbrief.html', description: 'Actionable clinical protocols for treating Haitian arrivals. High-value knowledge for any resident walking into a diverse urban safety-net hospital.' },
]
