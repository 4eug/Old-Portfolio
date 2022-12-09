import React from 'react'
import Image from 'next/image'

function Solution() {
  return (
    <section className="pt-2">
      <div className="grid ml-2 md:ml-32 mt-0 md:mt-20">
        <div className="flex flex-col justify-center md:items-start 2xl:pl-2 2xl:mb-2 w-full px-2 py-8 ">
          <h1 className="text-xl md:text-4xl font-bold text-oya-green">
          Solution
          </h1>
          <div className="mt-8 relative 2xl:ml-60">
            <Image
            src="/solutions.png"
            width="1129"
            height="229"
            priority
            alt=""
            />    
        </div>
        </div>
      </div>
  </section>
  )
}

export default Solution