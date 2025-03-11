// src/pages/api/socket.js
import { Server } from 'socket.io';
import connectToDatabase from '../../lib/mongodb/connection';
import mongoose from 'mongoose';

export default async function handler(req, res) {
    if (res.socket.server.io) {
        console.log('Socket is already running');
        res.end();
        return;
    }

    // Connect to MongoDB
    await connectToDatabase();

    // Set up Socket.io server
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    // Watch for changes in the Resource collection
    const resourceChangeStream = mongoose.connection.collection('resources').watch();

    resourceChangeStream.on('change', (change) => {
        // Broadcast resource changes to all clients
        io.emit('resource-update', change);
    });

    // Watch for changes in the ResourceRequest collection
    const requestChangeStream = mongoose.connection.collection('resourcerequests').watch();

    requestChangeStream.on('change', (change) => {
        // Broadcast request changes to all clients
        io.emit('request-update', change);
    });

    // Handle client connections
    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);

        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });

    console.log('Setting up socket');
    res.end();
}