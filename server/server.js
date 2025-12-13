const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConfig");

// Load env
dotenv.config();

// DB Connection
connectDB();

const app = express();

app.get("/" , (req,res) => {
    res.json({
        message :"WELLCOM TO STUDENT APIS"
    })
})

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
