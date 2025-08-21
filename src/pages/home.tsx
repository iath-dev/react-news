import ArticleCard from '@/components/new-card'
import { useDebounce } from 'use-debounce'
import { Search, X } from 'lucide-react'
import React, { useCallback, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getNews, type NewsFilter } from '@/services/newsService'

const HomePage: React.FC = () => {
  const [query, setQuery] = useState<string | undefined>(undefined)
  const { category } = useParams()

  const [q] = useDebounce(query, 700)

  const {
    data,
    error,
    isError,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['news', { category, q }],
    initialPageParam: null as string | null, // 👈 en vez de undefined
    queryFn: ({ pageParam = undefined, queryKey: [, filter] }) =>
      getNews(filter as NewsFilter, pageParam ?? undefined),
    getNextPageParam: (lastPage) => lastPage.nextPage ?? null,
    staleTime: 1000 * 60, // 1 min
    gcTime: 1000 * 60 * 5, // 5 min
  })

  const observer = useRef<IntersectionObserver>(null)
  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading || isFetchingNextPage || isFetching) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      })
      if (node) observer.current.observe(node)
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isFetching]
  )

  return (
    <section className="w-full">
      <div className="mb-4">
        <label className="input w-full input-lg input-primary">
          <Search className="size-[1em] opacity-50" />
          <input
            type="search"
            autoFocus
            className="grow"
            placeholder="Search"
            disabled={isLoading}
            onChange={(e) =>
              setQuery(e.target.value === '' ? undefined : e.target.value)
            }
          />
        </label>
      </div>

      {isError && (
        <div role="alert" className="alert alert-error alert-soft">
          <X className="size-[1em]" />
          <span>{error.message}</span>
        </div>
      )}

      {isLoading && (
        <div role="alert" className="alert alert-info alert-soft">
          <span className="loading loading-spinner loading-xl"></span>
          <span>Loading</span>
        </div>
      )}
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.pages.flatMap((page) => {
            return page.results.flatMap((n) => (
              <ArticleCard article={n} key={n.article_id} />
            ))
          })}
          <div ref={lastElementRef} className="w-full aspect-square"></div>
        </div>
      )}

      {isFetchingNextPage && (
        <div role="alert" className="alert alert-info alert-soft">
          <span className="loading loading-spinner loading-xl"></span>
          <span>Loading</span>
        </div>
      )}
    </section>
  )
}

export default HomePage
