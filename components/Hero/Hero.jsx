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
    <div name="home" className="w-full h-full flex flex-col justify-between">
      <div className="grid md:grid-cols-1 max-w-[1240px] ml-2 md:ml-32 mt-16 md:mt-44">
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
          <h1 className="text-4xl md:text-5xl font-bold ">
          the key to making good <span className="text-transparent bg-clip-text bg-gradient-to-r from-main-orange to-mid-white">products</span>
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
          is the mixture of collaboration
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 ">
          and the ❤️ of learning. 
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
