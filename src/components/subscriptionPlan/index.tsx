"use client"
import { subscriptionPlanData } from "@/data/subscriptionPlanData";
import { privateInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
interface IResponse {
  session: string
}
export const SubscriptionPlan: FC = () => {
  const router = useRouter()
  const handleSubscription = async (plan_id: number) => {
    try {
      const response = await privateInstance.post<IResponse>('/checkout', { plan_id })
      const session = response.data.session
      router.push(session)
    } catch (err) {
      console.log(err);
    }


  }
  return (
    <div className="flex space-x-5">
      {subscriptionPlanData.map((item, index) => (
        <div key={index} className="flex flex-col w-[300px] " onClick={() => handleSubscription(index + 1)}>
          <div
            className={`transition-all hover:-translate-y-1 duration-300 cursor-pointer flex justify-center flex-col items-center rounded-b-lg py-10 space-y-5 
            ${item.type === "promo" && "bg-pricing-card-light"}
            ${item.type === "basic" && "bg-pricing-card-dark"}
            ${item.type === "premium" && "bg-primary"}
            
            `}
          >
            <div
              className={`rounded-md  uppercase font-lexenda_exa font-bold w-[120px] py-1.5 flex justify-center text-sm   ${item.type === "premium"
                ? "bg-white text-primary"
                : "bg-primary text-white"
                }`}
            >
              <span>{item.type}</span>
            </div>
            <span
              className={`font-extralight font-lexenda_deca text-primary text-6xl ${item.type === "premium" ? "text-white" : "text-primary"
                }`}
            >
              {item.months}
            </span>
            <span className="font-lexenda_deca font-light text-4xl">
              ${item.price}
            </span>
          </div>
          <div className=" mt-6  w-full px-10 flex justify-center">
            <span className="text-center font-light text-sm">
              {item.paragraph}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
