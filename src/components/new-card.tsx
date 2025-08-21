import type { NewsItem } from '@/interfaces/response'
import { cn } from '@/lib/utils'
import React from 'react'

interface ArticleCardProps {
  article: NewsItem
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { article_id, image_url, title, description } = article

  return (
    <article
      key={article_id}
      className={cn(
        'card border group hover:scale-105 cursor-pointer break-inside-avoid'
      )}
    >
      <figure>
        <img
          src={image_url ?? 'https://placehold.co/600x400'}
          alt={`${title}`}
          loading="lazy"
          className="object-cover h-48 w-full grayscale-75 group-hover:grayscale-0 transition-all duration-500"
          onError={(e) =>
            (e.currentTarget.src = 'https://placehold.co/600x400')
          }
        />
      </figure>
      <div className="card-body">
        <div className="card-title">
          <h1 className="truncate w-full group-hover:text-primary">{title}</h1>
        </div>
        <p className="line-clamp-3 mb-2">{description}</p>
        <div className="card-actions justify-end">
          <a
            href={article.link}
            target="_blank"
            title={`more data ${article.title}`}
            rel="noopener noreferrer"
            className="btn btn-sm btn-accent btn-soft"
          >
            More data
          </a>
        </div>
      </div>
    </article>
  )
}

export default ArticleCard
