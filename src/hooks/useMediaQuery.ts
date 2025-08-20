import { useState, useEffect } from 'react';

// Hook para evaluar media queries de CSS
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Asegurarnos de que window.matchMedia está disponible
    if (typeof window.matchMedia !== 'function') {
      return;
    }

    const mediaQueryList = window.matchMedia(query);
    
    // Función para actualizar el estado basado en si la media query coincide
    const listener = () => setMatches(mediaQueryList.matches);

    // Ejecutar la función una vez al inicio para establecer el estado inicial
    listener();

    // Escuchar cambios en la media query
    mediaQueryList.addEventListener('change', listener);

    // Limpiar el listener al desmontar el componente
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [query]); // Volver a ejecutar el efecto si la query cambia

  return matches;
}
