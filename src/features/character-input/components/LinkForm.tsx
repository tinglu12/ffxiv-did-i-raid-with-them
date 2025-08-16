import { useForm } from 'react-hook-form'
import { formSchema } from '../lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import type { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { FflogsField } from './FfflogsField'

const fflogsFields = [
  { name: 'firstFflogsLink', label: 'First FFLogs Link', description: 'This is your first FFLogs link.' },
  { name: 'secondFflogsLink', label: 'Second FFLogs Link', description: 'This is your second FFLogs link.' },
]
const LinkForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      firstFflogsLink: '',
      secondFflogsLink: '',
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        {fflogsFields.map((field) => (
          <FflogsField key={field.name} {...field} control={form.control} />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default LinkForm
