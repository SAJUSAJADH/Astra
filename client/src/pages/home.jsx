
import About from "../components/about"
import Hero from "../components/hero"
import Highlights from "../components/highlights"
import Shedule from "../components/shedule"
import Background from '../assets/bg.jpg'
import Gallery from "../components/gallery"
import Ticket from "../components/tickets"
import Body from "../components/body"




export default function App() {
  return (
    <div className="relative">
      <div style={{ backgroundImage: `url(${Background})` }} className="z-50 w-full h-[120vh] bg-no-repeat bg-cover bg-center relative">
        <Hero />
      </div>
      <div className="h-[224px] w-full">
        <Body/>
      </div>
      <div className="z-50 relative">
        <About />
        <Highlights />
        <Ticket />
        <Shedule />
        <Gallery />
      </div>
    </div>
  );
}
