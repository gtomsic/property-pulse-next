import mongoose from "mongoose"

let connected = false

const connectDB = async () => {
    mongoose.set("strictQuery", true)

    // IF THE DATABASE IS ALREADY CONNECTED, DON'T CONNECT AGAIN
    if (connected) {
        console.log("MongoDB is connected")
        return
    }

    // ELSE NOT CONNECTED
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true
    } catch (error) {
        console.log(error)
    }
}

export default connectDB
