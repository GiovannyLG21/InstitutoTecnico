
/**
 * Check if string is a number
 * @param val
 * @returns 
 */
export const hasOnlyNumbers = (val: string) => {
    return /^\d*$/.test(val)
}

/**
 * Check if string is a real path with *"/"*
 * @param val 
 * @returns 
 */
export const isRelativePath = (val: string) => {
    return /^\/[a-zA-Z0-9_\-./]+$/.test(val)
}


//* DATES

interface OptionsType {
    label: string,
    value: string
}
/**
 * Create options for a select of a range of years
 * @returns 
 */
export function getYearOptions(): OptionsType[] {
    const actualYear = new Date().getFullYear() - 1
    const yearsRange = 20
    const yearOptions: OptionsType[] = []
    for (let i = 0; i <= yearsRange; i++) {
        const year = String(actualYear - i)
        yearOptions.push({
            label: year,
            value: year
        })
    }
    return yearOptions
}

/**
 * Format date to locale large date
 * @param date String date
 * @returns 
 */
export function formatDate(date: string) {
    if (isNaN(Date.parse(date))) return 'Invalid Date'
    const newDate = new Date(date).toLocaleDateString('es-CO', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    })
    return newDate
}

/**
 * Check if string date is a valid date
 * @param date String date
 * @returns 
 */
export const isValidDate = (date: string) => {
    return !isNaN(Date.parse(date))
}

/**
 * Check hour complies with the established range
 * @param range Min and max hour *[09, 18]*
 * @param time The hour in format *HH:MM*
 * @returns
 */
export const verifyTimeRange = (range: [number, number], time: string) => {
    const [minRange, maxRange] = [range[0], range[1]]
    const hour = time.split(":")
    const timeHour = Number(hour[0])
    const timeMinutes = Number(hour[1])

    if (timeHour === maxRange && timeMinutes > 0) return false
    if (timeHour >= minRange && timeHour <= maxRange) return true
    return false
}

/**
 * Check if date is a weekend day
 * @param date String date
 * @returns
 */
export const isWeekendDay = (date: string) => {
    const dateDay = new Date(date).getDay()
    if (dateDay === 5 || dateDay === 6) return true
    return false
}

/**
 * Check if date is in minimum accepted date range
 * @param date String date
 * @param margin Days after actual date
 * @returns 
 */
export const verifyMinDate = (date: string, margin: number) => {
    const evaluatedDate = new Date(date)
    const actualDate = new Date()
    actualDate.setDate(actualDate.getDate() + margin - 1)
    return evaluatedDate >= actualDate
}

/**
 * Set minimum date to choice
 * @param margin Days after actual date
 * @returns 
 */
export const setMinDate = (margin: number) => {
    const minimumDate = new Date()
    minimumDate.setDate(minimumDate.getDate() + margin)
    return minimumDate.toISOString().split("T")[0]
}