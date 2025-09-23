import prisma from '@/libs/prisma';
import type { APIRoute } from 'astro';

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json()
    try {
        await prisma.constancys.create({
            data: body
        })        
        return new Response(
            JSON.stringify({ response: 'Request created' }), { status: 200 }
        )
    } catch (error) {
        return new Response(
            JSON.stringify({ response: 'Error in the server ' + error }), { status: 500 }
        )
    }
}