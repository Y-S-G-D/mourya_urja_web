import { z } from "zod";
import { FieldValues, useForm, } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { siblingSchema } from "@/schema/sibling-schema";
import useUserStore from "@/stores/user-store";
import { ISibling } from "@/models/siblings-model";


type SiblingFormValues = z.infer<typeof siblingSchema>;

export default function AddSiblingFormDialog() {

  const { addSibling ,handleSiblingDialog } = useUserStore();

  const form = useForm<SiblingFormValues>({
    resolver: zodResolver(siblingSchema),
    defaultValues: {
      name: "",
      relation: "Brother",
      age: "0",
      ageRelation: "Younger",
      education: "",
      workDetails: "",
    },
  });

  const onSubmit = (data:FieldValues) => {
   
    const age = parseInt(data.age ?? "0");
    data.age = age;
    addSibling(data as ISibling);
    form.reset();
  
  };

  const onSave = (data: FieldValues) => { 
    addSibling(data as ISibling);
    handleSiblingDialog(false);
    form.reset();
  }

  return (
  <DialogContent className="sm:max-w-3xl">
  <DialogHeader>
    <DialogTitle>Add Sibling Information</DialogTitle>
    <DialogDescription>
      Provide sibling details. Click &quot;Save&quot; to update your profile or &quot;Save & Add More&quot; to add another sibling.
    </DialogDescription>
  </DialogHeader>

  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
      {/* Name and Relation in one row */}
      <div className="grid grid-cols-2 gap-4">
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter sibling's name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="relation"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Relation</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select relation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Brother">Brother</SelectItem>
                    <SelectItem value="Sister">Sister</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Age and Age Relation in one row */}
      <div className="grid grid-cols-2 gap-4">
        <FormField
          name="age"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter age"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="ageRelation"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Age Relation</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select age relation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Younger">Younger</SelectItem>
                    <SelectItem value="Elder">Elder</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Educational Details and Work Details in one row */}
      <div className="grid grid-cols-2 gap-4">
        <FormField
          name="education"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Educational Details</FormLabel>
              <FormControl>
                <Input placeholder="Enter education details" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="workDetails"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Work Details</FormLabel>
              <FormControl>
                <Input placeholder="Enter work details" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Footer */}
      <DialogFooter>
          <Button 
            onClick={form.handleSubmit(onSave)}
          type="button">Save</Button>
        
        <Button type="submit" variant="secondary" className="ml-2">
          Save & Add More
        </Button>
      </DialogFooter>
    </form>
  </Form>
</DialogContent>

  );
}
