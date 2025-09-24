import Logo from '@/assets/logo.svg'
import { useEffect, useRef, useState } from 'react'
import { CloseIcon, MenuIcon } from '@/assets/icons'

function Navbar() {
    const logoRef = useRef<HTMLImageElement>(null)
    const navRef = useRef<HTMLDivElement>(null)
    const burgerMenuRef = useRef<HTMLDivElement>(null)
    const [menuStatus, setMenuStatus] = useState(false)
    const [navHeight, setNavHeight] = useState('122px')


    const navigationItems = [
        {
            label: 'Inicio',
            href: '/'
        },
        {
            label: 'Servicios',
            href: '/servicios'
        },
        {
            label: 'Novedades',
            href: '/novedades'
        },
        {
            label: 'Noticias',
            href: '/noticias'
        },
        {
            label: 'Contacto',
            href: '/contacto'
        },
    ]

    const setAnimation = () => {
        if (logoRef.current) logoRef.current.classList.add('animate__bounce')
    }

    const deleteAnimation = () => {
        if (logoRef.current) logoRef.current.classList.remove('animate__bounce')
    }

    useEffect(() => {
        if (navRef.current && burgerMenuRef.current) {
            const $navHeight = navRef.current.getBoundingClientRect().height - 3 + 'px'
            burgerMenuRef.current.style.top = $navHeight
            setNavHeight($navHeight)
        }
        const handleResize = () => {
            const newWindowWidth = window.innerWidth
            if (burgerMenuRef.current && newWindowWidth > 1024) setMenuStatus(false)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (burgerMenuRef.current) {
            if (menuStatus) {
                document.body.classList.add('no-scroll')
                burgerMenuRef.current.style.setProperty('height', `calc(100% - ${navHeight})`)
                return
            }
            document.body.classList.remove('no-scroll')
            burgerMenuRef.current.style.setProperty('height', '0')

        }
    }, [menuStatus])

    const handleBurgerButton = () => setMenuStatus(!menuStatus)

    return (
        <nav>
            <div ref={navRef} className="fixed inset-0 flex w-full h-fit items-center justify-between bg-gradient 
            px-6 xs:px-7 sm:px-10 py-6 shadow-xl z-100" role="navigation">
                {/* Logo */}
                <a href="/" className="logo flex items-center justify-center gap-6" onMouseEnter={setAnimation} onMouseLeave={deleteAnimation}>
                    <img ref={logoRef} className="w-10 xs:w-12 animate__animated" alt="Instituto Técnico Logo" src={Logo.src} />
                    <div className="flex flex-col items-start gap-1 text-white">
                        <h1 className="text-base xs:text-xl font-extrabold">INSTITUCIÓN EDUCATIVA</h1>
                        <h2 className="text-sm xs:text-lg font-normal">INSTITUTO TÉCNICO</h2>
                    </div>
                </a>
                <div>
                    <ul className="hidden lg:flex flex-row items-center gap-10" role="menubar">
                        {navigationItems.map((item, index) => (
                            <li key={index} role="menuitem">
                                <a href={item.href} className="link--nav" role="menuitem">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="inline lg:hidden">
                        <button
                            type="button"
                            title={!menuStatus ? 'Abrir menu' : 'Cerrar menu'}
                            className="btn-icon"
                            onClick={handleBurgerButton}>
                            <MenuIcon className={menuStatus ? 'w-0 h-0' : ''} />
                            <CloseIcon className={!menuStatus ? 'w-0 h-0' : ''} />
                        </button>
                    </div>
                </div>
            </div>

            <BurgerMenu ref={burgerMenuRef} items={navigationItems} status={menuStatus} />
        </nav>
    )
}


interface Props {
    ref: React.RefObject<HTMLDivElement | null>,
    items: {
        label: string,
        href: string
    }[],
    status: boolean
}
const BurgerMenu = ({ ref, items }: Props) => {

    return (
        <div ref={ref} id="burger-menu" className={`fixed h-0 z-10 flex flex-col items-center 
            justify-center w-full bg-gradient overflow-hidden transition-all duration-500`}>
            <ul className="flex flex-col items-center gap-4">
                {items.map(({ label, href }) => {
                    return (
                        <li key={href}>
                            <a href={href} className="link--nav link--menu">{label}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export const NavbarLoader = () => {
    return (
        <section className="fixed inset-0 w-full h-[122px] flex flex-row items-center justify-between gap-2 py-6 px-6 xs:px-7 sm:px-10 shadow-xl bg-gradient">
            <div className="w-[35%] flex flex-col gap-3">
                <div className="w-full h-3 bg-gray-100/25 animate-pulse rounded-full"></div>
                <div className="w-[80%] h-3 bg-gray-100/25 animate-pulse rounded-full"></div>
            </div>
            <div className="w-[50%] h-4 bg-gray-100/25 animate-pulse rounded-full"></div>
        </section>
    )
}


export default Navbar