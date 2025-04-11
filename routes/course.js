const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, courseModel } = require("../db");
const courseRouter = Router();

// to purchase a course en dpoint
courseRouter.post("/purchase", userMiddleware, async function (req,res){
    const userID = req.userID;
    const courseId = req.body.courseId

    await purchaseModel.create({
        userID,
        courseId
    })

    res.json({
        message: "You have successfully brought the course"
    })
})

// current courses endpoint
courseRouter.get("/preview", async function (req,res){

    const courses = await courseModel.find({})
    res.json({
        courses
    })
})


module.exports = {
    courseRouter : courseRouter
}