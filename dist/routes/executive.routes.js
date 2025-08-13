"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const prismaClient_1 = __importDefault(require("../prismaClient")); // adjust path as needed
const nanoid_1 = require("nanoid");
const adminMiddleware_1 = require("../Middlewares/adminMiddleware");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
// Generate referralCode of 6 characters
const referralCode = (0, nanoid_1.nanoid)(6);
const router = express_1.default.Router();
// Register Executive
router.post('/register-executive', adminMiddleware_1.adminMiddleware, async (req, res) => {
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
        const referralCode = await (0, nanoid_1.nanoid)(6);
        const newExecutive = await prismaClient_1.default.executive.create({
            data: {
                name,
                email,
                password: hashedPassword,
                referralCode: referralCode,
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
router.post('/executivelogin', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Fetch user by email
        const executive = await prismaClient_1.default.executive.findUnique({
            where: { email },
            select: {
                id: true,
                password: true,
                email: true,
                name: true,
            },
        });
        if (!executive) {
            res.status(401).json({ error: 'Invalid email or password' });
            return;
        }
        // Verify password
        const passwordMatch = await bcrypt_1.default.compare(password, executive.password);
        if (!passwordMatch) {
            res.status(401).json({ error: 'Invalid email or password' });
            return;
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({
            executiveId: executive.id,
            name: executive.name,
            email: executive.email,
            role: 'EXECUTIVE',
        }, JWT_SECRET, { expiresIn: '7d' });
        // Optionally set HttpOnly cookies or send token in response
        res.cookie('access-token', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 }); // 7 days
        // Exclude password from response
        const { password: _, ...userWithoutPassword } = executive;
        res.status(200).json({ user: userWithoutPassword, token });
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'Login failed' });
    }
});
// Get list of executives (without password)
router.get('/get-executives', adminMiddleware_1.adminMiddleware, async (_req, res) => {
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
