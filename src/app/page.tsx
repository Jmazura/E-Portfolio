'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaItchIo, FaFacebook, FaDownload } from 'react-icons/fa'
import TypewriterText from './components/TypewriterText'

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-y-1 md:gap-y-0">
      {/* LEFT SIDE */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/me2.png')" }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />

        {/* Content on top of image */}
        <div className="relative z-10 h-full flex flex-col justify-start px-24 text-left">
          {/* Intro box with pulsing effect */}
          <motion.div
            className="mt-64 p-8 rounded-md bg-black/60 border border-green-400/30 shadow-md max-w-4xl"
            animate={{
              boxShadow: [
                '0 0 0px #22c55e20',
                '0 0 25px #22c55e60',
                '0 0 0px #22c55e20'
              ],
              scale: [1, 1.01, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono"
            >
              <span className="text-white-300 tracking-wide">Jhon Michael</span>{' '}
              <span className="text-yellow-400 tracking-wide">Azura</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className="text-lg font-mono"
            >
              <span className="text-cyan-300">Game Developer</span>{' '}
              <span className="text-yellow-400">• Web Developer</span>{' '}
              <span className="text-cyan-300">• Software Developer</span>
            </motion.p>
          </motion.div>

                    {/* Icon Row Section */}
          <div className="mt-8 mb-8 flex justify-center items-center gap-4 flex-wrap">
            {/* Download CV */}
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 border border-green-400/50 text-green-300 font-mono text-sm rounded hover:bg-green-400 hover:text-black transition shadow-sm hover:shadow-[0_0_20px_#22c55e80]"
            >
              <FaDownload />
              <span className="hidden md:inline">Download CV</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Jmazura"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-white/30 text-white font-mono text-sm rounded hover:bg-white hover:text-black transition"
            >
              <FaGithub />
              <span className="hidden md:inline">GitHub</span>
            </a>

            {/* Itch.io */}
            <a
              href="https://yugiboii.itch.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-pink-500/40 text-pink-400 font-mono text-sm rounded hover:bg-pink-400 hover:text-black transition"
            >
              <FaItchIo />
              <span className="hidden md:inline">Itch.io</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/renugo08"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-blue-500/40 text-blue-400 font-mono text-sm rounded hover:bg-blue-400 hover:text-black transition"
            >
              <FaFacebook />
              <span className="hidden md:inline">Facebook</span>
            </a>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      {/*<div className="flex flex-col items-center justify-center text-center px-6 py-8 bg-gradient-to-r from-black/20 to-black/80"  >*/}
      <div className="flex flex-col items-center justify-center text-center px-6 py-8 bg-gradient-to-tr from-black/20 to-black/80 sm:bg-gradient-to-tr sm:from-black/80 sm:to-black/20">

        {/* Terminal-style container */}
        <div className="mb-8 w-full max-w-lg bg-black/80 border border-white/10 rounded-md shadow-inner text-left font-mono">
          {/* Fake window header with buttons */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-black/60 rounded-t-md">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>

          {/* Typewriter output area */}
          <div className="p-4 text-green-400">
            <span className="text-white mr-2">❯</span>
            <TypewriterText
              texts={[
                'const developer = "Jm Azura";',
                'function build() { return "Next.js" }',
                '<Yugiboyy skills="Software Developer" />',
              ]}
            />
          </div>
        </div>


        {/* Enter Button */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          <Link
            href="/about"
            className="px-10 py-4 border border-gray-700 text-white font-mono text-lg rounded hover:bg-white hover:text-black hover:shadow-[0_0_20px_#ffffff80] transition"
          >
            Execute →
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
