import express from "express"
import cors from "cors"
import routes from "./Presentation_Layer/controllers/routes.js"
const app=express()

app.use(cors())
app.use(express.json())
app.use(express.static("./frontend"));
app.use("/api/v1/poll",routes);
app.use("*",(req,res)=>{
    res.status(404).json({error:"not found"});
})

const PORT=process.env.PORT||8000;

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
})