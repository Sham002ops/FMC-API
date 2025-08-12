"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prismaClient_1 = __importDefault(require("../prismaClient")); // adjust path if necessary
const router = express_1.default.Router();
// Create Webinar
router.post('/create', async (req, res) => {
    const { id, title, date, zoomLink, thumbnail, packageId } = req.body;
    try {
        const newWebinar = await prismaClient_1.default.webinar.create({
            data: {
                id,
                title,
                date: new Date(date), // Ensure date is a Date object
                zoomLink,
                thumbnail,
                packageId,
            },
        });
        res.status(201).json(newWebinar);
    }
    catch (err) {
        res.status(400).json({ error: err.message || 'Failed to create webinar' });
    }
});
// Get all webinars
router.get('/', async (_req, res) => {
    try {
        const webinars = await prismaClient_1.default.webinar.findMany();
        res.status(200).json(webinars);
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'Failed to fetch webinars' });
    }
});
exports.default = router;
