import { Github, Mail } from "lucide-react";
import { FaFacebook, FaItchIo } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-azura-surface border-t border-azura-border px-6 py-4 text-azura-text">
      <div className="mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Left: Copyright */}
        <p className="text-sm text-azura-muted text-center sm:text-left">
          &copy; {new Date().getFullYear()} Jhon Michael "Yugiboyy" Azura. All rights reserved.
        </p>

        {/* Right: Icon Links */}
        <div className="flex gap-4 text-azura-muted text-xl">
          <a
            href="https://github.com/Jmazura"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="hover:text-azura-yellow transition duration-200 hover:scale-110"
          >
            <Github size={20} />
          </a>

          <a
            href="mailto:azurajhonmichael33@email.com"
            title="Gmail"
            className="hover:text-azura-yellow transition duration-200 hover:scale-110"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://yugiboii.itch.io"
            target="_blank"
            rel="noopener noreferrer"
            title="Itch.io"
            className="hover:text-azura-yellow transition duration-200 hover:scale-110"
          >
            <FaItchIo size={20} />
          </a>

          <a
            href="https://facebook.com/renugo08"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="hover:text-azura-yellow transition duration-200 hover:scale-110"
          >
            <FaFacebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
