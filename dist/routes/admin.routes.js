"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controlers_1 = require("../controllers/admin.controlers");
const router = (0, express_1.Router)();
router.get('/getallusers', admin_controlers_1.getAllUsers);
router.post('/registeradmin', admin_controlers_1.registerAdmin);
exports.default = router;
