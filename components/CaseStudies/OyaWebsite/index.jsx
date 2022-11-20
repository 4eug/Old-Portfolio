import Image from 'next/image'
import { Fade } from 'react-awesome-reveal';

const OyaHero = (props) => { 
  return (
    <Fade cascade>
    <div className='w-full flex items-start mt-10 justify-center flex-wrap pb-4 sm:pb-10 md:pb-12 lg:pb-16 px-4 lg:pl-10'>
    <div className='w-full sm:w-2/3 lg:pr-16'>
      <h1 className="text-4xl md:text-6xl font-semibold">Oya! <span className="text-oya-green">Ghana</span> Website</h1>
     <p className='ml-0 mt-4 text-left md:text-xl md:w-full text-md leading-snug'>
     I was the designer and assisting frontend developer on this project ideating early concepts and delivering final assets for production.
     <p className='mt-4'>
     My study about websites is that they should communicate and have fluidity. When I started this project, my thought centered around how
     I could make the existing design better and also make it communicate more to users and potential customers. 
     So I introduced Google Analytics to the old website to help me get metrics and understand 
     the pain points of users to get high conversion and enhance their reach.
     </p> 
     </p>
    </div>
    <div className="ml-0 md:ml-10 mr-10 mt-10 w-full sm:w-2/3 grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
      <div className="grid">
      <h1 className="text-xl font-medium">Project Timeline</h1>
      <p className="text-lg">About 6 Weeks</p>
     </div>
    </div>
    
   
  </div>
  <div className="mt-20 relative 2xl:ml-60">
    <Image
    src="/Oya-header.png"
    width="1440"
    height="700"
    priority
    alt=""
    />    
  </div>
  </Fade>
    )
};

export default OyaHero;