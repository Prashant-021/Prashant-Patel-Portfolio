import React from 'react'
import PageTitle from '../components/PageTitle'
import { FaCode } from "react-icons/fa";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

const Home = () => {

  const WhatIDoCards = [{
    id: 1,
    icon: <FaCode className='h-6 w-6 text-primary' />,
    title: "Web Development",
    description: "As a developer, I find myself most captivated by the power and flexibility of React.js. I'm always eager to dive into new projects that leverage React.js and discover innovative ways to create fast, scalable, and user- friendly applications."
  }, {
    id: 2,
    icon: <TbDeviceDesktopAnalytics className='h-6 w-6 text-primary' />,
    title: "App Development",
    description: "With a focus on user-centric design and cutting-edge technologies, I thrive on building intuitive and efficient apps that make a positive impact on people's lives. Let's turn ideas into reality and shape the future together."
  }]

  return (
    <div className='p-5'>
      <PageTitle title={"About Me"} />
      <p className='mt-5 leading-7 text-justify'>Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
        full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
        My journey in the world of web development has been nothing short of exhilarating, and
        I constantly strive to enhance my skills and embrace emerging trends in the industry.</p>
      <h3 className='mt-5 text-3xl '>
        What I do!
      </h3>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
        {WhatIDoCards.map(card => {
          return (
            <div className={`${card.id % 2 === 0 ? "bg-secondary-background" : "bg-primary-100"} rounded-xl p-4`} key={card.id}>
              <div className="flex items-center gap-2">
                {card.icon}
                <h4 className='text-2xl font-medium'>
                  {card.title}
                </h4>
              </div>
              <p className='mt-1.5'>{card.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home