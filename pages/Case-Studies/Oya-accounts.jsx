import Head from "next/head";
import Nav from "../../components/NavBar/Nav";
import { useState } from "react";
import { CustomCursor } from "../../components/CustomCursor";
import SideBar from "../../components/NavBar/sideBar";
import Meta from "../../components/utilities/meta/meta";
import Footer from "../../components/Footer/footer";
import AccountHero from "../../components/CaseStudies/OyaAccounts";
import Solution from "../../components/CaseStudies/OyaAccounts/solution";
import Screens from "../../components/CaseStudies/OyaAccounts/screens";
import Role from "../../components/CaseStudies/OyaAccounts/role";





export default function Home() {
  
  const [sideBar, setSideBar] = useState(false);
  
  return (
    <>
      <CustomCursor />
      <Meta title="Oya! Ghana Accounts" />
      <Head>
        <meta name="description" content="Developed by Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Nav sideBar={sideBar} setSideBar={setSideBar} />
      </section>

      <AccountHero/>
      <Solution/>
      <Role/>
      <Screens/>
      
      
      <Footer/>
      <SideBar sideBar={sideBar} />
    </>
  );
}
