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
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            className="fixed bg-white text-black shadow-lg top-0 right-0 w-full p-5 text-right flex flex-col items-end gap-10 z-30"
          >
            <div className="m-auto">
              <ul className="flex flex-col items-center gap-10">
                <button className="white">
                  <span>Let’s build</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28.732"
                    height="16.616"
                    viewBox="0 0 20.732 18.616"
                    className="inline-block"
                  >
                    <g id="Message" transform="translate(0.75 0.75)">
                      <path
                        id="Path_445"
                        d="M11.314,0,7.048,3.434a2.223,2.223,0,0,1-2.746,0L0,0"
                        transform="translate(3.954 5.561)"
                        fill="none"
                        stroke="#030303"
                        strokelinecap="round"
                        strokelinejoin="round"
                        strokemiterlimit="10"
                        strokewidth="1.5"
                      />
                      <path
                        id="Rectangle_511"
                        d="M4.888,0h9.428A4.957,4.957,0,0,1,17.9,1.59a5.017,5.017,0,0,1,1.326,3.7v6.528a5.017,5.017,0,0,1-1.326,3.7,4.957,4.957,0,0,1-3.58,1.59H4.888C1.968,17.116,0,14.741,0,11.822V5.294C0,2.375,1.968,0,4.888,0Z"
                        transform="translate(0 0)"
                        fill="none"
                        stroke="#030303"
                        strokelinecap="round"
                        strokelinejoin="round"
                        strokemiterlimit="10"
                        strokewidth="1.5"
                      />
                    </g>
                  </svg>
                </button>
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default SideBar;