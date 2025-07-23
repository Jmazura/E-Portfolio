'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/ui/card'

export default function GithubWidget() {
  const [profile, setProfile] = useState<any>(null);
  const username = 'Jmazura';

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
}, []);
  console.log(profile)
  if (!profile) return (
    <div className="w-full max-w-md h-fit p-5 flex items-center justify-center bg-azura-surface text-azura-muted border border-azura-border rounded-xl shadow-lg animate-pulse">
      Loading GitHub profile...
    </div>);

  return (
    <Card 
      title="Jhon Michael Azura"
        subtitle="@Yugiboyy"
        imageSrc= {profile.avatar_url}
        children = {<div> 
                  <span> 👥 Followers: {profile.followers} </span><br/>
                  <span> 📦 Public Repos: {profile.public_repos} </span><br/ >
                  <span> 👤 User Since: {new Date(profile.created_at).toLocaleDateString()} </span><br/>
                  <span> 🕒 Updated: {new Date(profile.updated_at).toLocaleDateString()}</span>
          </div>}
        footer={
          <a
            href="https://github.com/Jmazura"
            target="_blank"
            className="text-azura-yellow hover:underline text-sm"
          >
            → Visit GitHub
          </a>
    }/>
  );
}
