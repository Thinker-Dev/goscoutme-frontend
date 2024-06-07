import { z } from "zod";

export const AthleteRegistrationSchema = z.object({
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
  age: z.number({
    required_error: "This field is required",
  }),
  birt_date: z.string({
    required_error: "This field is required",
  }),
  country_of_birth: z.string({
    required_error: "This field is required",
  }),
  nationality: z.string({
    required_error: "This field is required",
  }),
  citzenship: z.string({
    required_error: "This field is required",
  }),
  height: z.number({
    required_error: "Required",
  }),
  height_metric: z.string({
    required_error: "Required",
  }),
  weight: z.number({
    required_error: "Required",
  }),
  weight_metric: z.string({
    required_error: "Required",
  }),
  parent_one: z.string({
    required_error: "This field is required",
  }),
  relationship_one: z.string({
    required_error: "This field is required",
  }),
  parent_two: z.string({
    required_error: "This field is required",
  }),
  relationship_two: z.string({
    required_error: "This field is required",
  }),
  consent: z.string({
    required_error: "Please upload Parent/Guardian Consent",
  }),
  status: z.string({
    required_error: "Required",
  }),
  position_played: z.string({
    required_error: "This field is required",
  }),
  leagues_played: z.string({
    required_error: "This field is required",
  }),
  date_updated: z.string({
    required_error: "Required",
  }),
  game_appearences: z.string({
    required_error: "Required",
  }),
  game_started: z.string({
    required_error: "Required",
  }),
  minutes_played: z.string({
    required_error: "Required",
  }),
  field_goals: z.string({
    required_error: "Required",
  }),
  organization: z.string({
    required_error: "Please ulpoad Club/Agency Certification",
  }),
  organization_email: z.string({
    required_error: "This field is required",
  }),
  office: z.string({
    required_error: "This field is required",
  }),
  office_phone: z.string({
    required_error: "This field is required",
  }),
  office_mobile: z.string({
    required_error: "This field is required",
  }),
  affiliations: z.string({
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
