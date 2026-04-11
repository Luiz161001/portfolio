import React, { useState } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'
import { useScrollSpy } from '../hooks/useScrollSpy.jsx'

const GITHUB = "https://github.com/Luiz161001"
const LINKEDIN = "https://linkedin.com/in/lvieiradepaulo" // update with your profile URL

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const active = useScrollSpy(links.map(l => l.id), { offset: 80 })
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-lg bg-[color-mix(in_oklab,var(--bg)_82%,transparent)] border-b border-[color-mix(in_oklab,var(--text)_10%,transparent)]">
        <div className="container-max flex items-center justify-between h-14 sm:h-16">

          {/* Logo */}
          <a
            href="#hero"
            className="font-semibold tracking-tight text-[15px] sm:text-[16px] text-[var(--text)] hover:opacity-90 focus-ring"
          >
            Luiz Eduardo
          </a>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-6">
            {links.map(l => {
              const isActive = active === l.id
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    "relative text-[13px] sm:text-sm tracking-tight transition",
                    "focus-ring hover:opacity-90",
                    isActive ? "text-[var(--text)]" : "text-[var(--muted)]"
                  ].join(' ')}
                >
                  {l.label}

                  <span
                    className={[
                      "pointer-events-none absolute -bottom-2 left-0 h-[2px] rounded-full transition-all",
                      isActive
                        ? "w-full opacity-100 bg-[color-mix(in_oklab,var(--text)_28%,transparent)]"
                        : "w-0 opacity-0"
                    ].join(' ')}
                  />
                </a>
              )
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-1.5">

            {/* Social icons (desktop only) */}
            <div className="hidden sm:flex items-center gap-1 mr-1">
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="h-8 w-8 flex items-center justify-center rounded-md
                  text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]
                  transition focus-ring"
              >
                <Github size={16} />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="h-8 w-8 flex items-center justify-center rounded-md
                  text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]
                  transition focus-ring"
              >
                <Linkedin size={16} />
              </a>
            </div>

            <ThemeToggle />

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setOpen(!open)}
              className="sm:hidden h-9 w-9 flex items-center justify-center rounded-md border border-[color-mix(in_oklab,var(--text)_10%,transparent)] hover:opacity-90 focus-ring transition"
              aria-label="Toggle navigation"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="sm:hidden border-t border-[color-mix(in_oklab,var(--text)_10%,transparent)] backdrop-blur-lg bg-[color-mix(in_oklab,var(--bg)_88%,transparent)]">
            <nav className="flex flex-col py-3 px-4 space-y-3">
              {links.map(l => {
                const isActive = active === l.id
                return (
                  <a
                    key={l.id}
                    href={`#${l.id}`}
                    onClick={closeMenu}
                    className={[
                      "text-sm tracking-tight transition",
                      isActive ? "text-[var(--text)] font-medium" : "text-[var(--muted)]",
                      "hover:opacity-90 focus-ring"
                    ].join(' ')}
                  >
                    {l.label}
                  </a>
                )
              })}

              {/* Mobile social links */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-[var(--muted)] hover:text-[var(--text)] transition focus-ring"
                >
                  <Github size={17} />
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-[var(--muted)] hover:text-[var(--text)] transition focus-ring"
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
