export type SubscriptionPlanTypes = {
  id: string;
  type: "promo" | "basic" | "premium";
  months: string;
  price: string;
  paragraph: string;
};
