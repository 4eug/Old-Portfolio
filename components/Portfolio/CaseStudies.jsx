/* eslint-disable @next/next/no-img-element */
import Chips from "../utilities/Buttons/chips";
import { motion } from "framer-motion";

/* eslint-disable @next/next/no-html-link-for-pages */
export const Content = () => {
    const chipsContent1 = [
      {
        names:"Website",
        imgSrc:"/website.svg",
        href:"/",
        id: 0
      },
      {
        names:"PlayStore",
        imgSrc:"/playstore.svg",
        href:"/",
        id: 1
      },
      {
        names:"AppStore",
        imgSrc:"/appstore.svg",
        href:"/about",
        id: 2
      }
    ]
    const chipsContent2 = [
      {
        names:"PlayStore",
        imgSrc:"/playstore.svg",
        href:"/",
        id: 0
      }, 
    ]
    const chipsContent3 = [
      {
        names:"PlayStore",
        imgSrc:"/playstore.svg",
        href:"/",
        id: 0
      },
      {
        names:"Github",
        imgSrc:"/github.svg",
        href:"/",
        id: 1
      },
    ]
    const chipsContent4 = [
      {
        names:"Website",
        imgSrc:"/website.svg",
        href:"/",
        id: 0
      }, 
      {
        names:"Github",
        imgSrc:"/github.svg",
        href:"/",
        id: 1
      }, 
    ]
    const chipsContent5 = [
      {
        names:"Website",
        imgSrc:"/website.svg",
        href:"/",
        id: 0
      }, 
    ]

    return (
      <div className="mt-24 px-4 py-16 md:ml-24  sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-screen-xl xl:max-w-screen-2xl  m-auto">
          <div className=" flex-col justify-center md:items-start w-full px-2 py-8">
            
            <h1 className="py-3 text-3xl md:text-5xl font-semibold ">
              Some Case Studies 🖼
            </h1>
            <p className="text-xl leading-relaxed">
            Some User Experience Case Studies have worked on.
            </p>
          </div>
        </div>
        <div className="grid gap-10 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
         
            
          
          
           
          
            

           

          
         
          
        </div>
        <div className="mt-16 mb-10 flex justify-center items-center">
        <a href="https://github.com/4eug" target="_blank" rel="noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="black  md:block"
            >
              <span className="font-medium ">View More</span>
            </motion.button>
          </a>
          </div>
      </div>
    );
  };