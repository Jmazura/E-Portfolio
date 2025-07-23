import styles from "./globals.css";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
    
      <div className="mx-8 sm:mx-16 p-5 text-center w-full h-fit bg-surface rounded-2xl shadow-2xl shadow-green-500/50 animate-pulse overflow-hidden">
        
        <h1 className="font-bold text-2xl sm:text-5xl">
          Jhon Michael M. <span className="text-azura-yellow">Azura</span>
        </h1>
        
        <h2 className="text-xs sm:text-xl">
          <span className="text-red-500"> Web Developer  </span>ꞏ
           <span className="text-yellow-500"> Software Developer  </span>ꞏ
            <span className="text-green-500"> Game Developer </span>
        </h2>

      </div>

    </main>
   )
}
