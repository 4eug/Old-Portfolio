
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Preloader from "../components/preloader";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  },[])

  return (
    <>
    { !loading ? (
     
      <AnimatePresence mode="wait">
        <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 1,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        className="base-page-size"
        >
      <Component {...pageProps} />
      
      {/* Google Analytics Integration */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-121D217ZZS"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-121D217ZZS');
          `}
        </Script>

      </motion.div>
      </AnimatePresence>
      
    ):(
      <Preloader/>
    )}
    </>
  );
}

export default MyApp;
