import { SubscriptionPlanTypes } from "@/types/subscriptionPlan";

export const subscriptionPlanData: SubscriptionPlanTypes[] = [
  {
    id: "0",
    type: "promo",
    months: "3 months",
    price: "49.99",
    paragraph: "Best option for short term users",
  },
  {
    id: "1",
    type: "basic",
    months: "6 months",
    price: "84.99",
    paragraph:
      "Get good interaction by having an extended experience and better rapport",
  },
  {
    id: "2",
    type: "premium",
    months: "1 year",
    price: "119.99",
    paragraph: "Get instant notifications with advanced services enabled",
  },
];
