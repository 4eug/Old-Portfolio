import { Fade } from 'react-awesome-reveal'
import Link from 'next/link'

function FinalThoughts() {
  return (
    <Fade cascade>
    <section className="pt-2">
      <div className="grid ml-2 md:ml-32 mt-0 md:mt-20">
        <div className="flex flex-col justify-center md:items-start 2xl:pl-2 2xl:mb-2 w-full px-2 py-8 ">
          <h1 className="text-xl md:text-4xl font-bold">
          What I Accomplished
          </h1>
          <p className='mt-2 max-w-6xl md:text-2xl'>
            <li>I have simplified everything on the page for users to easily navigate through the page.</li> 
            <li>Retention rate increase to 80% compared to the previous design</li>
            <li>I believe users can understand the concept of what we do and the service we provide.</li>
          </p>
        </div>
      </div>
      <div className="grid ml-2 md:ml-32">
        <div className="flex flex-col justify-center md:items-start 2xl:pl-2 2xl:mb-2 w-full px-2 py-4 ">
          <h1 className="text-xl md:text-4xl font-bold">
          Final Thought
          </h1>
          <p className='mt-2 max-w-6xl md:text-2xl'>
         <h2>This was an interesting project, I did learn a lot from it and also had a supportive team.
             Some steps were skipped in this presentation such as user testing and prototyping which were done.
              I hope to get feedback from our users which will help me to consistently and constantly 
              improve on the designs on the website.

           <h2 className='font-bold mt-8'>A View of the live site:
           <Link href="" passHref>
           <span className='font-normal text-gray-500'> www.oyaghana.com</span> 
           </Link>
           </h2>
          </h2> 
          </p>
        </div>
      </div>
  </section>
  </Fade>
  )
}

export default FinalThoughts