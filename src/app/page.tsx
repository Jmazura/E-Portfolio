'use client'
import Card from './components/Card';

export default function Home() {
  return (
    <div className="content-container">
      <section className="hoverable">
        <h1>The Process of Failure</h1>
        <p className="mt-4">
          Failure isn’t the opposite of success — it’s a step toward it. Every misstep, every rejection, and every false start refines our direction. It’s not the end, but the process of becoming sharper, more focused, and more resilient.
        </p>

        <blockquote className="mt-6 italic text-gray-500 border-l-4 pl-4 border-cyan-400">
          “You don’t learn to walk by following rules. You learn by doing, and by falling over.” – Richard Branson
        </blockquote>

        <p className="mt-4">
          Embracing failure is embracing growth. Reflect, adapt, and try again — because progress is forged in the fire of persistence.
        </p>
      </section>

      <section>

      </section>

      <h1 className="typewriter text-4xl mt-4 font-bold text-[var(--color-highlight)]">
        <span className="text-cyan-400 inline">~/&gt; </span>PROJECTS
      </h1>

      <span className="flex flex-wrap justify-center">
        <Card 
          title="Undead Academia"
          imgurl="/images/undeadAcademia.png"
          subtitle="Game Project"
          date="May 28, 2024"
          description="A slow-paced, heart pounding game where survival is everything. As a player you will traverse every corner of the university obtaining items that are critical for your survival."
          url="https://vintana.itch.io/undead-academia"
          buttonText="Check it out!"
          dev="Developers: Vintana, Jmazura, MichaelJustineDJ, jeffrsnblrdo, Kronoox, damnflacko"
        />
        
        <Card 
          title="An Equal Share"
          subtitle="GMTK Game Jam 2024"
          date="Aug 18, 2024"
          description="The concept of the game came from the Tagalog phrase hating kapatid (pronounced as hah-thing kahpahtid). It is used to describe the equal sharing among siblings."
          url="https://vintana.itch.io/an-equal-share"
          buttonText="Visit!"
          imgurl="/images/AnEqal.png"
          dev="Developers: Damnflacko, Vintana, MichaelJustineDJ, Lucianono, Yugiboyy"
        />
        
        {[...Array(3)].map((_, i) => (
          <Card 
            key={i}
            title="Title"
            subtitle="sub"
            date="February 25, 2025"
            description="Ut commodo non nostrud voluptate cupidatat consectetur velit quis in dolor ea non laboris in sunt ex dolore dolor ea esse sed ad proident ex magna aute ut nisi."
            url="https://www.github.com/jmazura"
            buttonText="Visit!"
          />
        ))}
      </span>
    </div>
  );
}
