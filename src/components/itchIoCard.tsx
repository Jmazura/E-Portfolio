'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/ui/card';

interface ItchGame {
  id: number;
  title: string;
  url: string;
  cover_url?: string;
  short_text?: string;
}

export default function ItchIOCard() {
  const [games, setGames] = useState<ItchGame[] | null>(null);

  useEffect(() => {
    fetch('/api/itch')
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => {
        console.error('Failed to load Itch.io data:', err);
        setGames([]);
      });
  }, []);

  if (!games) {
    return (
      <div className="w-full max-w-md h-fit p-5 flex items-center justify-center bg-azura-surface text-azura-muted border border-azura-border rounded-xl shadow-lg animate-pulse">
        Loading Itch.io games...
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className="w-full max-w-md h-fit p-5 bg-azura-surface text-azura-muted border border-azura-border rounded-xl shadow-lg">
        No games found on Itch.io.
      </div>
    );
  }

  const firstGame = games[0]; // You can loop through all if you want to show more

  return (
    <Card
      title="Jhon Michael Azura"
      subtitle="@Yugiboyy"
      imageSrc={firstGame.cover_url ?? '/fallback-image.png'}
      footer={
        <a
          href="https://yugiboyy.itch.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-azura-yellow hover:underline text-sm"
        >
          → Visit Itch.io
        </a>
      }
    >
      <div>
        <p className="font-semibold text-azura-text">{firstGame.title}</p>
        <p className="text-sm text-azura-muted">{firstGame.short_text ?? 'No description.'}</p>
      </div>
    </Card>
  );
}
