import { DATABASE_URL } from 'astro:env/server';
import mongoose from 'mongoose'

async function connectDB() {
    try {
        await mongoose.connect(DATABASE_URL)
    } catch (error) {
        console.log("Connection with DB failed - " + error);
    }
}

export default connectDB