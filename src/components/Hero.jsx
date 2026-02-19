import { motion } from 'framer-motion'
import heroImg from "../assets/final.png";

export default function Hero() {
  return (
    <section id="hero" className="section-y">
      <div className="container-max grid md:grid-cols-2 gap-16 items-center">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.24 }}
            className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-[var(--text)]"
          >
            Luiz Eduardo
          </motion.h1>
          <p className="mt-5 text-lg sm:text-xl md:text-2xl leading-relaxed text-[color:color-mix(in_oklab,var(--text)_60%,transparent)]">
            Full-stack developer crafting modern, minimal web experiences.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#projects" className="btn">
              See projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full px-5 py-2.5 text-sm sm:text-base font-medium
                   text-[var(--text)]
                   hover:bg-black/5 dark:hover:bg-white/10
                   transition"
            >
              Contact me →
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.24, delay: 0.05 }}
          className="relative flex justify-center md:justify-end"
        >
          <img
            src={heroImg}
            alt=""
            className="w-full md:w-[125%] lg:w-[130%] max-w-none  md:translate-x-8"
          />
        </motion.div>
      </div>
    </section>
  )
}
