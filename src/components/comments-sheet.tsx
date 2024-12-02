'use client'
import React, { useCallback ,useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { SendHorizonal } from "lucide-react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import Person from "@/app/assets/person.jpeg";
import { Form, FormField, FormItem, FormControl, FormLabel } from "./ui/form";
import { FieldValues, useForm } from "react-hook-form";
import { useCommentStore } from "@/stores/comments-store";
import { IComment } from "@/models/comment-model";

const CommentsSection = ({userId,connectionId}:{userId:string | null ,connectionId:string | null}) => {
  
  const { addComment , getComments , comments } = useCommentStore();
  
  const fetchComments = useCallback( async () => {
    getComments();
  },[getComments]);

  useEffect(() => {
    fetchComments();
  },[fetchComments]);

  const form = useForm({
    defaultValues: {
      userId: userId,
      connectionId:connectionId,
      comment: "",
    },
  });

  const onSubmit = (data: FieldValues) => {
    addComment(data as IComment);
    form.reset()
  }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-4xl">Comments</SheetTitle>
        <SheetDescription>
          Feel free to leave your comments below. Click save when you&apos;re
          done.
        </SheetDescription>
      </SheetHeader>
      <div className="py-4">
        <Form {...form}>
          <form className="flex gap-4 items-center  " onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comments</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your comment here" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button 
              type="submit"
              className=" mt-7 rounded-full px-3 ml-4" variant={"secondary"}>
              <SendHorizonal />
            </Button>
          </form>
        </Form>
        {/* <Label>Comments</Label>
        <div className="flex my-2">
          <Input placeholder="Enter your comment here" />
          <Button className="rounded-full px-3 ml-4" variant={"secondary"}>
            <SendHorizonal />
          </Button>
        </div> */}
        <Separator className="my-4" />
        {
          comments.map((comment, index) => {
            // if(comment.userId === userId){
              return (
                <div key={index} className="flex gap-4  my-4 p-2 bg-accent rounded-lg ">
                  <Image
                    src={Person.src}
                    alt="Comment Image"
                    width={30}
                    height={20}
                    className="h-1/2"
                  />
                  <div>
                    <h1 className="text-sm font-medium text-primary">
                      @snehakashyap{" "}
                      <span className="text-[10px] font-light text-gray-500">
                        {" "}
                        ~ 10 days ago
                      </span>
                    </h1>
                    <p className="text-xs text-gray-600">
                      {comment.comment}
                    </p>
                  </div>
                </div>
              ) 
            // }
            // return <div key={index}></div>
          })
        }
        {/* <div className="flex gap-4 p-2 bg-accent rounded-lg ">
          <Image
            src={Person.src}
            alt="Comment Image"
            width={30}
            height={20}
            className="h-1/2"
          />
          <div>
            <h1 className="text-sm font-medium text-primary">
              @snehakashyap{" "}
              <span className="text-[10px] font-light text-gray-500">
                {" "}
                ~ 10 days ago
              </span>
            </h1>
            <p className="text-xs text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget nunc nec nisl congue ultricies.{" "}
            </p>
          </div>
        </div> */}
      </div>
      {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
    </SheetContent>
  );
};

export default CommentsSection;
