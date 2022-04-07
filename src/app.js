"use strict"

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./routes/home")

app.use("/",home); //use = 미들 웨어 등록해주는 매소드

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

module.exports = app;