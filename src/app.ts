import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
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

// Test Route
app.get('/test', async (req: Request, res: Response) => {
  res.json('The AutoX server is on 🔥 💧 🔥')
})

export default app
