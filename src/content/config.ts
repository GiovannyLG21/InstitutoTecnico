import { defineCollection, z } from 'astro:content'
import { isRelativePath, isValidDate } from '@/libs/functions'


const updatesSchema = z.object({
    title: z.string(),
    span: z.string().optional(),
    date: z.string().refine(
        (val) => isValidDate(val),
        { message: 'Invalid date' }
    ),
    type: z.number().refine(
        (val) => val === 1 || val === 2,
        { message: 'Type must be 1 or 2' }
    )
})

const noticesSchema = z.object({
    img: z.string().refine(
        (val) => isRelativePath(val),
        { message: 'Invalid path' }
    ),
    span: z.string(),
    title: z.string(),
    date: z.string().refine(
        (val) => isValidDate(val),
        { message: 'Invalid date' }
    )
})


const updates = defineCollection({
    schema: updatesSchema
})

const notices = defineCollection({
    schema: noticesSchema
})

export const collections = { updates, notices }