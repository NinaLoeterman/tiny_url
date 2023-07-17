import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCreateTinyURL = () => {
  return useMutation({
    onError: (e) => {
      console.log("error inside mutation", e);
    },
    mutationKey: ["long-url"],
    mutationFn: ({ longURL }: { longURL: string }) =>
      axios.post("http://127.0.0.1:8000/long-url", {
        method: "POST",
        body: JSON.stringify({ longURL }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }),
  });
};

export const useFetchLongUrl = () => {
  return useQuery({
    queryKey: ["asdfasfsf"],
    queryFn: () =>
      axios("http://localhost:8000/long-url")
  });
};
