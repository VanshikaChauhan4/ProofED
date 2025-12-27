import mongoose from "mongoose"

export default mongoose.model("Institute",new mongoose.Schema({
name:String,
email:String,
password:String
}))
