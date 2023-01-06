import Head from "next/head";
import { HomePage } from "../components/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Suresh Koochana</title>
        <link rel='icon' href='/sk.svg' />
      </Head>
      <HomePage />
    </>
  );
}
