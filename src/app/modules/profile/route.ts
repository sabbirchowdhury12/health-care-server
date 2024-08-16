import { Router } from 'express'
import { ProfileController } from './controller'

const router = Router()

router.get('/create-profile', ProfileController.createProfile)

export const profileRoutes = router
