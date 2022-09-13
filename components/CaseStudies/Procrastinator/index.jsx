import Image from 'next/image'

const Hero = (props) => { 
  const about =[
    {
      title:"Role",
      description:"Research, UX Design, UI Design",
      id: 0
    },
    {
      title:"Type of Project",
      description:"Solo Project",
      id: 1
    },
    {
      title:"Duration",
      description:"1 Month",
      id: 2
    }
  ]
    return (
      <div className='w-full flex items-start mt-10 justify-center flex-wrap pb-4 sm:pb-10 md:pb-12 lg:pb-16 px-4 lg:pl-10'>
      <div className='w-full sm:w-1/4 pb-8 sm:pb-0 sm:pl-0 lg:pl-10'>
        <h1 className='ml-0 text-left text-xl leading-snug'>
        Product Design
        </h1>
      </div>
      <div className='w-full sm:w-2/3 lg:pr-16'>
        <h1 className="text-4xl md:text-6xl font-semibold">Pro<span className="text-procrastinator-blue">cras</span>tinator</h1>
       <p className='ml-0 mt-4 text-left text-md leading-snug'>
       People tend to procrastinate most of the time. Procrastination is a voluntary behavior that makes people postpone critical activities or duties,
       preferring actions that allow for immediate pleasure. This results in failing to meet the deadlines of a task or something that goes long-term,
       which can inevitably lead to unfulfilling dreams and goals Since people especially me are caught in this action almost every day,
       want to have an app to help prevent procrastinating. 
       </p>
      </div>
      <div className="ml-0 md:ml-96 mr-10 mt-10 w-full sm:w-2/3 grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
       {about.map((item) => (
        <div key={item.id} className="grid">
        <h1 className="text-lg font-medium">{item.title}</h1>
        <p className="text-sm">{item.description}</p>
       </div>
       ))}
      </div>
      
      <div className="mt-20 relative">
      <Image
      src="/procrastinator-image.svg"
      width="1440"
      height="587"
      priority
      alt=""
      />    
    </div>
    </div>
      )
};

export default Hero;