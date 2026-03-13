import { motion } from 'framer-motion'
import pfp from "../assets/pfp.jpeg";

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="container-max grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="max-w-lg">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-5xl sm:text-6xl md:text-6xl font-semibold tracking-tight leading-[0.98] text-[var(--text)]"
          >
            Luiz
            <br />
            Eduardo
          </motion.h1>

          <p className="mt-6 max-w-md text-lg sm:text-xl leading-relaxed text-[color:color-mix(in_oklab,var(--text)_60%,transparent)]">
            Full-stack developer building clean, fast, and thoughtful web experiences.
          </p>

          <div className="mt-8 flex items-center gap-3 sm:gap-4">
            <a href="#projects" className="btn">
              See projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full px-5 py-2.5 text-sm sm:text-base font-medium text-[var(--text)] hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              Contact me →
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.05 }}
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
              shadow-[0_20px_60px_rgba(0,0,0,0.10)]
              border border-black/5
            "
          />
        </motion.div>
      </div>
    </section>
  )
}