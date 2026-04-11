import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import pfp from "../assets/pfp.jpeg";

const GITHUB = "https://github.com/Luiz161001"
const LINKEDIN = "https://linkedin.com/in/lvieiradepaulo" // update with your profile URL

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="container-max grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="max-w-lg">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6
              bg-emerald-500/10 ring-1 ring-emerald-500/25
              text-emerald-700 dark:text-emerald-400
              text-sm font-medium"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="text-5xl sm:text-6xl md:text-6xl font-semibold tracking-tight leading-[0.98] text-[var(--text)]"
          >
            Luiz
            <br />
            Eduardo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="mt-3 text-sm font-medium tracking-widest uppercase text-[var(--muted)]"
          >
            Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="mt-6 max-w-md text-lg sm:text-xl leading-relaxed text-[color:color-mix(in_oklab,var(--text)_60%,transparent)]"
          >
            Building clean, performant web products — from pixel-perfect UIs to scalable APIs and databases.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="mt-8 flex items-center gap-3 sm:gap-4"
          >
            <a href="#projects" className="btn">
              See projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full px-5 py-2.5 text-sm sm:text-base font-medium text-[var(--text)] hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              Contact me →
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 flex items-center gap-2"
          >
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex items-center justify-center h-9 w-9 rounded-full
                ring-1 ring-black/10 dark:ring-white/10
                text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]
                transition focus-ring"
            >
              <Github size={17} />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex items-center justify-center h-9 w-9 rounded-full
                ring-1 ring-black/10 dark:ring-white/10
                text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]
                transition focus-ring"
            >
              <Linkedin size={17} />
            </a>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative flex justify-center md:justify-end"
        >
          <img
            src={pfp}
            alt="Luiz Eduardo portrait"
            className="
              w-full
              max-w-[340px]
              sm:max-w-[360px]
              md:max-w-[380px]
              aspect-[4/5]
              object-cover
              rounded-[28px]
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              border border-black/5
            "
          />
        </motion.div>
      </div>
    </section>
  )
}
