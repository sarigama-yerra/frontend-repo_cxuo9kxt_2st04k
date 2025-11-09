const projects = [
  {
    title: 'Campus Hub',
    description:
      'A platform for students to find clubs, events, and study groups. Built with React, FastAPI, and MongoDB.',
    tags: ['React', 'FastAPI', 'MongoDB'],
    link: '#',
  },
  {
    title: 'TaskFlow',
    description:
      'Lightweight task manager with drag-and-drop, due dates, and progress tracking.',
    tags: ['TypeScript', 'DnD Kit', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Study Notes AI',
    description:
      'Summarizes lecture transcripts into flashcards using an LLM API with spaced repetition.',
    tags: ['Next.js', 'OpenAI', 'Supabase'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
        <p className="mt-3 text-gray-600">A selection of things I’ve been building recently.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="block rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition bg-white p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-2.5 py-1 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
