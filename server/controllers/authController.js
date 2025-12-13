const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields required" });

  const emailExists = await User.findOne({ email });
  if (emailExists)
    return res.status(400).json({ message: "User already exists" });

  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    isAdmin,
  });

  res.status(201).json({
    message: "User registered",
    id : user._id ,
    token: generateToken(user._id),
    name,
    email,
    isAdmin,
  });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });

  const match = bcrypt.compareSync(password, user.password);

  if (!match) return res.status(400).json({ message: "Wrong password" });

  res.status(200).json({
    message: "Login success",
    token: generateToken(user._id),
    user,
  });
};

exports.privateController = (req, res) => {
  res.json({ message: "Private Route Accessed" });
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
