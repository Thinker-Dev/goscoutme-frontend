import { z } from "zod";

export const SignUpSchema = z.object({
  firstName: z.string({
    required_error: "This field is required",
  }),
  lastName: z.string({
    required_error: "This field is required",
  }),
  email: z.string({ required_error: "This field is required" }).email({
    message: "Invalid email",
  }),
  password: z.string({ required_error: "This field is required" }).min(8, {
    message: "Password must contain alteast 8 characters",
  }),
});
