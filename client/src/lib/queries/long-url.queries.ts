import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { clientUtils } from "./query.utils";

export const useShortenUrl = () => {
  return useMutation({
    mutationKey: ["shorten-url"],
    mutationFn: ({ longUrl }: { longUrl: string }) =>
      clientUtils.post({ url: "/shorten", data: { longUrl } }),
  });
};

export const useFetchLongUrl = () => {
  return useQuery({
    queryKey: ["long-url"],
    queryFn: () => clientUtils.get({ url: "long-url" }),
  });
};
