import mongoose from 'mongoose'
import config from './config'
import app from './app'

async function dbConnect() {
  // let server: Server;

  try {
    await mongoose.connect(config.database_url as string)

    app.listen(config.port, () => {
      console.log(`app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('database connect failed', err)
  }
}

dbConnect()
