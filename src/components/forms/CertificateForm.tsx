import { z } from 'astro/zod'
import { useServicesModal } from '@/store/store'
import { getYearOptions } from '@/libs/functions'
import { CreateForm, type FormStructureType } from './CreateForm'
import { defaultFormFields, defaultFormValidators } from './fields'


function CertificateForm() {
    const { setSubmittedForm, setFormData } = useServicesModal()

    const formFields = {
        names: 'Giovanny Ladino',
        document: '1089478347',
        documentType: 'CC',
        phone: '3175298159',
        email: 'ladigiococ@gmail.com',
        graduationProgram: 'sistemas',
        graduationYear: '2024',
        requestReason: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    }

    const formStructure: FormStructureType = [
        [
            { ...defaultFormFields.names },
            { ...defaultFormFields.document },
        ],

        [
            { ...defaultFormFields.documentType },
            { ...defaultFormFields.phone },
        ],

        { ...defaultFormFields.email },

        [
            {
                id: 'graduationProgram',
                name: 'graduationProgram',
                label: 'Programa del que se graduo',
                placeholder: 'Seleccionar programa',
                type: 'select',
                options: [
                    { label: "Sistemas", value: "sistemas" },
                    { label: "Contabilidad", value: "contabilidad" },
                    { label: "Electrónica", value: "electronica" },
                    { label: "Recursos Humanos", value: "recursos_humanos" }
                ]
            },
            {
                id: 'graduationYear',
                name: 'graduationYear',
                label: 'Año de graduación',
                placeholder: 'Seleccionar año',
                type: 'select',
                options: getYearOptions()
            }
        ],

        {
            id: 'requestReason',
            name: 'requestReason',
            label: 'Motivo de la solicitud',
            placeholder: 'Explica para que necesitas el acta de grado...',
            type: 'textarea',
        }
    ]

    const formValidationSchema = z.object({
        names: defaultFormValidators.names,
        document: defaultFormValidators.document,
        documentType: defaultFormValidators.select,
        phone: defaultFormValidators.phone,
        email: defaultFormValidators.email,
        graduationProgram: defaultFormValidators.select,
        graduationYear: defaultFormValidators.select,
        requestReason: defaultFormValidators.textarea
    } satisfies Record<keyof typeof formFields, z.ZodTypeAny>)

    const onSubmit = (values: typeof formFields) => {
        setFormData(values)
        setSubmittedForm()
    }

    return (
        <CreateForm
            formFields={formFields}
            formStructure={formStructure}
            formValidationSchema={formValidationSchema}
            onSubmit={onSubmit}
            buttonText="Enviar solicitud"
            buttonClassName="btn--secondary"
        />
    )
}

export default CertificateForm