import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload }  from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
import { log } from "console";

export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    if (!header) {
            return res.status(401).json({ message: "Authorization header missing" });
        }

  try{    
    const token = header.startsWith("Bearer ") ? header.slice(7) : header;
    console.log("token: ", token);

    const decoded = jwt.verify(token, JWT_SECRET)
    console.log(" decoded : ", decoded);

    
    if (decoded) {
        if (typeof decoded === "string") {
            res.status(403).json({
                message: "You are logged in"
            })
            return;    
        }
        // @ts-ignore
        req.userId = (decoded as JwtPayload).id;
        //@ts-ignore
       const role = (decoded as JwtPayload).role

        console.log("user role : ", role);
        
        if ( role!== 'ADMIN') {
            res.status(403).json({ error: 'Access denied.' });
            return
        }
        next()
    } else {
        res.status(403).json({
            message: "You are not authorized"
        })
    }
}catch (err) {
    res.status(403).json({ message: "Invalid or expired token" });
     console.log("error : ", err);
  }}