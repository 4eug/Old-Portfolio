/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <Fade cascade>
      <div className="mt-32 p-4 md:p-10 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            <p className="text-xl text-purple-900 mt-10 md:mt-0 ">About Me</p>
            <h1 className="py-3 text-2xl md:text-3xl font-bold ">MySelf</h1>
            <p className="mt-2 text-lg">
              I am a self-motivated and a result-oriented Software Developer &
              UX Designer who is passionate about building and designing
              beautiful and value-based applications or digital products for
              businesses. I’m able to take ideas from concept to wireframe to
              prototype to production. Eager to use my skills to deliver the
              best solutions to clients and businesses.
            </p>
          </div>
          <div className="ml-0 pl-0 md:ml-10 md:pl-10">
            <img className="w-full" src="/About.png" alt="/" />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Hero;
