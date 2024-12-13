import React,{useEffect} from 'react'
import { FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { useForm } from 'react-hook-form'
import { Checkbox } from './ui/checkbox'
import { restrictedPaths } from '@/models/restricted-path-model'
import {useRestrictionPathStore} from '@/stores/restriction-path-store'




const PageSelectionCheckbox = () => {
    const form = useForm({
        defaultValues:{
            pages: [] as string[]
        }
    })

    const {selectedPaths,addSelectedPath,removeSelectedPath} = useRestrictionPathStore();

    useEffect(()=>{
        form.setValue('pages',selectedPaths);
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
              {restrictedPaths.map((item) => (
                <FormField
                  key={item.path}
                  control={form.control}
                  name="pages"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.path}
                        className='flex flex-row items-center space-x-2'
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.path)}
                            onCheckedChange={(checked) => {
                              
                              if(checked){
                                  addSelectedPath(item.path)
                              }else{
                                  removeSelectedPath(item.path)
                              }

                              return checked
                                ? field.onChange([...(field.value as string[]), item.path])
                                : field.onChange(
                                    (field.value as string[])?.filter(
                                      (value: string) => value !== item.path
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal pb-2 text-center">
                          {item.title}
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
