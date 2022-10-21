/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';

export default function DesignContents() {
    const designs =[
        {
         imgSrc: "/Background.png",
         url: "/projects",
         id: 0
        },
        {
          imgSrc: "/Background.png",
          url: "/about",
          id: 1
        }
    ]
  return (
    <div className="flex justify-center items-center">
  <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
    <div className="lg:flex items-stretch md:mt-12 mt-8">
      <div className="lg:w-1/2">
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
            {designs.map((item) => (
                <Link key={item.id} href={item.url} passHref>
                <div 
                className="sm:w-2/3 sm:mt-0 mt-4 relative" key={item.id}>
                    <img src={item.imgSrc} className="w-full h-full rounded-3xl border-2 duration-500 hover:scale-105" />        
                </div>
                </Link>
            ))}
        </div>

        {/* Design Post 3 */}
        <Link href="/Case-Studies/Procrastinator" passHref >
        <div 
        className="relative">
          <img src="/procrastinator-image.svg" alt="sitting place" className="w-full mt-8 md:mt-6 rounded-3xl border-2 duration-500 hover:scale-105" />
        </div>
        </Link>


      </div>
      <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
        {/* Design Post 4 */}
        <Link href="/" passHref>
        <div
        className="relative">
          <img src="/MakeWay.jpeg" alt="makeway" className="w-full rounded-3xl border-2 duration-500 hover:scale-105" />
        </div>
        </Link>

        {/* Design Post 5 */}
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
        <Link href="/" passHref>
          <div 
          className="relative w-full sm:mt-0 mt-4">
            <img src="/AdinkraIcons.png" className="w-full h-full rounded-3xl duration-500 hover:scale-105" alt="wall design" />
          </div>
          </Link>
        </div>


      </div>
    </div>
  </div>
</div>
  )
}
