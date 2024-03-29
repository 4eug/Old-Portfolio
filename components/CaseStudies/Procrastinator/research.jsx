import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

function Research() {
  return (
    <Fade cascade>
    <section className="pt-2">
    <div className="text-center"> 
      <h6 className="mt-4 text-xl md:text-4xl font-semibold">Goal</h6>
      <div className="flex justify-center items-center">
      <p className='mt-2 text-center text-sm max-w-6xl md:text-xl'>  
      The goal was to develop an app that would encourage organization and limit 
      the habit of postponing their activities.
       The app is to motivates and rewards users for doing their tasks.
          </p>
      </div>
    </div>
      <div className="grid ml-2 md:ml-32 mt-16 md:mt-32">
        <div className="flex flex-col justify-center md:items-start 2xl:pl-2 2xl:mb-2 w-full px-2 py-8 ">
          <h1 className="text-xl md:text-4xl font-bold">
          Discovery:
          </h1>
          <h1 className="text-xl md:text-4xl font-bold">
          Research & Analysis
          </h1>
          <p className='mt-4 max-w-6xl md:text-2xl'>
          Conducted interviews to understand users or potential users and how the application
          could have beneficial functions to users. I wrote down the key findings and grouped them into theme.
          I realized a lot of people tend to procrastinate a lot. And also find it difficult to type their task
          out with the current applications they are using.
          </p>
        </div>
        <div className="flex flex-col justify-center md:items-start 2xl:pl-2 2xl:mb-2 w-full px-2 py-8 ">
          <h1 className="text-xl md:text-4xl font-bold">
          Insight
          </h1>
          <p className='mt-4 max-w-6xl md:text-2xl'>
          Based on the interviews and surveys
          </p>
        </div>
        <div className="mt-10 m-auto flex justify-center items-center">
            <Image
            src="/research-cards.svg"
            width="1136"
            height="404"
            priority
            alt=""
            />    
        </div>
        
      </div>
      <div className="mt-10 m-auto justify-center items-center 2xl:ml-40">
            <Image
            src="/user-persona.svg"
            width="1440"
            height="1450"
            priority
            alt=""
            />    
        </div>
  </section>
  </Fade>
  )
}

export default Research