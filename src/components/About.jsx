export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I’m a student developer focused on front-end engineering and product design.
              I enjoy crafting interfaces that feel fast, intuitive, and accessible.
              Lately I’ve been exploring 3D on the web and design systems.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-gray-200 p-4 bg-white">
                <p className="text-3xl font-extrabold text-indigo-600">3+</p>
                <p className="mt-1 text-sm text-gray-500">Years coding</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 bg-white">
                <p className="text-3xl font-extrabold text-indigo-600">12</p>
                <p className="mt-1 text-sm text-gray-500">Projects shipped</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full rounded-xl bg-white border border-gray-200 shadow-sm p-6">
              <ul className="space-y-3 text-sm text-gray-700">
                <li>• JavaScript/TypeScript, React, Next.js</li>
                <li>• Python, FastAPI, MongoDB</li>
                <li>• Tailwind, Figma, Accessibility</li>
                <li>• Testing, Git, CI/CD basics</li>
              </ul>
              <div className="mt-6 h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 rounded-full bg-indigo-500 w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
