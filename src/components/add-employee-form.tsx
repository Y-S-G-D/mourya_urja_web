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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import RoleSelectionCheckbox from "./role-selection-checkbox";
import { useEmployeeStore } from "@/stores/employee-store";

const AddEmployeeForm = () => {
  const { employee } = useEmployeeStore();

  // Initialize the form with defaultValues
  const form = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      role: "",
      phone: "",
      designation: "",
      posting: "",
      access: "",
      post: "",
    },
  });

  // Handle form submission
  function onSubmit(values: FieldValues) {
    console.log(values);
  }

  // Populate form with employee data
  useEffect(() => {
    if (employee) {
      form.reset({
        firstname: employee.firstName || "",
        lastname: employee.lastName || "",
        email: employee.email || "",
        role: employee.role || "",
        phone: employee.phoneNumber || "",
        designation: employee.designation || "",
        posting: employee.postingPlace || "",
        // access: employee.access || [],
        post: employee.post || "",
      });
    }
  }, [employee, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="py-4 px-8 border border-border shadow-sm rounded-lg"
      >
        <div className="grid grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="firstname">First Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="firstname"
                    placeholder="Enter your First Name"
                    type="text"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="lastname">Last Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="lastname"
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="phone"
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
          <RoleSelectionCheckbox />
          <FormField
            control={form.control}
            name="posting"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="posting">Posting Place</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="posting"
                    placeholder="Enter your Posting Place"
                    type="text"
                  />
                </FormControl>
              </FormItem>
            )}
          />
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