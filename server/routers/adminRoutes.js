const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuth");

const {
  addStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/adminController");

/* =======================
   ADMIN PROTECTED ROUTES
   Base URL: /api/admin
   ======================= */

// ➕ Add student (ADMIN ONLY)
router.post("/add-student", auth, adminAuth, addStudent);

// ✏️ Update student (ADMIN ONLY)
router.put("/update-student/:id", auth, adminAuth, updateStudent);

// ❌ Delete student (ADMIN ONLY)
router.delete("/delete-student/:id", auth, adminAuth, deleteStudent);

/* =======================
   READ ROUTES
   ======================= */

// 📋 Get all students
router.get("/students", auth, adminAuth, getStudents);

// 👤 Get single student
router.get("/student/:id", auth, adminAuth, getStudent);

module.exports = router;
