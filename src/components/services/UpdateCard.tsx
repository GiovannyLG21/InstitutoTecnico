import type { UpdateType } from '@/libs/collections'
import { ClockIcon } from '@/assets/icons'
import { useRef } from 'react'

interface Props {
    update: UpdateType
}

function UpdateCard({ update }: Props) {
    const spanRef = useRef<HTMLSpanElement>(null)

    const spanHoverAnimation = () => {
        if (spanRef.current) spanRef.current.classList.add('animate__bounce')
    }

    const spanHoverAnimationOut = () => {
        if (spanRef.current) spanRef.current.classList.remove('animate__bounce')
    }

    const { body, data } = update
    const { title, span, date, type } = data
    const Content = body

    const cardColor = type === 1 ? 'border-l-primary' : 'border-l-secondary'
    const shadowHoverColor = type === 1 ? 'hover:shadow-hover' : 'hover:shadow-hover-secondary'
    const titleHoverColor = type === 1 ? 'group-hover:text-primary' : 'group-hover:text-secondary'

    return (
        <section
            className={`group flex flex-col gap-4 py-6 px-5 rounded-xl shadow-difused
            border-1 border-muted border-l-5 ${cardColor} cursor-pointer animate--card ${shadowHoverColor}`}
            onMouseEnter={spanHoverAnimation}
            onMouseLeave={spanHoverAnimationOut}>
            <header className="flex flex-col gap-1">
                <div className="flex flex-row items-center justify-between">
                    <h1 className={`text-lg sm:text-xl 2xl:text-2xl font-bold ${titleHoverColor}`}>{title}</h1>
                    {span && (
                        <span
                            ref={spanRef}
                            className="text-[10px] sm:text-xs 2xl:text-sm px-3 py-1 rounded-2xl bg-primary text-white animate__animated">
                            {span}
                        </span>
                    )}
                </div>
                <span className="flex flex-row items-center gap-1 text-xs 2xl:text-base text-neutral">
                    <img src={ClockIcon.src} alt="Clock icon" className="w-5" />
                    {date}
                </span>
            </header>
            <div>
                <p className="text-xs sm:text-sm 2xl:text-base">{Content}</p>
            </div>
        </section>
    )
}

export default UpdateCard
