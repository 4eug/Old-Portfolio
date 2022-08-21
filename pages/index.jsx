import Head from "next/head";
import Nav from "../components/NavBar/Nav";
import React, { useState } from "react";
import { CustomCursor } from "../components/CustomCursor";
import SideBar from "../components/NavBar/sideBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/footer";
import Meta from "../components/utilities/meta/meta";
import { Content } from "../components/Portfolio/Content";
import { CaseStudies } from "../components/Portfolio/CaseStudies";

export default function Home() {
  const [sideBar, setSideBar] = useState(false);

  React.useEffect(() => {
    console.log.apply(console, [
      "%c Designed and Developed by Eugene Debrah  🚀 \n",
      "color: #fff; background: #ff5833; padding:5px 0;",
    ]);
    console.log.apply(console, [
      "%c You Opened the Console, Thanks for checking.\n",
      "color: #fff; background: #ff5833; padding:5px 0;",
    ]);
  }, [])


  return (
    <>
      <CustomCursor />
      <Meta title="4eug Portfolio" />
      <Head>
        <meta name="description" content="Developed by Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Nav sideBar={sideBar} setSideBar={setSideBar} />
      </section>
      <Hero />
      <section>
        <Content/>
      </section>
      <section>
        <CaseStudies/>
      </section>
      <Footer />
      <SideBar sideBar={sideBar} />
    </>
  );
}
