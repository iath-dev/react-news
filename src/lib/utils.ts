import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Crea un nuevo objeto omitiendo las claves cuyo valor sea null.
 * @param obj El objeto a limpiar.
 * @returns Un nuevo objeto sin las claves que tenían valor null.
 */
export function removeNullValues<T extends object>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== null)
  ) as Partial<T>;
}