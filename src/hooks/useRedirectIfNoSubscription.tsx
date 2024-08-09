import { useEffect } from "react";
import { useGetSubscription } from "@/hooks/useGetSubscription";
import { useRouter } from "next/navigation";
import { useUserStorage } from "./useUserStorage";

const useRedirectIfNoSubscription = () => {
  const { profile } = useUserStorage();
  const router = useRouter();
  const {
    data: subscription,
    isError,
    isLoading,
  } = useGetSubscription(profile.public_id);

  useEffect(() => {
    if (
      !isLoading &&
      !isError &&
      (subscription === null || subscription === undefined)
    ) {
      router.push("/dashboard/billing");
    }
  }, [subscription, isLoading, isError, router]);
};

export default useRedirectIfNoSubscription;
