import mongoose from "mongoose";

const requestTypeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    }, { timestamps: true }
)
requestTypeSchema.index({ name: 1, userId: 1 }, { unique: true })

const RequestType = mongoose.model("RequestType", requestTypeSchema)

export default RequestType;