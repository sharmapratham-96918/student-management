const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`DB CONNECTION IS SUCCESS : ${conn.connection.name}`);
  } catch (error) {
    console.error(`DB CONNECTION IS FAILED : ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
