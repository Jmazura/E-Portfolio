'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-6 md:px-24 py-24">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-green-400/50 shadow-md"
      >
        <Image
          src="/images/me3.jpg"
          alt="Yugiboyy"
          width={256}
          height={256}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Text Content */}
      <div className="max-w-2xl text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg leading-relaxed text-gray-300 mb-4"
        >
          I’m <span className="text-yellow-400 font-semibold">Yugiboyy</span>, a passionate game and web developer based in the Philippines. I specialize in crafting immersive experiences through elegant code and sharp design.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg leading-relaxed text-gray-300"
        >
          From sleek portfolios to survival games and productivity tools, I enjoy building things that feel good to use. Whether it&#39;s Unity, Godot, or React—I bring ideas to life with focus and flair.
        </motion.p>
      </div>
    </section>
  )
}
