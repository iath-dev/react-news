import { create } from 'zustand'

interface NavigationState {
  isOpen: boolean
  toggle: () => void
}

export const useNavigationStore = create<NavigationState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))
