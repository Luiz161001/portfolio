import React, { useMemo, useState } from "react"
import SectionHeading from "./SectionHeading.jsx"
import ProjectCard from "./ProjectCard.jsx"
import ProjectModal from "./ProjectModal.jsx"
import { projects as data } from "../data/projects.js"
import { Github } from "lucide-react"

const filters = ["All", "Web", "AI"]

function Segmented({ value, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Project filters"
      className="
        inline-flex items-center gap-1 rounded-full p-1
        bg-[var(--surface-1)]/70 backdrop-blur
        ring-1 ring-black/10 dark:ring-white/10
      "
    >
      {filters.map((f) => {
        const active = value === f
        return (
          <button
            key={f}
            onClick={() => onChange(f)}
            role="tab"
            aria-selected={active}
            className={[
              "px-4 py-2 rounded-full text-sm font-medium transition focus-ring",
              active
                ? "bg-[var(--surface-2)] text-[var(--text)] shadow-elev-1 ring-1 ring-black/10 dark:ring-white/10"
                : "text-[var(--muted)] hover:text-[var(--text)] hover:bg-black/5 dark:hover:bg-white/5",
            ].join(" ")}
          >
            {f}
          </button>
        )
      })}
    </div>
  )
}

const productProjects = data.filter((p) => p.kind !== "study")
const studyProjects = data.filter((p) => p.kind === "study")

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const [active, setActive] = useState(null)

  const list = useMemo(() => {
    if (filter === "All") return productProjects
    return productProjects.filter((p) => p.tags?.includes(filter))
  }, [filter])

  const featured = list?.[0]
  const rest = featured ? list.slice(1) : list

  return (
    <section id="projects" className="section-y">
      <div className="container-max">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Featured projects"
            desc="A selection of projects I've worked on."
          />
          <Segmented value={filter} onChange={setFilter} />
        </div>

        {featured && (
          <div className="mt-10">
            <button
              onClick={() => setActive(featured)}
              className="
                group w-full text-left rounded-[28px] overflow-hidden focus-ring
                bg-[var(--surface-1)]/70 backdrop-blur
                ring-1 ring-black/10 dark:ring-white/10
                shadow-elev-1 hover:shadow-elev-2 transition
              "
            >
              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[220px] md:min-h-[320px] bg-[var(--surface-2)]">
                  {featured.img && (
                    <img
                      src={featured.img}
                      alt={featured.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <div className="text-sm text-[var(--muted)]">
                    {featured.tags?.join(" • ")}
                  </div>

                  <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                    {featured.title}
                  </h3>

                  <p className="mt-3 text-[var(--muted)] leading-relaxed text-base md:text-lg">
                    {featured.summary}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                    <span
                      className="
                        inline-flex items-center gap-2 rounded-full px-4 py-2
                        bg-black/5 dark:bg-white/5
                        ring-1 ring-black/10 dark:ring-white/10
                        group-hover:bg-black/10 dark:group-hover:bg-white/10
                        transition
                      "
                    >
                      View case study
                      <span className="translate-x-0 group-hover:translate-x-0.5 transition">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        )}

        {rest.length > 0 && (
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p) => (
              <ProjectCard key={p.id} project={p} onOpen={() => setActive(p)} />
            ))}
          </div>
        )}

        {/* Study / open-source repos — shown only under "All" */}
        {filter === "All" && studyProjects.length > 0 && (
          <div className="mt-12 pt-10 border-t border-[var(--border)]">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-5">
              Also on GitHub
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {studyProjects.map((p) => (
                <a
                  key={p.id}
                  href={p.links?.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group inline-flex items-center justify-between gap-4
                    rounded-2xl px-5 py-4 w-full sm:max-w-sm
                    bg-[var(--surface-1)]/70 backdrop-blur
                    ring-1 ring-black/10 dark:ring-white/10
                    shadow-elev-1 hover:shadow-elev-2 transition
                  "
                >
                  <div>
                    <p className="text-sm font-semibold text-[var(--text)]">{p.title}</p>
                    <p className="mt-0.5 text-xs text-[var(--muted)]">
                      {p.details?.tech?.slice(0, 3).join(" · ")}
                    </p>
                  </div>
                  <Github
                    size={17}
                    className="shrink-0 text-[var(--muted)] group-hover:text-[var(--text)] transition"
                  />
                </a>
              ))}
            </div>
          </div>
        )}

        <ProjectModal project={active} onClose={() => setActive(null)} />
      </div>
    </section>
  )
}
