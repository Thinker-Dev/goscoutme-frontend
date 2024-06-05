import { z } from "zod";

export const AthleteRegistrationSchema = z.object({
  sex: z.string({
    required_error: "Required",
  }),
  birthday: z.string({
    required_error: "This field is required",
  }),
  countryofBirth: z.string({
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
  heightMetrics: z.string({
    required_error: "Required",
  }),
  weight: z.string({
    required_error: "Required",
  }),
  weightMetrics: z.string({
    required_error: "Required",
  }),
  parentOne: z.string({
    required_error: "This field is required",
  }),
  relationshipOne: z.string({
    required_error: "This field is required",
  }),
  parentTwo: z.string({
    required_error: "This field is required",
  }),
  relationshipTwo: z.string({
    required_error: "This field is required",
  }),
  consent: z.string({
    required_error: "Please upload Parent/Guardian Consent",
  }),
  athleteStatus: z.string({
    required_error: "Required",
  }),
  positionPlayed: z.string({
    required_error: "This field is required",
  }),
  leaguesPlayed: z.string({
    required_error: "This field is required",
  }),
  dateUpdated: z.string({
    required_error: "Required",
  }),
  gameAppearences: z.string({
    required_error: "Required",
  }),
  gameStarted: z.string({
    required_error: "Required",
  }),
  minutesPlayed: z.string({
    required_error: "Required",
  }),
  fieldGoals: z.string({
    required_error: "Required",
  }),
  organization: z.string({
    required_error: "Please ulpoad Club/Agency Certification",
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
  affiliations: z.string({
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
