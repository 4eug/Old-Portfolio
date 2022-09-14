/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { Fade, Bounce, Flip, JackInTheBox, Slide }from 'react-awesome-reveal';

function Design_Card(props) {
  return (
    <div className="mt-2 md:mt-32">
      <div
        className={`flex ${
          props.flexDirection ?? "flex-col"
        } w-full  justify-center gap-8
      lg:gap-24
      lg:h-portfolio-px-450
      ${props.lgFlexDirection ?? "lg:flex-row"}
      `}
      >
        <div className="w-full flex items-center">
          <div>
            <h2 className="mt-5 text-3xl font-semibold">{props.title}</h2>
            <p className="mt-2 text-xl md:w-2/3 font-medium">{props.subInfo}</p>
            <p className="mt-2 text-lg md:w-2/3 font-normal">{props.point}</p>
            <p className="mt-2 text-lg md:w-2/3 font-normal">{props.point2}</p>
            <p className="mt-2 text-lg md:w-2/3 font-normal">{props.point3}</p>
          </div>
        </div>

        <div className="w-full">
          <div className="md:ml-44 justify-center items-center relative">
          <Image
            src={props.imgSrc}
            width={props.width}
            height={props.height}
            priority
            alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design_Card;