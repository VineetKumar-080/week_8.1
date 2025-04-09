const express = require("express")
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())

app.use("/api/v1/user", userRouter)
app.use("/api/v1/course", adminRouter)
app.use("/api/v1/admin", courseRouter)

async function main(){
    await mongoose.connect("mongodb+srv://Vineet_848:vineet_8.4e8@cluster0.o8botx2.mongodb.net/coursera-app")
    app.listen(3000);
    console.log("listening on port 3000");
    
}
main()

