import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionHeading from './SectionHeading.jsx'
import { Mail, Check, Github, Linkedin } from 'lucide-react'

const GITHUB = "https://github.com/Luiz161001"
const LINKEDIN = "https://linkedin.com/in/lvieiradepaulo" // update with your profile URL

export default function Contact() {
  const formRef = useRef(null)

  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('idle')

  const email = 'lvieiradepaulo00dev@gmail.com'

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!formRef.current) return

    setStatus('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )

      formRef.current.reset()
      setStatus('sent')
      setTimeout(() => setStatus('idle'), 2500)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const inputClass = `
    mt-2 w-full bg-transparent py-3 outline-none resize-none
    border-b border-[color-mix(in_oklab,var(--text)_15%,transparent)]
    text-[var(--text)] placeholder-[var(--muted)]
    focus:border-[var(--accent)] transition
  `

  return (
    <section id="contact" className="section-y">
      <div className="container-max">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great."
          desc="Have an idea, opportunity, or just want to say hi?"
        />

        <div className="mt-16 grid md:grid-cols-2 gap-16 items-start">
          <form ref={formRef} onSubmit={onSubmit} className="space-y-8">

            <div>
              <label className="text-sm text-[var(--muted)]">Name</label>
              <input
                name="from_name"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-[var(--muted)]">Email</label>
              <input
                name="from_email"
                type="email"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-[var(--muted)]">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                className={inputClass}
              />
            </div>

            <button
              disabled={status === 'sending'}
              className="btn disabled:opacity-50"
            >
              {status === 'sending'
                ? 'Sending…'
                : status === 'sent'
                ? 'Sent ✓'
                : 'Send message'}
            </button>

            {status === 'error' && (
              <p className="text-sm text-red-500">
                Something went wrong. Try again.
              </p>
            )}
          </form>

          <div className="flex flex-col gap-6 md:pl-10">
            <div className="text-sm text-[var(--muted)]">
              Or reach me directly
            </div>

            <button
              onClick={copy}
              className="inline-flex items-center gap-3 text-base font-medium
                text-[var(--text)]
                border-b border-[color-mix(in_oklab,var(--text)_15%,transparent)]
                pb-2 hover:border-[var(--accent)] hover:text-[var(--accent)]
                transition w-fit"
            >
              {copied ? <Check size={17} /> : <Mail size={17} />}
              {copied ? 'Copied!' : email}
            </button>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition"
              >
                <Github size={16} />
                GitHub
              </a>
              <span className="text-[var(--border)]">·</span>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>

            <p className="text-sm text-[var(--muted)] pt-2">
              Available for freelance and full-time opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
