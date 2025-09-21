import { Formik, Form } from 'formik'
import { CreateForm } from '@/components/components'
import type { FormStructureType } from '../types'
import { withZodSchema } from 'formik-validator-zod'
import { z } from 'astro/zod'


function ConstancyForm() {

    const formFields = {
        names: '',
        document: '',
        documentType: '',
        phone: '',
        email: '',
        constancyType: '',
        requestReason: ''
    }

    const hasOnlyNumbers = (val: string) => /^\d*$/.test(val)

    const formValidationSchema = z.object({
        names: z.string().nonempty('Este campo es requerido'),
        document: z.string().min(6, 'Ingrese un documento valido').max(10, 'Ingrese un documento valido').refine(
            (val) => hasOnlyNumbers(val),
            { message: 'Ingrese un documento valido' }
        ),
        documentType: z.string().nonempty('Este campo es requerido'),
        phone: z.string().nonempty('Este campo es requerido').refine(
            (val) => hasOnlyNumbers(val),
            { message: 'Ingrese un telefono valido' }
        ),
        email: z.string().nonempty('Este campo es requerido').email({
            message: 'Ingrese un correo valido'
        }),
        constancyType: z.string().nonempty('Este campo es requerido'),
        requestReason: z.string().min(15, "Ingrese minimo 15 caracteres")
    })
    type Values = typeof formFields

    const formStructure: FormStructureType = [
        [
            {
                id: 'names',
                name: 'names',
                label: 'Nombres',
                type: 'text',
            },
            {
                id: 'document',
                name: 'document',
                label: 'Numero de documento',
                type: 'text',
                maxLength: '10'
            }
        ],
        [
            {
                id: 'document-type',
                name: 'documentType',
                label: 'Tipo de documento',
                type: 'select',
                options: [
                    {
                        label: 'Tarjeta de identidad',
                        value: 'TI'
                    },
                    {
                        label: 'Cedula de ciudadania',
                        value: 'CC'
                    }
                ]
            },
            {
                id: 'phone',
                name: 'phone',
                label: 'Telefono',
                type: 'text',
                maxLength: '10'
            }
        ],
        {
            id: 'email',
            name: 'email',
            label: 'Correo electrónico',
            type: 'email'
        },
        {
            id: 'constancyType',
            name: 'constancyType',
            label: 'Tipo de constancia',
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

    const onSubmit = (values: Values) => {
        alert(JSON.stringify(values))
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