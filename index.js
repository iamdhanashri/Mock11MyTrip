
const express=require("express")
const { dbConnection } = require("./configs/db")
const { userRouter } = require("./route/user.route")
const cors=require("cors")


const app=express()
app.use(express.json())

app.use(cors())



app.get("/",(req,res)=>{
    res.send("welcome");
})


app.use("/user",userRouter)


app.listen(8080,async()=>{
    try{
   await dbConnection
   console.log("connected to db")
    }
    catch(e){
   console.log("something went wrong")
    }
    console.log("listening port at 8080")
})