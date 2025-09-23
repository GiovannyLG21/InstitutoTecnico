import mongoose from 'mongoose'

const appointmentsSchema = new mongoose.Schema({
    names: String,
    document: String,
    documentType: String,
    phone: String,
    email: String,
    subject: String,
    date: String,
    hour: String,
    requestReason: String
}, { timestamps: true })

export default mongoose.model('Appointments', appointmentsSchema)