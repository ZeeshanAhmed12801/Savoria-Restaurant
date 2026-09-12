import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element scrolls into view, it (and any children
 * marked with [data-reveal]) receive the `is-visible` class,
 * which triggers the bottom-to-top fade/slide transition
 * defined in index.css.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect users who've asked for less motion.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      node.classList.add('is-visible')
      node.querySelectorAll('[data-reveal]').forEach((el) =>
        el.classList.add('is-visible')
      )
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px', ...options }
    )

    observer.observe(node)
    node.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}
