import { z } from "zod";

export const SignUpSchema = z.object({
  email: z.string({ required_error: "This field is required" }).email({
    message: "Invalid email",
  }),
  password: z.string({ required_error: "This field is required" }).min(8, {
    message: "Password must contain alteast 8 characters",
  }),
});
