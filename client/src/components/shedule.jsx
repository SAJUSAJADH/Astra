import { useEffect, useState } from 'react'
import scroll from '../assets/scroll.png'
import Background from '../assets/bg.jpg'
import paper from '../assets/paper.png'


export default function Shedule(){

    const [shedule, setShedule] = useState(false)

    const showShedule = ()=>{
        setShedule(!shedule)
    }

    return(
        <>
            <div className="mb-56 w-full bg-no-repeat bg-cover bg-center h-[75vh] lg:h-[150vh]" style={{backgroundImage: ` url(${Background})`}}>
                <h2 data-aos="zoom-in" className='pt-8 text-center font-bold tracking-widest text-rose-200 font-dm text-4xl lg:text-5xl mb-12 lg:mb-24'>Schedule</h2>
                <div className='flex flex-col relative justify-center items-center'>
                    <img data-aos="fade-right" onClick={showShedule} className='img-fluid w-3/4 z-40  cursor-pointer' src={scroll} alt='shedule'/>
                    <img  className={`img-fluid z-30 w-2/4 mr-1 lg:mr-4 lg:h-screen  absolute top-1/3 ${!shedule && 'hidden' }`} src={paper} alt="paper"/>
                </div>
            </div>
        </>
    )
}