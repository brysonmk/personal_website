import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.tsx'
import About from './components/About.tsx'
import Experience from './components/Experience.tsx'
import Projects from './components/Projects.tsx'

function App() {

  return (
    <>
      <div className="flex h-screen bg-gray-50 text-gray-800">
        <div className="min-w-[200px]">
          <NavBar />
        </div>

        <main className="flex-1 min-w-[250px] overflow-y-auto p-6">
           <section id="about" className="mb-16">
            <About />
          </section>

          <section id="experience" className="mb-16">
            <Experience />
          </section>

          <section id="projects">
            <Projects />
          </section>
        </main>`
      </div>
    </>
  )
}

export default App
