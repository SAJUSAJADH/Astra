import React from 'react'
import Footer from './footer'
import { PhoneOutlined } from '@ant-design/icons'

function Contact() {
  return (
    <>
    <div className='grid xl:grid-cols-2 p-6 gap-4 xl:px-24' id='contact'>
        <div className='flex flex-col justify-center xl:justify-start gap-4'>
            <p className='text-white font-black text-2xl xl:text-4xl pb-5'>👋 Co-ordinators</p>
            <a href='' className='flex gap-2'>
                <div className='bg-black bg-opacity-30 rounded-full p-4'>
                    <PhoneOutlined className='text-xl text-white'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-white font-roboto text-justify text-light lg:text-xl text-opacity-60 font-medium'>Cordinator 1</p>
                    <p className='text-white font-roboto text-justify text-light lg:text-xl font-medium'>+91 1111111111</p>
                </div>
            </a>
            <a href='' className='flex gap-2'>
            <div className='bg-black bg-opacity-30 rounded-full p-4'>
                <PhoneOutlined className='text-xl text-white'/>
            </div>
                <div className='flex flex-col gap-1'>
                <p className='text-white font-roboto text-justify text-light lg:text-xl text-opacity-60 font-medium'>Cordinator 2</p>
                    <p className='text-white font-roboto text-justify text-light lg:text-xl font-medium'>+91 1111111111</p>
                </div>
            </a>
            <a href='' className='flex gap-2'>
            <div className='bg-black bg-opacity-30 rounded-full p-4'>
                <PhoneOutlined className='text-xl text-white'/>
            </div>
                <div className='flex flex-col gap-1'>
                <p className='text-white font-roboto text-justify text-light lg:text-xl text-opacity-60 font-medium'>Cordinator 3</p>
                    <p className='text-white font-roboto text-justify text-light lg:text-xl font-medium'>+91 1111111111</p>
                </div>
            </a>
        </div>
        <div className=''>
        <iframe className='rounded-xl w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.9516293881356!2d76.63391447482596!3d8.88408949124089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fcb4ffe1bda7%3A0x43dc6cf7c39ad7af!2sSree%20Narayana%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1707736908309!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact