'use client'
import '../styles/card.css';
import Image from "next/image";

export default function Card({
  title,
  subtitle,
  date,
  description,
  buttonText = 'Continue →',
  url = "https://www.example.com/",
  imgurl = "/images/no-image.jpg",
  dev = "Developers: None"
}) {
  return (
    <div className="card">
      {/* Date */}
      <span className="items-center text-right">
        <h4>{date}</h4>
      </span>

      {/* Title + Subtitle */}
      <span className="justify-between items-center text-left text-2xl">
        <h1 className="title font-bold">{title}</h1>
        <h6 className="text-base subtitle text-[var(--color-highlight)]">{subtitle}</h6>
      </span>

      {/* Description */}
      <p className="description">{description}</p>

      {/* Image */}
      <Image
        src={imgurl}
        alt="Card Image"
        width={250}
        height={250}
        className="rounded-2xl border border-[var(--color-border)] my-2 mx-auto lg:w-100 lg:h-50"
      />

      {/* Button */}
      <button
        className="mx-auto block mt-2 bg-[rgb(245,245,245)] text-black border border-[var(--color-text-primary)] rounded-2xl p-2 transition-transform duration-1000 ease-in-out hover:shadow-lg hover:scale-105 active:scale-110"
        onClick={() => window.open(url, "_blank")}
      >
        {buttonText}
      </button>

      {/* Footer */}
      <footer className="mt-4 text-center text-sm text-gray-400 italic">
        {dev}
      </footer>
    </div>
  );
}
