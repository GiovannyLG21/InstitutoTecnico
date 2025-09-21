import { useEffect, useRef } from 'react'
import { useServicesModal } from '@/global/ModalState'
import { ConstancyForm } from '../components'
import type { JSX } from 'astro/jsx-runtime'


const Forms: Record<string, () => JSX.Element> = {
    ConstancyForm
}

const ServicesModal = () => {
    const { status, icon, title, description, color, modalForm, closeModal, reset } = useServicesModal()
    const modalRef = useRef<HTMLDialogElement>(null)
    const ModalFormComponent = Forms[modalForm]

    const headerColors: Record<string, string> = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        gradient: 'bg-gradient'
    }
    const headerColor = headerColors[color]

    useEffect(() => {
        if (modalRef.current) {
            if (status) {
                modalRef.current.showModal()
                return modalRef.current.classList.add('active')
            }
            modalRef.current.classList.remove('active')
            modalRef.current.close()
        }
    }, [status])

    const handleModalClick = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        const targetId = target.id
        if (targetId && targetId === 'modal-container') {
            closeModal()
            reset()
        }
    }

    return (
        <dialog
            className="w-full h-full max-w-none max-h-none bg-transparent"
            ref={modalRef}
            onClick={handleModalClick}
        >
            <div id="modal-container" className="w-full h-full flex flex-col items-center justify-center bg-muted/50">
                <section className="flex flex-col w-[40%] h-[90%] rounded-xl bg-white">
                    <header className={`flex flex-col gap-1 p-4 ${headerColor} text-white rounded-t-xl`}>
                        <h1 className="flex flex-row gap-3 items-center text-3xl font-bold">
                            <span>
                                <img src={icon.length ? icon : '/favicon.svg'} alt="" className="w-12" />
                            </span>
                            {title}
                        </h1>
                        <p>{description}</p>
                    </header>
                    <div className="overflow-hidden p-4">
                        {modalForm && <ModalFormComponent />}
                    </div>
                </section>
            </div>
        </dialog>
    )
}

export default ServicesModal