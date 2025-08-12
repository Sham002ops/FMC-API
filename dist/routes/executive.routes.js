"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const prismaClient_1 = __importDefault(require("../prismaClient")); // adjust path as needed
const router = express_1.default.Router();
// Register Executive
router.post('/register-executive', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).json({ error: 'Name, email, and password are required.' });
        return;
    }
    try {
        // Check if executive with email already exists
        const existingExecutive = await prismaClient_1.default.executive.findUnique({
            where: { email },
            select: { id: true },
        });
        if (existingExecutive) {
            res.status(409).json({ error: 'Executive already exists with this email.' });
            return;
        }
        // Hash password before storing
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const newExecutive = await prismaClient_1.default.executive.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });
        res.status(201).json({ executive: newExecutive });
        console.log(`Created executive: ${JSON.stringify(newExecutive)}`);
    }
    catch (err) {
        console.error('Error creating executive:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
});
// Get list of executives (without password)
router.get('/get-executives', async (_req, res) => {
    try {
        const executives = await prismaClient_1.default.executive.findMany({
            select: {
                id: true,
                name: true,
                email: true,
            },
        });
        res.status(200).json(executives);
    }
    catch (err) {
        console.error('Error fetching executives:', err);
        res.status(500).json({ error: err.message || 'Internal server error.' });
    }
});
exports.default = router;
