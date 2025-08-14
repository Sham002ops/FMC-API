import express from "express";
import cors from "cors";

const app = express();

// Allow both localhost (dev) and your frontend URL (prod)
const allowedOrigins = [
  "http://localhost:5173",
  "https://finite-marshall-club1.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow server-to-server
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS blocked: Origin not allowed"));
    }
  },
  credentials: true
}));

app.options("*", cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running ✅" });
});

// Export for serverless or start directly
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
