import Head from "next/head";
import Nav from "../components/NavBar/Nav";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CustomCursor } from "../components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Head>
        <title>4eug Portfolio</title>
        <meta name="description" content="Developed by Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Nav />
      </section>
    </>
  );
}
