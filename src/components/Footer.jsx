import { Github, Linkedin, Mail } from 'lucide-react'

const GITHUB = "https://github.com/Luiz161001"
const LINKEDIN = "https://linkedin.com/in/lvieiradepaulo" // update with your profile URL
const EMAIL = "mailto:lvieiradepaulo00dev@gmail.com"

export default function Footer() {
  return (
    <footer className="
      mt-24
      border-t border-[color-mix(in_oklab,var(--text)_8%,transparent)]
      bg-[color-mix(in_oklab,var(--bg)_92%,white)]
    ">
      <div className="
        container-max
        py-10
        flex flex-col md:flex-row
        items-center justify-between
        gap-6
        text-sm
        text-[var(--muted)]
      ">

        {/* Left */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-[var(--text)]">
            Luiz Eduardo
          </p>
          <p className="mt-1">
            Full-Stack Developer
          </p>
        </div>

        {/* Center nav */}
        <div className="flex gap-6">
          <a href="#about" className="hover:text-[var(--text)] transition-colors duration-200">About</a>
          <a href="#skills" className="hover:text-[var(--text)] transition-colors duration-200">Skills</a>
          <a href="#projects" className="hover:text-[var(--text)] transition-colors duration-200">Projects</a>
          <a href="#contact" className="hover:text-[var(--text)] transition-colors duration-200">Contact</a>
        </div>

        {/* Right — social icons + copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-[var(--text)] transition-colors duration-200"
            >
              <Github size={17} />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[var(--text)] transition-colors duration-200"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={EMAIL}
              aria-label="Email"
              className="hover:text-[var(--text)] transition-colors duration-200"
            >
              <Mail size={17} />
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Luiz Eduardo
          </p>
        </div>

      </div>
    </footer>
  )
}
