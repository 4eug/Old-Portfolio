/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section animate={{ x: 0, opacity: 1 }}
    initial={{ x: 200, opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ delay: 0.2 }} className="mt-16 md:mt-40 2xl:mt-44 2xl:mb-72 sm:mb-72">
    <div className="py-8 px-4 mx-auto w-[344px] h-[284px] md:w-[1157px] sm:max-w-fit md:h-[237px] text-center lg:py-16 lg:px-12">
       
        <h1 className="text-4xl md:text-6xl text-center mt-8 leading-16 tracking-tight font-normal">
        the key to making good <span className="text-transparent bg-clip-text bg-gradient-to-r from-main-orange to-mid-white">products</span> 
       <br /> is a mixture of collaboration and the ❤️ for learning.
          </h1>  
    </div>
    </motion.section>
  );
};

export default Hero;
