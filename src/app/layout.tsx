import './globals.css'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import ClientLayout from './ClientLayout'

export const metadata: Metadata = {
  title: 'Azura Portfolio',
  description: 'Online portfolio for Yugiboyy',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-white font-mono relative">
        {/* Full-screen gradient background */}
        <div className="fixed inset-0 bg-gradient-to-tr from-[#0e0e0e] via-[#1a1a1a] to-[#2a2a2a]" />
        {/* <div className="min-h-screen bg-gradient-to-tr from-[#1a1a2e] via-[#16213e] to-[#0f3460]"> */}

        {/* Everything above the background */}
        <div className="relative z-10 min-h-screen">
          <ClientLayout>{children}</ClientLayout>

          <footer className="mt-0 border-t border-white/10 text-center py-6 text-sm text-gray-400 font-mono">
            <p>
              © 2025 Yugiboyy • Open-source on{' '}
              <a
                href="https://github.com/Jmazura"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                GitHub
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  )
}
