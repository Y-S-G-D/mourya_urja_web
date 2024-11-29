import React from 'react';
import { useForm, FormProvider, FieldValues } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { userContactSchema } from '@/schema/user-contact-schema';
import useUserStore from '@/stores/user-store'; 
import { IContactInfo , IAddress } from '@/models/user-model';


const ContactInfo = ({isEditing}:{isEditing:boolean}) => {
  const { contactInfo, residenceInfo , permanentInfo,saveAllContactInfo} = useUserStore();

  const form = useForm({
    resolver: zodResolver(userContactSchema),
    defaultValues: {
      phoneNumber: contactInfo.phoneNumber ||'',
      email: contactInfo.email || '',
      residenceAddress: {
        address: residenceInfo.address|| '',
        locality: residenceInfo.locality || '',
        city: residenceInfo.city || '',
        district: residenceInfo.district || '',
        state:residenceInfo.state || '',
        pincode: residenceInfo.pincode || ''
      },
      permanentAddress: {
        address: permanentInfo.address || '',
        locality: permanentInfo.address || '',
        city: permanentInfo.city || '',
        district: permanentInfo.district || '',
        state: permanentInfo.state || '',
        pincode: permanentInfo.pincode ||''
      },
      copyAddress: false
    }
  });

  const watchCopyAddress = form.watch('copyAddress');

  const onSubmit = (data: FieldValues) => {
    console.log('Submitting contact info form');
    console.log(data);
    const contacts: IContactInfo = {
      phoneNumber: data.phoneNumber,
      email: data.email
    };
    const residentialAddress: IAddress = {
      address: data.residenceAddress.address,
      locality: data.residenceAddress.locality,
      city: data.residenceAddress.city,
      district: data.residenceAddress.district,
      state: data.residenceAddress.state,
      pincode: data.residenceAddress.pincode
    }
    const permanentAddress: IAddress = {
      address: data.permanentAddress.address,
      locality: data.permanentAddress.locality,
      city: data.permanentAddress.city,
      district: data.permanentAddress.district,
      state: data.permanentAddress.state,
      pincode: data.permanentAddress.pincode
    }
    saveAllContactInfo(contacts, residentialAddress, permanentAddress);

  };

  React.useEffect(() => {
    if (watchCopyAddress) {
      const residenceAddress = form.watch('residenceAddress');
      form.setValue('permanentAddress', residenceAddress);
    }
  }, [watchCopyAddress, form]);

  return (
    <FormProvider {...form}>
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} id="phoneNumber" placeholder="Enter Phone Number" />
                    </FormControl>
                    <FormMessage>{form.formState.errors.phoneNumber?.message}</FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input {...field} id="email" placeholder="Enter Email" readOnly = {isEditing} />
                    </FormControl>
                    <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Residence Address</h3>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="residenceAddress.address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="residenceAddress.address">Address</FormLabel>
                      <FormControl>
                        <Input {...field} id="residenceAddress.address" placeholder="Enter Residence Address" />
                      </FormControl>
                      <FormMessage>{form.formState.errors.residenceAddress?.address?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="residenceAddress.locality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="residenceAddress.locality">Locality</FormLabel>
                      <FormControl>
                        <Input {...field} id="residenceAddress.locality" placeholder="Enter Locality" />
                      </FormControl>
                      <FormMessage>{form.formState.errors.residenceAddress?.locality?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="residenceAddress.city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="residenceAddress.city">City</FormLabel>
                      <FormControl>
                        <Input {...field} id="residenceAddress.city" placeholder="Enter City" />
                      </FormControl>
                      <FormMessage>{form.formState.errors.residenceAddress?.city?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="residenceAddress.district"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="residenceAddress.district">District</FormLabel>
                      <FormControl>
                        <Input {...field} id="residenceAddress.district" placeholder="Enter District" />
                      </FormControl>
                      <FormMessage>{form.formState.errors.residenceAddress?.district?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="residenceAddress.state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="residenceAddress.state">State</FormLabel>
                      <FormControl>
                        <Input {...field} id="residenceAddress.state" placeholder="Enter State" />
                      </FormControl>
                      <FormMessage>{form.formState.errors.residenceAddress?.state?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="residenceAddress.pincode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="residenceAddress.pincode">Pincode</FormLabel>
                      <FormControl>
                        <Input {...field} id="residenceAddress.pincode" placeholder="Enter Pincode" />
                      </FormControl>
                      <FormMessage>{form.formState.errors.residenceAddress?.pincode?.message}</FormMessage>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FormField
                control={form.control}
                name="copyAddress"
                render={({ field }) => (
                  <FormItem className="flex items-center">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
                      />
                    </FormControl>
                    <FormLabel className="ml-2">Same as Residence Address</FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Permanent Address</h3>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="permanentAddress.address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="permanentAddress.address">Address</FormLabel>
                      <FormControl>
                        <Input {...field} id="permanentAddress.address" placeholder="Enter Permanent Address" />
                      </FormControl>
                      <FormMessage>{form.formState.errors.permanentAddress?.address?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="permanentAddress.locality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="permanentAddress.locality">Locality</FormLabel>
                      <FormControl>
                        <Input {...field} id="permanentAddress.locality" placeholder="Enter Locality" />
                      </FormControl>
                      <FormMessage>{form.formState.errors.permanentAddress?.locality?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="permanentAddress.city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="permanentAddress.city">City</FormLabel>
                      <FormControl>
                        <Input {...field} id="permanentAddress.city" placeholder="Enter City" />
                      </FormControl>
                      <FormMessage>{form.formState.errors.permanentAddress?.city?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="permanentAddress.district"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="permanentAddress.district">District</FormLabel>
                      <FormControl>
                        <Input {...field} id="permanentAddress.district" placeholder="Enter District" />
                      </FormControl>
                      <FormMessage>{form.formState.errors.permanentAddress?.district?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="permanentAddress.state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="permanentAddress.state">State</FormLabel>
                      <FormControl>
                        <Input {...field} id="permanentAddress.state" placeholder="Enter State" />
                      </FormControl>
                      <FormMessage>{form.formState.errors.permanentAddress?.state?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="permanentAddress.pincode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="permanentAddress.pincode">Pincode</FormLabel>
                      <FormControl>
                        <Input {...field} id="permanentAddress.pincode" placeholder="Enter Pincode" />
                      </FormControl>
                      <FormMessage>{form.formState.errors.permanentAddress?.pincode?.message}</FormMessage>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit">Save</Button>
          </form>
        </CardContent>
      </Card>
    </FormProvider>
  );
};

export default ContactInfo;
