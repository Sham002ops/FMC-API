import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export const executiveMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers["authorization"];
  if (!header) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  try {
    const token = header.startsWith("Bearer ") ? header.slice(7) : header;
    console.log("token: ", token);

    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    console.log("decoded : ", decoded);

    if (!decoded) {
      return res.status(403).json({ message: "You are not authorized" });
    }

    // Attach useful fields to req
    // @ts-ignore
    req.userId = decoded.executiveId || decoded.id;
    // @ts-ignore
    req.userRole = decoded.role;
    // @ts-ignore
    req.referralCode = decoded.referralCode;
// @ts-ignore
    console.log("user role : ", req.userRole);
// @ts-ignore
    if (req.userRole !== "EXECUTIVE") {
      return res.status(403).json({ error: "Access denied." });
    }

    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token" });
    console.log("error : ", err);
  }
};
