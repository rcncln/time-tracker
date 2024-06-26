
"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";

const signupSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

type SignupData = z.infer<typeof signupSchema>;

export function Signup() {
  const [formData, setFormData] = useState<SignupData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<SignupData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("form submitted");
    e.preventDefault();
    const result = signupSchema.safeParse(formData);
    if (!result.success) {
      setErrors(result.error.formErrors.fieldErrors);
    } else {
      // Handle successful form submission
      console.log("Form data:", result.data);
      // Reset form data and errors
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-gray-100 dark:bg-gray-950 h-screen flex justify-center flex-col">
        <div className="mx-auto max-w-md space-y-6  p-6 rounded-lg border bg-card text-card-foreground shadow-sm ">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Create your account to get started.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                {errors.firstName && <div>{errors.firstName}</div>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                type="password"
              />
            </div>
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
            <div className="mt-4 text-center text-sm">
              Already have an account? &nbsp;
              <Link className="underline" href="/signin">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
