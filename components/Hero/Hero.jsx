/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

const Hero = () => {
  return (
    <motion.div name="home" initial='initial' animate='animate' exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-between ">
      <div className="grid md:grid-cols-1 max-w-auto ml-2 md:ml-32 mt-16 md:mt-44">
        <motion.div variants={fadeInUp} className="flex flex-col justify-center md:items-start 2xl:pl-24 2xl:mb-28 w-full px-2 py-8 "
        >
          <h1 className="text-4xl md:text-5xl font-bold ">
          the key to making good <span className="text-transparent bg-clip-text bg-gradient-to-r from-main-orange to-mid-white">products</span>
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
          is the mixture of collaboration
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 ">
          and the ❤️ of learning. 
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
