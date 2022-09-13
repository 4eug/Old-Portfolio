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
import UserFlow from "../../components/CaseStudies/Procrastinator/user-flow";
import DesignSoln from "../../components/CaseStudies/Procrastinator/design-soln";
import MockUps from "../../components/CaseStudies/Procrastinator/mock-ups";
import DesignDescription from "../../components/CaseStudies/Procrastinator/design-description";


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
      <section className='bg-procrastinator-blue mt-10 px-6 pt-10 lg:px-36 pb-20'>
      <UserFlow/>
      </section>
      <DesignSoln/>
      <DesignDescription/>
      <MockUps/>

      {/* <Footer/> */}
      <SideBar sideBar={sideBar} />
    </>
  );
}
