import React from 'react'
import { Card, CardHeader, CardTitle, CardContent} from '../ui/card'
import { useForm,FormProvider } from 'react-hook-form'
import { Textarea } from '../ui/textarea'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../ui/button'


const spouseExpectationsSchema = z.object({
    spouseExpectations: z.string({message: 'Spouse expectations is required'}).min(10, {message: 'Spouse expectations should be atleast 10 characters long'}).max(500, {message: 'Spouse expectations should not exceed 500 characters'})
})

const spouseExpectations = () => {
    const form = useForm<z.infer<typeof spouseExpectationsSchema>>({
        resolver: zodResolver(spouseExpectationsSchema),
        defaultValues: {
            spouseExpectations: '',
        }
    })

    const onSubmit = (data: z.infer<typeof spouseExpectationsSchema>) => {
        console.log(data)
    }
  return (
    <FormProvider {...form}>
        <Card>
            <CardHeader>
            <CardTitle>Spouse Expectations</CardTitle>
            </CardHeader>
            <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <Textarea placeholder='Enter your spouse expectations' />
                <Button type='submit'>Save</Button>
            </form>
            </CardContent>
        </Card>    
    </FormProvider>
  )
}

export default spouseExpectations
