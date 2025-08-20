import Sidebar from '@/components/sidebar'
import { useLanguageStore } from '@/hooks/useLanguageStore'
import { useNavigationStore } from '@/hooks/useNavigationStore'
import { LANGUAGE_CODES, LANGUAGES } from '@/lib/constants'
import { MenuIcon } from 'lucide-react'
import type React from 'react'
import { Outlet } from 'react-router'

const RootLayout: React.FC = () => {
  const { toggle } = useNavigationStore()
  const { lang, change } = useLanguageStore()

  return (
    <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] grid-rows-[auto_1fr] h-screen w-screen">
      <Sidebar />
      <header className="p-4 flex items-center justify-between">
        <div className="flex-1">
          <button
            aria-label="toggle sidebar"
            className="btn btn-ghost btn-square max-md:flex hidden"
            onClick={() => toggle()}
          >
            <MenuIcon className="size-[1em]" />
          </button>
        </div>
        <details className="dropdown dropdown-end">
          <summary className="btn m-1 uppercase">{lang}</summary>
          <div className="menu dropdown-content shadow-2xl bg-base-100 rounded-box z-1 w-52 p-2 card card-sm space-y-1.5">
            {LANGUAGE_CODES.map((code) => (
              <button
                key={code}
                className="btn btn-ghost btn-secondary btn-sm justify-start"
                onClick={() => change(code)}
              >
                {LANGUAGES[code]}
              </button>
            ))}
          </div>
        </details>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
