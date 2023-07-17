import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

function post({ url, data }: { url: string; data: { longUrl: string } }) {
  return axiosInstance({
    method: "POST",
    url,
    data,
  });
}

function get({ url }: { url: string }) {
  return axiosInstance({
    method: "GET",
    url,
  });
}

export const clientUtils = () => {};

clientUtils.post = post;
clientUtils.get = get;
