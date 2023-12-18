import tech from '../assets/ideathon.png'
import Background from '../assets/bg.jpg'


export default function Gallery(){

  


    return(
        <div  className='bg-[#c51b4b] grid justify-center pb-10 w-full bg-no-repeat bg-cover bg-center '>   
            <h2 data-aos="zoom-in" className='pt-10  text-center font-bold tracking-widest text-rose-200 font-dm text-4xl lg:text-5xl pb-12 '>Glimpses</h2>     
            <div className='w-full justify-center items-center flex'>
            <div data-aos="zoom-in" class="containers container w-3/4 lg:w-2/4  z-20">
                <div class="card">
                    <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg"/>
                </div>
                <div class="card">
                    <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg"/>

                </div>
                <div class="card">
                    <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG"/>

                </div>
                <div class="card">
                    <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg"/>

                </div>
                <div class="card">
                    <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg"/>

                </div>
                </div>
        </div>         
        </div>
    )
}