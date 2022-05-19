/* eslint-disable @next/next/no-img-element */
import React from "react";


const DevMiniCard = (props) => {
    return (
        <div className="max-w-sm  rounded-3xl border border-gray-200 shadow-md dark:border-gray-200">
        <div className="pt-4 pl-4 pr-4">
          <a href="#">
            <img className="rounded-t-lg" src="/devbg.png" alt="" />
          </a>
        </div>

        <div className="p-5">
          <a href="#">
            <h5 className="text-lg font-bold tracking-tight  ">
              {props.title}
            </h5>
          </a>
          <p className="font-normal  ">{props.subtitle}</p>
          <p className="font-light  ">
            {props.description}
          </p>
        </div>
      </div>
    )
}

export default DevMiniCard;