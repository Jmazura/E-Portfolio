'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/ui/card';

interface GithubProfile {
  login: string;
  avatar_url: string;
  followers: number;
  public_repos: number;
  created_at: string;
  updated_at: string;
  html_url: string;
}

export default function GithubWidget() {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const username = 'Jmazura';

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error('Failed to fetch GitHub profile:', err));
  }, []);

  if (!profile) {
    return (
      <div className="w-full max-w-md h-fit p-5 flex items-center justify-center bg-azura-surface text-azura-muted border border-azura-border rounded-xl shadow-lg animate-pulse">
        Loading GitHub profile...
      </div>
    );
  }

  return (
    <Card
      title="Jhon Michael Azura"
      subtitle="@Yugiboyy"
      imageSrc={profile.avatar_url}
      footer={
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-azura-yellow hover:underline text-sm"
        >
          → Visit GitHub
        </a>
      }
    >
      <div>
        <p>👥 Followers: {profile.followers}</p>
        <p>📦 Public Repos: {profile.public_repos}</p>
        <p>👤 User Since: {new Date(profile.created_at).toLocaleDateString()}</p>
        <p>🕒 Updated: {new Date(profile.updated_at).toLocaleDateString()}</p>
      </div>
    </Card>
  );
}
