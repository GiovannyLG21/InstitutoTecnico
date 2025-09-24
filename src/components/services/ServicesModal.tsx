import { useEffect, useRef, useState } from 'react'
import { useServicesModal } from '@/store/store'
import { ConstancyForm, CertificateForm, AppointmentForm } from '@/components/forms/forms'
import { CloseIcon } from '@/assets/icons'
import type { JSX } from 'astro/jsx-runtime'
import { WEB_URL } from 'astro:env/client'
import { Loading } from '@/components/components'
import 'sweetalert2/dist/sweetalert2.css'
import Swal from 'sweetalert2'


const Forms: Record<string, () => JSX.Element> = {
    ConstancyForm,
    CertificateForm,
    AppointmentForm
}

const ServicesModal = () => {
    const { status, icon, title, description, color, modalForm, submittedForm, formData, formApi, closeModal, reset } = useServicesModal()
    const modalRef = useRef<HTMLDialogElement>(null)
    const [loading, setLoading] = useState(false)
    const ModalFormComponent = Forms[modalForm]

    const modalColor = `bg-${color}`

    //* Status
    useEffect(() => {
        if (modalRef.current) {
            if (status) {
                modalRef.current.style.setProperty('--modal-color', `var(--color-${color})`)           
                modalRef.current.showModal()     
                return document.body.classList.add('modal-active')
            }
            document.body.classList.remove('modal-active')
            setTimeout(() => {
                modalRef.current ? modalRef.current.close() : null
                setLoading(false)
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
                .then(() => {
                    closeModal()
                    successAlert(color)
                })
        }
    }, [submittedForm])

    //* Handler
    const modalClickHandler = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
        const target = e.target as HTMLElement
        const targetId = target.id
        if (!loading && targetId && targetId === 'modal-container') closeModal()
    }

    return (
        <dialog
            id="services-modal"
            className="w-full h-full max-w-none max-h-none bg-transparent"
            ref={modalRef}
            onClick={modalClickHandler}
        >
            <div id="modal-container" className="w-full h-full flex flex-col items-center justify-center bg-muted/30">
                {loading ? <Loading /> : (
                    <section className="flex flex-col rounded-xl bg-white w-[85%] lg:w-[70%] xl:w-[45%] max-h-[80%] xs:max-h-[65%] 
                        sm:max-h-[75%] md:max-h-[85%] lg:max-h-[90%]">
                        <header className={`relative flex flex-col gap-1 p-4 ${modalColor} text-white rounded-t-xl`}>
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
                )}
            </div>
        </dialog>
    )
}


const successAlert = (color: string) => {
    const btnColor = `btn--${color}`
    return Swal.fire({
        icon: 'success',
        title: '¡Tu solicitud se ha creado exitosamente!',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        buttonsStyling: false,
        customClass: {
            confirmButton: `dialog-alert btn ${btnColor}`
        }
    })
}


export default ServicesModal