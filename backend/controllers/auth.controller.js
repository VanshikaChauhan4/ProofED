import Institute from "../models/Institute.js"

export const login=async(req,res)=>{
const {email,password}=req.body
const inst=await Institute.findOne({email,password})
if(!inst)return res.status(401).json({error:"invalid"})
res.json({name:inst.name})
}
