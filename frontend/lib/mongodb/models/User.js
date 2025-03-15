import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String }, // Profile picture from Google
    gender: { type: String }, // Added gender field
    dateOfBirth: { type: Date }, // Added date of birth field
    phone: { type: String }, // Added phone number field
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
    // Track when profile info was last updated
    profileUpdatedAt: { type: Date },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;