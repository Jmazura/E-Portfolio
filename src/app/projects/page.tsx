import Card from '@/components/ui/card'

export default function Projects() {
	
		return (

		<main className="h-screen flex text-center items-center justify-center gap-4">
			
			<Card
				title="Java Hotel Application"
				subtitle="@Github/Jmazura"
				imageSrc={""}
				footer={
					<a
						href={""}
						target="_blank"
						rel="noopener noreferrer"
						className="text-azura-text hover:underline text-sm"
					>
						→ See Projects
					</a>
				}>
				<h1>
					Excepteur sunt cillum sunt ut consectetur sed aliquip sunt minim veniam do ut ex commodo ex eu exercitation incididunt sunt.
				</h1>
			</Card>

		</main>
		)
}