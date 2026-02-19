import { useEffect, useMemo, useState } from "react"

export function useScrollSpy(
  ids,
  {
    offset = 88,        // px from top to consider "active" (sticky header height + a bit)
    throttleMs = 80,    // helps performance
  } = {}
) {
  const [active, setActive] = useState(ids?.[0] ?? "")

  const idSet = useMemo(() => new Set(ids), [ids])

  useEffect(() => {
    if (!ids || ids.length === 0) return

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return

    let last = 0
    const onScroll = () => {
      const now = Date.now()
      if (now - last < throttleMs) return
      last = now

      // If we're at the very bottom, force last section active
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) {
        setActive(ids[ids.length - 1])
        return
      }

      // Find the section whose top is closest to the offset line (but not above it too far)
      let bestId = ids[0]
      let bestDist = Infinity

      for (const el of sections) {
        const rect = el.getBoundingClientRect()
        const dist = Math.abs(rect.top - offset)

        // Prefer sections that are at/above the offset line (user has reached them)
        // but still allow the closest one if all are below.
        const reached = rect.top - offset <= 0

        if (reached) {
          // bias reached sections strongly
          if (dist < bestDist) {
            bestDist = dist
            bestId = el.id
          }
        } else if (bestDist === Infinity && dist < bestDist) {
          // fallback when nothing is reached yet
          bestDist = dist
          bestId = el.id
        }
      }

      if (idSet.has(bestId)) setActive(bestId)
    }

    // run once on mount + after hash nav
    const onHash = () => requestAnimationFrame(onScroll)

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    window.addEventListener("hashchange", onHash)

    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      window.removeEventListener("hashchange", onHash)
    }
  }, [ids, idSet, offset, throttleMs])

  return active
}
