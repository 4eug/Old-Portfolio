import React from 'react'
import Design_Card from './design-card'

function DesignDescription() {
  const description = [
    {
      title: 'A View',
      subInfo: 'The homepage which is basically the dashboard with the progress for the current day.',
      imgSrc: '/ViewImage.svg',
      width: '330',
      height: '580',
      point: '1. Daily activities via progress bar and percentages.',
      point2: '2. The number of habits still to be played.',
      point3: '3. The number of task to complete during the day and the next day.',
      lgFlexDirection: "lg:flex-row-reverse",
      id: 0,
    },
    {
      title: 'Be Reminded',
      subInfo: '',
      imgSrc: '/RemindedImage.svg',
      width: '358',
      height: '580',
      point: 'Quickly create tasks thanks to the to-do.function. Specify the particular day and time to be reminded so you dont forget to caary-out your activities.Finally you can assign priority to your tasks',
      lgFlexDirection: "lg:flex-row-reverse",
      id: 1,
    },
    {
      title: 'Easy to Use',
      subInfo: '',
      imgSrc: '/EaseUseImage.svg',
      width: '330',
      height: '580',
      point: 'Typing out your tasks is stressing sometimes. So a user voicing his/her task out to be transcribed to text is a feature to ease people’s pain.',
      lgFlexDirection: "lg:flex-row-reverse",
      id: 2,
    }
  ]
  return (
    <div>
        <div className="grid ml-2 md:ml-32 2xl:ml-72">
        <div className="flex flex-col justify-center md:items-start 2xl:pl-2 2xl:mb-2 w-full px-2 py-8 ">
          <h1 className="text-2xl md:text-5xl font-bold">
          Design
          </h1>
        </div>
        <div>
          {description.map((item)=>(
            <Design_Card
            title={item.title}
            subInfo={item.subInfo}
            point={item.point}
            point2={item.point2}
            point3={item.point3}
            lgFlexDirection={item.lgFlexDirection}
            imgSrc={item.imgSrc}
            width={item.width}
            height={item.height}
            key={item.key}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DesignDescription