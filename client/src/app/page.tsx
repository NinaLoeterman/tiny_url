"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [value, setValue] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(value)
    setValue('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <main className={styles.main}>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange}/>
        <button type="submit">Shorten URL</button>
      </form>
    </main>
  );
}
