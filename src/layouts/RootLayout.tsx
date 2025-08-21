import Sidebar from '@/components/sidebar'
import { useNavigationStore } from '@/hooks/useNavigationStore'
import { MenuIcon } from 'lucide-react'
import type React from 'react'
import { Outlet } from 'react-router'

const RootLayout: React.FC = () => {
  const { toggle } = useNavigationStore()

  return (
    <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] grid-rows-[auto_1fr] h-screen w-screen">
      <Sidebar />
      <header className="p-4 flex items-center justify-between sticky top-0 bg-base-200 z-10">
        <button
          aria-label="toggle sidebar"
          className="btn btn-ghost btn-square max-md:flex hidden"
          onClick={() => toggle()}
        >
          <MenuIcon className="size-[1em]" />
        </button>
      </header>
      <main className="container mx-auto p-4 overflow-y-auto overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
