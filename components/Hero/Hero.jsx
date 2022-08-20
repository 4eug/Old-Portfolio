/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
// import { Spline } from "@splinetool/react-spline";
// const Spline = require("@splinetool/react-spline");

const Hero = () => {
 const [state] = useState({
   title: "Hi, I’m Eugene",
    subtitle: "",

 });

  return (
    <div name="home" className="w-full h-screen  flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] ml-auto mr-auto mt-2 md:mt-10">
        <div
          initial="initial"
          animate="animate"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.5,
              },
            },
          }}
          className="flex flex-col justify-center md:items-start w-full px-2 py-8"
        >
          <p className="pl-4 md:pl-10 text-xl mt-8 md:mt-0 ">
            {state.title}
          </p>
          <h1 className="pl-3 md:pl-8 text-5xl md:text-7xl font-bold ">
          Software Developer & Designer.
            <h1/>
            
          </h1>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1.3,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.7,
              },
            },
          }}
          className="ml-0 pl-0 md:ml-10 md:pl-10"
        >
          <img className="w-full" src="/Image 6.png" alt="/" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
