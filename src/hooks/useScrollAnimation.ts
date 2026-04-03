import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * Hook to trigger animations when an element enters the viewport.
 * Returns a ref to attach to the element and a boolean indicating visibility.
 */
export function useInView(threshold = 0.15, rootMargin = '0px') {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(el) // Only trigger once
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, isInView }
}

/**
 * Hook to get scroll progress (0-1) of an element relative to the viewport.
 * 0 = element just entered bottom, 1 = element reached top.
 */
export function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const windowHeight = window.innerHeight
    // 0 when element bottom edge enters viewport, 1 when element top edge leaves
    const raw = 1 - (rect.top / windowHeight)
    setProgress(Math.max(0, Math.min(1, raw)))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return { ref, progress }
}

/**
 * Counter animation hook — counts from 0 to target when triggered.
 */
export function useCountUp(target: number, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return

    let start = 0
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)

      if (current !== start) {
        start = current
        setCount(current)
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [target, duration, trigger])

  return count
}
