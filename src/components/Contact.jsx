import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionHeading from './SectionHeading.jsx'
import { Mail, Check } from 'lucide-react'

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

  return (
    <section id="contact" className="py-28">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something great."
          desc="Have an idea, opportunity, or just want to say hi?"
        />

        <div className="mt-16 grid md:grid-cols-2 gap-16 items-start">
          <form ref={formRef} onSubmit={onSubmit} className="space-y-8">

            <div>
              <label className="text-sm text-neutral-500">Name</label>
              <input
                name="from_name"
                required
                className="mt-2 w-full border-b border-neutral-300 bg-transparent py-3 outline-none focus:border-black transition"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-500">Email</label>
              <input
                name="from_email"
                type="email"
                required
                className="mt-2 w-full border-b border-neutral-300 bg-transparent py-3 outline-none focus:border-black transition"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-500">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                className="mt-2 w-full border-b border-neutral-300 bg-transparent py-3 outline-none focus:border-black transition resize-none"
              />
            </div>

            <button
              disabled={status === 'sending'}
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
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
            <div className="text-sm text-neutral-500">
              Or reach me directly
            </div>

            <button
              onClick={copy}
              className="inline-flex items-center gap-3 text-lg font-medium border-b border-neutral-300 pb-2 hover:border-black transition"
            >
              {copied ? <Check size={18} /> : <Mail size={18} />}
              {copied ? 'Copied!' : email}
            </button>

            <p className="text-sm text-neutral-400 pt-4">
              Available for freelance and full-time opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
