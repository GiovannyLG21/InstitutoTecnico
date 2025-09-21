
interface Props {
    data: {
        icon: string
        title: string,
        description: string
    },
    iconAnimation?: string
}
export type MainHeaderDataType = Props['data']

function MainHeader({ data, iconAnimation }: Props) {
    const { icon, title, description } = data
    const animateIcon = iconAnimation ?? ''

    return (
        <header className="flex flex-col items-center gap-2 animate__animated animate__fadeInDown">
            <img src={icon} alt={`${title} Icon`} className={`w-16 animate__animated ${animateIcon}`} />
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-lg">{description}</p>
        </header>
    )
}

export default MainHeader