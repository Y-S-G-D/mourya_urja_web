"use client";
import React from "react";
// import bgImage from "@/app/assets/contact_bg.png";
import { useForm, FormProvider } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import contactFormSchema from "@/schema/contact-form-schema";

const ContactForm: React.FC = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <div
        className="relative my-8  bg-background w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        // style={{
        //   backgroundImage: `url(${bgImage.src})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        {/* <LoadingDialog isOpen={isSaving} />
      <SuccessDialog
        open={isSaved}
        onClose={() => {
          resetForm();
          reset();
        }}
        title="Success"
        message="Your message has been sent successfully"
      /> */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 p-8 rounded-lg lg:rounded-r-none">
            <div className="mb-8">
              <span className="bg-secondary text-primary px-4 py-2 rounded-full text-sm font-bold">
                CONTACT WITH US!
              </span>
              <h1 className="text-4xl font-bold mt-4 mb-2 text-darkcolor">
                Have Any Questions?
              </h1>
              <p className="text-onSurface max-w-2xl">
                Enthusiastically disintermediate one-to-one leadership via
                business e-commerce. Dramatically reintermediate compelling
                process improvements rather than empowered relationships.
              </p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="Enter Your Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors?.name?.message}
                      </FormMessage>
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
                          id="email"
                          type="email"
                          placeholder="Enter Your Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.email?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="subject">Subject</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Subject"></SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">
                              General Inquiry
                            </SelectItem>
                            <SelectItem value="support">Support</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                       </FormControl>
                      <FormMessage>
                        {form.formState.errors.subject?.message}
                      </FormMessage>
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
                          id="phoneNumber"
                          type="tel"
                          placeholder="Phone Number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.phoneNumber?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Write Your Message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.message?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-md font-bold hover:bg-secondary transition duration-300"
                >
                  Save
                </Button>
              </form>
            </Form>
          </div>
          <div className="hidden lg:block w-1/3 rounded-r-lg"></div>
        </div>
      </div>
    </FormProvider>
  );
};

export default ContactForm;
