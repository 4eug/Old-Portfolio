/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import DesignCard from "../utilities/Cards/designCard";

/* eslint-disable @next/next/no-html-link-for-pages */
export const CaseStudies = () => {
    const studiesArray = [
        {
          title: "Procrastinator",
          points:
            "Research,",
          points1:"UX Designs,",
          points2:"UI Designs,",
          imgSrc: "/Procrastinator.jpeg",
          url:"/Case-Studies/Procrastinator",
          lgFlexDirection: "lg:flex-row-reverse",
          status: "View more",
          id: 1,
        },
        {
          title: "FamTech Website",
          points:
            "Research,",
          points1:"UX Designs,",
          imgSrc: "/Background.png",
          url:"",
          status: "View more",
          id: 2,
          
        },
        {
          title: "MakeWay App",
          points:
            "Product Design,",
          points1:"Branding & Illustrations,",
          imgSrc: "/MakeWay.jpeg",
          url:"",
          lgFlexDirection: "lg:flex-row-reverse",
          text: "text", 
          status: "Coming Soon",
          id: 3,
        },
        
      ];
    return (
      <div className="mt-2 px-4 py-16  sm:max-w-xl md:max-w-full lg:px-[130px] lg:py-20">
        <div className="grid max-w-screen-xl xl:max-w-screen-2xl  m-auto">
          <div className=" flex-col justify-center md:items-start w-full px-2 py-8">
            
            <h1 className="py-3 text-3xl md:text-5xl font-normal">
              Some Case Studies 🖼
            </h1>
            <p className="text-xl leading-relaxed">
            Some User Experience Case Studies have worked on.
            </p>
          </div>
        </div>
       <div className="">
        {studiesArray.map((item) => (
            <DesignCard
            title={item.title}
            points={item.points}
            points1={item.points1}
            points2={item.points2}
            src={item.imgSrc}
            url={item.url}
            lgFlexDirection={item.lgFlexDirection}
            text={item.text}
            status={item.status}
            key={item.id}
            />
        ))}
       </div>
        <div className="mt-20 flex justify-center items-center">
          <Link href="/designs">
          <a  rel="noreferrer">
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