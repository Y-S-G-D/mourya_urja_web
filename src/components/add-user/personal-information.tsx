'use client'
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "../ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Input } from "../ui/input";
import {  FieldValues, FormProvider, useForm } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormMessage, FormControl } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
import { userPersonalInfoSchema } from "@/schema/user-personal-info-schema";
import { Button } from '../ui/button';
import ImageView from '@/components/add-user/image-view'; // Ensure the path is correct or create the module if it doesn't exist
import useUserStore from "@/stores/user-store";
import { IPersonalInfo } from "@/models/user-model";

const PersonalInformation = () => {

  const {personalInfo , addPersonalInfo} = useUserStore()

 

  const form = useForm({
    resolver: zodResolver(userPersonalInfoSchema),
    defaultValues: {
      firstName: personalInfo.firstName ||"",
      middleName: personalInfo.middleName ||"",
      lastName: personalInfo.lastName ||"",          
      gender:  personalInfo.gender || "male",
      dob: personalInfo.dob || "",
      bloodGroup: personalInfo.bloodGroup || "",
      height: personalInfo.height?.toString() || "",
      weight: personalInfo.weight?.toString() || "",
      complexion: personalInfo.complexion || "",
      hobbies: personalInfo.hobbies?.join(",") || "",
      aboutMe: personalInfo.aboutMe || "",
      profileImages: [] as string[],
    },
  });

 

  // React.useEffect(() => {
  //   const {
  //     firstName,
  //     middleName,
  //     lastName,
  //     gender,
  //     dob,
  //     bloodGroup,
  //     height,
  //     weight,
  //     complexion,
  //     hobbies,
  //     aboutMe,
  //     profileImages,
  //   } = personalInfo;

  //   form.reset({
  //     firstName,
  //     middleName,
  //     lastName,
  //     gender: gender as "male" | "female" | "other" | undefined,
  //     dob,
  //     bloodGroup,
  //     height: height?.toString() || "",
  //     weight: weight?.toString() || "",
  //     complexion,
  //     hobbies: hobbies?.join(",") || "",
  //     aboutMe,
  //     profileImages: (profileImages as string[]) || [],
  //   });
    
  // }, [form, personalInfo]);
  
  const onSubmit = (data: FieldValues) => {
    const hobbies = data.hobbies.split(",").map((hobby: string) => hobby.trim());
    data.hobbies = hobbies;
    const height = parseInt(data.height ?? "0");
    const weight = parseInt(data.weight?? "0");
    data.height = height;
    data.weight = weight;
    addPersonalInfo(data as IPersonalInfo)
  };

  
  return ( 
    <FormProvider {...form}>
    <Card className="my-6">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
       
          <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="firstName">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="firstName"
                        placeholder="Enter Full Name"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.firstName?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="middleName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="middleName">Middle Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="middleName"
                        placeholder="Enter Middle Name"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.middleName?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="lastName"
                        placeholder="Enter Last Name"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.lastName?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="gender">Gender</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.gender?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="dob">Date of Birth</FormLabel>
                    <FormControl>
                      <Input {...field} id="dob" type="date" />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.dob?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bloodGroup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="bloodGroup">Blood Group</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Blood Group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A+">A+</SelectItem>
                          <SelectItem value="A-">A-</SelectItem>
                          <SelectItem value="B+">B+</SelectItem>
                          <SelectItem value="B-">B-</SelectItem>
                          <SelectItem value="O+">O+</SelectItem>
                          <SelectItem value="O-">O-</SelectItem>
                          <SelectItem value="AB+">AB+</SelectItem>
                          <SelectItem value="AB-">AB-</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.bloodGroup?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="height">Height</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        id="height"
                        placeholder="Enter Height"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.height?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="weight">Weight</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        id="weight"
                        placeholder="Enter Weight"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.weight?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="complexion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="complexion">Complexion</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="complexion"
                        placeholder="Enter Complexion"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.complexion?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="hobbies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="hobbies">Hobbies</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      id="hobbies"
                      placeholder="Enter Hobbies"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.hobbies?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aboutMe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="aboutMe">About Me</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      id="aboutMe"
                      placeholder="Tell us about yourself"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.aboutMe?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
             <ImageView/>
            <Button type="submit">Save</Button>
             
          </form>
        
      </CardContent>
    </Card>
  </FormProvider>
  );
};

export default PersonalInformation;
