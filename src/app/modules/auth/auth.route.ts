import { Router } from 'express'
import { AuthController } from './auth.controller'
import validateRequest from '../../middlewares/validateRequest'
import { ZLogin, ZRegister } from './auth.validation'

const router = Router()

router
  .post('/register', validateRequest(ZRegister), AuthController.register)
  .post('/login', validateRequest(ZLogin), AuthController.login)

export const authRoutes = router
