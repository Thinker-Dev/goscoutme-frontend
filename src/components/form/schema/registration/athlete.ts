import { z } from "zod";

export const AthleteRegistrationSchema = z.object({
  sex: z.string({
    required_error: "Required",
  }),
  birth_date: z.string({
    required_error: "This field is required",
  }),
  country_of_birth: z.string({
    required_error: "This field is required",
  }),
  nationality: z.string({
    required_error: "This field is required",
  }),
  citizenship: z.string({
    required_error: "This field is required",
  }),
  height: z.string({
    required_error: "Required",
  }),
  height_metrics: z.string({
    required_error: "Required",
  }),
  weight: z.string({
    required_error: "Required",
  }),
  weight_metrics: z.string({
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
  athlete_status: z.string({
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
  home_address: z.string({
    required_error: "This field is required",
  }),
  home_phone: z.string({
    required_error: "This field is required",
  }),
  personal_mobile: z.string({
    required_error: "This field is required",
  }),
  resposability: z.boolean({
    required_error: "Required",
  }),
});
