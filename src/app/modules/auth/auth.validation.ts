import { z } from 'zod'

export const ZLogin = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required!' }).email(),
    password: z.string({ required_error: 'Password is required!' }),
  }),
})
export const ZRegister = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required!' }),
    email: z.string({ required_error: 'Email is required!' }).email(),
    password: z.string({ required_error: 'Password is required!' }),
    image: z.string().optional(),
  }),
})

export const AuthValidation = {
  ZRegister,
  ZLogin,
}
