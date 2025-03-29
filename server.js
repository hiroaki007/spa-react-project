import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://blackcoff0722:1S054pYMRdcRV5Nh@cluster0.s6i2q.mongodb.net/";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas に接続成功"))
  .catch((err) => console.log("❌ MongoDB 接続エラー:", err));
