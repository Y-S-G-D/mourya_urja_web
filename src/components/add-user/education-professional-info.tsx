import React from 'react'
import { useForm , FormProvider, FieldValues} from 'react-hook-form'
import { FormLabel,FormField,FormItem,FormControl,FormMessage } from '../ui/form'
import { Input } from "../ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardHeader,CardTitle,CardContent } from '../ui/card'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select'
import { Button } from '../ui/button'
import { educationalNdProfessionalSchema } from "@/schema/education-professional-schema"
import useUserStore from '@/stores/user-store'
import { IEducationalAndProfessionInfo } from '@/models/user-model'

const EducationNdProfessionalInfo = () => {
   const { eduAndProfInfo, addEduAndProfInfo } = useUserStore()

   const form = useForm({
      resolver: zodResolver(educationalNdProfessionalSchema),
      defaultValues: {
         highestEducation: eduAndProfInfo.highestEducation || '',
         otherEducation: eduAndProfInfo.otherEductionDetail || '',
         jobType: eduAndProfInfo.jobType || '',
         designation: eduAndProfInfo.designation || '',
         workDetails:eduAndProfInfo.workDetail || '',
         income: eduAndProfInfo.income.toString() || "",
      }
   })

   const onSubmit = (data: FieldValues) => {
      addEduAndProfInfo(data as IEducationalAndProfessionInfo)
   }

   return (
      <FormProvider {...form}>
         <Card>
             <CardHeader>
                  <CardTitle>Education & Profession Information</CardTitle>
             </CardHeader>
             <CardContent>
                   <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                        <div className='grid grid-cols-2 gap-8'>
                            <FormField
                               control={form.control}
                               name='highestEducation'
                               render={({field}) => (
                                     <FormItem>
                                          <FormLabel htmlFor='highestEducation'>Highest Education</FormLabel>
                                          <FormControl>
                                              <Input id='highestEducation' {...field} placeholder='Enter your highest education'/>
                                          </FormControl>
                                          <FormMessage>{form.formState.errors.highestEducation?.message}</FormMessage>
                                     </FormItem>
                               )}
                           />
                           <FormField
                              control={form.control}
                              name='otherEducation'
                              render= {({ field}) => (
                                  <FormItem>
                                       <FormLabel htmlFor='otherEducation'>Other Educational Details</FormLabel>
                                       <FormControl>
                                             <Input id='otherEducation' {...field} placeholder='Enter your other educational details'/>
                                       </FormControl>
                                       <FormMessage>{form.formState.errors.otherEducation?.message}</FormMessage>
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
                                                <SelectTrigger id='jobType'>
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
                                             <Input id='designation' {...field} placeholder='Enter your designation'/>
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
                                             <Input id='workDetails' {...field} placeholder='Enter your work details'/>
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
                                             <Input id='income' {...field} type='number' placeholder='Enter your income'/>
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
