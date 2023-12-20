
import Nav from "./navbar"

export default function Hero(){

    return(

        <div className="">
            
                <Nav/>
                <div className="pt-60 hero flex flex-col  justify-center items-center text-center">
                    <h2 className="astra1 text-7xl  tracking-widest font-dm">A S T R A</h2><br/>
                    <h2 style={{letterSpacing: '10px'}} className="text-3xl tracking-widest font-lexend text-white">2K24</h2><br/>
                    <section className="border w-28 ">
                        <p className="text-lg tracking-widest font-lexend text-white">JANUARY</p>
                        <p className="text-2xl tracking-widest font-lexend text-white">30</p>
                        <p className="text-lg tracking-widest font-lexend text-white">TUESDAY</p>
                    </section>
                    <br/>
                    <p style={{letterSpacing: '7px'}} className="lg:text-sm text-xs text-white font-lexend mb-6">PRESENTED BY</p>
                    <p style={{letterSpacing: '7px'}} className="text-2xl text-white font-lexend">DEPARTMENT OF MCA</p>
                </div>           
        </div>
    )
}