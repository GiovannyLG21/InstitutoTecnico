import { ErrorMessage, Field, Formik, Form } from 'formik'
import { withZodSchema } from 'formik-validator-zod'
import type { ReactNode } from 'react'
export type FormStructureType = (InputFieldType | InputFieldType[])[]

//* Data interface
export interface InputFieldType {
    id: string,
    name: string,
    label: string,
    placeholder?: string
    type: string,
    options?: {
        label: string,
        value: string
    }[],
    attributes?: {
        maxLength?: string,
        min?: string,
        max?: string,
        step?: string
    }
}


//* Base Input
interface BaseInputType extends Omit<InputFieldType, 'type'> {
    children: ReactNode
}
const BaseInput = ({ children, id, label, name }: BaseInputType) => {

    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={id}>{label}</label>
            {children}
            <ErrorMessage name={name} component={'div'} className="bg-red-50 text-red-800 rounded-lg px-4 py-1 mb-1 text-sm" />
        </div>
    )
}

//* Input Component
const InputField = ({ id, name, label, placeholder, type, options, attributes }: InputFieldType) => {
    if (type === 'select' && options) {
        return (
            <BaseInput id={id} name={name} label={label}>
                <Field id={id} name={name} as="select" className="w-full" {...attributes}>
                    <option value="">{placeholder}</option>
                    {options.map(({ label, value }) => (
                        <option key={`${id}-${value}`} value={value}>{label}</option>
                    ))}
                </Field>
            </BaseInput>
        )
    }

    const props = {
        input: { as: 'input', type },
        textarea: { as: 'textarea', rows: '2' }
    }
    const fieldProps = type === 'textarea' ? props.textarea : props.input

    return (
        <BaseInput id={id} name={name} label={label}>
            <Field id={id} name={name} placeholder={placeholder} {...fieldProps}  {...attributes} className="w-full" />
        </BaseInput>
    )
}

//* Agroup Inputs
interface InputRowType {
    children: ReactNode
}
function InputRow({ children }: InputRowType) {
    return (
        <div className="row flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            {children}
        </div>
    )
}


//* Form creation
interface Props {
    formFields: Record<any, string>
    formStructure: FormStructureType,
    formValidationSchema: Parameters<typeof withZodSchema>[0]
    onSubmit: any
    buttonText: string,
    buttonClassName?: string
}
export function CreateForm({ formFields, formStructure, formValidationSchema, onSubmit, buttonText, buttonClassName }: Props) {
    return (
        <Formik
            initialValues={formFields}
            onSubmit={onSubmit}
            validate={withZodSchema(formValidationSchema)}>
            {({ dirty, isValid }) => (
                <Form>
                    <div className="flex flex-col gap-7 justify-between h-full">
                        <div className="flex flex-col gap-6 w-full overflow-y-auto pr-4 pb-[2px]">
                            {formStructure.map((field, index) => {
                                const isRow = Array.isArray(field)
                                if (isRow) {
                                    const Inputs = Object.values(field)

                                    return (
                                        <InputRow key={index}>
                                            {Inputs.map(({ id, name, label, placeholder, type, options, attributes }) =>
                                                <InputField
                                                    key={id}
                                                    id={id}
                                                    name={name}
                                                    label={label}
                                                    placeholder={placeholder}
                                                    type={type}
                                                    options={options}
                                                    attributes={attributes}
                                                />
                                            )}
                                        </InputRow>
                                    )
                                }

                                const { id, label, name, placeholder, type, options, attributes } = field
                                return <InputField key={id} id={id} name={name} label={label} placeholder={placeholder} type={type} options={options} attributes={attributes} />
                            })}
                        </div>
                        <button
                            type="submit"
                            className={`btn ${!dirty || !isValid ? 'disabled' : buttonClassName}`}
                            title={!dirty || !isValid ? 'Por favor llena el formulario correctamente' : 'Enviar'}
                            disabled={!dirty || !isValid}>
                            {buttonText}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
