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
          <p className="font-medium text-[var(--text)]">
            Luiz Eduardo
          </p>
          <p className="mt-1">
            Full-Stack Developer
          </p>
        </div>

        {/* Center (optional subtle nav) */}
        <div className="flex gap-6">
          <a
            href="#about"
            className="hover:text-[var(--text)] transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-[var(--text)] transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--text)] transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Right */}
        <div className="text-center md:text-right">
          <p>
            &copy; {new Date().getFullYear()} Luiz Eduardo
          </p>
        </div>

      </div>
    </footer>
  )
}
