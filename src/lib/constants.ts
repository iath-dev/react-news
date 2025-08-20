import type { NavItem } from '@/interfaces/nav'
import {
  Briefcase,
  Shield,
  Home,
  BookOpen,
  Film,
  Globe,
  Coffee,
  Heart,
  Smile,
  TrendingUp,
  Atom,
  Volleyball,
  Cpu,
  Star,
  MapPin,
  Globe2,
  Hash,
} from 'lucide-react'

export const CATEGORIES = [
  'business',
  'crime',
  'domestic',
  'education',
  'entertainment',
  'environment',
  'food',
  'health',
  'lifestyle',
  'politics',
  'science',
  'sports',
  'technology',
  'top',
  'tourism',
  'world',
  'other',
] as const

export type Category = (typeof CATEGORIES)[number]

export const NAV_ITEMS: NavItem[] = [
  { category: 'business', icon: Briefcase },
  { category: 'crime', icon: Shield },
  { category: 'domestic', icon: Home },
  { category: 'education', icon: BookOpen },
  { category: 'entertainment', icon: Film },
  { category: 'environment', icon: Globe },
  { category: 'food', icon: Coffee },
  { category: 'health', icon: Heart },
  { category: 'lifestyle', icon: Smile },
  { category: 'politics', icon: TrendingUp },
  { category: 'science', icon: Atom },
  { category: 'sports', icon: Volleyball },
  { category: 'technology', icon: Cpu },
  { category: 'top', icon: Star },
  { category: 'tourism', icon: MapPin },
  { category: 'world', icon: Globe2 },
  { category: 'other', icon: Hash },
]

export const LANGUAGE_CODES = ['en', 'fr', 'jp', 'es'] as const

export type LanguageCode = (typeof LANGUAGE_CODES)[number]

export const LANGUAGES: Record<LanguageCode, string> = {
  en: 'English',
  fr: 'French',
  jp: 'Japanese',
  es: 'Spanish',
}
