export default function Contact() {
  return (
    <section className="mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6 text-[var(--color-highlight)]">Contact Me</h1>

      <p className="text-gray-400 mb-6">
        Whether it’s a project, collaboration, or just a quick question — feel free to reach out.
      </p>

      <div className="flex flex-col items-center space-y-4 text-lg text-gray-300">
        <div>
          <span className="font-semibold text-white">Phone:</span>{' '}
          <a href="tel:+639695588421" className="text-cyan-400 hover:underline">
            0969 558 8421
          </a>
        </div>

        <div>
          <span className="font-semibold text-white">Email:</span>{' '}
          <a
            href="mailto:azurajhonmichael33@gmail.com"
            className="text-cyan-400 hover:underline"
          >
            azurajhonmichael33@gmail.com
          </a>
        </div>
      </div>

      <p className="mt-10 text-sm text-gray-500 italic">
        I usually reply within a day — unless I’m deep in code or running from zombies.
      </p>
    </section>
  );
}
