/* eslint-disable @next/next/no-img-element */
import React from "react";
import ConnectButton from "../utilities/Buttons/connect-btn";
import {motion} from "framer-motion";

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

const About = () => {
  return (
    <motion.section initial='initial' animate='animate' exit={{ opacity: 0 }} className="pt-16 md:pt-28">
        <motion.div variants={fadeInUp} className="text-center"> 
        <motion.div animate={{ x: 0, opacity: 1 }}
            initial={{ x: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-center">
        <img className="object-center" src="/Me.png" alt="/" />
        </motion.div>
          <h6 className="mt-8 text-xl">Hi, I’m Eugene ✋🏼</h6>
          <h3 className="text-4xl md:text-6xl text-center mt-8 leading-16 tracking-tight font-normal">
          Building digital products,
          </h3>
          <h3 className="text-4xl md:text-6xl text-center mt-2 leading-16 tracking-tight font-normal">
          creating awesome brand 
          </h3>
          <h3 className="text-4xl md:text-6xl text-center mt-2 leading-16 tracking-tight font-normal">
          experiences.
          </h3>
          <div className="flex justify-center items-center">
          <p className='mt-10 text-center text-lg max-w-xl'>
          a <span className="font-bold">Software Developer</span>(Mobile & Front-end) and <span className="font-bold">Product Designer </span>
          who is passionate about building and designing beautiful 
          and value-based applications or digital 
          products for businesses.
              </p>
          </div>
          
          <div className="mt-16 mb-10 flex justify-center items-center">
          <ConnectButton/>
          </div>

        </motion.div>
      </motion.section>
  );
};

export default About;
