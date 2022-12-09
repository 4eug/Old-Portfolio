import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

function Screens() {
  return (
    <Fade cascade>
    <section className="pt-2">
      <div className="mt-0 md:mt-4 m-auto justify-center items-center 2xl:ml-60">
            <Image
            src="/Screens.png"
            width="1440"
            height="856"
            priority
            alt=""
            />    
        </div>
  </section>
  </Fade>
  )
}

export default Screens