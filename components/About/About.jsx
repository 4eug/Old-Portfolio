/* eslint-disable @next/next/no-img-element */
import React from "react";
import ConnectButton from "../utilities/Buttons/connect-btn";

const About = () => {
  return (
    <section className="pt-16 md:pt-28">
        <div className="text-center"> 
        <div className="flex justify-center items-center">
        <img className="object-center" src="/Me.png" alt="/" />
        </div>
          <h6 className="mt-8 text-xl">Hi, I’m Eugene ✋🏼</h6>
          <h3 className="text-4xl md:text-6xl text-center mt-8 leading-16 tracking-tight font-normal">
          Building digital products,
          </h3>
          <h3 className="text-4xl md:text-6xl text-center mt-2 leading-16 tracking-tight font-normal">
          creating awesome brand 
          </h3>
          <h3 className="text-4xl md:text-6xl text-center mt-2 leading-16 tracking-tight font-normal">
          experiences.
          </h3>
          <div className="flex justify-center items-center">
          <p className='mt-10 text-start text-lg max-w-xl'>
          a <span className="font-bold">Software Developer</span>(Mobile & Front-end) and <span className="font-bold">Product Designer </span>
          who is passionate about building and designing beautiful 
          and value-based applications or digital 
          products for businesses.
              </p>
          </div>
          
          <div className="mt-16 mb-10 flex justify-center items-center">
          <ConnectButton/>
          </div>

        </div>
      </section>
  );
};

export default About;
