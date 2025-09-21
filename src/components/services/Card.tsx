import { useServicesModal } from '@/global/ModalState'

interface Props {
    data: {
        icon: string,
        modalIcon?: string,
        title: string,
        description: string,
        modalDescription?: string,
        color: string,
        type?: 'link' | 'modal'
    },
    width?: string
}
export type CardDataType = Props['data']

export function Card({ data, width }: Props) {
    const { icon, modalIcon, title, description, modalDescription, color, type } = data
    const { openModal, setIcon, setTitle, setDescription, setColor, setModalForm } = useServicesModal()
    const shadowHoverColor = color === 'primary' ? 'hover:shadow-hover' : 'hover:shadow-hover-secondary'

    const Element = type === 'link' ? 'a' : 'div'
    const elementProps = Element === 'a'
        ? { href: title.toLowerCase() }
        : {}

    const cardHandler = () => {
        if (modalIcon) setIcon(modalIcon)
        setTitle(title)
        if (modalDescription) setDescription(modalDescription)
        setColor(color)
        setModalForm('ConstancyForm')
        openModal()
    }
    return type === 'modal' ? (
        <section className={width ?? ''}>
            <section className={`flex flex-col gap-2 items-center justify-center w-full h-full py-4 px-6
            shadow-md border-1 border-muted rounded-xl cursor-pointer animate--card ${shadowHoverColor}`}
                onClick={cardHandler}>
                <img src={icon} alt="Icon" className="w-14" />
                <h1 className="text-lg font-bold text-center">{title}</h1>
                <p className="text-sm text-center">{description}</p>
            </section>
        </section>
    )
        : (
            <Element {...elementProps} className={`flex flex-col gap-2 items-center justify-center ${width ?? ''} py-4 px-6 
            shadow-md border-1 border-muted rounded-xl cursor-pointer animate--card ${shadowHoverColor}`}>
                <img src={icon} alt="Icon" className="w-14" />
                <h1 className="text-lg font-bold text-center">{title}</h1>
                <p className="text-sm text-center">{description}</p>
            </Element>
        )
}

export default Card