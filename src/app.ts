import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/router'
const app: Application = express()

// Middlewares
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  }),
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', router)
// Test Route
app.get('/test', async (req: Request, res: Response) => {
  res.json('The AutoX server is on 🔥 💧 🔥')
})

export default app
