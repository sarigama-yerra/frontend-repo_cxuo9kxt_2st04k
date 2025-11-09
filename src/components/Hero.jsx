import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm tracking-wide text-indigo-600 font-semibold uppercase">Student Portfolio</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Hi, I’m <span className="text-indigo-600">Your Name</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-600 leading-relaxed">
              Passionate about building clean, functional web experiences. I love
              turning ideas into delightful products using modern tools and best practices.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-indigo-700 transition"
              >
                View Projects
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition"
                >
                  <Github className="h-5 w-5 text-gray-700" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition"
                >
                  <Linkedin className="h-5 w-5 text-gray-700" />
                </a>
                <a
                  href="mailto:you@email.com"
                  aria-label="Email"
                  className="p-3 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition"
                >
                  <Mail className="h-5 w-5 text-gray-700" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 opacity-10 absolute inset-0" />
            <div className="relative mx-auto h-72 w-72 md:h-96 md:w-96 rounded-2xl bg-white/70 backdrop-blur border border-gray-100 shadow-xl flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-28 w-28 rounded-full bg-indigo-100 flex items-center justify-center text-4xl font-bold text-indigo-700">YN</div>
                <p className="mt-4 text-sm uppercase tracking-wider text-gray-500">Web Developer • Designer • Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
