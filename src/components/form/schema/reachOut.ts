import { z } from "zod";

export const ReachOutSchema = z.object({
  email: z.string({ required_error: "This field is required" }).email({
    message: "Invalid email",
  }),
  name: z.string({ required_error: "This field is required" }),
  question: z.string({ required_error: "This field is required" }),
});
