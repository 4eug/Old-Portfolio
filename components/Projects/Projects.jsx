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
    <motion.section initial='initial' animate='animate' exit={{ opacity: 0 }} className="pt-16 md:pt-28">
        <div variants={fadeInUp} className="text-center flex gap-3 justify-center"> 
          <h6 className="mt-8 text-5xl">Projects</h6>
          <img className="object-center " src="/Code.svg" alt="/" />
        </div>
        <div className="mt-24 px-4 py-16 md:ml-24  sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:max-w-screen-2xl 2xl:m-auto md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
         
            <div className="flex flex-col h-full">
              <img
                src="/MakeWay.jpeg"
                className="object-cover w-full h-48 rounded-2xl"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-1 md:gap-2 lg:grid-cols-3">
                     <WebsiteBtn href="https://www.makewayapp.com/"/>
                     <PlaystoreBtn href="https://play.google.com/store/apps/details?id=com.jebo.makeway"/>
                      <AppstoreBtn href="https://apps.apple.com/app/makeway-app/id1592269187"/>
                    </div>
                  <h2 className="mt-4 text-xl leading-5">
                  MakeWay App & Website
                  </h2>
                </div>
              </div>
            </div>
          
          
            <div className="flex flex-col h-full">
              <img
                src="/TTU StudentsApp.jpg"
                className="object-cover w-full h-48 rounded-2xl"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                      <PlaystoreBtn href="https://play.google.com/store/apps/details?id=com.tpconnect.ttuportal"/>
                    </div>
                  <h2 className="mt-4 text-xl leading-5">
                  TTU Students App
                  </h2>
                </div>
              </div>
            </div>
          
            <div className="flex flex-col h-full">
              <img
                src="/TheWallpaper.png"
                className="object-cover w-full h-48 rounded-2xl"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                      <PlaystoreBtn href="https://play.google.com/store/apps/details?id=com.eugenedebrah.thewallpaper"/>
                      <GithubBtn href="https://github.com/4eug/TheWallpaper-App"/>
                    </div>
                  <h2 className="mt-4 text-xl leading-5">
                  TheWallpaper
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                src="/AdinkraIcons.png"
                className="object-cover w-full h-48 rounded-2xl "
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                      <WebsiteBtn href="https://pub.dev/packages/adinkra_icons"/>
                      <GithubBtn href="https://github.com/4eug/adinkra-icons-flutter"/>
                    </div>
                  <h2 className="mt-4 text-xl leading-5">
                  Adinkra Flutter Icon Pack
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                src="/Obodai.png"
                className="object-cover w-full h-48 rounded-2xl"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                    <WebsiteBtn href=""/>
                    </div>
                  <h2 className="mt-4 text-xl leading-5">
                  Obodai’s Website
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                src=""
                className="object-cover w-full h-48 rounded-2xl"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                   <WebsiteBtn href="https://famtechnologiesgh.com/"/>
                    </div>
                  <h2 className="mt-4 text-xl leading-5">
                  FamTech Website
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
