import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

function UserJourney() {
  return (
    <Fade cascade>
    <section className="pt-2">
      <div className="grid ml-2 md:ml-32 mt-0 md:mt-4">
        <div className="flex flex-col justify-center md:items-start 2xl:pl-2 2xl:mb-2 w-full px-2 py-8 ">
          <h1 className="text-xl md:text-3xl font-bold">
          User Journey / Site mapping
          </h1>
        </div>
      </div>
      <div className="mt-0 ml-0 md:ml-40 md:mt-4 m-auto justify-center items-center 2xl:ml-80">
            <Image
            src="/map.png"
            width="1172"
            height="439"
            priority
            alt=""
            />    
        </div>
  </section>
  </Fade>
  )
}

export default UserJourney