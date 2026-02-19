
import React from 'react'
import ThemeToggle from './ThemeToggle.jsx'
import { useScrollSpy } from '../hooks/useScrollSpy.jsx'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const active = useScrollSpy(links.map(l => l.id), { rootMargin: '-40% 0px -60% 0px' })
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[color-mix(in_oklab,var(--bg) 75%,transparent)] border-b border-[color-mix(in_oklab,var(--text) 10%,transparent)]">
      <div className="container-max flex items-center justify-between h-16">
        <a href="#hero" className="font-semibold text-lg focus-ring">Portfolio</a>
        <nav className="hidden sm:flex items-center gap-6">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`}
               className={`text-sm hover:opacity-80 focus-ring ${active === l.id ? 'font-semibold' : 'text-[var(--muted)]'}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
