import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

function Research() {
  return (
    <Fade cascade>
    <section className="pt-2">
      <div className="grid ml-2 md:ml-32 mt-0 md:mt-4">
        <div className="flex flex-col justify-center md:items-start 2xl:pl-2 2xl:mb-2 w-full px-2 py-8 ">
          <h1 className="text-xl md:text-4xl font-bold">
          Challenges
          </h1>
          <p className='mt-2 max-w-6xl md:text-2xl'>
         <h2 >Some challenges:</h2> 
        <li>Implementation of google analytics to get metrics to understand users’ pain points.</li> 
        <li>Trying to understand some pain points of stakeholders and aligning them to users’ pain points.</li>
          </p>
        </div>
      </div>
      <div className="mt-0 md:mt-4 m-auto justify-center items-center 2xl:ml-40">
            <Image
            src="/About.png"
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

export default Research