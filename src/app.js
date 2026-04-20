import express from "express";
import cors from "cors";
import healthCheckRouter from "./routes/healthCheck.routes.js";
const  app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"));
app.use(cors({

    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:["Content-Type","Authorization"],
    
}))
app.use("/api/v1/healthCheck", healthCheckRouter);
app.get("/instagram",(req,res)=>{
    res.send("welcome to instagram");
});



export default app;
