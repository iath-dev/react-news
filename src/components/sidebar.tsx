import { NAV_ITEMS } from '@/lib/constants'
import { ArrowLeftToLine, Search } from 'lucide-react'
import logo from '@/assets/logo.svg'
import { useNavigationStore } from '@/hooks/useNavigationStore'
import { cn } from '@/lib/utils'

const Sidebar: React.FC = () => {
  const { isOpen, toggle } = useNavigationStore()

  return (
    <aside
      className={cn(
        'row-span-2 p-4 flex flex-col h-screen gap-4 border-r border-base-300 shadow-xl sticky top-0 max-md:absolute bg-base-100 w-[min(16rem,100%)] transition-transform duration-500',
        {
          'max-md:-translate-x-full': !isOpen,
          'left-0': isOpen,
        }
      )}
    >
      <div className="flex gap-3.5 items-center">
        <img src={logo} alt="logo" className="dark:invert size-[2em]" />
        <h1 className="text-xl flex-1">
          React <span className="text-accent">News</span>
        </h1>
        <button
          aria-label="collapse button"
          onClick={() => toggle()}
          className="btn btn-square btn-outline btn-sm btn-ghost md:hidden"
        >
          <ArrowLeftToLine
            className={cn('size-[1em] transition-transform duration-500', {
              'rotate-180': !isOpen,
            })}
          />
        </button>
      </div>
      <ul className="space-y-2">
        <li>
          <a
            href="/"
            className="btn btn-md btn-ghost hover:btn-soft hover:btn-primary w-full justify-start"
          >
            <Search className="size-[1em]" />
            <span className="first-letter:uppercase">Search</span>
          </a>
        </li>
        <li className="text-sm font-semibold text-base-content/75 my-2.5 ml-2">
          Categories
        </li>
        {NAV_ITEMS.map(({ category, icon: Icon }) => (
          <li key={category}>
            <a
              href={`/${category}`}
              className="btn btn-md btn-ghost hover:btn-soft hover:btn-primary w-full justify-start active:btn-primary"
            >
              <Icon className="size-[1em]" />
              <span className="first-letter:uppercase">{category}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
