import { Facebook, Twitter, Github, Store } from 'lucide-react';
import '../styles/headerYugi.css';

export default function Icons({foot}){
	return(
		<div className={`mini-icons ${foot === "foot" ? "foot" : ""}`}>
			<a className="fb" href="https://www.facebook.com/renugo08" target="_blank">
				<Facebook className="w-6 h-6 hover:text-blue-500" />
			</a>
			
			<a className="twit">
				<Twitter className="w-6 h-6 hover:text-sky-400" />
			</a>
			
			<a className="git" href="https://www.github.com/Jmazura" target="_blank">
				<Github className="w-6 h-6 hover:text-gray-400" />
			</a>
			
			<a className="itch" href="https://yugiboii.itch.io/" target="_blank">
				
				<Store className="w-6 h-6 hover:text-pink-400" />
			</a>
		</div>
	);
}