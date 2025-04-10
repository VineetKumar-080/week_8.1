const { Router } = require("express")
const adminRouter = Router();
const { adminModel, courseModel } = require("../db")
const jwt = require("jsonwebtoken")
const { JWT_ADMIN_PASSWORD} = require("../config");
const { adminMiddleware } = require("../middleware/admin");

adminRouter.post("/signup", async function (req,res){
    const { email, password, firstName, lastName } = req.body;

    await adminModel.create({
        email : email,
        password : password,
        firstName : firstName,
        lastName : lastName,
    })
    res.json({
        message: "Signup succeeded"
    })
})


adminRouter.post("/signin", async function (req,res){
    const {email,password} = req.body;

    // ideally password should be hashed, and hence we can't compare the user provided passwordk and the database password
    const admin = await adminModel.findOne({
        email: email,
        password : password,
    })

    if(admin){
        const token = jwt.sign({
            id : admin._id
        },JWT_ADMIN_PASSWORD)

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


adminRouter.post("/course", adminMiddleware ,async function (req,res){
    const adminId = req.userID 

    const { title, description, imageUrl, price } =  req.body;

    const course = await courseModel.create({
        title : title,
        description : description, imageUrl : imageUrl,
        price : price,
        creatorId : adminId
    })
 

    res.json({
        message: "Course Created",
        courseId : course._id
    })
})

adminRouter.put("/course", function (req,res){
    res.json({
        message: "signup endpoint"
    })
})

// all the courses the admin has created 
adminRouter.get("/course/bulk", function (req,res){
    res.json({
        message: "signup endpoint"
    })
})

module.exports = {
    adminRouter : adminRouter
}