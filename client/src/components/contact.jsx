import React, { useRef, useState } from "react";
import { styles } from "../styles"
import emailjs from '@emailjs/browser'
import Footer from "./footer";

const serviecId = import.meta.env.VITE_APP_SERVICE_ID
const templateId = import.meta.env.VITE_APP_TEMPLATE_ID
const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY

export default function Contact () {


    const formRef = useRef();
    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
  
    const [loading, setLoading] = useState(false);

   

    const handleSubmit = (e) => {
        e.preventDefault()

        setLoading(true)

        emailjs.send(serviecId,templateId,{
            from_name: Name,
            to_name: 'sajadh s',
            from_email: email,
            to_email: 'sajadh2001s@gmail.com',
            message: `${message} ----from ${email}`,
        }, publicKey).then(()=>{
            setLoading(false)
            setName('')
            setEmail('')
            setMessage('')
        }, (error) =>{
            setLoading(false)
            console.log(error)
            alert('something went wrong.')
        })
    }

    return(<>
        <div id="contact" className='py-5 grid lg:grid-cols-2 justify-center items-center'>
        <div 
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center z-40`}
    >
      <div
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
              value={Name}
              onChange={ev => setName(ev.target.value)}
              spellCheck={false}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={email}
              onChange={ev => setEmail(ev.target.value)}
              spellCheck={false}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={message}
              onChange={ev => setMessage(ev.target.value)}
              spellCheck={false}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='z-40 bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div> 
        </div> 
        <div className='z-20'>
            
        </div>
        </div> 
        <Footer/> 
        </>
    )
}