// we can also create router like below:
// const express = require("express")
// const Router = express.Router;

// better approach is this one.
const { Router } = require("express")

const userRouter = Router();

    // Signup endpoint
    userRouter.post("/signup", function (req,res){
        res.json({
            message: "signup endpoint"
        })
    })

    // Signin endpoint
    userRouter.post("/signin", function (req,res){

    })

    // user purchased courses endpoint
    userRouter.get("/purchases", function (req,res){

})


module.exports = {
    userRouter: userRouter
}