import React, { useEffect, useState } from "react"
import { Sun, Moon, Monitor } from "lucide-react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("system") // light | dark | system

  // Apply theme to document
  const applyTheme = (value) => {
    const root = document.documentElement

    if (value === "dark") {
      root.classList.add("dark")
    } else if (value === "light") {
      root.classList.remove("dark")
    } else {
      // system
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      root.classList.toggle("dark", prefersDark)
    }
  }

  // On mount: load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "system"
    setTheme(saved)
    applyTheme(saved)
  }, [])

  const handleChange = (value) => {
    setTheme(value)
    localStorage.setItem("theme", value)
    applyTheme(value)
  }

  const Item = ({ value, Icon }) => {
    const active = theme === value

    return (
      <button
        onClick={() => handleChange(value)}
        aria-pressed={active}
        className={[
          "h-8 w-8 flex items-center justify-center rounded-md transition",
          "focus-ring hover:opacity-90",
          active
            ? "bg-[color-mix(in_oklab,var(--text)_10%,transparent)] text-[var(--text)]"
            : "text-[var(--muted)]"
        ].join(" ")}
      >
        <Icon size={16} />
      </button>
    )
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border border-[color-mix(in_oklab,var(--text)_10%,transparent)] p-1">
      <Item value="light" Icon={Sun} />
      <Item value="dark" Icon={Moon} />
      <Item value="system" Icon={Monitor} />
    </div>
  )
}
