import tech from "../assets/ideathon.png";
import Contact from "./contact";

export default function Gallery() {
  const gallery = [tech, tech, tech, tech, tech];

  return (
    <div className="bg-[#c51b4b] grid justify-center pb-10 w-full bg-no-repeat bg-cover bg-center ">
      <h2
        id="gallery"
        data-aos="zoom-in"
        className="pt-10  text-center font-bold tracking-widest text-rose-200 font-dm text-4xl lg:text-5xl pb-8 xl:pb-12 "
      >
        Glimpses of Functions
      </h2>
      <div className="w-full justify-center items-center flex">
        <div
          data-aos="zoom-in"
          className="containers container w-3/4 lg:w-2/4  z-20"
        >
          {gallery.map((item, index) => (
            <div key={index} className="card">
              <img className="img" src={item} alt="gallery" />
            </div>
          ))}
        </div>
      </div>
      <Contact/>
    </div>
  );
}
