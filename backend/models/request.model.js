import mongoose from "mongoose"

const requestSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        clientName: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
        },
        email: {
            type: String,
        },
        requestType: {
            type: String,
            required: true
        },
        status: {
            type: String,
            default: "Nouveau"
        },
        internalNotes: {
            type: String,
            default: ""
        }
    }, {
    timestamps: true,
}
)

const Request = mongoose.model("Request", requestSchema)

export default Request