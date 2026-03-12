import express from 'express'
import authMiddleware from '../middlewares/auth.middleware.js'
import { createRequestType, getAllRequestTypes } from '../controllers/request-type.controller.js'

const router = express.Router()

router.post('/', authMiddleware, createRequestType)
router.get('/', authMiddleware, getAllRequestTypes)

export default router