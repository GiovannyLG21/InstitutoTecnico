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
    maxLength?: string
    options?: {
        label: string,
        value: string
    }[]
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
const InputField = ({ id, name, label, placeholder, type, options, maxLength }: InputFieldType) => {
    if (type === 'select' && options) {
        return (
            <BaseInput id={id} name={name} label={label}>
                <Field id={id} name={name} as="select" className="w-full">
                    <option value="">{`Seleccionar ${label.toLowerCase()}`}</option>
                    {options.map(({ label, value }) => (
                        <option key={`${id}-${value}`} value={value}>{label}</option>
                    ))}
                </Field>
            </BaseInput>
        )
    }
    if (type === 'textarea'){
        return (
            <BaseInput id={id} name={name} label={label}>
                <Field id={id} name={name} as="textarea" placeholder={placeholder} className="w-full" rows="2"/>
            </BaseInput>
        )
    }    
    return (
        <BaseInput id={id} name={name} label={label}>
            <Field id={id} name={name} placeholder={`Ingresar ${label.toLowerCase()}`} type={type} className="w-full" maxLength={maxLength ?? ''}/>
        </BaseInput>
    )
}

//* Agroup Inputs
interface InputRowType {
    children: ReactNode
}
function InputRow({ children }: InputRowType) {
    return (
        <div className="row flex flex-row items-center justify-between gap-8">
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
function CreateForm({ formFields, formStructure, formValidationSchema, onSubmit, buttonText, buttonClassName }: Props) {
    return (
        <Formik
            initialValues={formFields}
            onSubmit={onSubmit}
            validate={withZodSchema(formValidationSchema)}>
            {({ dirty, isValid }) => (
                <Form>
                    <div className="flex flex-col gap-7 h-full">
                        <div className="flex flex-col gap-6 w-full overflow-y-auto pr-4 pb-[2px]">
                            {formStructure.map((field, index) => {                                
                                const isRow = Array.isArray(field)
                                if (isRow) {                                    
                                    const Inputs = Object.values(field)
                                    
                                    return (
                                        <InputRow key={index}>
                                            {Inputs.map(({ id, name, label, placeholder, type, options, maxLength }) =>                                            
                                                <InputField
                                                    key={id}
                                                    id={id}
                                                    name={name}
                                                    label={label}
                                                    placeholder={placeholder}
                                                    type={type}
                                                    options={options}
                                                    maxLength={maxLength}
                                                />
                                            )}
                                        </InputRow>
                                    )
                                }

                                const { id, label, name, placeholder, type, options, maxLength } = field
                                return <InputField key={id} id={id} name={name} label={label} placeholder={placeholder} type={type} options={options} maxLength={maxLength}/>
                            })}
                        </div>
                        <button
                            type="submit"
                            className={`btn ${buttonClassName} ${!dirty || !isValid ? 'disabled' : ''}`}
                            disabled={!dirty || !isValid}>
                            {buttonText}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
export default CreateForm
