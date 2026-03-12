import express from "express"
import cors from "cors" 
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import authRoutes from "./routes/auth.routes.js"
import requestRoutes from "./routes/request.routes.js"
import requestTypeRoutes from "./routes/request-type.routes.js"

dotenv.config()

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

connectDB()

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/requests", requestRoutes)
app.use("/api/request-types", requestTypeRoutes)

// Lancer le server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})