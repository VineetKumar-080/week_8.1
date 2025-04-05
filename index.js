const express = require("express")
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const app = express()

app.use("/api/v1/user", userRouter)
app.use("/api/v1/course", adminRouter)
app.use("/api/v1/admin", courseRouter)


app.listen(3000);
console.log("check");


