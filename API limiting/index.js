const express=require("express");
const app=express();
const port=1234
const posts=require("./posts")
const rateLimit = require('express-rate-limit')


const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	max: 10, // Limit each IP to 10 requests per `window` (here, per 1 minutes)
	// standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	// legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.get("/get",limiter,(req,res)=>{
    res.send({post:posts})
})

app.listen(port,()=>{
    console.log("listening on port",port)
})

