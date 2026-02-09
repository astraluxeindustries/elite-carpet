import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  image: string;
}

export interface ServiceArea {
  name: string;
}

export interface FeaturedWorkItem {
  id: number;
  image: string;
  title: string;
  description: string;
}
