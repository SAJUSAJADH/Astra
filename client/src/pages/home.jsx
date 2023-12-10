import About from "../components/about"
import Hero from "../components/hero"
import Background from "../assets/bg.jpg"

export default function Home(){

    return(
        
        <>
            <div style={{backgroundImage: "url("+Background+")"}} className=" w-full  h-screen bg-no-repeat bg-cover bg-center">
                <Hero/>
                <About/>
            </div>
        </>
    )
}