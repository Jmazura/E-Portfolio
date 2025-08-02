import '../styles/headerYugi.css';
import Icons from './Icons';
import Link from 'next/link';

export default function HeaderYugi(){
	return (
			<header>
				<div className="headerYugi">
					<Link href="/"> Jhon Michael <span className="text-[var(--color-highlight)] inline">Azura</span></Link>
					<p> <span className="text-red-400"> Web Developer </span> ꞏ <span className="text-yellow-400">Software Developer</span> ꞏ <span className="text-green-400">Game Developer</span> </p>
					<Icons/>
				</div>
			</header>
		);
}

