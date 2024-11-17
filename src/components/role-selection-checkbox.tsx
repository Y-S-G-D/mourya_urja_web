import React from 'react'
import { FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { useForm } from 'react-hook-form'
import { Checkbox } from './ui/checkbox'


const authentications = [
    { id: 'read', name: 'Read' },
    { id: 'write', name: 'Write' },
    { id: 'delete', name: 'Delete' },

]
const RoleSelectionCheckbox = () => {
    const form = useForm({
        defaultValues:{
            authentications: [] as string[]
        }
    })
  return (
    <div>
      <FormField
        control={form.control}
        name="authentications"
        render={({  }) => (
          <FormItem>
            <FormLabel htmlFor="role">Permission</FormLabel>
            <div className='flex  flex-wrap  space-x-4'>
              {authentications.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="authentications"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className='flex flex-row items-center space-x-2'
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...(field.value as string[]), item.id])
                                : field.onChange(
                                    (field.value as string[])?.filter(
                                      (value: string) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal pb-2 text-center">
                          {item.name}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
            </div>
            {/* <FormMessage>{form.formState.errors.role?.message}</FormMessage> */}
          </FormItem>
        )}
      />
    </div>
  )
}

export default RoleSelectionCheckbox
