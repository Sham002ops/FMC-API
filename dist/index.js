"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Auth Routes
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const executive_routes_1 = __importDefault(require("./routes/executive.routes"));
const package_routes_1 = __importDefault(require("./routes/package.routes"));
const webinar_routes_1 = __importDefault(require("./routes/webinar.routes"));
app.use((0, cors_1.default)({
    origin: 'http://localhost:8080',
    credentials: true
}));
app.use('/auth', auth_routes_1.default);
app.use('/executive', executive_routes_1.default);
app.use('/package', package_routes_1.default);
app.use('/webinar', webinar_routes_1.default);
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
