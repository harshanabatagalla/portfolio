import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#1d1836', color: '#fff' }}

      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, color: '#f7fafc' }}
      icon={
        <div className='flex justify-center w-full h-full items-center'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[80%] h-[80%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary font-semi-bold' style={{ margin : 0, fontSize:"23px"}}>{experience.company_name}</p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li key={`point-${index}`} 
          className='text-white-100 text-[14px] pl-1 tracking-wider font-light'
          dangerouslySetInnerHTML={{ __html: point }}
          />
        ))}
      </ul>
    </VerticalTimelineElement>
)
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className='mt-14 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>   
    </>
  )
}

export default SectionWrapper(Experience, "work")