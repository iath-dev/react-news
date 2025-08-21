import { CATEGORIES, type Category } from '@/lib/constants'
import { redirect, type LoaderFunctionArgs } from 'react-router'

export async function categoryLoader({ params }: LoaderFunctionArgs) {
  const { category } = params

  // Validación de existencia
  if (!category || !(CATEGORIES as readonly string[]).includes(category)) {
    // Redirige a /not-found si el param es inválido
    throw redirect('/not-found')
  }

  // Si es válido, puedes devolverlo o hacer fetch
  return { category: category as Category }
}
