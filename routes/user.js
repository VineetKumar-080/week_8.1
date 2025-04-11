// we can also create router like below:
// const express = require("express")
// const Router = express.Router;

// better approach is this one.
const { Router } = require("express")
const { userModel, purchaseModel, courseModel } = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_USER_PASSWORD} = require("../config");
const { userMiddleware } = require("../middleware/user");

const userRouter = Router();
// Router is a function, whereas it is a function  

    // Signup endpoint
    userRouter.post("/signup", async function (req,res){
        const { email, password, firstName, lastName } = req.body;

        await userModel.create({
            email : email,
            password : password,
            firstName : firstName,
            lastName : lastName,
        })
        res.json({
            message: "Signup succeeded"
        })
    })

    // Signin endpoint
    userRouter.post("/signin", async function (req,res){
        const {email,password} = req.body;

        // ideally password should be hashed, and hence we can't compare the user provided passwordk and the database password
        const user = await userModel.findOne({
            email: email,
            password : password,
        })

        if(user){
            const token = jwt.sign({
                id : user._id
            },JWT_USER_PASSWORD)

            // we can also user cookie logic over here.

            res.json({
                token : token,
            })
        }else{
            res.status(403).json({
                message: "Incorrect credentials"
            })
        }
        
    })

    // user purchased courses endpoint
    userRouter.get("/purchases", userMiddleware, async function (req,res){
        const userId = req.userId;
        const purchases = await purchaseModel.find({
            userId,
        })

        const courseData = await courseModel.find({
            _id: { $in: purchases.map(x => x.courseId)}
        })

        res.json({
            purchases,
            courseData
        })
    

})

module.exports = {
    userRouter: userRouter
}