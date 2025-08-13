"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const adminMiddleware = (req, res, next) => {
    const header = req.headers["authorization"];
    if (!header) {
        return res.status(401).json({ message: "Authorization header missing" });
    }
    try {
        const token = header.startsWith("Bearer ") ? header.slice(7) : header;
        console.log("token: ", token);
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        console.log(" decoded : ", decoded);
        if (decoded) {
            if (typeof decoded === "string") {
                res.status(403).json({
                    message: "You are logged in"
                });
                return;
            }
            // @ts-ignore
            req.userId = decoded.id;
            //@ts-ignore
            const role = decoded.role;
            console.log("user role : ", role);
            if (role !== 'ADMIN') {
                res.status(403).json({ error: 'Access denied.' });
                return;
            }
            next();
        }
        else {
            res.status(403).json({
                message: "You are not authorized"
            });
        }
    }
    catch (err) {
        res.status(403).json({ message: "Invalid or expired token" });
        console.log("error : ", err);
    }
};
exports.adminMiddleware = adminMiddleware;
