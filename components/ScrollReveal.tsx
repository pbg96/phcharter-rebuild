'use client'
import { useEffect, useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right'
  stagger?: boolean
  /** ms between staggered children (80–120 recommended) */
  staggerDelay?: number
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  stagger = false,
  staggerDelay = 100,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const dirClass = direction === 'left' ? 'from-left' : direction === 'right' ? 'from-right' : ''

    // Hidden state applied after mount, so content stays visible if JS/observer fails
    if (stagger) {
      Array.from(el.children).forEach((child, i) => {
        const c = child as HTMLElement
        c.classList.add('reveal-hidden')
        if (dirClass) c.classList.add(dirClass)
        c.style.transitionDelay = `${delay + i * staggerDelay}ms`
      })
    } else {
      el.classList.add('reveal-hidden')
      if (dirClass) el.classList.add(dirClass)
      if (delay) el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (stagger) {
            Array.from(el.children).forEach((child) => {
              ;(child as HTMLElement).classList.add('reveal-visible')
            })
          } else {
            el.classList.add('reveal-visible')
          }
          observer.unobserve(el) // fire once, no re-trigger on scroll-up
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction, stagger, staggerDelay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
