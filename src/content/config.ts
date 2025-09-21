import { defineCollection, z } from 'astro:content'

const evalDate = (date: string) => !isNaN(Date.parse(date))

const updatesSchema = z.object({
    title: z.string(),
    span: z.string().optional(),
    date: z.string().refine(
        (val) => evalDate(val),
        { message: 'Date is invalid' }
    ),
    type: z.number().refine(
        (val) => val === 1 || val === 2,
        { message: 'Type must be 1 or 2' }
    )
})

const noticesSchema = z.object({
    img: z.string().refine(
        (val) => /^\/[a-zA-Z0-9_\-./]+$/.test(val)
    ),
    span: z.string(),
    title: z.string(),
    date: z.string().refine(
        (val) => evalDate(val),
        { message: 'Date is invalid' }
    )
})



const updates = defineCollection({
    schema: updatesSchema
})

const notices = defineCollection({
    schema: noticesSchema
})

export const collections = { updates, notices }