"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prismaClient_1 = __importDefault(require("../prismaClient")); // Adjust path as needed
const router = express_1.default.Router();
// Create Package
router.post('/create-package', async (req, res) => {
    const { name, priceInCoins, validityDays } = req.body;
    try {
        const newPackage = await prismaClient_1.default.package.create({
            data: {
                name,
                priceInCoins,
                validityDays,
            },
        });
        res.status(201).json(newPackage);
    }
    catch (err) {
        res.status(400).json({ error: err.message || 'Failed to create package' });
    }
});
// Get all packages
router.get('/', async (_req, res) => {
    try {
        const packages = await prismaClient_1.default.package.findMany();
        res.status(200).json(packages);
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'Failed to fetch packages' });
    }
});
exports.default = router;
