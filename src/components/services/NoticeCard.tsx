import type { NoticeType } from '@/libs/functions'
import React from 'react'

interface Props {
    notice: NoticeType
}

function NoticeCard({ notice }: Props) {
    const { body, data } = notice
    const { img, title, span, date } = data

    const Content = body

    return (
        <section className="group flex flex-col items-center w-[30%] h-[27rem] border-1 border-muted rounded-xl
        shadow-difused cursor-pointer animate--card hover:shadow-hover hover:text-primary">
            <div className="w-full">
                <img src={img} alt={`${title} image`} />
            </div>
            <section className="flex flex-col gap-4 p-4">
                <header className="flex flex-col gap-3">
                    <div className="flex flex-row items-center justify-between">
                        <span className="bg-primary/15 group-hover:bg-primary group-hover:text-white text-primary font-bold text-sm px-2 py-[1px] rounded-xl">{span}</span>
                        <span className="text-[12px] text-neutral font-semibold">{date}</span>
                    </div>
                    <h1 className="text-lg/5 font-bold tracking-tight">{title}</h1>
                </header>
                <div className="text-md text-surface/80">
                    <p>{Content}</p>
                </div>
            </section>
        </section>
    )
}

export default NoticeCard