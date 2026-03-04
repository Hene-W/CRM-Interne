import express from "express"
import cors from "cors" 
import dotenv from "dotenv"
import connectDB from "./config/db.js"

dotenv.config()

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Route de test
app.get('/', (req, res) => {
    res.json({messag: "Backend is working!"})
})

connectDB()

// Lancer le server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})