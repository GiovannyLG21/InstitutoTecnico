import mongoose from 'mongoose'

const certificatesSchema = new mongoose.Schema({
    names: String,
    document: String,
    documentType: String,
    phone: String,
    email: String,
    graduationProgram: String,
    graduationYear: String,
    requestReason: String
}, { timestamps: true })

export default mongoose.model('Certificates', certificatesSchema)