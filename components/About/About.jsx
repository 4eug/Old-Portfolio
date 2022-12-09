/* eslint-disable react/no-unescaped-entities */
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
        <img className="object-center" src="/Me.png" alt="avatar" />
        </motion.div>
          <h6 className="mt-8 text-xl">Hi, I’m Eugene ✋🏼</h6>
          <h3 className="text-4xl md:text-[45px] text-center mt-8 leading-16 tracking-tight font-normal">
          "Building digital products,
          </h3>
          <h3 className="text-4xl md:text-[45px] text-center mt-2 leading-16 tracking-tight font-normal">
          creating awesome brand 
          </h3>
          <h3 className="text-4xl md:text-[45px] text-center mt-2 leading-16 tracking-tight font-normal">
          experiences"
          </h3>
          <div className="flex justify-center items-center">
          <p className='mt-10 text-center text-lg max-w-3xl'>
          I’m a <span className="font-bold" >Front-end Developer</span> and a <span className="font-bold">Product Designer</span> 
          ( what they call a <span className="font-bold">UX Engineer</span>).
           I like to view myself as a creator and a learner. I experiment with frontend applications using <span className="font-bold">HTML, CSS, TailwindCSS, JavaScript,
          TypeScript, and Dart</span> but predominantly utilise frameworks such as <span className="font-bold">ReactJS, NextJS, and Flutter.</span> I love designing interfaces with <span className="font-bold">Figma</span>, researching,
           and building out design systems, and also creating processes and tools to enable the team I work with do their best.
          Outside of work, I love exploring new places (taking pictures and editing them ), watching movies, animations, and tech videos, and listening to music.
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
