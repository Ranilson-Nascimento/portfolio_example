export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  category: ProjectCategory
  featured?: boolean
  status: 'completed' | 'in-progress' | 'planned'
  startDate: string
  endDate?: string
}

export type ProjectCategory = 
  | 'web-development'
  | 'mobile-development'
  | 'desktop-application'
  | 'api-backend'
  | 'data-science'
  | 'ui-ux-design'
  | 'other'

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  price?: {
    from: number
    currency: string
  }
}

export interface Experience {
  id: string
  company: string
  position: string
  description: string
  startDate: string
  endDate?: string
  technologies: string[]
  achievements?: string[]
  location?: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  description?: string
  achievements?: string[]
  location?: string
}

export interface Skill {
  name: string
  level: number // 1-5 or percentage
  category: SkillCategory
}

export type SkillCategory = 
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'mobile'
  | 'design'
  | 'other'

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  image?: string
  rating?: number
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}
