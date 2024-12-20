import React from 'react'
import { motion, spring } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant, fadeIn } from '../utils/motion'
import { testimonials } from '../constants'

const FeedbackCard = ({ index, name, designation, testimonial, company, image }) => (
  <motion.div
    variants={fadeIn("", spring, index * 0.5, 0.75)}
    className='bg-black-200 rounded-3xl p-10 sm:w-[480px] w-full '
  >
    <p className='text-white font-black sm:text-[48px] text-[36px]'>"</p>
    <div className='mt-1'>
      {/* <p className='white tracking-wider sm:text-[16px] text-[14px] text-white'>{testimonial}</p> */}
      <p dangerouslySetInnerHTML={{ __html: testimonial }} className='white tracking-wider sm:text-[12px] text-[10px] text-white font-light sm:text-justify' />
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'> 
          <span className='blue-text-gradient'>@</span> {name} 
          </p>
          <p className='mt-1 text-secondary text-[12px]'>{designation} of {company} </p>
        </div>
        <img src={image} alt={`feedback-by-${name}`} className='w-10 h-10 rounded-full object-cover' />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rouded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} sm:-mt-20 -mt-40 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,'feedbacks')