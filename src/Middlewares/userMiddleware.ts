import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload }  from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string, JWT_SECRET)
    if (decoded) {
        if (typeof decoded === "string") {
            res.status(403).json({
                message: "You are logged in"
            })
            return;    
        }
        // @ts-ignore
        req.userId = (decoded as JwtPayload).id;
        next()
    } else {
        res.status(403).json({
            message: "You are not authorized "
        })
    }
}