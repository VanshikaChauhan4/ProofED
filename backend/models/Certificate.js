import mongoose from "mongoose"

const certificateSchema = new mongoose.Schema({
  student: String,
  course: String,
  hash: String,
  blockHash: String,
  issuedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model("Certificate", certificateSchema)
