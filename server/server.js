const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConfig");
const path = require('path')


// Load env
dotenv.config();

// DB Connection
connectDB();

const app = express();


// Default Route
if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "/student-app/dist")));

    app.get("/", (req, res) =>
        res.sendFile(path.resolve(__dirname, "student-app", "dist", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running... (development mode)");
    });
}


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", require("./routers/authRoute"));
app.use("/api/admin", require("./routers/adminRoutes"));

// Error handler
const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
