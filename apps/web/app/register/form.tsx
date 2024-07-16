"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@repo/ui";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui";
import { Input } from "@repo/ui";
import { toast } from "@repo/ui";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  role:z.string(),
});

type FormData = z.infer<typeof FormSchema>;

export default function FormPage() {
    const router = useRouter();


  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      role:""
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("Submitting form", data);

    const { email: email, password ,role } = data;

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password,role }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Process response here
      console.log("Registration Successful", response);
      toast({ title: "Registration Successful" });
      router.push("/");
    } catch (error: any) {
      console.error("Registration Failed:", error);
      toast({ title: "Registration Failed", description: error.message });
    }
  };

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>

            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} type="password" />
              </FormControl>
            </FormItem>
          )}
        />
             <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              
              <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
      <SelectTrigger className="w-full">
   
        <SelectValue placeholder="Select a role" />
      </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectGroup>
          <SelectLabel {...field}>Roles</SelectLabel>
          <SelectItem value="Teacher" >Teacher</SelectItem>
          <SelectItem value="Admin" >Admin</SelectItem>
          <SelectItem value="Student" >Student</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
       
             
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">Submit</Button>
      </form>
    </Form>
  );
}