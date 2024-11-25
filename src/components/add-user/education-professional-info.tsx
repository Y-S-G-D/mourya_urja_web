import React from 'react'
import { useForm , FormProvider} from 'react-hook-form'
import { FormLabel,FormField,FormItem,FormControl,FormMessage } from '../ui/form'
import { Input } from "../ui/input"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardHeader,CardTitle,CardContent } from '../ui/card'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select'
import { Button } from '../ui/button'


const educationalNdProfessionalSchema = z.object({
    highestEducation: z.string({message: 'Please enter your highest education'}),
    otherEducationalDetails: z.string({message: 'Please enter your other educational details'}),
    jobType: z.string({message: 'Please select your job type'}),
    designation: z.string({message: 'Please enter your designation'}),
    workDetails: z.string({message: 'Please enter your work details'}),
    income: z.number({message: 'Please enter your income'}),
})


const EducationNdProfessionalInfo = () => {
  const form = useForm<z.infer<typeof educationalNdProfessionalSchema>>({
    resolver: zodResolver(educationalNdProfessionalSchema),
    defaultValues: {
      highestEducation: '',
      otherEducationalDetails: '',
      jobType: '',
      designation: '',
      workDetails: '',
      income: 0,
    }

  })

  const onSubmit = (data: z.infer<typeof educationalNdProfessionalSchema>) => {
    console.log(data)
  }
  return (
    <FormProvider {...form}>
      <Card>
         <CardHeader>
            <CardTitle>Education & Profession Information</CardTitle>
         </CardHeader>
         <CardContent>
             <form  onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <div className='grid grid-cols-2 gap-8'>
                   <FormField
                     control={form.control}
                     name='highestEducation'
                     render={({field}) => (
                         <FormItem>
                            <FormLabel htmlFor='highestEducation'>Highest Education</FormLabel>
                            <FormControl>
                               <Input {...field} placeholder='Enter your highest education'/>
                            </FormControl>
                            <FormMessage>{form.formState.errors.highestEducation?.message}</FormMessage>
                         </FormItem>
                     )}
                  />
                  <FormField
                    control={form.control}
                    name='otherEducationalDetails'
                    render= {({ field}) => (
                       <FormItem>
                          <FormLabel htmlFor='otherEducationalDetails'>Other Educational Details</FormLabel>
                          <FormControl>
                              <Input {...field} placeholder='Enter your other educational details'/>
                          </FormControl>
                          <FormMessage>{form.formState.errors.otherEducationalDetails?.message}</FormMessage>
                       </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='jobType'
                    render={({field}) => (
                      <FormItem>
                         <FormLabel htmlFor='jobType'>Job Type</FormLabel>
                          <FormControl>
                              <Select 
                                defaultValue={field.value}
                                onValueChange={field.onChange}>
                                <SelectTrigger>
                                   <SelectValue placeholder="Select your job type"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='private'>Private</SelectItem>
                                    <SelectItem value='government'>Government</SelectItem>
                                    <SelectItem value='business'>Business</SelectItem>
                                    <SelectItem value='others'>Others</SelectItem>
                                </SelectContent>
                              </Select>

                          </FormControl>
                      </FormItem>
                        
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='designation'
                    render={({field}) => (
                       <FormItem>
                          <FormLabel htmlFor='designation'>Designation</FormLabel>
                          <FormControl>
                              <Input {...field} placeholder='Enter your designation'/>
                          </FormControl>
                          <FormMessage>{form.formState.errors.designation?.message}</FormMessage>
                       </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='workDetails'
                    render={({field}) => (
                       <FormItem>
                          <FormLabel htmlFor='workDetails'>Work Details</FormLabel>
                          <FormControl>
                              <Input {...field} placeholder='Enter your work details'/>
                          </FormControl>
                          <FormMessage>{form.formState.errors.workDetails?.message}</FormMessage>
                       </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='income'
                    render={({field}) => (
                       <FormItem>
                          <FormLabel htmlFor='income'>Income</FormLabel>
                          <FormControl>
                              <Input {...field} placeholder='Enter your income'/>
                          </FormControl>
                          <FormMessage>{form.formState.errors.income?.message}</FormMessage>
                       </FormItem>
                    )}
                  />




                  

                  

                   
                </div>
                <Button type='submit'>Save</Button>

             </form>
         </CardContent>

      </Card>

    </FormProvider>
  )
}

export default EducationNdProfessionalInfo
