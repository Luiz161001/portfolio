import React from "react"
import { motion } from "framer-motion"

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.button
      onClick={onOpen}
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="
        group text-left rounded-[24px] overflow-hidden focus-ring
        bg-[var(--surface-1)]/70 backdrop-blur
        ring-1 ring-black/10 dark:ring-white/10
        shadow-elev-1 hover:shadow-elev-2 transition
      "
    >
      <div className="relative h-40 w-full bg-[var(--surface-2)]">
        {project.img && (
          <img
            src={project.img}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
      </div>

      <div className="p-5">
        <div className="text-sm text-[var(--muted)]">
          {project.tags?.slice(0, 2).join(" • ")}
        </div>

        <div className="mt-1 text-lg font-semibold tracking-tight">
          {project.title}
        </div>

        <div className="mt-2 text-sm leading-relaxed text-[var(--muted)] line-clamp-3">
          {project.summary}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm font-medium text-[var(--text)] opacity-90 group-hover:opacity-100 transition">
            Details
          </span>
          <span className="text-sm opacity-60 group-hover:opacity-90 transition">
            →
          </span>
        </div>
      </div>
    </motion.button>
  )
}
