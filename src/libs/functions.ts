import { getCollection } from 'astro:content'

export const getUpdates = async () => await getCollection('updates').then((vals) => vals.map(val => ({ ...val, data: { ...val.data, date: formatDate(val.data.date) } })))
export const getNotices = async () => await getCollection('notices').then((vals) => vals.map(val => ({ ...val, data: { ...val.data, date: formatDate(val.data.date) } })))

export type CollectionType = Awaited<ReturnType<typeof getCollection>>[number]
export type UpdateType = Awaited<ReturnType<typeof getUpdates>>[number]
export type NoticeType = Awaited<ReturnType<typeof getNotices>>[number]

function formatDate(date: string) {
    if (isNaN(Date.parse(date))) return 'Invalid Date'
    const newDate = new Date(date).toLocaleDateString('es-CO', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    })
    console.log(date, newDate)
    return newDate
}

