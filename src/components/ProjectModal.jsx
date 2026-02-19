import React, { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

export default function ProjectModal({ project, onClose }) {
  // Lock background scroll + restore without smooth scroll jump
  useEffect(() => {
    if (!project) return

    const scrollY = window.scrollY
    const body = document.body
    const html = document.documentElement

    const prev = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      scrollBehavior: html.style.scrollBehavior,
    }

    body.style.overflow = "hidden"
    body.style.position = "fixed"
    body.style.top = `-${scrollY}px`
    body.style.width = "100%"

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)

      body.style.overflow = prev.overflow
      body.style.position = prev.position
      body.style.top = prev.top
      body.style.width = prev.width

      html.style.scrollBehavior = "auto"
      window.scrollTo(0, scrollY)
      requestAnimationFrame(() => {
        html.style.scrollBehavior = prev.scrollBehavior
      })
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/35 p-4 sm:p-8 grid place-items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 28, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 18, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 240, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="
              w-full max-w-3xl max-h-[86vh]
              overflow-hidden rounded-[28px]
              bg-white text-neutral-900
              dark:bg-neutral-950 dark:text-white
              shadow-[0_30px_80px_rgba(0,0,0,0.45)]
              ring-1 ring-black/10 dark:ring-white/10
              flex flex-col
            "
          >
            {/* Top media */}
            <div className="relative">
              <div className="h-56 sm:h-72 bg-neutral-100 dark:bg-neutral-900 relative">
                {project.img && (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <button
                onClick={onClose}
                aria-label="Close"
                className="
                  absolute right-4 top-4
                  rounded-full p-2
                  bg-white/85 hover:bg-white
                  dark:bg-neutral-900/80 dark:hover:bg-neutral-900
                  ring-1 ring-black/10 dark:ring-white/10
                  shadow-sm focus-ring transition
                "
              >
                <X size={18} />
              </button>

              <div className="absolute left-0 right-0 bottom-0 p-5 sm:p-6">
                <span className="text-xs font-medium tracking-wide text-white/80">
                  {project.tags?.slice(0, 3).join(" • ")}
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Scroll body */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-5 sm:p-7">
                {project.summary && (
                  <p className="text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {project.summary}
                  </p>
                )}

                <div className="my-6 h-px bg-black/10 dark:bg-white/10" />

                {project.details?.problem && (
                  <section className="space-y-2">
                    <div className="text-xs font-semibold tracking-wide text-neutral-500 dark:text-neutral-400">
                      OVERVIEW
                    </div>
                    <p className="leading-relaxed text-neutral-800 dark:text-neutral-200">
                      {project.details.problem}
                    </p>
                  </section>
                )}

                {!!project.details?.tech?.length && (
                  <>
                    <div className="my-6 h-px bg-black/10 dark:bg-white/10" />
                    <section className="space-y-3">
                      <div className="text-xs font-semibold tracking-wide text-neutral-500 dark:text-neutral-400">
                        TECH STACK
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.details.tech.map((t) => (
                          <span
                            key={t}
                            className="
                              rounded-full px-3 py-1 text-sm
                              bg-black/5 dark:bg-white/5
                              ring-1 ring-black/10 dark:ring-white/10
                            "
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </section>
                  </>
                )}

                <div className="h-6" />
              </div>
            </div>

            {/* Bottom actions */}
            <div className="shrink-0 border-t border-black/10 dark:border-white/10 bg-white/90 dark:bg-neutral-950/85 backdrop-blur">
              <div className="p-4 sm:px-6 flex items-center justify-between gap-3">
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  {project.tags?.join(" • ")}
                </div>

                <div className="flex gap-2">
                  {project?.links?.repo && (
                    <a
                      className="
                        inline-flex items-center justify-center
                        rounded-full px-4 py-2 text-sm font-medium
                        bg-black/5 hover:bg-black/10
                        dark:bg-white/5 dark:hover:bg-white/10
                        ring-1 ring-black/10 dark:ring-white/10
                        transition
                      "
                      href={project.links.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repo
                    </a>
                  )}

                  {project?.links?.live && (
                    <a
                      className="
                        inline-flex items-center justify-center
                        rounded-full px-4 py-2 text-sm font-medium
                        bg-neutral-900 text-white hover:bg-neutral-800
                        dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200
                        transition
                      "
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
