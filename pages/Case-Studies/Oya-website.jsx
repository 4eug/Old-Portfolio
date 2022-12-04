import Head from "next/head";
import Nav from "../../components/NavBar/Nav";
import { useState } from "react";
import { CustomCursor } from "../../components/CustomCursor";
import SideBar from "../../components/NavBar/sideBar";
import Meta from "../../components/utilities/meta/meta";
import Footer from "../../components/Footer/footer";
import OyaHero from "../../components/CaseStudies/OyaWebsite"
import Research from "../../components/CaseStudies/OyaWebsite/research";
import Goal from "../../components/CaseStudies/OyaWebsite/goal";
import UserJourney from "../../components/CaseStudies/OyaWebsite/mapping";
import DesignPhase from "../../components/CaseStudies/OyaWebsite/design-phase";
import FinalThoughts from "../../components/CaseStudies/OyaWebsite/final-thoughts";
import Sketches from "../../components/CaseStudies/OyaWebsite/sketches";




export default function Home() {
  
  const [sideBar, setSideBar] = useState(false);
  
  return (
    <>
      <CustomCursor />
      <Meta title="Oya! Ghana Website" />
      <Head>
        <meta name="description" content="Developed by Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Nav sideBar={sideBar} setSideBar={setSideBar} />
      </section>

      <OyaHero/>
      <Research/>
      <Goal/>
      <UserJourney/>
      {/* Sketches */}
      <Sketches/>
      <DesignPhase/>
      <FinalThoughts/>
      
      
      <Footer/>
      <SideBar sideBar={sideBar} />
    </>
  );
}
