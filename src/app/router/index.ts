import { Router } from 'express'

import { authRoutes } from '../modules/auth/user.route'

const router = Router()

router.use('/auth', authRoutes)
router.get('/auth', async (req, res) => {
  res.send('hi')
})

export default router
