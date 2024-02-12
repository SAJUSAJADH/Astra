import React from "react";
import { useParams } from "react-router-dom";
import BackgroundLarge from "../assets/bglarge.jpg";
import BackgroundSmall from "../assets/bg.jpg";
import { Data } from "../styles";
import { PhoneFilled } from "@ant-design/icons";


function EventDetails() {
  const { eventname } = useParams();
  const event = eventname.replace(/_/g, " ");
  const currentDate = new Date();
  const targetDate = new Date("2024-03-20");
  let RegistrationStatus;

  function getBackgroundImage() {
    const isMobileOrTablet = window.matchMedia("(max-width: 768px)").matches;
    return isMobileOrTablet ? BackgroundSmall : BackgroundLarge;
  }

  const imageData = Data.filter((item) => item.event === event);

  const Rules = imageData[0].Rules;
  const Cordinators = imageData[0].cordinators

  const ImageMapping = imageData.map((item, index) => {
    return <img key={index} className="" alt="event poster" src={item.image} />;
  });

  const ruelMapping = Rules.map((rule, index) => {
    return (
        <div key={index} className="flex">👉 <p  className="text-white font-roboto text-justify text-light">{rule}</p></div>
    )
  })

  const cordinatorsMapping = Cordinators.map((cordinator, index)=>{
    return (
        <div key={index} className="flex flex-col gap-1 justify-center ">
                <div className="bg-black bg-opacity-40 rounded-full w-1/4 text-center">
                <PhoneFilled className="text-white p-5"/>
                </div>
                <p className="text-white font-roboto text-justify text-light lg:text-xl text-opacity-60 font-medium">{cordinator.name}</p>
                <p className="text-white font-roboto text-justify text-light italic">{cordinator.number}</p>
        </div>
    )
  })

  const Status = () => {
    currentDate < targetDate
      ? (RegistrationStatus = "Registration open")
      : (RegistrationStatus = "Registration closed");
    return RegistrationStatus;
  };

  return (
    <div
      style={{ backgroundImage: `url(${getBackgroundImage()})` }}
      className="w-full py-4 bg-no-repeat bg-cover bg-center"
    >
      <div className="container mx-auto px-3 lg:px-80 grid gap-4 pt-10">
        <div className="bg-rose-500 bg-opacity-30 flex justify-start rounded-2xl items-center py-3 px-2 lg:px-4">
          <p className="font-black tracking-widest text-white font-dm text-3xl lg:text-5xl">
            {eventname}
          </p>
        </div>
        <div className="bg-rose-500 bg-opacity-30 grid lg:grid-cols-3 gap-4 justify-start rounded-2xl items-center py-3 px-2 lg:px-4">
          <div className="flex justify-center items-center">{ImageMapping}</div>
          <div className="lg:col-span-2 justify-start items-center flex flex-col gap-3">
            <p className="font-medium tracking-widest text-white font-dm text-2xl lg:text-4xl">
              1'st Prize
            </p>
            <p className="font-semibold tracking-widest text-white font-lexend text-3xl lg:text-5xl">
              {imageData[0].price}
            </p>
          </div>
        </div>
        <div className="bg-rose-500 bg-opacity-30 flex justify-center rounded-2xl items-center py-3 px-2 lg:px-4">
          <p className="font-medium tracking-widest text-white font-lexend text-xl ">
            {Status()}
          </p>
        </div>
        <div className="bg-rose-500 bg-opacity-30 flex justify-start rounded-2xl items-center py-3 px-2 lg:px-4">
          <p className="font-medium tracking-widest text-white font-roboto text-justify text-light lg:text-xl ">
            {imageData[0].desc}
          </p>
        </div>
        <div className="bg-rose-500 bg-opacity-30 grid lg:grid-cols-5 gap-3 justify-center lg:justify-start rounded-2xl items-center py-3 px-2 lg:px-4">
          <div className="justify-center lg:justify-start items-center flex flex-col gap-2 lg:border-r">
            <p className="text-white font-roboto text-justify text-light lg:text-xl text-opacity-60 font-medium">
              Date
            </p>
            <p className="text-white font-roboto text-justify text-light lg:text-xl">
              19 Mar 2024
            </p>
          </div>
          <div className="justify-center lg:justify-start items-center flex flex-col gap-2 lg:border-r">
            <p className="text-white font-roboto text-justify text-light lg:text-xl text-opacity-60 font-medium">
              Venue
            </p>
            <p className="text-white font-roboto text-justify text-light lg:text-xl">
              N/A
            </p>
          </div>
          <div className="justify-center lg:justify-start items-center flex flex-col gap-2 lg:border-r">
            <p className="text-white font-roboto text-justify text-light lg:text-xl text-opacity-60 font-medium">
              Reg Fee
            </p>
            <p className="text-white font-roboto text-justify text-light lg:text-xl">
              50
            </p>
          </div>
          <div className="lg:col-span-2 lg:justify-end flex">
            <button disabled={currentDate > targetDate} className="bg-transparent border border-white px-5 py-3 text-white text-xl rounded-lg">
              Register
            </button>
          </div>
        </div>
        <div className="bg-rose-500 bg-opacity-30 flex flex-col gap-3 justify-start rounded-2xl  py-3 px-2 lg:px-4">
          <p className="text-white font-roboto text-start text-light lg:text-xl text-opacity-60 font-medium">
            Rules
          </p>
          {ruelMapping}
        </div>
        <div className="bg-rose-500 bg-opacity-30  rounded-2xl py-3 px-2 lg:px-4">
        <p className="text-white font-roboto text-start text-light lg:text-xl text-opacity-60 font-medium pb-5">
            Contact
          </p>
            <div className="grid lg:grid-cols-3 gap-4 ">
            {cordinatorsMapping}
            </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
