export default function About() {
  return (
    <section className="mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-highlight)]">About Me</h1>

      <p className="text-lg text-gray-300 mb-6">
        Hey, I'm <span className="text-cyan-400">Jhon Michael Azura</span> — better known online as <span className="text-pink-400">Yugiboyy</span>. I build things, break things, fix them better, and repeat. That’s how I learn.
      </p>

      <p className="text-gray-400 mb-6">
        I have a degree in <span className="text-yellow-300">Bachelor of Science in Mathematics</span> with a specialization in Computer Science — which means I’m trained to think in logic, structure, and patterns. Whether I’m building an app, a game, or a tool — I care about how things work under the hood, not just how they look.
      </p>

      <p className="text-gray-400 mb-6">
        My main focus right now is frontend development. I build with <span className="text-blue-400">Next.js</span> and <span className="text-green-400">Tailwind CSS</span>, and I work on <span className="text-lime-300">Linux Mint</span> using <span className="text-purple-300">Sublime Text</span>. I don’t use bloated setups — just what works and runs fast.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">What I'm Up To</h2>
      <ul className="text-left text-gray-300 list-disc list-inside space-y-2">
        <li>🎮 Building a 2D zombie survival game in Godot — slow-paced, item-driven, heart-pounding</li>
        <li>💘 Developing an RPG dating sim — story-rich, choice-based, character-focused</li>
        <li>💻 Crafting a Discord Rich Presence integration — because presence should feel personal</li>
        <li>🧠 Learning more frontend deeply (Next.js, React, Tailwind), while prepping for backend</li>
        <li>📓 Creating a custom note-taking app to document and test what I’m learning</li>
        <li>🧪 Working with machine learning models — small-scale experiments and applications</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Tech Stack</h2>
      <ul className="text-left text-gray-300 list-disc list-inside space-y-2">
        <li>🧩 Frontend: Next.js, React, Tailwind, HTML, CSS, TypeScript, JSON</li>
        <li>⚙️ Backend/Systems: Node.js, Python, Java, Ruby, C, C++, C#, Lua</li>
        <li>🧠 Data: SQL, MySQL, basic ML (machine learning), data structures</li>
        <li>🎮 Game Dev: Godot 2D, Pixelorama</li>
        <li>📦 Tools: GitHub, npm (always with <code>-d</code> for dev deps)</li>
        <li>💻 Environment: Linux Mint, Sublime Text, zsh with custom `.zshrc`</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">How I Work</h2>
      <p className="text-gray-400 mb-6">
        I’m chaotic when exploring, adaptive when debugging, and a perfectionist when shipping. If something’s wrong — tell me. If I don’t get it — I’ll break it apart until I do.
      </p>

      <p className="text-gray-400 mb-6">
        I don’t code for trends or titles. I build because I want full control over what I make. And every line I write gets me one step closer to that.
      </p>

      <p className="mt-10 text-gray-500 italic">
        Less noise. More logic. Build it until it works.
      </p>
    </section>
  );
}
