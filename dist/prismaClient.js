"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("./generated/prisma"); // adjust path if needed
const prisma = new prisma_1.PrismaClient();
exports.default = prisma;
