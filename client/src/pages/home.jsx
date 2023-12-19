
import About from "../components/about"
import Hero from "../components/hero"
import Highlights from "../components/highlights"
import Background from '../assets/bg.jpg'
import Gallery from "../components/gallery"
import StarsCanvas from "../components/stars"
import Schedule from "../components/schedule"





export default function App() {
  return (
    <div >
      <div style={{ backgroundImage: `url(${Background})` }} className="w-full h-[120vh] bg-no-repeat bg-cover bg-center">
        <Hero />
      </div>
        <About />
        <Highlights />
        <Schedule/>
        <div className="relative z-0">
        <Gallery />
        <StarsCanvas/>
        </div>
    </div>
  );
}
