const express = require("express")
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const app = express()

app.use("/api/v1/user", userRouter)
app.use("/api/v1/course", courseRouter)


app.listen(3000);

