import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.tsx'
import About from './components/About.tsx'
import Experience from './components/Experience.tsx'

function App() {

  return (
    <>
      <div className="flex h-screen bg-gray-50 text-gray-800">
        <NavBar />

        <main className="flex-1 overflow-y-auto p-10">
          <section id="about" className="mb-16">
            <About />
            <Experience />
          </section>
        </main>`
      </div>
    </>
  )
}

export default App
