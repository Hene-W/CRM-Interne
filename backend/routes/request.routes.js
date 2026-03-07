import express from "express"
import authMiddleware from "../middlewares/auth.middleware.js"
import { createRequest, deleteRequest, getAllRequests, getRequest, updateRequest } from "../controllers/request.controller.js"

const router = express.Router()

router.post("/", authMiddleware, createRequest)
router.get("/", authMiddleware, getAllRequests)
router.get("/:id", authMiddleware, getRequest)
router.put("/:id", authMiddleware, updateRequest)
router.delete("/:id", authMiddleware, deleteRequest)

export default router