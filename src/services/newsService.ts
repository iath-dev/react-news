import type { NewsResponse } from '@/interfaces/response'
import apiClient from '@/lib/api'
import { removeNullValues } from '@/lib/utils'

export interface NewsFilter {
  q?: string
  category?: string
}

export const getNews = async ({ category, q }: NewsFilter, page?: string) => {
  const res = await apiClient.get<NewsResponse>('/latest', {
    params: {
      language: 'en',
      ...removeNullValues({ category, q, page }),
    },
  })

  return res.data
}
