
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const myRouter = require('./routes/myRouter');
const mongoose = require('mongoose');

;

mongoose.set('strictQuery', false);

app.use(morgan("dev"));

app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));
app.use('/api', myRouter);

//Agrego un enrutador compatible
app.use("/", myRouter);
module.exports = app;
