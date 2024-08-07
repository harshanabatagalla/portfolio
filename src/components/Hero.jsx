import React from 'react'
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import { styles } from '../styles';
import { TypeAnimation } from 'react-type-animation';
import { heroDP } from '../assets';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern bg-cover">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-tow items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className='z-30'>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <br /><span className='text-[#915eff]'>Harshana</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            <TypeAnimation
              sequence={[
                "I'm a Software Engineer",
                1500,
                "I'm a Experienced Web Developer",
                1500,
                "I'm a Technology Enthusiast",
                1500,
              ]}
              wrapper="span"
              speed={30}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </p>
          <div className='mt-5'>
            <a
              href="https://drive.google.com/file/d/16xozMs_xJ0Kok-1aoEWxGbAabqbKtElR/view?usp=drive_link"
              target='_blank'
              download>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Resume
              </button>
            </a>
            <a href="#contact">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Contact Me
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='lg:w-[620px] lg:h-[620px] md:w-[600px] md:h-[600px] h-[50%] flex absolute bottom-0 right-0 overflow-hidden lg:mr-[75px]'>
        <div className='w-[500px] h-[500px] rounded-full bg-[#8C52FF] absolute object-cover mt-40 lg:ml-20 ml-2' />
        <img
          src={heroDP}
          alt='Harshana Batagalla'
          className='lg:h-full w-auto object-cover z-20'
        />
      </div>
      <div className='absolute xs:bottom-10 bottom-4 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[22px] h-[45px] rounded-2xl border-4 border-secondary lg:flex justify-center items-start py-1 hidden ' >
            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero