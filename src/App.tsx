import React, { useEffect } from "react"
import Nav from "../components/Nav"
import { Routes, Route } from "react-router-dom"
import Main from "../components/Main"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Lenis from "lenis"

export default function App() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time : any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="w-full flex flex-row justify-center items-center p-5">
        <Nav />
      </div>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )  
}