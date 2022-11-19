/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import {motion} from "framer-motion";
import WebsiteBtn from "../utilities/Buttons/website";
import PlaystoreBtn from "../utilities/Buttons/playstore";
import AppstoreBtn from "../utilities/Buttons/appstore";
import GithubBtn from "../utilities/Buttons/github";

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

const Projects = () => {
  return (
    <motion.section initial='initial' animate='animate' exit={{ opacity: 0 }} className="pt-8 md:pt-20">
        <div variants={fadeInUp} className="text-center flex gap-3 justify-center"> 
          <h6 className="mt-8 text-[36px] md:text-[50px]">Projects</h6>
          <img className="mt-10 md:mt-12 h-[38px] w-[38px] md:h-[45px] md:w-[45px]" src="/Code.svg" alt="code-icon" />
        </div>
        <div className="flex justify-center items-center">
          <p className='mt-4 text-center text-lg max-w-2xl'>
          I’ve built and worked on applications and websites 
            using anything from HTML to React, Flutter and Nodejs etc. Here are some 
            of my favorite projects over the course of my learning journey.
              </p>
          </div>
        <div className="mt-2 px-4 py-16  sm:max-w-xl md:max-w-full lg:px-[130px] lg:py-20">
        <div className="grid gap-10 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
         
            <div className="flex flex-col h-full">
              <img
                src="/MakeWay.jpeg"
                className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl duration-500 hover:scale-105"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-1 md:gap-2 lg:grid-cols-3">
                     <WebsiteBtn href="https://www.makewayapp.com/"/>
                     <PlaystoreBtn href="https://play.google.com/store/apps/details?id=com.jebo.makeway"/>
                      <AppstoreBtn href="https://apps.apple.com/app/makeway-app/id1592269187"/>
                    </div>
                  <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
                  MakeWay App & Website
                  </h2>
                </div>
              </div>
            </div>
          
          
            <div className="flex flex-col h-full">
              <img
                src="/TTU-studentsApp.jpg"
                className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl duration-500 hover:scale-105"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                      <PlaystoreBtn href="https://play.google.com/store/apps/details?id=com.tpconnect.ttuportal"/>
                    </div>
                  <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
                  TTU Students App
                  </h2>
                </div>
              </div>
            </div>
          
            <div className="flex flex-col h-full">
              <img
                src="/TheWallpaper.png"
                className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl duration-500 hover:scale-105"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                      <PlaystoreBtn href="https://play.google.com/store/apps/details?id=com.eugenedebrah.thewallpaper"/>
                      <GithubBtn href="https://github.com/4eug/TheWallpaper-App"/>
                    </div>
                  <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
                  TheWallpaper
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                src="/AdinkraIcons.png"
                className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl duration-500 hover:scale-105"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                      <WebsiteBtn href="https://pub.dev/packages/adinkra_icons"/>
                      <GithubBtn href="https://github.com/4eug/adinkra-icons-flutter"/>
                    </div>
                  <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
                  Adinkra Flutter Icon Pack
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                src="/Obodai.png"
                className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl duration-500 hover:scale-105"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                    <WebsiteBtn href="https://obodai-s-website.vercel.app/"/>
                    </div>
                  <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
                  Obodai’s Website
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                src="/Ijikod-Website.png"
                className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl duration-500 hover:scale-105"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                   <WebsiteBtn href="https://qa.ijikod.com/"/>
                    </div>
                  <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
                  Ijikod Website
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                src="/Mande-waitlist.png"
                className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl duration-500 hover:scale-105"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                   <WebsiteBtn href="https://mande.mycareerwheel.com/"/>
                    </div>
                  <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
                  Mande - Waitlist Website
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                src="/Ghdata.png"
                className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl duration-500 hover:scale-105"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                   <WebsiteBtn href="https://gh-data.herokuapp.com/"/>
                    </div>
                  <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
                  GhData API
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                src="/oya-cover.png"
                className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl duration-500 hover:scale-105"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                   <WebsiteBtn href=""/>
                    </div>
                  <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
                  Oya! Ghana Website
                  </h2>
                </div>
              </div>
            </div>
        </div>
        </div>
      </motion.section>
  );
};

export default Projects;
