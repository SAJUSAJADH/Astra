
import Nav from "./navbar"

export default function Hero(){

    return(

        <div className="">
            
                <Nav/>
                <div className="pt-60 hero flex flex-col  justify-center items-center text-center">
                    <h2 className="astra text-7xl  tracking-widest font-dm">ASTRA</h2><br/>
                    <h2 className="text-3xl tracking-widest font-dm text-white">2K24</h2><br/>
                    <section className="border w-28 ">
                        <p className="text-lg tracking-widest font-dm text-white">JANUARY</p>
                        <p className="text-2xl tracking-widest font-dm text-white">30</p>
                        <p className="text-lg tracking-widest font-dm text-white">TUESDAY</p>
                    </section>
                    <br/><p className="text-2xl tracking-widest font-dm text-white">DEPARTMENT OF MCA</p>
                </div>           
        </div>
    )
}