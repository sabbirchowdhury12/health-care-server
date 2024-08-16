import { compare, hash } from 'bcrypt'
import config from '../config'

const hashPassword = async (password: string): Promise<string> => {
  return await hash(password, Number(config.bcrypt_salt_rounds))
}

const matchPassword = async (
  givenPassword: string,
  savedPassword: string,
): Promise<boolean> => {
  return await compare(givenPassword, savedPassword)
}

export { hashPassword, matchPassword }
