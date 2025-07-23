'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (  
    <div className="bg-azura-surface border-b border-azura-border px-6 py-4 text-azura-text">
    {/* Start of Nav */}

      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <span className="text-azura-text">Jm </span>
          <span className="text-azura-yellow">Azura</span>
        </Link>

        {/* Hamburger Icon (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-azura-text focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Links (hidden on mobile, flex on md+) */}
        <div className="hidden md:flex space-x-4 text-sm">
          <Link href="/" className="hover:text-azura-green transition">Home</Link>
          <Link href="/about" className="hover:text-azura-green transition">About</Link>
          <Link href="/projects" className="hover:text-azura-green transition">Projects</Link>
          <Link href="/contact" className="hover:text-azura-yellow transition">Contact</Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 text-sm">
          <Link href="/" className="block hover:text-azura-green">Home</Link>
          <Link href="/about" className="block hover:text-azura-green">About</Link>
          <Link href="/projects" className="block hover:text-azura-green">Projects</Link>
          <Link href="/contact" className="block hover:text-azura-yellow">Contact</Link>
        </div>
      )}


      {/* End of Nav */}
    </div>
  )
}
