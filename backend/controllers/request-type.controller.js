import RequestType from "../models/request-type.model.js"

export const createRequestType = async (req, res) => {
    try {
        const { name } = req.body
        const userId = req.user._id

        if (!name || name.trim() === "") {
            return res.status(400).json({ message: "Name is required" })
        }

        const isExisting = await RequestType.findOne({ name, userId })
        if (isExisting) {
            return res.status(400).json({ message: "Request type already exists" })
        }

        const newRequestType = new RequestType({
            name,
            userId
        })

        await newRequestType.save()
        return res.status(201).json({ message: "Request type created successfully", requestType: newRequestType })
    } catch (error) {
        return res.status(500).json({ message: "Error creating request type" })
    }
}

export const getAllRequestTypes = async (req, res) => {
    try {
        const userId = req.user._id

        const requestTypes = (await RequestType.find({ userId })).sort({ createdAt: 1 })
        return res.status(200).json(requestTypes)
    } catch (error) {
        return res.status(500).json({ message: "Error fetching request types" })
    }
}