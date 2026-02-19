
import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[color-mix(in_oklab,var(--text) 10%,transparent)]">
      <div className="container-max text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>&copy; {new Date().getFullYear()} Luiz Eduardo</div>
      </div>
    </footer>
  )
}
