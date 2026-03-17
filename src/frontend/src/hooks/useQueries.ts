import { useMutation } from "@tanstack/react-query";
import type { CareerInterest, Inquiry } from "../backend.d";
import { useActor } from "./useActor";

export function useSubmitInquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (inquiry: Inquiry) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitInquiry(inquiry);
    },
  });
}

export function useSubmitCareerInterest() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (interest: CareerInterest) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitCareerInterest(interest);
    },
  });
}
