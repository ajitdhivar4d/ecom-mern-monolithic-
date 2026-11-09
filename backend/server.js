import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import UserRoutes from "./routes/authRoutes.js";
import ProductRoutes from "./routes/productRoutes.js";
import OrderRoutes from "./routes/orderRoutes.js";
import PaymentRoutes from "./routes/paymentRoutes.js";
import AnalyticsRoutes from "./routes/analyticsRoutes.js";

import dns from "node:dns/promises";
import path from "node:path";
import { fileURLToPath } from "url";
// Or if using CommonJS: const dns = require('node:dns/promises');
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      process.env.FRONTEND_URL,
    ],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", UserRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);
app.use("/api/payments ", PaymentRoutes);
app.use("/api/analytics", AnalyticsRoutes);

// Production frontend
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist");

  app.use(express.static(frontendPath));

  // Handle React Router routes
  app.get("/{*splat}", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("ShopNest API is running in Development mode...");
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
