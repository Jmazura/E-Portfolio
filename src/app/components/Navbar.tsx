'use client'
import Link from 'next/link'
import { useState } from 'react'
import '../styles/navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>

      <Link href="/" className="navbar-logo">
        Jm <span className="highlight">Azura</span>
      </Link>

      <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link className="alink" href="/"><span className={`block sm:hidden inline text-cyan-400 font-bold`}>~/&gt; </span>Home</Link>
        <Link className="alink" href="/about"><span className={`block sm:hidden  inline text-cyan-400 font-bold`}>~/&gt; </span>About</Link>
        <Link className="alink" href="/contact"><span className={`block sm:hidden  inline text-cyan-400 font-bold`}>~/&gt; </span>Contact</Link>
      </div>
    </nav>
  )
}
