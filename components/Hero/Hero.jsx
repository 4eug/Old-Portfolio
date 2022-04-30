/* eslint-disable @next/next/no-img-element */
import React from "react";
// import { Spline } from "@splinetool/react-spline";
const Spline = require("@splinetool/react-spline");

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen  flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-xl text-purple-900 mt-10 md:mt-0 ">
            Eugene Debrah
          </p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold ">
            Software Developer & Designer.
          </h1>
          <p className="mt-2 text-md">
            I create value through design and illustration to elevate your
            company to a new level.
          </p>
        </div>
        <div className="ml-0 pl-0 md:ml-10 md:pl-10">
          <div>
            <Spline scene="https://prod.spline.design/UHKfuoFV4Ujx-5qo/scene.spline" />
          </div>

          {/* <img className="w-full" src="/Images.png" alt="/" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
