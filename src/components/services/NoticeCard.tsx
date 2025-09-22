import type { NoticeType } from '@/libs/functions'

interface Props {
    notice: NoticeType,
    width?: string
}

function NoticeCard({ notice, width }: Props) {
    const { body, data } = notice
    const { img, title, span, date } = data

    const Content = body

    return (
        <section className={`group flex flex-col items-center ${width ?? ''} h-[29rem] lg:h-[27rem] 2xl:h-[32rem] pb-12 border-1 border-muted rounded-xl
        shadow-difused cursor-pointer animate--card hover:shadow-hover hover:text-primary`}>
            <div className="w-full">
                <img src={img} alt={`${title}`} loading="eager" width="100%"/>
            </div>
            <section className="flex flex-col gap-4 p-4">
                <header className="flex flex-col gap-3">
                    <div className="flex flex-row items-center justify-between">
                        <span className="bg-primary/15 group-hover:bg-primary group-hover:text-white text-primary font-bold text-sm px-2 py-[1px] rounded-xl">{span}</span>
                        <span className="text-[12px] text-neutral font-semibold">{date}</span>
                    </div>
                    <h1 className="text-lg/5 xs:text-2xl/5 lg:text-lg/5 2xl:text-2xl/5 font-bold tracking-tight 2xl:tracking-normal">{title}</h1>
                </header>
                <div className="text-md 2xl:text-lg text-surface/80">
                    <p>{Content}</p>
                </div>
            </section>
        </section>
    )
}

export default NoticeCard