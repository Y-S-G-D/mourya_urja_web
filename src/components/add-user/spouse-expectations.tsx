import React from 'react'
import { Card, CardHeader, CardTitle, CardContent} from '../ui/card'
import { useForm, FormProvider, FieldValues } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../ui/button'
import { spouseExpectationsSchema } from '@/schema/spouse-expectations-schema'
import { FormField, FormItem, FormMessage,FormControl } from '../ui/form'
import { Textarea } from '../ui/textarea'
import useUserStore from '@/stores/user-store'
import { useToast } from '@/hooks/use-toast'


const SpouseExpectations = () => {
  const { toast } = useToast()
  const { spouseExpectation , addSpouseInfo } = useUserStore()
  
  const form = useForm({
        resolver: zodResolver(spouseExpectationsSchema),
        defaultValues: {
            spouseExpectations: spouseExpectation || ''
        }
    })

    const onSubmit = (data: FieldValues) => {
        addSpouseInfo(data.spouseExpectations as unknown as string)
        toast({
            variant: "success",
            title:"Saved",
            description: 'Spouse Expectations saved successfully',
        })
    }
  return (
    <FormProvider {...form}>
        <Card>
            <CardHeader>
            <CardTitle>Spouse Expectations</CardTitle>
            </CardHeader>
            <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
                    control={form.control}
                    name='spouseExpectations'
                    render={({field}) => (
                       <FormItem>
                         <FormControl>
                           <Textarea  {...field}  placeholder='Enter your spouse expectations' />
                         </FormControl>
                         <FormMessage>{form.formState.errors.spouseExpectations?.message}</FormMessage>
                       </FormItem>
                    )}
                   />
                <Button 
                  type='submit'>Save</Button>
            </form>
            </CardContent>
        </Card>    
    </FormProvider>
  )
}

export default SpouseExpectations
