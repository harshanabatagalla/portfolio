import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { frontendTech, backendTech, database, programmingLanguages } from '../constants'

const TechnologyGrid = ({ title, data }) => {
  return (
    <div className='mt-10'>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='text-[24px] text-white font-bold'>{title}</motion.p>
      <div className='grid md:grid-cols-7 gap-4 mt-4 sm:grid-cols-5 grid-cols-3'>
        {data.map((tech, index) => (
          <Tilt key={tech.name} className='w-full'>
            <motion.div
              variants={fadeIn("right", "spring", index * 0.1, 0.75)}
              className='bg-tertiary p-4 rounded-lg shadow-card flex flex-col items-center justify-center gap-2 h-36 w-full'
            >
              <img src={tech.icon} alt={tech.name} className='w-12 h-12 object-contain' />
              <p className='text-white text-center mt-2'>{tech.name}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  )
}

const Expertiese = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Expertiese</p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px ]'
      >
        With extensive hands-on experience, I excel in developing dynamic and user-friendly web applications, both on the frontend and backend. I stay abreast of industry trends, ensuring my skills remain current. As a fast learner, I adapt swiftly to new technologies and environments, consistently delivering high-quality solutions.
      </motion.p>

      <TechnologyGrid title='Frontend Technologies' data={frontendTech} />
      <TechnologyGrid title='Backend Technologies' data={backendTech} />
      <TechnologyGrid title='Programming Languages' data={programmingLanguages} />
      <TechnologyGrid title='Database' data={database} />
    </>
  )
}

export default SectionWrapper(Expertiese, "expertiese")