import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log("✅ Already connected to MongoDB");
        return;
    }

    try {
        await mongoose.connect(MONGODB_URI, {
            dbName: "disaster-relief-db", // Make sure this matches your database name
        });
        console.log("✅ New MongoDB connection established");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
    }
};

export default dbConnect;
