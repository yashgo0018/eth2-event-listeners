import mongoose from "mongoose";

export default async () => {
    const database = await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    return database;
}