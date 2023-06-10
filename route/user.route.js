
const express=require("express");
const { UserModel } = require("../model/user.model");

const userRouter=express.Router();

// get or retrive
userRouter.get("/",async(req,res)=>{
const user= await UserModel.find()
res.send(user)
})

// post 
userRouter.post("/register",async(req,res)=>{
    const user= new UserModel(req.body)
    await user.save();
    res.send({msg:"user register successfully"})
})

// delete 
userRouter.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    const user=await UserModel.findOne({"_id":id});
    try{
    await UserModel.findByIdAndDelete({_id:id})
    res.send("user deleted successfully")
    }
    catch(e){
    res.send("something went wrong")
    }
})

module.exports={
    userRouter
}