import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string({ required_error: "This field is required" }).email({
    message: "Invalid email",
  }),
  password: z.string({ required_error: "This field is required" }),
});
