/* eslint-disable @next/next/no-img-element */
import React from "react";
import Chips from "../Buttons/chips";


const DevCard = (props) => {
    return (
      
      <div className="flex flex-col h-full">
              <img
                src={props.src}
                className="object-cover w-full h-48 rounded-2xl"
                alt=""
              />
              <div className="">
                <div className="pt-4">
                    <div className="flex gap-2 lg:grid-cols-3">
                    <Chips/>
                    {/* <button className="white">
                        Website
                    </button> */}
                    </div>
                  <h2 className="mt-4 text-xl leading-5">
                    {props.title}
                  </h2>
                </div>
              </div>
            </div>
            
    )
}

export default DevCard;