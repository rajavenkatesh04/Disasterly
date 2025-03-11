// src/lib/mongodb/models/ResourceRequest.js
import mongoose from 'mongoose';

const ResourceRequestSchema = new mongoose.Schema({
    requesterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    requesterName: String, // Denormalized
    resourceType: {
        type: String,
        enum: ['food', 'water', 'shelter', 'medical', 'evacuation', 'other'],
        required: true
    },
    urgencyLevel: { type: Number, min: 1, max: 5, required: true },
    quantity: Number,
    description: String,
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
        enum: ['pending', 'matched', 'fulfilled', 'cancelled'],
        default: 'pending',
        required: true
    },
    matchedResourceIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resource'
    }],
    matchedVolunteerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    disasterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disaster'
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Add indexes
ResourceRequestSchema.index({ location: '2dsphere' });
ResourceRequestSchema.index({ status: 1, urgencyLevel: -1 });
ResourceRequestSchema.index({ disasterId: 1 });

export default mongoose.models.ResourceRequest || mongoose.model('ResourceRequest', ResourceRequestSchema);