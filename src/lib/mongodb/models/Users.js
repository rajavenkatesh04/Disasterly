// src/lib/mongodb/models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    name: { type: String, required: true },
    phone: String,
    role: {
        type: String,
        enum: ['affected', 'volunteer', 'organization', 'admin'],
        required: true
    },
    location: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], default: [0, 0] }
    },
    skills: [String],
    availability: {
        startDate: Date,
        endDate: Date,
        timeSlots: [String]
    },
    createdAt: { type: Date, default: Date.now },
    lastLogin: Date
});

// Add a geospatial index for location-based queries
UserSchema.index({ location: '2dsphere' });

export default mongoose.models.User || mongoose.model('User', UserSchema);