import type { LanguageCode } from '@/lib/constants'
import { create } from 'zustand'

interface LanguageState {
  lang: LanguageCode
  change: (code: LanguageCode) => void
}

export const useLanguageStore = create<LanguageState>((set) => ({
  lang: 'en',
  change: (code) => set({ lang: code }),
}))
