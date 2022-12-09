/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';

export default function DesignContents() {
    
  return (
    <div className="mt-2 px-4 py-16  sm:max-w-xl md:max-w-full lg:px-[130px] lg:py-20">
    <div className="grid gap-10 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
     
        <div className="flex flex-col h-full">
          <Link href="/Case-Studies/Procrastinator" passHref>
          <img
            src="/Procrastinator.jpeg"
            className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl duration-500 hover:scale-105"
            alt=""
          />
          </Link>
          <div className="">
            <div className="pt-4">
            <div className="flex gap-2 md:gap-2 lg:grid-cols-3 ">
                <h3 className="">Research,</h3>
                </div>
              <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
              Procrastinator
              </h2>
              <div className="flex gap-1 md:gap-2 lg:grid-cols-3">
                 
                </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full">
          <Link href="/Case-Studies/Oya-website" passHref>
          <img
            src="/Oya!.png"
            className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl duration-500 hover:scale-105"
            alt=""
          />
          </Link>
          <div className="">
            <div className="pt-4">
            <div className="flex gap-2 md:gap-2 lg:grid-cols-3 ">
                <h3 className="">Research,</h3>
                </div>
              <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
              Oya! Ghana Website
              </h2>
              <div className="flex gap-1 md:gap-2 lg:grid-cols-3">
                 
                </div>
            </div>
          </div>
        </div>

      
        {/* <div className="flex flex-col h-full">
          <Link href="" passHref>
          <img
            src="/MakeWay.jpeg"
            className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl duration-500 hover:scale-105"
            alt=""
          />
          </Link>
          <div className="">
            <div className="pt-4">
              <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
              MakeWay App
              </h2>
              <div className="flex gap-1 md:gap-2 lg:grid-cols-3">
                 
                </div>
            </div>
          </div>
        </div> */}
      
        <div className="flex flex-col h-full">
          <Link href="https://www.behance.net/gallery/151783469/Buy-Sell-and-Design-3D-Icons-UI-Design" passHref>
          <img
            src="/Header.png"
            className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl duration-500 hover:scale-105"
            alt=""
          />
          </Link>
          <div className="">
            <div className="pt-4">
            <div className="flex gap-2 md:gap-2 lg:grid-cols-3 ">
                <h3 className="">Research,</h3>
                </div>
              <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
              Maxicons
              </h2>
              <div className="flex gap-1 md:gap-2 lg:grid-cols-3">
                </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full">
          <Link href="/Case-Studies/Oya-accounts" passHref>
          <img
            src="/Oya Accounts.png"
            className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl duration-500 hover:scale-105"
            alt=""
          />
          </Link>
          <div className="">
            <div className="pt-4">
                <div className="flex gap-2 md:gap-2 lg:grid-cols-3 ">
                <h3 className="">Research,</h3>
                </div>
              <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
              Oya! Ghana Accounts Page
              </h2>
              <div className="flex gap-1 md:gap-2 lg:grid-cols-3">
                </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full">
          <Link href="" passHref>
          <img
            src="/Vintage.png"
            className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl duration-500 hover:scale-105"
            alt=""
          />
          </Link>
          <div className="">
            <div className="pt-4">
            <div className="flex gap-2 md:gap-2 lg:grid-cols-3 ">
                <h3 className="">Research,</h3>
                </div>
              <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
              Vintage Item Header
              </h2>
              <div className="flex gap-1 md:gap-2 lg:grid-cols-3">
                 
                </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full">
          <Link href="https://www.behance.net/gallery/148806355/Brandfolio-2019-2022" passHref>
          <img
            src="/BrandFolio.jpg"
            className="object-cover w-[360px] ml-2 md:ml-auto md:w-full h-48 rounded-2xl duration-500 hover:scale-105"
            alt=""
          />
          </Link>
          <div className="">
            <div className="pt-4">
            <div className="flex gap-2 md:gap-2 lg:grid-cols-3 ">
                <h3 className="">Research,</h3>
                </div>
              <h2 className="mt-4 text-xl leading-5 ml-2 md:ml-auto">
              BrandFolio 2018 - 2021
              </h2>
              <div className="flex gap-1 md:gap-2 lg:grid-cols-3">
                 
                </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}
