import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal';

function UserFlow() {
  return (
    <Fade cascade>
    <div className="text-center"> 
      <h6 className="text-3xl md:text-5xl text-white font-semibold">Userflow Map</h6>
        <div className="flex justify-center items-center">
            <p className='mt-2 text-center text-base text-white md:text-base max-w-4xl'>
            The Userflow map shows how users will navigate around the app
            </p>
        </div>
        <div className="mt-10 m-auto flex justify-center items-center">
            <Image
            src="/user-flow.svg"
            width="375"
            height="949"
            priority
            alt=""
            />    
        </div>
    </div>
    </Fade>
  )
}

export default UserFlow;