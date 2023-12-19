import { useEffect, useState } from 'react'
import ideathon from '../assets/ideathon.png'
import coding from '../assets/coding.png'
import blind from '../assets/blind.png'
import debug from '../assets/debugging.png'
import freefire from '../assets/freefire.png'
import bgmi from '../assets/bgmi.avif'
import Background from '../assets/bg.jpg'
import treasure from '../assets/treasure.jpg'



export default function Highlights(){

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth >= 1024);
      };

      handleResize();
    },[])



    const Data = [
        {event:'Treasure Hunt', desc:'Sharpen your skills, follow the clues, and uncover hidden surprises for a thrilling and rewarding adventure.',image:treasure,},
        {event:'Ideathon', desc:'Go on... Create, and pitch groundbreaking ideas that could shape the future of technology and beyond.',image:ideathon,},
        {event:'Debugging', desc:'Navigate through intricate code puzzles, spot errors, and emerge as the debugging champion. ',image:debug,},
        {event:'Blind Coding', desc:'Step into the coding unknown with our Blind Coding Competition! Trust your skills, rely on logic, and unveil your coding prowess.',image:blind,},
        {event:'Competative Coding', desc:'Prepare for the coding battleground in our Competitive Coding event! Challenge yourself against the clock and fellow participants. ',image:coding,},
        {event:'BGMI', desc:'Embark on an epic journey in our BGmi Gaming Competition! Battle it out, showcase your skills, and strive for victory in this intense esports showdown.',image:bgmi,},
        {event:'FreeFire', desc:'Gear up for intense gaming action in our Free Fire competition! Join the battle, showcase your skills, and emerge as the last one standing in this thrilling esports showdown.',image:freefire,},
    ]

  return(

    <div  className="w-full bg-no-repeat bg-cover bg-center grid justify-center items-center" style={{backgroundImage: ` url(${Background})`}}>
        <div className='pt-12 text-center'>
            <h2 id='highlights' data-aos="zoom-in" className='font-bold tracking-widest text-rose-200 font-dm text-4xl lg:text-5xl pb-24'>Highlights</h2>
        </div>
        <div className='px-2 lg:px-28 container'>
            {Data.map((item, index)=>(
                <div key={index} className='grid lg:grid-cols-2 gap-6 pb-8'>
                    <div data-aos = {!isLargeScreen ? "fade-up" : index % 2 === 0 ? "fade-left":"fade-right" } className={index % 2 === 0 ? "px-12 lg:px-10 lg:order-last flex flex-col justify-center items-center text-center lg:text-end text-white" : "px-12 lg:px-10 flex flex-col justify-center items-center text-center lg:text-end text-white"}>
                        <p className="font-aladin text-rose-200 tracking-widest text-center text-3xl">{item.event}</p>
                        <p className="text-md lg:text-lg text-justify">{item.desc}</p>
                    </div>
                   <div className="flex justify-center items-center">
                        <img data-aos = {!isLargeScreen ? "fade-up" : index % 2 === 0 ? "fade-right":"fade-left"} className={index === 0 ? 'w-2/3 lg:w-3/4 h-3/4 img-fluid' :'w-2/3 lg:w-3/4 img-fluid'} src={item.image} alt={item.image} />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
        
}
