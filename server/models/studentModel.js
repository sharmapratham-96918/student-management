// models/studentModel.js
const mongoose = require("mongoose"); // ← ADD THIS LINE BACK!

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  rollNumber: { type: Number, required: true, unique: true },
  address: { type: String, required: true },
  class: { type: Number, required: true },
  subjects: [{ type: String }],
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model("Student", studentSchema);