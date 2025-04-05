const { Router } = require("express")
const courseRouter = Router();

// to purchase a course en dpoint
courseRouter.post("/purchase", function (req,res){

})

// current courses endpoint
courseRouter.get("/preview", function (req,res){
    res.json({
        message: "Course preview endpoint"
    })
})


module.exports = {
    courseRouter : courseRouter
}