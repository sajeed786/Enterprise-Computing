import express from "express"
import cors from "cors"
import path from "path"
import { fileURLToPath } from 'url';
import routes from "./Presentation_Layer/controllers/routes.js"

const app=express()
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/Presentation_Layer/public')));
app.use(express.static(path.join(__dirname, '/Presentation_Layer/views')));

app.use("/api/poll",routes);


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/Presentation_Layer/views/index.html'));
  });

app.use("*",(req,res)=>{
    res.status(404).json({error:"not found"});
})

const PORT=process.env.PORT||7000;

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
})