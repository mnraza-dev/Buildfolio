import mongoose from "mongoose"
export const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI
        if (!mongoUri) {
            throw new Error("MONGO_URI environment variable is not defined")
        }
        await mongoose.connect(mongoUri)
        console.log("Database connected successfully")
    } catch (error) {
        console.error("Database connection error:", error)
        process.exit(1)
    }
}