require('dotenv').config();
const express = require("express");
const app = express();
const connectDb = require('./utils/db') 
app.use(express.json());

const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");

const errorMiddleware = require('./middleware/error-middleware');
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use(errorMiddleware)
const PORT = 5000;

connectDb().then( ()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port N0. ${PORT}`);
    })
}).catch((e)=>{
    console.log("server connection failed");
})

