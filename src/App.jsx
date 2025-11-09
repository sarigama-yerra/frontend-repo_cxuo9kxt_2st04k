import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl">YN<span className="text-indigo-600">.</span></a>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <a
            href="#projects"
            className="inline-flex items-center rounded-md bg-gray-900 text-white text-sm px-3 py-2 font-semibold shadow hover:bg-gray-800"
          >
            Resume
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>Built with React & Tailwind</p>
        </div>
      </footer>
    </div>
  )
}

export default App
