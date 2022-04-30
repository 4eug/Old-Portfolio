/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen  flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-xl text-purple-900 mt-10 md:mt-0 ">
            --- Eugene Debrah
          </p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold ">
            Software Developer & Designer.
          </h1>
          <p className="mt-2 text-lg">
            I create value through design and illustration to elevate your
            company to a new level.
          </p>
        </div>
        <div className="ml-0 pl-0 md:ml-10 md:pl-10">
          <img className="w-full" src="/Images.png" alt="/" />
        </div>
        {/* <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Data Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600' /> App Security</p>
                    <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600' /> Dashboard Design</p>
                    <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600' /> Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> API</p>
                </div>
            </div> */}
      </div>
    </div>
  );
};

export default Hero;
