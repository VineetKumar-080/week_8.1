const { Router } = require("express")
const adminRouter = Router();

adminRouter.use(adminMiddleware)

adminRouter.post("/signup", function (req,res){
    res.json({
        message: "signup endpoint"
    })
})


adminRouter.post("/signin", function (req,res){
    res.json({
        message: "signup endpoint"
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