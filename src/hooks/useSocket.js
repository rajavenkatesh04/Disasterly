"use client"

// src/hooks/useSocket.js
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function useSocket() {
    const [socket, setSocket] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        // Initialize socket connection
        const initSocket = async () => {
            await fetch('/api/socket');

            const socketInstance = io();

            socketInstance.on('connect', () => {
                console.log('Socket connected');
                setIsConnected(true);
            });

            socketInstance.on('disconnect', () => {
                console.log('Socket disconnected');
                setIsConnected(false);
            });

            setSocket(socketInstance);
        };

        initSocket();

        // Clean up the socket connection on unmount
        return () => {
            if (socket) {
                socket.disconnect();
            }
        };
    }, []);

    return { socket, isConnected };
}