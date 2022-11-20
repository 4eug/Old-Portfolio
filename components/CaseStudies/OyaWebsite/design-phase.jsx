import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

function DesignPhase() {
  return (
    <Fade cascade>
    <section className="pt-2">
      <div className="grid ml-2 md:ml-32 mt-0 md:mt-20 md:mb-10">
        <div className="flex flex-col justify-center md:items-start 2xl:pl-2 2xl:mb-2 w-full px-2 py-8 ">
          <h1 className="text-xl md:text-4xl font-bold">
          The Design Phase
          </h1>
          <p className='mt-2 max-w-6xl md:text-2xl'>
         <h2>For most of my products, if I am collaborating with other developers, designers, or product managers,
           I show them wireframes to get feedback and keep iterating until they are all satisfied.
            This helps me to know the limit to what is possible for developers to bring to life.
             I use Figma as my design tool, but I can use any tool.
          </h2> 
          </p>
        </div>
      </div>
      <div className="mt-0 md:mt-4 m-auto justify-center items-center 2xl:ml-60">
            <Image
            src="/Final Design.png"
            width="1440"
            height="1233"
            priority
            alt=""
            />    
        </div>
  </section>
  </Fade>
  )
}

export default DesignPhase