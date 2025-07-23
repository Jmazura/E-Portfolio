"use client"

import { Typewriter } from 'react-simple-typewriter';
import GithubWidget from '@/components/githubWidget';
import ItchIOWidget from '@/components/itchIoCard';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className=" mx-2 sm:mx-8 md:mx-4 flex flex-col items-center justify-center h-screen">

        <div className="py-8 px-12 sm:px-4 md:px-8 text-center w-full bg-surface rounded-2xl border-2 border-green-600/40 shadow-[0_0_20px_4px_rgba(34,147,94,0.4)] animate-pulse overflow-hidden">
   
          <h1 className="font-bold text-2xl sm:text-5xl">
            Jhon Michael M. <span className="text-azura-yellow">Azura</span>
          </h1>
          
          <h2 className="text-xs sm:text-xl">
            <span className="text-red-500"> Web Developer  </span>ꞏ
             <span className="text-yellow-500"> Software Developer  </span>ꞏ
              <span className="text-green-500"> Game Developer </span>
          </h2>
        </div>
        
        <span className="my-5"></span>
        
        <div className="w-full max-w-2xl bg-azura-surface text-green-400 font-mono rounded-lg shadow-lg border border-azura-border overflow-hidden">

          <div className ="flex items-center gap-2 px-4 py-2 bg-azura-soft border-b border-zinc-700">
            <div className ="w-3 h-3 rounded-full bg-red-500"></div>
            <div className ="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className ="w-3 h-3 rounded-full bg-green-500"></div>
            <span className ="ml-auto text-xs text-zinc-400">terminal</span>
          </div>

      
        <p className="p-2 text-green-500 font-mono">
          <span className="text-azura-yellow">user@azura</span>:<span className="text-azura-accent">~/projects</span>
        </p>

        <span className="p-2 pb-5">
          $ <Typewriter
              words={[
                'echo "Hello, World!"',
                'echo "Initializing system..."',
                'echo "Authenticating user@azura..."',
                'echo "Loading components █████▒▒▒▒▒▒"',
                'echo "Access granted ✓"',
                'echo "Fetching data from neural core..."',
                'echo "AI says: Welcome back, Yugiboyy."',
                'echo "cd ~/projects/zombie-survival"',
                'echo "git commit -m \\"made it glow🔥\\""',
                'echo "Game compiled successfully ✔"',
                'echo "Running: npm start"',
                'echo "Don\\\'t just code it, survive it 🧟‍♂️"',
                'echo "Terminal online. Let\\\'s build something legendary."',
              ]}  
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={1000}
            />
        </span>

        </div>

        <div className="flex p-4 gap-5 mt-5">
          <GithubWidget />
          <ItchIOWidget />
        </div>

      </div>
    </main>
   )
}
