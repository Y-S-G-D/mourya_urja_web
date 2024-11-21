import React from 'react'
import { FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { useForm } from 'react-hook-form'
import { Checkbox } from './ui/checkbox'


const pages = [
    { url: '/management/add-users', name: 'Add User' },
    { url: '/admin/users', name: 'Users'},
    { url: '/management/add-employee', name: 'Add Employee'},
]

const PageSelectionCheckbox = () => {
    const form = useForm({
        defaultValues:{
            pages: [] as string[]
        }
    })
  return (
    <div>
      <FormField
        control={form.control}
        name="pages"
        render={({  }) => (
          <FormItem>
            {/* <FormLabel htmlFor="role">Permission</FormLabel> */}
            <div className='flex  flex-wrap  space-x-4'>
              {pages.map((item) => (
                <FormField
                  key={item.name}
                  control={form.control}
                  name="pages"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.name}
                        className='flex flex-row items-center space-x-2'
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.name)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...(field.value as string[]), item.name])
                                : field.onChange(
                                    (field.value as string[])?.filter(
                                      (value: string) => value !== item.name
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

export default PageSelectionCheckbox
