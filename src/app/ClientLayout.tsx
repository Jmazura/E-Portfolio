'use client'

import { ReactNode } from 'react'
import ConditionalNavbar from './components/ConditionalNavbar'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <ConditionalNavbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>

    </>
  )
}
  