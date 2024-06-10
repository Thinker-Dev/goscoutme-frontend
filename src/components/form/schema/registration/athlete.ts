import { z } from "zod";

export const AthleteRegistrationSchema = z.object({
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
  parent_one: z.string().optional(),
  relationship_one: z.string().optional(),
  parent_two: z.string().optional(),
  relationship_two: z.string().optional(),
  consent: z.string().optional(),
  status: z.string({
    required_error: "Required",
  }),
  sport_position_id: z.string({
    required_error: "This field is required",
  }),
  leagues_played: z.string({
    required_error: "This field is required",
  }),
  date_updated: z.string({
    required_error: "Required",
  }),
  game_appearances: z.number({
    required_error: "Required",
  }),
  game_started: z.number({
    required_error: "Required",
  }),
  minutes_played: z.number({
    required_error: "Required",
  }),
  field_goals: z.number({
    required_error: "Required",
  }),
  org_name: z.string().optional(),
  org_email: z.string().optional(),
  office: z.string().optional(),
  org_phone: z.string().optional(),
  org_mobile: z.string().optional(),
  affiliations: z.string().optional(),
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
