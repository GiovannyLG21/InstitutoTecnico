import { create } from 'zustand'
import Logo from '@/assets/logo.svg'

interface ServicesModalType {
    status: boolean
    icon: string
    title: string
    description: string
    color: string
    modalForm: string
    submittedForm: boolean
    formData: {}
    formApi: string
    openModal: () => void
    closeModal: () => void
    setIcon: (src: string) => void
    setTitle: (title: string) => void
    setDescription: (description: string) => void
    setColor: (color: string) => void
    setModalForm: (form: string) => void
    setSubmittedForm: () => void
    setFormData: (data: {}) => void
    setFormApi: (api: string) => void
    reset: () => void
}

const initialState = {
    status: false,
    icon: Logo.src,
    title: 'Title',
    description: 'Description',
    color: 'primary',
    modalForm: 'ConstancyForm',
    submittedForm: false,
    formData: {},
    formApi: ''
}

const useServicesModal = create<ServicesModalType>()((set) => ({
    ...initialState,
    openModal: () => set(() => ({ status: true })),
    closeModal: () => set(() => ({ status: false })),
    setIcon: (src) => set(() => ({ icon: src })),
    setTitle: (title) => set(() => ({ title })),
    setDescription: (description) => set(() => ({ description })),
    setColor: (color) => set(() => ({ color })),
    setModalForm: (form) => set(() => ({ modalForm: form })),
    setSubmittedForm: () => set(() => ({ submittedForm: true })),
    setFormData: (data: {}) => set(() => ({ formData: data })),
    setFormApi: (api: string) => set(() => ({ formApi: api })),
    reset: () => set({ ...initialState })
}))

export default useServicesModal