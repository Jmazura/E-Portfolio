'use client'
import { useState } from 'react'
import '../styles/navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>

      <a href="/" className="navbar-logo">
        Jm <span className="highlight">Azura</span>
      </a>

      <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a className="alink" href="/"><span className={`block sm:hidden inline text-cyan-400 font-bold`}>~/&gt; </span>Home</a>
        <a className="alink" href="/about"><span className={`block sm:hidden  inline text-cyan-400 font-bold`}>~/&gt; </span>About</a>
        <a className="alink" href="/contact"><span className={`block sm:hidden  inline text-cyan-400 font-bold`}>~/&gt; </span>Contact</a>
      </div>
    </nav>
  )
}
