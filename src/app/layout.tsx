import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import Navbar from '@/components/navbar'


const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata = {
  title: 'My Portfolio',
  description: 'Made with Next.js and Tailwind',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

    <html lang="en" className={jetbrains.variable}>

      
      <body >
        <Navbar/>
        <div className="font-jetbrains min-h-screen bg-gradient-to-br from-azura-bg via-azura-trans to-azura-soft text-azura-text"> 
          {children}
        </div>
      </body>


    </html>
  )
}
