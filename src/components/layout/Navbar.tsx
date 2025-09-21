import Logo from '@/assets/logo.svg'
import { useEffect, useRef } from 'react'

export default function Navbar() {
    const logoRef = useRef<HTMLImageElement>(null)

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

    return (
        <nav className="fixed inset-0 flex w-full h-fit items-center justify-between bg-gradient px-10 py-6 shadow-xl z-10" role="navigation">
            {/* Logo */}
            <a href="/" className="logo flex items-center justify-center gap-6" onMouseEnter={setAnimation} onMouseLeave={deleteAnimation}>
                <img ref={logoRef} className="w-12 animate__animated" alt="Instituto Técnico Logo" src={Logo.src} />
                <div className="flex flex-col items-start gap-1 text-white">
                    <h1 className="text-xl font-extrabold">INSTITUCIÓN EDUCATIVA</h1>
                    <h2 className="text-lg font-normal">INSTITUTO TÉCNICO</h2>
                </div>
            </a>
            <ul className="inline-flex items-center gap-10" role="menubar">
                {navigationItems.map((item, index) => (
                    <li key={index} role="menuitem">
                        <a href={item.href} className="link--nav" role="menuitem">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
