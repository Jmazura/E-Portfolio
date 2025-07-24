
import Image from 'next/image'

export default function About() {
	
		return (

		<main className="h-screen flex text-center items-center justify-center gap-4">
			
			<div className="w-48 h-48 rounded-full border-4 border-azura-border bg-azura-surface overflow-hidden">
				<Image
		          src="/images/me.jfif"
		          alt="Yugiboyy"
		          width={256}
		          height={256}
		          className="object-cover w-full h-full"
		        />
			</div>


			<div className="w-2/5">
				<p>
				Amet non consequat adipisicing laboris dolor aliqua nulla cupidatat irure veniam minim labore tempor cillum irure do sed tempor.
				Lorem ipsum aute nisi eiusmod ex ea quis et esse dolore irure est voluptate pariatur elit irure laborum veniam deserunt sunt occaecat mollit laborum proident occaecat nostrud anim reprehenderit aute.
				</p>

			</div>
		
		</main>
		)
}