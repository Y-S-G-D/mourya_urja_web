import React from 'react'
import { z } from 'zod'
import { Card, CardHeader, CardTitle, CardContent} from '../ui/card'
import { useForm,FormProvider } from 'react-hook-form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FormField ,FormLabel, FormItem , FormControl, FormMessage} from '../ui/form'
import { zodResolver } from '@hookform/resolvers/zod'


const culturalNdReligiousSchema = z.object({
  religion: z.string(),
  caste: z.string(),
  subCaste: z.string(),
  gotra: z.string(),
  raasi: z.string(),
})

const CulturalNdReligiousInfo = () => {
  const form = useForm<z.infer<typeof culturalNdReligiousSchema>>({
      resolver: zodResolver(culturalNdReligiousSchema),
      defaultValues: {
        religion: '',
        caste: '',
        subCaste: '',
        gotra: '',
        raasi: '',
      }
  })

  const onSubmit = (data: z.infer<typeof culturalNdReligiousSchema>) => {
    console.log(data)
  }
  return (
    <FormProvider {...form}>
       <Card>
         <CardHeader>
            <CardTitle>Cultural & Religious Information</CardTitle>
         </CardHeader>
         <CardContent>
           <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <div className='grid grid-cols-2 gap-4'>
                 <FormField
                   control={form.control}
                   name='religion'
                   render={({field}) => (
                      <FormItem>
                        <FormLabel>Religion</FormLabel>
                        <FormControl>
                          <Input {...field}  placeholder='Enter your religion'/>
                        </FormControl>
                        <FormMessage>{form.formState.errors.religion?.message}</FormMessage>
                      </FormItem>
                   )}
                  />
                  <FormField
                    control={form.control}
                    name='caste'
                    render={({field}) => (
                        <FormItem>
                          <FormLabel>Caste</FormLabel>
                          <FormControl>
                            <Input {...field}  placeholder='Enter your caste'/>
                          </FormControl>
                          <FormMessage>
                            {form.formState.errors.caste?.message}
                          </FormMessage>
                        </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='subCaste'
                    render={({field}) => (
                        <FormItem>
                          <FormLabel>Sub Caste</FormLabel>
                          <FormControl>
                            <Input {...field}  placeholder='Enter your sub caste'/>
                          </FormControl>
                          <FormMessage>
                            {form.formState.errors.subCaste?.message}
                          </FormMessage>
                        </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='gotra'
                    render={({field}) => (
                        <FormItem>
                          <FormLabel>Gotra</FormLabel>
                          <FormControl>
                            <Input {...field}  placeholder='Enter your gotra'/>
                          </FormControl>
                          <FormMessage>
                            {form.formState.errors.gotra?.message}
                          </FormMessage>
                        </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='raasi'
                    render={({field}) => (
                        <FormItem>
                          <FormLabel>Raasi</FormLabel>
                          <FormControl>
                            <Input {...field}  placeholder='Enter your raasi'/>
                          </FormControl>
                          <FormMessage>
                            {form.formState.errors.raasi?.message}
                          </FormMessage>
                        </FormItem>
                    )}
                  />

              </div>
              <Button type='submit'>
                Save
              </Button>
           </form>
         </CardContent>
       </Card>

    </FormProvider>
    
  )
}

export default CulturalNdReligiousInfo
