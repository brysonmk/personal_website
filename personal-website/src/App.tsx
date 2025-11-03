import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.tsx'
import About from './components/About.tsx'

function App() {

  return (
    <>
      <div className="flex h-screen bg-gray-50 text-gray-800">
        <NavBar />

        <main className="flex-1 overflow-y-auto p-10">
          <section id="about" className="mb-16">
            <About />
          </section>
        </main>`
      </div>
    </>
  )
}

export default App
