import { z } from "astro/zod"
import { hasOnlyNumbers } from '@/libs/functions'
import type { InputFieldType } from './CreateForm'

type defaultFieldsType = 'names' | 'document' | 'documentType' | 'phone' | 'email'

export const defaultFormFields: Record<defaultFieldsType, InputFieldType> = {
    names: {
        id: 'names',
        name: 'names',
        label: 'Nombres',
        placeholder: 'Ingrese sus nombres',
        type: 'text',
        attributes: {
            maxLength: '40',
        }
    },
    document: {
        id: 'document',
        name: 'document',
        label: 'Numero de documento',
        placeholder: 'Ingrese su numero de documento',
        type: 'text',
        attributes: {
            maxLength: '10',
            inputMode: 'numeric'
        }
    },
    documentType: {
        id: 'documentType',
        name: 'documentType',
        label: 'Tipo de documento',
        placeholder: 'Seleccionar tipo de documento',
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
    phone: {
        id: 'phone',
        name: 'phone',
        label: 'Telefono',
        placeholder: 'Ingrese su numero telefonico',
        type: 'text',
        attributes: {
            maxLength: '10',
            inputMode: 'numeric'
        }
    },
    email: {
        id: 'email',
        name: 'email',
        label: 'Correo electrónico',
        placeholder: 'Ingrese su correo electronico',
        type: 'email'
    }
}


export const defaultFormValidators = {
    names: z.string()
        .nonempty('Este campo es requerido')
        .max(40, 'Ingrese maximo 40 caracteres'),
    document: z.string()
        .min(7, 'Ingrese un documento valido')
        .max(10, 'Ingrese un documento valido')
        .refine(
            (val) => hasOnlyNumbers(val),
            { message: 'Ingrese un documento valido (sin puntos)' }
        ),
    phone: z.string()
        .min(10, 'Ingrese un telefono valido')
        .refine(
            (val) => hasOnlyNumbers(val),
            { message: 'Ingrese un telefono valido' }
        ),
    email: z.string()
        .nonempty('Este campo es requerido')
        .email({
            message: 'Ingrese un correo electronico valido'
        }),
    select: z.string()
        .nonempty('Este campo es requerido'),
    textarea: z.string()
        .min(15, 'Ingrese minimo 15 caracteres')
        .max(50, 'Ingrese maximo 50 caracteres')
}