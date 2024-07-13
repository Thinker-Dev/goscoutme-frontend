import { z } from "zod";

export const ScoutRegistrationSchema = z.object({
  first_name: z.string({
    required_error: "This field is required",
  }),
  last_name: z.string({
    required_error: "This field is required",
  }),
  sex: z.string({
    required_error: "Required",
  }),
  birth_date: z.string({
    required_error: "This field is required",
  }),
  nationality: z.string({
    required_error: "This field is required",
  }),
  organization: z.string().optional(),
  org_email: z.string().optional(),
  office: z.string().optional(),
  org_phone: z.string().optional(),
  org_mobile: z.string().optional(),
  affiliations: z.string().optional(),
  address: z.string({
    required_error: "This field is required",
  }),
  resposability: z.boolean({
    required_error: "Required",
  }),
});
