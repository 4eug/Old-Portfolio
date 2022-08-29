import Head from "next/head";
import Nav from "../components/NavBar/Nav";
import { useState } from "react";
import { CustomCursor } from "../components/CustomCursor";
import SideBar from "../components/NavBar/sideBar";
import Meta from "../components/utilities/meta/meta";
import About from "../components/About/About";
import Footer from "../components/Footer/footer";

export default function Home() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <CustomCursor />
      <Meta title="Case Studies" />
      <Head>
        <meta name="description" content="Developed by Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Nav sideBar={sideBar} setSideBar={setSideBar} />
      </section>
      <Footer/>
      <SideBar sideBar={sideBar} />
    </>
  );
}
