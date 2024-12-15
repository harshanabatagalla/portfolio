import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { socialLinks } from '../constants'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Harshana Batagalla",
          from_email: form.email,
          to_email: "harshanabatagalla@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("oops! something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col flex gap-10'>
      <div
        // variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-10 flex flex-col gap-7'>
          <label className='flex flex-col'>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <textarea
              rows={4}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <button
            type='submit'
            className='bg-blue-950 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div
        // variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto p-8'
      >
        <p className={styles.sectionSubText}>or</p>
        <h3 className={styles.sectionHeadText}>Find me on</h3>

        <div className='mt-10 flex flex-col gap-7'>
          {socialLinks.map((link) => (
            <a
              href={link.link}
              target='_blank'
              key={link.name}
              rel="noopener noreferrer"
              className='flex items-center gap-3 cursor-pointer bg-black-100 p-2 rounded-2xl'
            >
              <div className='flex gap-3 items-center'>
                <img src={link.icon} alt={link.name} className='row-span-2 w-10 h-10 md:ml-28' />
                <div className='w-1 h-10 bg-white justify-self-center' />
                <div className='flex flex-col '>
                  <span className='text-white font-bold col-span-2'>{link.name}</span>
                  <span className='text-white font-light col-span-2 md:text-base text-[10px]'>{link.title}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>


    </div>
  )
}

export default SectionWrapper(Contact, 'contact')