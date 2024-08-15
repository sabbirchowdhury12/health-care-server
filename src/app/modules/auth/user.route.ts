import { Router } from 'express'
import { AuthController } from './user.controller'

const router = Router()

router.post('/register', AuthController.register)

export const authRoutes = router
