import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="section-y">
      <div className="container-max">
        <SectionHeading
          eyebrow="About"
          title="Building thoughtful digital products."
          desc="A little snapshot of who I am and what I do."
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 max-w-3xl text-xl md:text-2xl leading-relaxed text-[var(--text)]"
        >
          I'm a full-stack developer who ships products end-to-end — React UIs,
          REST APIs, PostgreSQL schemas, and Docker deployments.
          <span className="block mt-4 text-[var(--muted)] text-lg md:text-xl">
            I care about clean architecture, readable code, and interfaces that feel fast and intuitive.
            Currently seeking full-time roles where I can build meaningful software alongside a strong team.
          </span>
        </motion.p>

        <div className="my-14 h-px bg-[var(--border)]" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-[var(--muted)]">Focus</p>
            <p className="mt-2 text-base text-[var(--text)] font-medium">UI clarity + performance</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-[var(--muted)]">Frontend</p>
            <p className="mt-2 text-base text-[var(--text)] font-medium">React · TypeScript · Tailwind</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-[var(--muted)]">Backend</p>
            <p className="mt-2 text-base text-[var(--text)] font-medium">Node · Express · PostgreSQL</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-[var(--muted)]">Values</p>
            <p className="mt-2 text-base text-[var(--text)] font-medium">Accessible by default</p>
          </div>
        </div>

        <a className="btn mt-12 inline-flex" href="./resume.pdf" download>
          Download CV
        </a>
      </div>
    </section>
  )
}
