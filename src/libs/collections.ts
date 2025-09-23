import { getCollection } from 'astro:content'
import { formatDate } from './functions'

export type CollectionType = Awaited<ReturnType<typeof getCollection>>[number]
export type UpdateType = Awaited<ReturnType<typeof getCollection<'updates'>>>[number]
export type NoticeType = Awaited<ReturnType<typeof getCollection<'notices'>>>[number]

/**
 * Format date to entrys of a collection
 * @param collection 
 * @returns 
 */
const formatCollection = (collection: CollectionType[]) => {
    return collection.map(entry => {
        return {
            ...entry,
            data: {
                ...entry.data,
                date: formatDate(entry.data.date)
            }
        }
    })
}

export const getUpdates = async () => await getCollection('updates').then((collection) => formatCollection(collection)) as UpdateType[]
export const getNotices = async () => await getCollection('notices').then((collection) => formatCollection(collection)) as NoticeType[] 

