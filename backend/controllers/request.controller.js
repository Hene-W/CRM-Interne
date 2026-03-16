import Request from "../models/request.model.js"
import RequestType from "../models/request-type.model.js"

export const createRequest = async (req, res) => {
    try {
        const { clientName, firstName, email, requestType, status, internalNotes } = req.body
        const userId = req.user._id
        let type = null

        if (!clientName) {
            return res.status(400).json({ message: "Certains champs obligatoire sont manquants" })
        }
        if (requestType) {
            type = await RequestType.findOne({ _id: requestType, userId })
            if (!type) {
                return res.status(400).json({ message: "Invalid request type" })
            }

        }

        const newRequest = new Request({
            userId,
            clientName,
            firstName,
            email,
            requestType: type ? type._id : null,
            status,
            internalNotes
        })

        await newRequest.save()
        await newRequest.populate("requestType", "name")
        return res.status(201).json({ message: "Request created successfully", request: newRequest })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getAllRequests = async (req, res) => {
    try {
        const userId = req.user._id;

        const requests = await Request.find({ userId })
            .populate("requestType", "name")
            .sort({ createdAt: -1 })
        return res.status(200).json(requests)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getRequest = async (req, res) => {
    try {
        const id = req.params.id

        const request = await Request.findOne({ _id: id, userId: req.user._id }).populate("requestType", "name")

        if (!request) {
            return res.status(404).json({ message: "Request not found" })
        }

        res.status(200).json(request)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateRequest = async (req, res) => {
    try {
        const id = req.params.id
        const { clientName, firstName, email, requestType, status, internalNotes } = req.body
        const userId = req.user._id

        const request = await Request.findOne({ _id: id, userId })

        if (!request) {
            return res.status(404).json({ message: "Request not found" })
        }

        const updateData = {}
        if (clientName !== undefined) updateData.clientName = clientName
        if (firstName !== undefined) updateData.firstName = firstName
        if (email !== undefined) updateData.email = email
        if (status !== undefined) updateData.status = status
        if (internalNotes !== undefined) updateData.internalNotes = internalNotes

        if (requestType !== undefined) {
            if (requestType) {
                const type = await RequestType.findOne({ _id: requestType, userId })
                if (!type) {
                    return res.status(400).json({ message: "Invalid request type" })
                }
                updateData.requestType = type._id
            } else {
                updateData.requestType = null
            }
        }

        const updatedRequest = await Request.findOneAndUpdate(
            { _id: id, userId },
            updateData,
            { returnDocument: "after", runValidators: true }
        ).populate("requestType", "name")

        if (!updatedRequest) {
            return res.status(404).json({ message: "Request not found" })
        }

        return res.status(200).json({ message: "Request updated successfully", request: updatedRequest })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteRequest = async (req, res) => {
    try {
        const id = req.params.id

        const isDeleted = await Request.findOneAndDelete({ _id: id, userId: req.user._id })

        if (!isDeleted) {
            return res.status(404).json({ message: "Request not found" })
        }

        return res.status(200).json({ message: "Request deleted successfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}