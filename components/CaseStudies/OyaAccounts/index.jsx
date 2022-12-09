import Image from 'next/image'
import { Fade } from 'react-awesome-reveal';

const AccountHero = (props) => { 
  return (
    <Fade cascade>
    <div className='w-full flex items-start mt-10 justify-center flex-wrap pb-4 sm:pb-10 md:pb-12 lg:pb-16 px-4 lg:pl-10'>
    <div className='w-full sm:w-2/3 lg:pr-16'>
      <h1 className="text-4xl md:text-6xl font-semibold">Oya! <span className="text-oya-green">Ghana</span> Accounts Page</h1>
    </div>
    <div className="ml-0 md:ml-10 mr-10 mt-10 w-full sm:w-2/3 grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
      <div className="grid">
      <h1 className="text-xl font-medium">Project Timeline</h1>
      <p className="text-lg">About 3 Weeks</p>
     </div>
    </div>
    
   
  </div>
  <div className="mt-20 relative 2xl:ml-60">
    <Image
    src="/Accounts Problem.png"
    width="1440"
    height="856"
    priority
    alt=""
    />    
  </div>
  </Fade>
    )
};

export default AccountHero;