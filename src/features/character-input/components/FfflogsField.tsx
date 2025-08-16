import { FormControl, FormLabel, FormField, FormMessage } from '@/components/ui/form'

import { FormDescription } from '@/components/ui/form'

import { FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const FflogsField = ({
  name,
  label,
  description,
  control,
}: {
  name: string
  label: string
  description: string
  control: any
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input placeholder="https://www.fflogs.com/character/..." {...field} className="w-full" />
        </FormControl>
        <FormDescription>{description}</FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
)
