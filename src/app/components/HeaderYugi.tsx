import '../styles/headerYugi.css'
import Icons from './Icons'

export default function HeaderYugi(){
	return (
			<header>
				<div className="headerYugi">
					<a href="/"> Jhon Michael <span className="text-[var(--color-highlight)] inline">Azura</span></a>
					<p> <span className="text-red-400"> Web Developer </span> ꞏ <span className="text-yellow-400">Software Developer</span> ꞏ <span className="text-green-400">Game Developer</span> </p>
					<Icons/>
				</div>
			</header>
		);
}

