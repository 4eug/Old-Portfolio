import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
      <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
