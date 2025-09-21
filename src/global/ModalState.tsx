import { create } from 'zustand'

interface ModalState {
    status: boolean,
    icon: string,
    title: string,
    description: string,
    color: string,
    modalForm: string
    openModal: () => void,
    closeModal: () => void,
    setIcon: (src: string) => void,
    setTitle: (title: string) => void
    setDescription: (description: string) => void,
    setColor: (color: string) => void
    setModalForm: (form: string) => void,
    reset: () => void
}

const initialState = {
    status: false,
    icon: '',
    title: 'Title',
    description: 'Description',
    color: 'primary',
    modalForm: ''
}

export const useServicesModal = create<ModalState>()((set) => ({
    ...initialState,
    openModal: () => set(() => ({ status: true })),
    closeModal: () => set(() => ({ status: false })),
    setIcon: (src) => set(() => ({ icon: src })),
    setTitle: (title) => set(() => ({ title })),
    setDescription: (description) => set(() => ({ description })),
    setColor: (color) => set(() => ({ color })),
    setModalForm: (form) => set(() => ({ modalForm: form })),
    reset: () => set({ ...initialState })
}))