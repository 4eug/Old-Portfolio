import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

function MockUps() {
  return (
    <Fade cascade>
    <div className="mt-2 md:mt-40 text-center"> 
      <h6 className="text-3xl md:text-5xl font-semibold">Mockups</h6>
        <div className="flex justify-center items-center">
            <p className='mt-2 text-center text-base max-w-6xl md:text-xl'>
            Presentation of Final High Fidelity mockups after usability test on
            Low Fidelity
            </p>
        </div>
        <div className="mt-20 m-auto flex justify-center pl-8 md:pl-20 items-center">
            <Image
            src="/Mockups.svg"
            width="1086"
            height="1529"
            priority
            alt=""
            />    
        </div>
    </div>
    </Fade>
  )
}

export default MockUps