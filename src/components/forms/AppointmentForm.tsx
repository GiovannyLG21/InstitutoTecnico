import { z } from 'astro/zod'
import { useServicesModal } from '@/store/store'
import { isWeekendDay, setMinDate, verifyMinDate, verifyTimeRange } from '@/libs/functions'
import { CreateForm, type FormStructureType } from './CreateForm'
import { defaultFormFields, defaultFormValidators } from './fields'


function AppointmentForm() {
    const { setSubmittedForm, setFormData } = useServicesModal()

    const formFields = {
        names: '',
        document: '',
        documentType: '',
        phone: '',
        email: '',
        subject: '',
        date: '',
        hour: '',
        requestReason: ''
    }

    const formStructure: FormStructureType = [
        [
            { ...defaultFormFields.names },
            { ...defaultFormFields.document }
        ],
        [
            { ...defaultFormFields.documentType },
            { ...defaultFormFields.phone }
        ],
        { ...defaultFormFields.email },
        {
            id: 'subject',
            name: 'subject',
            label: 'Asunto de la cita',
            placeholder: 'Seleccionar asunto',
            type: 'select',
            options: [
                { label: "Solicitud de constancias o certificados", value: "constancias" },
                { label: "Proceso académico (inscripción, homologación, grado)", value: "academico" },
                { label: "Solicitud de apoyo económico o becas", value: "becas" },
                { label: "Situaciones disciplinarias o de convivencia", value: "disciplina" },
                { label: "Proyecto institucional o propuesta estudiantil", value: "proyecto" },
                { label: "Otro", value: "otro" }
            ]
        },
        [
            {
                id: 'date',
                name: 'date',
                label: 'Fecha preferida',
                placeholder: '',
                type: 'date',
                attributes: {
                    min: setMinDate(3)
                }
            },
            {
                id: 'hour',
                name: 'hour',
                label: 'Hora preferida',
                placeholder: '',
                type: 'time',
                attributes: {
                    min: '09:00',
                    max: '16:00'
                }
            }
        ],
        {
            id: 'requestReason',
            name: 'requestReason',
            label: 'Motivo de la cita',
            placeholder: 'Describe brevemente el motivo de tu cita',
            type: 'textarea'
        }
    ]

    const formValidationSchema = z.object({
        names: defaultFormValidators.names,
        document: defaultFormValidators.select,
        documentType: defaultFormValidators.select,
        phone: defaultFormValidators.phone,
        email: defaultFormValidators.email,
        subject: defaultFormValidators.select,
        date: z.string().date().refine(
            (val) => !isWeekendDay(val),
            { message: 'Elija un dia entre Lunes y Viernes' }
        ).refine(
            (val) => verifyMinDate(val, 3),
            { message: 'Ingrese una fecha con 3 dias de posteridad' }
        ),
        hour: z.string().time().refine(
            (val) => verifyTimeRange([9, 16], val),
            { message: 'Elija una hora entre las 09:00 a.m. y las 04:00 p.m.' }
        ),
        requestReason: defaultFormValidators.textarea
    } as Record<keyof typeof formFields, z.ZodTypeAny>)

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
            buttonText="Solicitar cita"
            buttonClassName="btn--gradient"
        />
    )
}

export default AppointmentForm