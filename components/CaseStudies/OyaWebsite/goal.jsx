import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

function Goal() {
  return (
    <Fade cascade>
    <section className="pt-2">
      <div className="grid ml-2 md:ml-32 mt-0 md:mt-4">
        <div className="flex flex-col justify-center md:items-start 2xl:pl-2 2xl:mb-2 w-full px-2 py-8 ">
          <h1 className="text-xl md:text-4xl font-bold">
          My Goals To accomplish
          </h1>
          <p className='mt-2 max-w-6xl md:text-2xl'>
         <h2>When I started this project I had ideas on what I would improve on the website.</h2> 
        <li>Implementation of google analytics to get metrics to understand users’ pain points.</li> 
        <li>Trying to understand some pain points of stakeholders and aligning them to users’ pain points.</li>
          </p>
        </div>
      </div>
      <div className="mt-0 md:mt-4 m-auto justify-center items-center 2xl:ml-60">
            <Image
            src="/Design Approach.png"
            width="1440"
            height="881"
            priority
            alt=""
            />    
        </div>
  </section>
  </Fade>
  )
}

export default Goal