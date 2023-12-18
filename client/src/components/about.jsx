import Background from '../assets/bg.jpg'

export default function About(){
  

    return(
        <div  className="w-full bg-no-repeat bg-cover bg-center lg:h-screen " style={{backgroundImage: ` url(${Background})`}}>
            <div className="lg:pt-36 items-center flex flex-col justify-center text-center mx-auto px-2 lg:px-10">
                <h2 data-aos="zoom-in" className={`font-bold mt-10 tracking-widest text-rose-200 font-dm text-4xl lg:text-5xl `}>About ASTRA</h2>
                <p className='mt-10 text-justify text-white px-4 font-sans text-lg'>Welcome to Astra, where innovation meets excitement in the realm of technology! Astra is not just a tech fest; it's a celebration of creativity, curiosity, and cutting-edge advancements. As we embark on this thrilling journey, our mission is to create a dynamic platform that fosters collaboration and exploration within the vast universe of technology.  Whether you're a seasoned professional or a budding enthusiast, Astra invites you to join us in this exhilarating convergence of ideas and possibilities. Let's push the boundaries of innovation together and illuminate the future of technology at Astra! </p>
                
            </div>
            <h2 data-aos="zoom-in" className= {`mt-6 lg:mt-10 font-ka text-xl text-rose-200 font-bold text-center`}>
                    January 30 <br/>
                    SN Institute of Technology <br/>
                    Vadakkevila
              </h2>
        </div>
    )
}