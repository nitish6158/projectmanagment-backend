import express from "express";
import cors from "cors";
const  app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"));
app.use(cors({

    origin:process.env.CORS_ORIGIN || "http://localhost:5173",
    Credentials:true,
    methods:["GET","POST","PUT","DELETE"],
    allowHeaders:["Content-Type","Authorization"],
    
}))
app.get("/instagram",(req,res)=>{
    res.send("welcome to instagram");
});



export default app;