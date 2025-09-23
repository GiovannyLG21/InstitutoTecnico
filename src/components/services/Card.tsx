import { useServicesModal } from '@/store/store'

interface Props {
    data: {
        icon: string,
        title: string,
        description: string,
        color: string,
        type?: 'link' | 'modal',
        modal?: {
            modalIcon: string,
            modalTitle: string
            modalDescription: string,
            modalColor: string,
            modalForm: string,
            formApi: 'constancys' | 'certificates' | 'appointments'
        }
    },
    width?: string
}
export type CardDataType = Props['data']

export function Card({ data, width }: Props) {
    const { icon, title, description, color, type } = data

    const Element = type === 'link' ? 'a' : 'div'
    const elementProps = Element === 'a'
        ? { href: title.toLowerCase() }
        : {}

    const hoverCardColors: Record<string, string> = {
        primary: 'hover:shadow-hover',
        secondary: 'hover:shadow-hover-secondary'
    }
    const shadowHoverColor = hoverCardColors[color]

    if (type === 'modal' && data.modal) {
        const { modalIcon, modalTitle, modalDescription, modalColor, modalForm, formApi } = data.modal
        const { openModal, setIcon, setTitle, setDescription, setColor, setModalForm, setFormApi } = useServicesModal()

        const cardClickHandler = () => {
            setIcon(modalIcon)
            setTitle(modalTitle)
            setDescription(modalDescription)
            setColor(modalColor)
            setModalForm(modalForm)
            setFormApi(formApi)
            openModal()
        }

        return (
            <section className={width ?? ''}>
                <section className={`flex flex-col gap-2 items-center justify-center w-full h-full py-4 px-6
                shadow-md border-1 border-muted rounded-xl cursor-pointer animate--card ${shadowHoverColor}`}
                    onClick={cardClickHandler}
                >
                    <img src={icon} alt="Icon" className="w-14" />
                    <h1 className="text-lg font-bold text-center">{title}</h1>
                    <p className="text-sm text-center">{description}</p>
                </section>
            </section>
        )
    }

    return (
        <Element {...elementProps} className={`flex flex-col gap-2 items-center justify-center ${width ?? ''} py-4 px-6 
            shadow-md border-1 border-muted rounded-xl cursor-pointer animate--card ${shadowHoverColor}`}>
            <img src={icon} alt="Icon" className="w-14 2xl:w-18" />
            <h1 className="text-lg 2xl:text-2xl font-bold text-center">{title}</h1>
            <p className="text-sm 2xl:text-lg text-center">{description}</p>
        </Element>
    )
}

export default Card