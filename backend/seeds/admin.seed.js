import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import dotenv from "dotenv";
import connectDB from "../config/db.js"

dotenv.config()

const seedAdmin = async () => {
    try {
        await connectDB()

        const existingAdmin = await User.findOne({email: "sarahmartin@gmail.com"})
        if (existingAdmin) {
            console.log("Admin already exists");
            process.exit()
        }

        const hashedPassword = await bcryptjs.hash("123456", 10)

        await User.create({
            email: "sarahmartin@gmail.com",
            password: hashedPassword,
        })

        console.log("Admin created successfully");
        process.exit()
    } catch (error) {
        console.error("Seed error:", error);
        process.exit(1)
    }
}

seedAdmin()