
import { useEffect, useState } from 'react'
import Background from '../assets/bg.jpg'
import astra from '../assets/astra.png'
import scroll from '../assets/scroll.png'
import paper from '../assets/paper.png'

export default function Ticket(){

    const [shedule, setShedule] = useState(false)

    const showShedule = ()=>{
        setShedule(!shedule)
    }

    return(
        <>
            <div className={`pb-4 w-full bg-no-repeat bg-cover bg-center  ${!shedule ?'' : 'lg:h-[220vh] h-[110vh]'}`} style={{backgroundImage: ` url(${Background})`}}>
                <h2 data-aos="zoom-in" className='pt-10 text-center font-bold tracking-widest text-rose-200 font-dm text-4xl lg:text-5xl pb-6 lg:pb-24'>Tickets</h2>
                <div className='container px-2 flex flex-col gap-8 justify-center items-center'>
                    <img data-aos="zoom-out" className='w-2/3 lg:w-1/3 lg:ml-8 img-fluid z-30 shadow-xl' src={astra} alt="tickets"/>
                    <a data-aos="zoom-out" href="#_" class="px-5 lg:ml-12 lg:px-10 py-2 lg:py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
                        Buy Ticket
                    </a>
                </div>
                <div id='schedule' className="w-full ">
                    <h2 data-aos="zoom-in" className='pt-24 text-center font-bold tracking-widest text-rose-200 font-dm text-4xl lg:text-5xl mb-12 lg:mb-24'>Schedule</h2>
                    <div data-aos="fade-right" className='flex flex-col relative justify-center items-center'>
                        <img  onClick={showShedule} className='img-fluid w-3/4 z-40  cursor-pointer' src={scroll} alt='shedule'/>
                        <img  className={`img-fluid z-30 w-2/4 mr-1 lg:mr-4 lg:h-screen  absolute top-1/3 ${!shedule && 'hidden' }`} src={paper} alt="paper"/>
                    </div>
                </div>
            </div>
        </>
    )
}