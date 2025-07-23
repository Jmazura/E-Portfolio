export async function GET() {
  const key = process.env.ITCH_API_KEY;

  if (!key) {
    return new Response(JSON.stringify({ error: 'Missing API key' }), {
      status: 500,
    });
  }

  try {
    const res = await fetch(`https://itch.io/api/1/${key}/my-games`, {
      headers: { Accept: 'application/json' },
    });

    const contentType = res.headers.get('content-type') || '';
    if (!res.ok || !contentType.includes('application/json')) {
      const text = await res.text(); // Try to read as plain text for debug
      return new Response(
        JSON.stringify({ error: 'Invalid response from Itch.io', details: text }),
        { status: 500 }
      );
    }

    const data = await res.json();
    return Response.json(data.games.slice(0, 5));
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Fetch failed', details: String(error) }), {
      status: 500,
    });
  }
}
