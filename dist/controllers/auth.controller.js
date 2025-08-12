"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.verifyToken = exports.login = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prismaClient_1 = __importDefault(require("../prismaClient")); // your prisma client singleton import
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const registerUser = async (req, res) => {
    const { name, email, password, executiveId } = req.body;
    if (!name || !email || !password || !executiveId) {
        res.status(400).json({ error: 'Name, email, password, and executiveId are required.' });
        return;
    }
    try {
        // Check if user already exists
        const existingUser = await prismaClient_1.default.user.findUnique({
            where: { email },
            select: { id: true },
        });
        if (existingUser) {
            res.status(409).json({ error: 'User already exists with this email.' });
            return;
        }
        // Hash password
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        // Insert new user (assign default packageId as needed)
        const newUser = await prismaClient_1.default.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                executiveId,
                packageId: '03', // default package id (make sure this exists in DB)
                role: 'USER',
                coins: 300,
            },
        });
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({
            userId: newUser.id,
            email: newUser.email,
            role: newUser.role,
        }, JWT_SECRET, { expiresIn: '7d' });
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
            },
            token,
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'Registration failed' });
    }
};
exports.registerUser = registerUser;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Fetch user by email
        const user = await prismaClient_1.default.user.findUnique({
            where: { email },
            select: {
                id: true,
                password: true,
                email: true,
                name: true,
                executiveId: true,
                packageId: true,
                role: true,
                coins: true,
            },
        });
        if (!user) {
            res.status(401).json({ error: 'Invalid email or password' });
            return;
        }
        // Verify password
        const passwordMatch = await bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            res.status(401).json({ error: 'Invalid email or password' });
            return;
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({
            userId: user.id,
            email: user.email,
            role: user.role,
        }, JWT_SECRET, { expiresIn: '7d' });
        // Optionally set HttpOnly cookies or send token in response
        res.cookie('access-token', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 }); // 7 days
        // Exclude password from response
        const { password: _, ...userWithoutPassword } = user;
        res.status(200).json({ user: userWithoutPassword, token });
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'Login failed' });
    }
};
exports.login = login;
const verifyToken = (req, res) => {
    const token = req.cookies['access-token'] || req.headers.authorization?.split(' ')[1];
    if (!token) {
        res.status(401).json({ error: 'No token found' });
        return;
    }
    //@ts-ignore
    jsonwebtoken_1.default.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(403).json({ error: 'Invalid or expired token' });
            return;
        }
        res.json({ user: decoded });
    });
};
exports.verifyToken = verifyToken;
const logout = (req, res) => {
    res.clearCookie('access-token');
    res.json({ message: 'Logged out successfully' });
};
exports.logout = logout;
