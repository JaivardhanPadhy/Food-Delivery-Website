import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Jaivardhan:252003@cluster0.ynucn.mongodb.net/food-del"
    )
    .then(() => console.log("MongoDB Connected"));
};
