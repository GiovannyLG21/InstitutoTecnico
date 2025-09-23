import connectDB from '@/api/config/db'
import { Certificates } from '@/api/models/models'
import type { APIRoute } from 'astro'

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
    const data = await request.json()
    try {
        await connectDB()
        await Certificates.create(data)
        return new Response(
            JSON.stringify({ response: 'Request created' }), { status: 200 }
        )
    } catch (error) {
        console.error(error)
        return new Response(
            JSON.stringify({ response: 'Error in the server ' + error }), { status: 500 }
        )
    }
}