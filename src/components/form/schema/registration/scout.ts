import { z } from "zod";

export const ScoutRegistrationSchema = z.object({
  firstName: z.string({
    required_error: "This field is required",
  }),
  lastName: z.string({
    required_error: "This field is required",
  }),
  email: z.string({ required_error: "This field is required" }).email({
    message: "Invalid email",
  }),
  sex: z.string({
    required_error: "Required",
  }),
  birthday: z.string({
    required_error: "This field is required",
  }),
  nationality: z.string({
    required_error: "This field is required",
  }),
  citizenship: z.string({
    required_error: "This field is required",
  }),
  organization: z.string({
    required_error: "Please upload Club/Agency Certification ",
  }),
  organizationEmail: z.string({
    required_error: "This field is required",
  }),
  office: z.string({
    required_error: "This field is required",
  }),
  officePhone: z.string({
    required_error: "This field is required",
  }),
  officeMobile: z.string({
    required_error: "This field is required",
  }),
  otherAffiliations: z.string({
    required_error: "This field is required",
  }),
  homeAddress: z.string({
    required_error: "This field is required",
  }),
  homePhone: z.string({
    required_error: "This field is required",
  }),
  personalMobile: z.string({
    required_error: "This field is required",
  }),
  resposability: z.boolean({
    required_error: "Required",
  }),
});
