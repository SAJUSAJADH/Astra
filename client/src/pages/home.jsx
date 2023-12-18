
import About from "../components/about"
import Hero from "../components/hero"
import Highlights from "../components/highlights"
import Background from '../assets/bg.jpg'
import Gallery from "../components/gallery"
import Ticket from "../components/tickets"
import StarsCanvas from "../components/stars"





export default function App() {
  return (
    <div >
      <div style={{ backgroundImage: `url(${Background})` }} className="w-full h-[120vh] bg-no-repeat bg-cover bg-center">
        <Hero />
      </div>
        <About />
        <Highlights />
        <Ticket />
        <div className="relative z-0">
        <Gallery />
        <StarsCanvas/>
        </div>
    </div>
  );
}
