import mongoose from 'mongoose'

const constancysSchema = new mongoose.Schema({
    names: String,
    document: String,
    documentType: String,
    phone: String,
    email: String,
    constancyType: String,
    requestReason: String,
}, { timestamps: true })

export default mongoose.model('Constancys', constancysSchema)