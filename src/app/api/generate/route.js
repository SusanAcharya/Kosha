import { generateScript } from '@/lib/static-scripts';

export async function POST(request) {
  try {
    const { prompt, mode, duration } = await request.json();

    if (!prompt || !mode) {
      return Response.json(
        { error: 'Missing required fields: prompt, mode' },
        { status: 400 }
      );
    }

    // Generate static script instead of calling Gemini
    const textContent = generateScript(mode, duration || 30, prompt);

    // Create a readable stream to simulate the chunked response that the frontend expects
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        // Send the entire text in a single chunk
        controller.enqueue(encoder.encode(textContent));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (error) {
    console.error('Generation error:', error);
    return Response.json(
      { error: error.message || 'Failed to generate script' },
      { status: 500 }
    );
  }
}
