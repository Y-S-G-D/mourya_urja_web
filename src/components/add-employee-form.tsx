"use client";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import RoleSelectionCheckbox from "./role-selection-checkbox";

const AddEmployeeForm = () => {
  const form = useForm();
  function onSubmit(values: FieldValues) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="py-4 px-8 border border-border shadow-sm rounded-lg">
        <div className="grid grid-cols-2  gap-8">
          {/* <div className="col-span-1 space-y-6"> */}
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
                {/* <FormMessage>{form.formState.errors.firstname?.message}</FormMessage> */}
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
                    type="lastname"
                  />
                </FormControl>
                {/* <FormMessage>{form.formState.errors.lastname?.message}</FormMessage> */}
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
                    placeholder="Enter your email"
                    type="email"
                  />
                </FormControl>
                {/* <FormMessage>{form.formState.errors.email?.message}</FormMessage> */}
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
                        placeholder="Enter your phone number"
                        type="number"
                    />
                    </FormControl>
                    {/* <FormMessage>{form.formState.errors.phone?.message}</FormMessage> */}
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
                    placeholder="Enter your post"
                    type="text"
                  />
                </FormControl>
                {/* <FormMessage>{form.formState.errors.post?.message}</FormMessage> */}
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
                        placeholder="Enter your designation"
                        type="text"
                    />
                    </FormControl>
                    {/* <FormMessage>{form.formState.errors.phone?.message}</FormMessage> */}
                </FormItem>
                )}
                />
                <RoleSelectionCheckbox/>
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
                        placeholder="Enter your posting place"
                        type="text"
                    />
                    </FormControl>
                    {/* <FormMessage>{form.formState.errors.phone?.message}</FormMessage> */}
                </FormItem>
                )}
                />
        </div>
        <div className="my-8">
          <Button
            type="submit"
            className="w-28"
            onClick={form.handleSubmit(onSubmit)}
          >
            Save
          </Button>
          <Button
            type="submit"
            className="w-28 mx-4"
            variant={"secondary"}
            onClick={form.handleSubmit(onSubmit)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddEmployeeForm;
