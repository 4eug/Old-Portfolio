/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import {motion} from "framer-motion";
import WebsiteBtn from "../utilities/Buttons/website";
import PlaystoreBtn from "../utilities/Buttons/playstore";
import AppstoreBtn from "../utilities/Buttons/appstore";
import GithubBtn from "../utilities/Buttons/github";
import DesignContents from "./content";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

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

const Designs = () => {
  return (
    <motion.section initial='initial' animate='animate' exit={{ opacity: 0 }} className="pt-8 md:pt-20">
        <div variants={fadeInUp} className="text-center flex gap-3 justify-center"> 
          <h6 className="mt-8 text-[36px] md:text-[50px]">Designs</h6>
          <img className="mt-10 md:mt-12 h-[38px] w-[38px] md:h-[45px] md:w-[45px]" src="/Code.svg" alt="design-icon" />
        </div>
        <div className="flex justify-center items-center">
          <p className='mt-4 text-center text-lg max-w-2xl'>
          I’ve built and worked on applications and websites 
            using anything from HTML to React Flutter and Nodejs etc.Here are some 
            of my favorite projects over the course of my learning journey.
              </p>
          </div>
            <DesignContents/>
      </motion.section>
  );
};

export default Designs;
