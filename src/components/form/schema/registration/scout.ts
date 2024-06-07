import { z } from "zod";

export const ScoutRegistrationSchema = z.object({
  sport_id: z.number({
    required_error: "This field is required",
  }),
  userType: z.string({
    required_error: "This field is required",
  }),
  first_name: z.string({
    required_error: "This field is required",
  }),
  last_name: z.string({
    required_error: "This field is required",
  }),
  email: z.string({ required_error: "This field is required" }).email({
    message: "Invalid email",
  }),
  sex: z.string({
    required_error: "Required",
  }),
  birt_date: z.string({
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
  address: z.string({
    required_error: "This field is required",
  }),
  phone: z.string({
    required_error: "This field is required",
  }),
  mobile: z.string({
    required_error: "This field is required",
  }),
  resposability: z.boolean({
    required_error: "Required",
  }),
});
