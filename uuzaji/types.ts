
export enum PageRoute {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  AI_STRATEGY = 'ai-strategy',
  CONTACT = 'contact',
  BUSINESS_CARD = 'business-card'
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}
