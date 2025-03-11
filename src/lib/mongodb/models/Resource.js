// src/lib/mongodb/models/Resource.js
import mongoose from 'mongoose';

const ResourceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: {
        type: String,
        enum: ['food', 'water', 'shelter', 'medical', 'clothing', 'other'],
        required: true
    },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true },
    expiryDate: Date,
    location: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], required: true }
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    status: {
        type: String,
        enum: ['available', 'reserved', 'depleted'],
        default: 'available',
        required: true
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    providerName: String, // Denormalized for quicker access
    disasterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disaster'
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Add geospatial and common query indexes
ResourceSchema.index({ location: '2dsphere' });
ResourceSchema.index({ status: 1, category: 1 });
ResourceSchema.index({ disasterId: 1 });

export default mongoose.models.Resource || mongoose.model('Resource', ResourceSchema);