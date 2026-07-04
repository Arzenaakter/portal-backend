require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = async () => {
  const mongoose = require("mongoose");
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};

const authRoutes = require("./routes/auth.routes");
const coursesRoutes = require("./routes/course.routes");
const contactRoutes = require("./routes/contact.routes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/contact", contactRoutes);

// Base Route
app.get("/", (req, res) => {
  res.send("Learning Platform API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
