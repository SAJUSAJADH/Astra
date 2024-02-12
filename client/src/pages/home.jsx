import About from "../components/about";
import Hero from "../components/hero";
import Highlights from "../components/highlights";
import BackgroundLarge from "../assets/bglarge.jpg";
import BackgroundSmall from "../assets/bg.jpg";
import Gallery from "../components/gallery";
import StarsCanvas from "../components/stars";
import Schedule from "../components/schedule";
import HighlightsMobile from "../constants/highlightscards";

export default function Home() {
  function getBackgroundImage() {
    const isMobileOrTablet = window.matchMedia("(max-width: 768px)").matches;
    return isMobileOrTablet ? BackgroundSmall : BackgroundLarge;
  }

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${getBackgroundImage()})` }}
        className="w-full h-[120vh] bg-no-repeat bg-cover bg-center"
      >
        <Hero />
      </div>
      <div
        style={{ backgroundImage: `url(${getBackgroundImage()})` }}
        className="w-full py-4 bg-no-repeat bg-cover bg-center"
      >
        <About />
        <Highlights />
      </div>
      <div
        className="block lg:hidden w-full py-4 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${getBackgroundImage()})` }}
      >
        <HighlightsMobile />
      </div>
      <Schedule />
      <div className="relative z-0">
        <Gallery />
        <StarsCanvas />
      </div>
    </div>
  );
}
