'use client'

import Link from 'next/link'

export default function ConditionalNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 px-8 py-4 flex items-center justify-between">
      <div className="text-white font-bold text-xl">
        <Link  href="/" >
        <span className="text-white-300 font-mono font-semibold tracking-wide">Jm •</span>{' '}
        <span className="text-yellow-400 font-mono font-bold tracking-wide">Azura</span>
        </Link>
      </div>
      <ul className="flex gap-6 text-white">
        <li><Link href="/about" className="hover:underline">About</Link></li>
        <li><Link href="/projects" className="hover:underline">Projects</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  )
}
