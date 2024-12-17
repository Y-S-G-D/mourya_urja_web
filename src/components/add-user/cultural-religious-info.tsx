import React from 'react'
import { Card, CardHeader, CardTitle, CardContent} from '../ui/card'
import { useForm,FormProvider, FieldValues } from 'react-hook-form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FormField ,FormLabel, FormItem , FormControl, FormMessage} from '../ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { culturalNdReligiousSchema } from '@/schema/cultural-religious-schema'
import useUserStore from '@/stores/user-store'
import { ICultureAndReligiousInfo } from '@/models/user-model'
import { useToast } from '@/hooks/use-toast'  

const CulturalNdReligiousInfo = ({isEditing}:{isEditing:boolean}) => {
  const {toast} = useToast()
  const { addCultureAndReligiousInfo,cultureAndReligiousInfo ,handleNext,handleBack} = useUserStore()

  const form = useForm({
      resolver: zodResolver(culturalNdReligiousSchema),
      defaultValues: {
        religion: cultureAndReligiousInfo.religion || '',
        caste:cultureAndReligiousInfo.caste || '',
        subCaste: cultureAndReligiousInfo.subCaste || '',
        gotra: cultureAndReligiousInfo.gotra || '',
        raasi: cultureAndReligiousInfo.raasi || '',
      }
  })

  const onSubmit = (data: FieldValues) => {
    addCultureAndReligiousInfo(data as ICultureAndReligiousInfo)
    toast({
      variant: "success",
      title:"Saved",
      description: 'Cultural & Religious Information saved successfully',
    })
    handleNext()

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
              <div className="space-x-6 ">
              <Button className="w-24" type="submit">
                Save
              </Button>
              {isEditing?<></>:<Button variant={"secondary"} onClick={handleBack}>
                Back
              </Button>}
            </div>
           </form>
         </CardContent>
       </Card>

    </FormProvider>
    
  )
}

export default CulturalNdReligiousInfo
