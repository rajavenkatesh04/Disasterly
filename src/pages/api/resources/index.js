// src/pages/api/resources/index.js
import connectToDatabase from '../../../lib/mongodb/connection';
import Resource from '../../../lib/mongodb/models/Resource';

export default async function handler(req, res) {
    await connectToDatabase();

    // Handle different HTTP methods
    switch (req.method) {
        case 'GET':
            try {
                const resources = await Resource.find({});
                res.status(200).json(resources);
            } catch (error) {
                res.status(500).json({ error: 'Failed to fetch resources' });
            }
            break;

        case 'POST':
            try {
                const newResource = new Resource(req.body);
                const savedResource = await newResource.save();
                res.status(201).json(savedResource);
            } catch (error) {
                res.status(400).json({ error: 'Failed to create resource' });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}