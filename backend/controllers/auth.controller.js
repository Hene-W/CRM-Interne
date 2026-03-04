import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "Invalid email or password" })
        }

        const isMatch = await bcryptjs.compare(password, user.password)
        if (!isMatch) {
            return res.status(404).json({ message: "Invalid email or password" })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1week" })

        res.status(200).json({
            user: {
                id: user._id,
                email: user.email
            },
            token
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export const updatePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        const user = await User.findById(req.user._id)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        const isMatch = await bcryptjs.compare(currentPassword, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Current password is incorrect" })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(newPassword, salt)

        user.password = hashedPassword
        await user.save()

        res.status(200).json({ message: "Password updated successfully" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}