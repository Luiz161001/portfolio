
import { useEffect, useState } from 'react'

export function useScrollSpy(ids, options) {
  const [activeId, setActiveId] = useState(ids[0] || null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveId(entry.target.id)
      })
    }, { threshold: 0.3, ...options })

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids.join(','), JSON.stringify(options)])

  return activeId
}
