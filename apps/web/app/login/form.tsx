"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@repo/ui";
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

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

type FormData = z.infer<typeof FormSchema>;

export default function LoginForm() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("Submitting form", data);

    const { email, password } = data;

    try {
      const response: any = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log({ response });
      if (!response?.error) {
        router.push("/");
        router.refresh();
      }

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Process response here
      console.log("Login Successful", response);
      toast({ title: "Login Successful" });
    } catch (error: any) {
      console.error("Login Failed:", error);
      toast({ title: "Login Failed", description: error.message });
    }
  };

  return (
    <Form {...form} >
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full p-4 md:p-16 flex flex-col items-center justify-center gap-y-6"
      >
        <FormField 
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="w-full"
                  placeholder="Enter your email"
                  {...field}
                  type="text"
                />
              </FormControl>
              <FormDescription>
                Demo user:Dell.Padberg@hotmail.com
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className=" w-full"
                  placeholder="Enter the password"
                  {...field}
                  type="password"
                />
              </FormControl>
              <FormDescription>
                Demo password:admin@123
              </FormDescription>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="hover:scale-110 bg-blue-700 hover:bg-blue-800 w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Login" : "Login"}
        </Button>
      </form>
    </Form>
  );
}