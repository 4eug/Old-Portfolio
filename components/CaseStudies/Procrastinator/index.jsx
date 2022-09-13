const Hero = () => { 
    return (
      <div className='w-full flex items-start mt-10 justify-center flex-wrap pb-4 sm:pb-10 md:pb-12 lg:pb-16 px-4 lg:pl-10'>
      <div className='w-full sm:w-1/4 pb-8 sm:pb-0 sm:pl-0 lg:pl-10'>
        <h1 className='ml-0 text-left text-xl leading-snug'>
        Product Design
        </h1>
      </div>
      <div className='w-full sm:w-2/3 lg:pr-16'>
        <h1 className="text-4xl md:text-6xl font-semibold">Pro<span className="text-blue-500">cras</span>tinator</h1>
       <p className='ml-0 mt-4 text-left text-md leading-snug'>
       People tend to procrastinate most of the time. Procrastination is a voluntary behavior that makes people postpone critical activities or duties,
preferring actions that allow for immediate pleasure. This results in failing to meet the deadlines of a task or something that goes long-term,
which can inevitably lead to unfulfilling dreams and goals Since people especially me are caught in this action almost every day,
want to have an app to help prevent procrastinating. 
       </p>
      </div>
      
    </div>
      )
};

export default Hero;