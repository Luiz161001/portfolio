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
          I build clear, fast, and accessible digital products.
          <span className="block mt-4 text-[var(--muted)] text-lg md:text-xl">
            My focus is minimal design, purposeful features, and clean system architecture, blending frontend clarity with backend precision.
          </span>
        </motion.p>

        <div className="my-14 h-px bg-[var(--border)]" />

        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <p className="text-sm tracking-wide text-[var(--muted)]">Focus</p>
            <p className="mt-2 text-lg text-[var(--text)]">UI clarity + speed</p>
          </div>
          <div>
            <p className="text-sm tracking-wide text-[var(--muted)]">Main Stack</p>
            <p className="mt-2 text-lg text-[var(--text)]">React, Node, Vercel + Railway</p>
          </div>
          <div>
            <p className="text-sm tracking-wide text-[var(--muted)]">Values</p>
            <p className="mt-2 text-lg text-[var(--text)]">Accessible by default</p>
          </div>
        </div>

        <a className="btn mt-12 inline-flex" href="../assets/cv.pdf" download>
          Download CV
        </a>
      </div>
    </section>
  )
}
