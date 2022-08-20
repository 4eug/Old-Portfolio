import Head from "next/head";
import Nav from "../components/NavBar/Nav";
import { useState } from "react";
import { CustomCursor } from "../components/CustomCursor";
import SideBar from "../components/NavBar/sideBar";
import Hero from "../components/Hero/Hero";
import SoftwareProjects from "../components/Portfolio/Software";
import DesignProjects from "../components/Portfolio/Design";
import About from "../components/About/About";
import GetInTouch from "../components/GetInTouch/getInTouch";
import Footer from "../components/Footer/footer";
import Meta from "../components/utilities/meta/meta";

export default function Home() {
  const [sideBar, setSideBar] = useState(false);
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
      <SoftwareProjects />
      <DesignProjects />
      <About />
      <GetInTouch />
      <Footer />
      <SideBar sideBar={sideBar} />
    </>
  );
}
