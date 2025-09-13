import mongoose from "mongoose";

const connectDb = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Connected Successfully"))
        await mongoose.connect(`${process.env.MONGODB_URI}/finance`)
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDb;