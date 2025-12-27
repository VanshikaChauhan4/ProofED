import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import certRoutes from "./routes/cert.routes.js"
const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/proofed")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error(err));
app.use("/api/cert", certRoutes)

app.get("/", (req, res) => {
  res.send("🚀 ProofED Backend Running")
})

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000")
})
