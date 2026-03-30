/**
 * Deepgram TTS API Proxy
 * Converts text to speech using Deepgram Aura-2 model
 * POST /api/tts — body: { text: string }
 * Returns: audio/mpeg stream
 */

export async function POST(request) {
  try {
    const { text } = await request.json();

    if (!text || !text.trim()) {
      return Response.json({ error: 'Missing text field' }, { status: 400 });
    }

    const apiKey = process.env.DEEPGRAM_API_KEY;
    if (!apiKey) {
      return Response.json({ error: 'Deepgram API key not configured' }, { status: 500 });
    }

    const dgResponse = await fetch(
      'https://api.deepgram.com/v1/speak?model=aura-asteria-en&encoding=mp3',
      {
        method: 'POST',
        headers: {
          'Authorization': `Token ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      }
    );

    if (!dgResponse.ok) {
      const errorText = await dgResponse.text();
      console.error('Deepgram TTS error:', dgResponse.status, errorText);
      return Response.json(
        { error: `Deepgram API error: ${dgResponse.status}` },
        { status: dgResponse.status }
      );
    }

    // Stream the audio back to the client
    return new Response(dgResponse.body, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('TTS proxy error:', error);
    return Response.json(
      { error: error.message || 'TTS generation failed' },
      { status: 500 }
    );
  }
}
