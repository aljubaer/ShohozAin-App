import { auth } from "@/lib/auth"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  const session = await auth()
  
  if (!session) {
    return new Response('Unauthorized', { status: 401 })
  }

  const { prompt, feature } = await req.json()

  // Create streaming response
  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const response = await fetch(
          `${process.env.PYTHON_BACKEND_URL}/api/generate`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, feature }),
          }
        )

        const reader = response.body?.getReader()
        
        if (!reader) throw new Error('No reader')

        while (true) {
          const { done, value } = await reader.read()
          
          if (done) {
            controller.close()
            break
          }

          controller.enqueue(value)
        }
      } catch (error) {
        controller.error(error)
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}