import { z } from 'astro/zod'
import { useServicesModal } from '@/store/store'
import { CreateForm, type FormStructureType } from './CreateForm'
import { defaultFormFields, defaultFormValidators } from './fields'


function ConstancyForm() {
    const { setSubmittedForm, setFormData } = useServicesModal()

    const formFields = {
        names: 'Giovanny Ladino',
        document: '1089478347',
        documentType: 'CC',
        phone: '3175298159',
        email: 'ladigiococ@gmail.com',
        constancyType: 'matricula',
        requestReason: 'aaaaaaaaaaaaaaaaaaaaaaaaa'
    }

    const formStructure: FormStructureType = [
        [
            { ...defaultFormFields.names },
            { ...defaultFormFields.document }
        ],

        [
            { ...defaultFormFields.documentType },
            { ...defaultFormFields.phone },
        ],

        { ...defaultFormFields.email },

        {
            id: 'constancyType',
            name: 'constancyType',
            label: 'Tipo de constancia',
            placeholder: 'Seleccionar constancia',
            type: 'select',
            options: [
                {
                    label: 'Constancia de matricula',
                    value: 'matricula'
                },
                {
                    label: 'Constancia de estudios',
                    value: 'estudios'
                },
                {
                    label: 'Constancia de notas',
                    value: 'notas'
                },
                {
                    label: 'Constancia de asistencia',
                    value: 'asistencia'
                }
            ]
        },
        {
            id: 'requestReason',
            name: 'requestReason',
            label: 'Motivo de la solicitud',
            placeholder: 'Escribe el motivo de tu solicitud...',
            type: 'textarea'
        }
    ]

    const formValidationSchema = z.object({
        names: defaultFormValidators.names,
        document: defaultFormValidators.document,
        documentType: defaultFormValidators.select,
        phone: defaultFormValidators.phone,
        email: defaultFormValidators.email,
        constancyType: defaultFormValidators.select,
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
        />
    )
}

export default ConstancyForm