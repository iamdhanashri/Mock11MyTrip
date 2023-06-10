
const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
 name:String,
 emailAddress:String,
 destination:String,
 noOfTravellers:Number,
 budgetPerPerson:Number
})

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}


