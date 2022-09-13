import Head from "next/head";
import MiniNav from "../../components/NavBar/miniNav";
import { useState } from "react";
import { CustomCursor } from "../../components/CustomCursor";
import SideBar from "../../components/NavBar/sideBar";
import Meta from "../../components/utilities/meta/meta";
import About from "../../components/About/About";
import Footer from "../../components/Footer/footer";
import Hero from "../../components/CaseStudies/Procrastinator";
import Research from "../../components/CaseStudies/Procrastinator/research";

export default function Home() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <CustomCursor />
      <Meta title="Procrastinator" />
      <Head>
        <meta name="description" content="Developed by Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <MiniNav sideBar={sideBar} setSideBar={setSideBar} />
      </section>

      <Hero/>
      <Research/>

      {/* <Footer/> */}
      <SideBar sideBar={sideBar} />
    </>
  );
}
