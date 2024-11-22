import React from 'react'
import { z } from 'zod'
import { Card, CardHeader, CardTitle, CardContent} from '../ui/card'
import { useForm,FormProvider } from 'react-hook-form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FormField ,FormLabel, FormItem , FormControl, FormMessage} from '../ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select'
import SiblingsInfo from './siblings-info'

const familyInfoSchema = z.object({
    fatherName: z.string({message: 'Father name is required'}),
    fatherOccupation: z.string({message: 'Father occupation is required'}),
    motherName: z.string({message: 'Mother name is required'}),
    motherOccupation: z.string({message: 'Mother occupation is required'}),
    noOfSiblings: z.number({message: 'Number of siblings is required'}),
    noOfBrothers: z.number({message: 'Number of brothers is required'}),
    noOfSisters: z.number({message: 'Number of sisters is required'}),
    familyType: z.string({message: 'Family type is required'}),
})  

const FamilyInfo = () => {
    const form = useForm<z.infer<typeof familyInfoSchema>>({
        resolver: zodResolver(familyInfoSchema),
        defaultValues: {
        fatherName: '',
        fatherOccupation: '',
        motherName: '',
        motherOccupation: '',
        noOfSiblings: 0,
        noOfBrothers: 0,
        noOfSisters: 0,
        familyType: '',
        }
    })

    const onSubmit = (data: z.infer<typeof familyInfoSchema>) => {
        console.log(data)
    }
  return (
    <FormProvider {...form}>
        <Card>
          <CardHeader>
             <CardTitle>Family Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
               <div className='grid grid-cols-2 gap-4'>
                  <FormField
                    control={form.control}
                    name='fatherName'
                    render={({field}) => (
                       <FormItem>
                         <FormLabel>Father Name</FormLabel>
                         <FormControl>
                           <Input {...field}  placeholder='Enter your father name'/>
                         </FormControl>
                         <FormMessage>{form.formState.errors.fatherName?.message}</FormMessage>
                       </FormItem>
                    )}
                   />
                   <FormField
                     control={form.control}
                     name='fatherOccupation'
                     render={({field}) => (
                         <FormItem>
                           <FormLabel>Father Occupation</FormLabel>
                           <FormControl>
                             <Input {...field}  placeholder='Enter your father occupation'/>
                           </FormControl>
                           <FormMessage>{form.formState.errors.fatherOccupation?.message}</FormMessage>
                         </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='motherName'
                      render={({field}) => (
                          <FormItem>
                            <FormLabel>Mother Name</FormLabel>
                            <FormControl>
                              <Input {...field}  placeholder='Enter your mother name'/>
                            </FormControl>
                            <FormMessage>{form.formState.errors.motherName?.message}</FormMessage>
                          </FormItem>
                       )}
                     />
                     <FormField
                       control={form.control}
                       name='motherOccupation'
                       render={({field}) => (
                           <FormItem>
                             <FormLabel>Mother Occupation</FormLabel>
                             <FormControl>
                               <Input {...field}  placeholder='Enter your mother occupation'/>
                             </FormControl>
                             <FormMessage>{form.formState.errors.motherOccupation?.message}</FormMessage>
                           </FormItem>
                        )}
                      />
                      {/* <FormField
                        control={form.control}
                        name='noOfSiblings'
                        render={({field}) => (
                            <FormItem>
                              <FormLabel>Number of Siblings</FormLabel>
                              <FormControl>
                                <Input {...field}  type='number' placeholder='Enter number of siblings'/>
                              </FormControl>
                              <FormMessage>{form.formState.errors.noOfSiblings?.message}</FormMessage>
                            </FormItem>
                            )}
                        />
                        <FormField
                          control={form.control}
                          name='noOfBrothers'
                          render={({field}) => (
                              <FormItem>
                                <FormLabel>Number of Brothers</FormLabel>
                                <FormControl>
                                  <Input {...field}  type='number' placeholder='Enter number of brothers'/>
                                </FormControl>
                                <FormMessage>{form.formState.errors.noOfBrothers?.message}</FormMessage>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name='noOfSisters'
                            render={({field}) => (
                                <FormItem>
                                  <FormLabel>Number of Sisters</FormLabel>
                                  <FormControl>
                                    <Input {...field}  type='number' placeholder='Enter number of sisters'/>
                                  </FormControl>
                                  <FormMessage>{form.formState.errors.noOfSisters?.message}</FormMessage>
                                </FormItem>
                              )}
                            /> */}
                            <FormField
                              control={form.control}
                              name='familyType'
                              render={({field}) => (
                                  <FormItem>
                                    <FormLabel>Family Type</FormLabel>
                                    <FormControl>
                                        <Select 
                                           onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your family type"></SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value='Joint'>Joint</SelectItem>
                                                <SelectItem value='Nuclear'>Nuclear</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage>{form.formState.errors.familyType?.message}</FormMessage>
                                  </FormItem>
                                )}
                              />
                </div>
                <SiblingsInfo/>
                <Button type='submit'>Save</Button>
            </form>
            </CardContent>
        </Card>
       
    </FormProvider>
  )
}

export default FamilyInfo
