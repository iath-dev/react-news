import { useEffect, useRef, useState } from 'react'

type useIntersectionObserverType = [React.RefObject<null>, boolean]

const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
): useIntersectionObserverType => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)

      if (entry.isIntersecting) {
        observer.disconnect()
      }
    }, options)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return [ref, isIntersecting]
}

export default useIntersectionObserver
