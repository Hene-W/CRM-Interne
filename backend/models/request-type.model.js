import mongoose from "mongoose";

const requestTypeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    }, { timestamps: true }
)

const RequestType = mongoose.model("RequestType", requestTypeSchema)

export default RequestType;