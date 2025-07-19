'use client'

import { useEffect, useState } from 'react'

interface TypewriterTextProps {
  texts: string[]
  typingSpeed?: number
  pause?: number
}

export default function TypewriterText({
  texts,
  typingSpeed = 50,
  pause = 1500,
}: TypewriterTextProps) {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + texts[textIndex][charIndex])
        setCharIndex(charIndex + 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0)
        setDisplayText('')
        setTextIndex((textIndex + 1) % texts.length)
      }, pause)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, textIndex, texts, typingSpeed, pause])

  return (
    <div className="text-green-400 font-mono text-sm md:text-lg whitespace-nowrap">
      {displayText}
      <span className="animate-pulse">_</span>
    </div>
  )
}
