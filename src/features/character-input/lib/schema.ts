import { z } from 'zod'

export const formSchema = z.object({
  firstFflogsLink: z.string().min(0).max(255, {
    message: 'Link must be less than 255 characters',
  }),
  secondFflogsLink: z.string().min(0).max(255, {
    message: 'Link must be less than 255 characters',
  }),
})
