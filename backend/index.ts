import express,{ Application } from "express";
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();

const app:Application = express()
app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 1000;
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})