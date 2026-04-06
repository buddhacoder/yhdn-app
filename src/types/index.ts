export interface Member {
  id: string
  name: string
  email?: string
  specialty: string
  location: string
  training_level: 'student' | 'resident' | 'fellow' | 'attending' | 'other'
  bio?: string
  linkedin_url?: string
  instagram_url?: string
  x_url?: string
  website_url?: string
  contact_preference?: string
  profile_photo_url?: string
  booking_url?: string
  mentorship_status?: 'accepting' | 'unavailable'
  is_featured: boolean
  created_at: string
  updated_at: string
}

export interface MentorRequest {
  id: string
  name: string
  email: string
  training_level?: string
  request_type?: string
  message?: string
  status: string
  created_at: string
  updated_at: string
}

export interface Resource {
  id: string
  title: string
  category: string
  description?: string
  file_url?: string
  external_url?: string
  tags: string[]
  source_url?: string
  is_featured: boolean
  created_at: string
  updated_at: string
}

export interface Post {
  id: string
  title: string
  slug: string
  excerpt?: string
  content?: string
  type: 'news' | 'fundraiser' | 'highlight' | 'blog' | 'announcement'
  cover_image_url?: string
  source_url?: string
  published_at: string
  created_at: string
  updated_at: string
}

export interface Event {
  id: string
  title: string
  slug: string
  description?: string
  event_date?: string
  end_date?: string
  location?: string
  external_url?: string
  source_url?: string
  status: 'upcoming' | 'past' | 'draft'
  cover_image_url?: string
  created_at: string
  updated_at: string
}

export interface IngestedPage {
  id: string
  url: string
  title?: string
  category?: string
  content_json: any
  raw_text?: string
  created_at: string
  updated_at: string
}

export interface EmailSubscriber {
  id: string
  email: string
  created_at: string
}

export interface BoardMember {
  id: string
  name: string
  role?: string
  bio?: string
  profile_photo_url?: string
  linkedin_url?: string
  created_at: string
  updated_at: string
}

export interface Sponsor {
  id: string
  name: string
  tier?: string
  description?: string
  website_url?: string
  logo_url?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  photo_url?: string
}

// Pipeline module type
export interface PipelineModule {
  id: string
  title: string
  stage: string
  description: string
  checklist: string[]
  resources: string[]
}
