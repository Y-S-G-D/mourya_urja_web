"use client";

import React, { useEffect } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useEmployeeStore } from "@/stores/employee-store";
import { companyNames } from "@/shared/constant";
import { Label } from "./ui/label";
import PageSelectionCheckbox from "./page-selection-checkbox";
import { IEmployee } from "@/models/employee-model";
import { Replace } from "lucide-react"
import usePasswordStore from "@/stores/password-store";

const AddEmployeeForm = () => {
  const { employee, saveEmployee } = useEmployeeStore();
  const {generate12DigPassword } = usePasswordStore();

  // Initialize the form with defaultValues
  const form = useForm<IEmployee>({
    defaultValues: {
      employeeId: "",
      companyName: "",
      firstName: "",
      lastName: "",
      email: "",
      role: "employee",
      phoneNumber: "",
      designation: "",
      postingPlace: "",
      access: ["/addemployee"] as [(string | undefined)?],
      post: "",
      password: "",
    },
  });

  const updatePassword = ()=>{
    const newPassword = generate12DigPassword()
    form.setValue("password", newPassword)
  }

  // Handle form submission
  function onSubmit(values: FieldValues) {
    const employeeData: IEmployee = values as IEmployee;
    console.log(employeeData)
    // return;
    saveEmployee(employeeData);
  }

  // Populate form with employee data
  useEffect(() => {
    if (employee) {
      form.reset({
        employeeId: employee.employeeId || "",
        companyName: employee.companyName || "",
        firstName: employee.firstName || "",
        lastName: employee.lastName || "",
        email: employee.email || "",
        role: employee.role || "",
        phoneNumber: employee.phoneNumber || "",
        designation: employee.designation || "",
        postingPlace: employee.postingPlace || "",
        access: employee.access || [],
        post: employee.post || "",
        password: employee.password || "",
      });
    }
  }, [employee, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="py-4 space-y-4 px-8 border border-border shadow-sm rounded-lg"
      >
        <div className="grid grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="employeeId"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="employeeId">Employee ID</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="employeeId"
                    placeholder="Enter Employee ID"
                    type="text"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="companyName">Company Name</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Company Name"></SelectValue>
                      <SelectContent>
                        {companyNames.map((companyName, index) => {
                          return (
                            <SelectItem key={index} value={companyName.value}>
                              {companyName.label}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </SelectTrigger>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="firstName"
                    placeholder="Enter your First Name"
                    type="text"
                  />
                </FormControl>
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
                    placeholder="Enter your Last Name"
                    type="text"
                  />
                </FormControl>
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
                  <Input
                    {...field}
                    id="email"
                    placeholder="Enter your Email"
                    type="email"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="phoneNumber"
                    placeholder="Enter your Phone Number"
                    type="text"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="post"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="post">Post</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="post"
                    placeholder="Enter your Post"
                    type="text"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="designation"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="designation">Designation</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="designation"
                    placeholder="Enter your Designation"
                    type="text"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postingPlace"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="postingPlace">Posting Place</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="postingPlace"
                    placeholder="Enter your Posting Place"
                    type="text"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex items-center ">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter or generate your password"
                  
                  /> 
                </FormControl>
                <FormMessage>
                    {form.formState.errors.password?.message}
                  </FormMessage>
              </FormItem>
            )}
          />
          <Button 
            type="button"
            onClick={updatePassword}
            className="mt-8 mx-2"><Replace/></Button>
          </div>
        </div>

        <div>
          <Label>Page Access</Label>
          <div className="flex gap-4">
            <PageSelectionCheckbox />
          </div>
        </div>

        <div className="my-8 flex gap-4">
          <Button type="submit" className="w-28">
            Save
          </Button>
          <Button
            type="button"
            className="w-28"
            variant="secondary"
            onClick={() => form.reset()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddEmployeeForm;
