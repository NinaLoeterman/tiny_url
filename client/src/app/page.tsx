"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./page.module.css";
import {
  useCreateTinyURL,
  useFetchLongUrl,
} from "@/lib/queries/long-url.queries";

export default function Home() {
  const [value, setValue] = useState<string>("");
  const createTinyURL = useCreateTinyURL();
  const data = useFetchLongUrl();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const blah = await createTinyURL.mutateAsync({ longURL: value });
      console.log('hello', blah)
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
    </main>
  );
}
