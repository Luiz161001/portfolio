
import React from 'react'
import { useTheme } from '../hooks/useTheme.jsx'
import { Sun, Moon, Monitor } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const btn = 'px-3 py-1 rounded-xl border focus-ring'
  return (
    <div className="flex items-center gap-2">
      <button aria-label="Light theme" className={btn} onClick={() => setTheme('light')}>
        <Sun size={16} />
      </button>
      <button aria-label="Dark theme" className={btn} onClick={() => setTheme('dark')}>
        <Moon size={16} />
      </button>
      {/* <button aria-label="System theme" className={btn} onClick={() => setTheme('system')}>
        <Monitor size={16} />
      </button> */}
    </div>
  )
}
