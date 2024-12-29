import express from "express"
import colors from "colors"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRoutes from './routes/userRoutes.js'
import cookieParser from "cookie-parser"
import cloudinary from 'cloudinary'
import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
dotenv.config()
const app = express();

connectDB()

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
})

app.use(express.json());
app.use(cors())
app.use(cookieParser())


app.use('/api/v1/user',userRoutes)
app.use('/api/v1/product',productRoutes)
app.use('/api/v1/cat',categoryRoutes)
app.use('/api/v1/order',orderRoutes)




const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server running on ${process.env.PORT}`.bgMagenta.white);
})