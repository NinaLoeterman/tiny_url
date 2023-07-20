"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./page.module.css";
import {
  useShortenUrl,
  useFetchLongUrl,
} from "@/lib/queries/long-url.queries";

export default function Home() {
  const [value, setValue] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");
  const shortenUrl = useShortenUrl();
  const data = useFetchLongUrl();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const shortened = await shortenUrl.mutateAsync({ longUrl: value });
      setShortUrl(shortened.data.shortUrl)
      console.log('response from ', shortened)
    } catch (e) {
      console.log("oops i failed", e);
    } finally {
      setValue("");
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <main className={styles.main}>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} />
        <button type="submit">Shorten URL</button>
      </form>
      <div>{shortUrl}</div>
    </main>
  );
}
