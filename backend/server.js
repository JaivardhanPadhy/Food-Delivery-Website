import express from "express";
import cors from "cors";
import foodRouter from "./routes/foodRoute.js";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//  app config
const app = express();
const port = 5001;

// middleware
app.use(express.json());
app.use(cors());

// DB
connectDB();

// API endpoint
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// to access images at /images/image_name
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on port : ${port}`);
});
