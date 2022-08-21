/* eslint-disable @next/next/no-img-element */

import AboutButton from "../utilities/Buttons/button";
import ConnectButton from "../utilities/Buttons/connect-btn";

/* eslint-disable @next/next/no-html-link-for-pages */
export const Content = () => {
    return (
      <div className="mt-24 px-4 py-16 md:ml-24  sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-screen-xl xl:max-w-screen-2xl  m-auto">
          <div className=" flex-col justify-center md:items-start w-full px-2 py-8">
            
            <h1 className="py-3 text-3xl md:text-5xl font-semibold ">
              Some Projects
            </h1>
          </div>
        </div>
        <div className="grid gap-10 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
         
            <div className="flex flex-col h-full">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="object-cover w-full h-48 rounded-2xl"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                    <button className="white">
                        Website
                    </button>
                    <button className="white">
                        Website
                    </button>
                    </div>
                  <h2 className="mt-4 text-xl leading-5">
                    The doctor said
                  </h2>
                </div>
              </div>
            </div>
          
          
            <div className="flex flex-col h-full">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="object-cover w-full h-48 rounded-2xl"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                    <button className="white">
                        Website
                    </button>
                    <button className="white">
                        Website
                    </button>
                    </div>
                  <h2 className="mt-4 text-xl leading-5">
                    The doctor said
                  </h2>
                </div>
              </div>
            </div>
          
            <div className="flex flex-col h-full">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="object-cover w-full h-48 rounded-2xl"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                    <button className="white">
                        Website
                    </button>
                    <button className="white">
                        Website
                    </button>
                    </div>
                  <h2 className="mt-4 text-xl leading-5">
                    The doctor said
                  </h2>
                </div>
              </div>
            </div>
          
         
          
        </div>
        <div className="mt-16 mb-10 flex justify-center items-center">
          <ConnectButton/>
          </div>
      </div>
    );
  };