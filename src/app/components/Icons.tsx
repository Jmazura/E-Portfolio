'use client'
import { Facebook, Twitter, Github, Store } from 'lucide-react';
import '../styles/headerYugi.css';

type IconsProps = {
  foot?: string;
};

export default function Icons({ foot }: IconsProps) {
  const handleTwitterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // You can add a modal or toast here later
  };

  return (
    <div className={`mini-icons ${foot === "foot" ? "foot" : ""}`}>
      <a
        className="fb"
        href="https://www.facebook.com/renugo08"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook className="w-6 h-6 hover:text-blue-500" />
      </a>

      <a
        className="twit"
        href="#"
        onClick={handleTwitterClick} // ✅ Safe inside client component
      >
        <Twitter className="w-6 h-6 hover:text-sky-400" />
      </a>

      <a
        className="git"
        href="https://www.github.com/Jmazura"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-6 h-6 hover:text-gray-400" />
      </a>

      <a
        className="itch"
        href="https://yugiboii.itch.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Store className="w-6 h-6 hover:text-pink-400" />
      </a>
    </div>
  );
}
