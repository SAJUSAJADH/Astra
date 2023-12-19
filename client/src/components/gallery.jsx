import tech from '../assets/ideathon.png'
import Background from '../assets/bg.jpg'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";


export default function Gallery(){

    
    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [loading, setLoading] = useState(false);

    const gallery = [tech, tech, tech, tech, tech]

    const handleChange = (e) => {}

    const handleSubmit = (e) => {}

    

    return(
        <div  className='bg-[#c51b4b] grid justify-center pb-10 w-full bg-no-repeat bg-cover bg-center '>   
            <h2 id="gallery"  data-aos="zoom-in" className='pt-10  text-center font-bold tracking-widest text-rose-200 font-dm text-4xl lg:text-5xl pb-12 '>Glimpses of Functions</h2>     
            <div className='w-full justify-center items-center flex'>
            <div data-aos="zoom-in" class="containers container w-3/4 lg:w-2/4  z-20">
               {gallery.map((item, index)=>(
                <div className='card'>
                  <img className='img' src={item} alt="gallery"/>
                </div>
               ))}
            </div>
        </div> 
        <div id="contact" className='py-5 grid lg:grid-cols-2 justify-center items-center'>
        <div data-aos="zoom-in"
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center z-40`}
    >
      <motion.div
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl '
      >
        <p  className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='z-40 bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div> 
        </div> 
        <div className='z-20'>
            
        </div>
        </div>      
        </div>
    )
}