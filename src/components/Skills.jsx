import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'

const categories = [
  {
    label: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "REST APIs"],
  },
  {
    label: "DevOps & Tools",
    skills: ["Docker", "Git", "Vercel", "Railway"],
  },
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "C++", "SQL"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-y">
      <div className="container-max">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with."
          desc="The stack I reach for when building production software."
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)]">
                {cat.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
