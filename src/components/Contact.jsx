import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
        <p className="mt-3 text-gray-600">
          Whether you have a question, a project idea, or just want to say hi — my inbox is open.
        </p>
        <a
          href="mailto:you@email.com"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
        >
          <Mail className="h-5 w-5" />
          Say Hello
        </a>
      </div>
    </section>
  )
}
