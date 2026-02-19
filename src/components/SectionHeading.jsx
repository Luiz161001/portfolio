
import React from 'react'

export default function SectionHeading({ eyebrow, title, desc }) {
  return (
    <div className="mb-8">
      {eyebrow && <div className="text-xs uppercase tracking-wider text-[var(--muted)]">{eyebrow}</div>}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-1">{title}</h2>
      {desc && <p className="mt-2 text-[var(--muted)]">{desc}</p>}
    </div>
  )
}
