/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

function DesignCard(props) {
  return (
    <div className="mt-32">
      <div
        className={`flex ${
          props.flexDirection ?? "flex-col"
        } w-full bg-slate-40 justify-center gap-8
      lg:gap-24 
      lg:h-portfolio-px-300
      ${props.lgFlexDirection ?? "lg:flex-row"}
      
      `}
      >
        <div className="w-full flex items-center">
          <div>
            <div className="flex gap-2 md:gap-2 lg:grid-cols-3">
            <h3 className="">{props.points}</h3>
            <h3 className="">{props.points1}</h3>
            <h3 className="">{props.points2}</h3>
            </div>
            <h2 className="mt-5 text-3xl">{props.title}</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="black mt-6 md:block"
            >
              <span>{props.status}</span>
            </motion.button>
          </div>
        </div>

        <div className="w-full">
          <div className="h-full w-full relative">
            <img
                src={props.src}
                className="object-cover w-full h-72"
                alt=""
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignCard;