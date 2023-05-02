import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring",0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}  
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] text-center font-bold'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} ml-[15vw]`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} ml-[15vw]`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='text-white text-[20px] font-medium mt-10 ml-[15vw] w-[50vw]'
      >
        I'm a skilled full-stack developer with experience in building and deploying web applications. Besides, I have also worked in the field of game development. I'm passionate about competitive programming and also have a keen interest in machine learning algorithms and models. I'm a fast learner and a team player who loves to work in a collaborative environment.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default About