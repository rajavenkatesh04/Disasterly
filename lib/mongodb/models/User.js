// lib/mongodb/models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    gender: { type: String },
    dateOfBirth: { type: Date },
    phone: { type: String },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String },
        country: { type: String }
    },
    preferences: {
        language: { type: String, default: 'en' },
        notifications: { type: Boolean, default: true }
    },
    isProfileComplete: { type: Boolean, default: false },
    profileUpdatedAt: { type: Date },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;