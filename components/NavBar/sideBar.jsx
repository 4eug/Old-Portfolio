import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const SideBar = (props) => {
  return (
    <AnimatePresence>
      {props.sideBar && (
        <>
          <motion.div
            initial={{ y: "-100%" }}
            animate={{
              y: 0,
              top: "10%",
            }}
            exit={{
              y: "-100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            className="fixed shadow-lg top-0 right-0 w-full p-2 text-right flex flex-col items-end gap-10 z-30"
          >
            <div className="m-auto m">
              <ul className="flex flex-col items-center gap-10">
                <a href="/about">
                  <button className="white">
                    About Me 
                  </button>
                </a>
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default SideBar;
