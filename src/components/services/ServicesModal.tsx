import { useEffect, useRef, useState } from 'react'
import { useServicesModal } from '@/store/store'
import { ConstancyForm, CertificateForm, AppointmentForm } from '@/components/forms/forms'
import { CloseIcon } from '@/assets/icons'
import Swal from 'sweetalert2'
import type { JSX } from 'astro/jsx-runtime'
import { WEB_URL } from 'astro:env/client'
import { Loading } from '@/components/components'


const Forms: Record<string, () => JSX.Element> = {
    ConstancyForm,
    CertificateForm,
    AppointmentForm
}

const ServicesModal = () => {
    const modalRef = useRef<HTMLDialogElement>(null)
    const { status, icon, title, description, color, modalForm, submittedForm, formData, formApi, closeModal, reset } = useServicesModal()
    const ModalFormComponent = Forms[modalForm]
    const [loading, setLoading] = useState(false)

    //* Header & button color
    const modalColors: Record<string, string> = {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        gradient: 'var(--gradient)'
    }

    //* Status
    useEffect(() => {
        if (modalRef.current) {
            if (status) {
                document.body.classList.add('no-scroll')
                document.body.style.setProperty('--modal-color', modalColors[color])
                modalRef.current.showModal()
                return modalRef.current.classList.add('active')
            }
            document.body.classList.remove('no-scroll')
            modalRef.current.classList.remove('active')
            setTimeout(() => {
                setLoading(false)
                modalRef.current ? modalRef.current.close() : null
                reset()
            }, 350)
        }
    }, [status])

    //* Submitted Form
    useEffect(() => {
        if (submittedForm) {
            setLoading(true)
            fetch(`${WEB_URL}/api/${formApi}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then((res) => res.json())
                .then(() => {
                    closeModal()
                    successAlert()
                })
        }
    }, [submittedForm])

    //* Handler
    const modalClickHandler = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        const targetId = target.id
        if (!loading && targetId && targetId === 'modal-container') closeModal()
    }

    return (
        <dialog
            className="w-full h-full max-w-none max-h-none bg-transparent"
            ref={modalRef}
            onClick={modalClickHandler}
        >
            <div id="modal-container" className="w-full h-full flex flex-col items-center justify-center bg-muted/50">
                {!loading ? (
                    <section className="flex flex-col rounded-xl bg-white w-[85%] lg:w-[70%] xl:w-[40%] max-h-[80%] xs:max-h-[65%] 
                        sm:max-h-[75%] md:max-h-[85%] lg:max-h-[90%]">
                        <header style={{ background: 'var(--modal-color)' }} className={`relative flex flex-col gap-1 p-4 text-white rounded-t-xl`}>
                            <button
                                type="button"
                                title="Cerrar formulario"
                                className={`btn-icon absolute top-2 right-2`}
                                onClick={closeModal}>
                                <CloseIcon className="w-full" />
                            </button>
                            <h1 className="flex flex-row gap-3 items-center text-xl xs:text-2xl sm:text-3xl font-bold">
                                <span>
                                    <img src={icon} alt="" className="w-12" />
                                </span>
                                {title}
                            </h1>
                            <p>{description}</p>
                        </header>
                        <div className="overflow-hidden p-4 h-full">
                            <ModalFormComponent />
                        </div>
                    </section>
                ) : <Loading />}
            </div>
        </dialog>
    )
}

const successAlert = () => Swal.fire({
    icon: 'success',
    title: '¡Tu solicitud se ha creado exitosamente!',
    showConfirmButton: true,
    confirmButtonText: 'Aceptar',
    buttonsStyling: false,
    customClass: {
        confirmButton: `dialog-alert btn`
    }
})


export default ServicesModal