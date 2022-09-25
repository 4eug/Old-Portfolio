/* eslint-disable @next/next/no-img-element */
import Chips from "../utilities/Buttons/chips";
import { motion } from "framer-motion";
import WebsiteBtn from "../utilities/Buttons/website";
import PlaystoreBtn from "../utilities/Buttons/playstore";
import AppstoreBtn from "../utilities/Buttons/appstore";
import GithubBtn from "../utilities/Buttons/github";
import Link from "next/link";

/* eslint-disable @next/next/no-html-link-for-pages */
export const Content = () => {
    return (
      <div className="mt-28 px-4 py-16 md:ml-24  sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:max-w-screen-2xl 2xl:m-auto md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-screen-xl xl:max-w-screen-2xl  m-auto">
          <div className=" flex-col justify-center md:items-start w-full px-2 py-8">
            
            <h1 className="py-3 text-3xl md:text-5xl font-semibold ">
              My Software <br /> Engineer Experience 💻
            </h1>
            <p className="text-xl leading-relaxed">
            These are some of the projects I have worked.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-10 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
         
            <div className="flex flex-col h-full">
              <img
                src="/MakeWay.jpeg"
                className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl"
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
                src="/TTU StudentsApp.jpg"
                className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl"
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
                className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl"
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
                className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl "
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
                className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                    <WebsiteBtn href=""/>
                    </div>
                  <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
                  Obodai’s Website
                  </h2>
                </div>
              </div>
            </div>
        </div>
        <div className="mt-16 mb-1 flex justify-center items-center">
        <Link href="/projects">
        <a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="black  md:block"
            >
              <span className="font-medium ">View More</span>
            </motion.button>
          </a>
          </Link>
          </div>
        </div>
    );
  };