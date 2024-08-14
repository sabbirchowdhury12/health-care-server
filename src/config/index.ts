import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

const pnv = process.env

export default {
  env: pnv.NODE_ENV,
  port: pnv.PORT,
  database_url: process.env.DATABASE_URL,
  default_user_password: pnv.DEFAULT_USER_PASSWORD,
}
