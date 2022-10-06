import Head from "next/head";
import Nav from "../components/NavBar/Nav";
import { useState } from "react";
import { CustomCursor } from "../components/CustomCursor";
import SideBar from "../components/NavBar/sideBar";
import Meta from "../components/utilities/meta/meta";
import About from "../components/About/About";
import Footer from "../components/Footer/footer";

export default function AboutPage() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <CustomCursor />
      <Meta title="About Me" />
      <Head>
        <meta name="description" content="Developed by Me" />
        <meta property="og:title" content="About Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Nav sideBar={sideBar} setSideBar={setSideBar} />
      </section>
      <About/>
      <Footer/>
      <SideBar sideBar={sideBar} />
    </>
  );
}
