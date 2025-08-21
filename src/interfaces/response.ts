import type { LanguageCode } from '@/lib/constants'

export interface NewsResponse {
  status: string
  totalResults: number
  results: NewsItem[]
  nextPage?: string
}

export interface NewsItem {
  article_id: string
  title: string
  link: string
  keywords: string[] | null
  creator: string[] | null
  description: string
  pubDate: Date
  image_url: null | string
  video_url: null | string
  source_id: string
  source_name: string
  source_priority: number
  source_url: string
  source_icon: string
  language: LanguageCode
  country: string[]
  category: string[]
  duplicate: boolean
}
