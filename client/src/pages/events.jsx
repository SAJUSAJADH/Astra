import React from "react";
import BackgroundLarge from "../assets/eventpage.jpg";
import BackgroundSmall from "../assets/bg.jpg";
import { Card } from "antd";
const { Meta } = Card;
import { Data } from "../styles";
import { useNavigate } from "react-router-dom";

function Events() {
  const navigate = useNavigate();

  function getBackgroundImage() {
    const isMobileOrTablet = window.matchMedia("(max-width: 768px)").matches;
    return isMobileOrTablet ? BackgroundSmall : BackgroundLarge;
  }

  const MainEvents = Data.filter((item) => item.category === "Main Event");
  const OnlineEvents = Data.filter((item) => item.category === "Online Event");

  const mainEventMapping = MainEvents.map((item, index) => {
    const route = item.event.replace(/\s+/g, "_");

    return (
      <Card
        key={index}
        onClick={() => navigate(`/events/${route}`)}
        data-aos={index % 2 == 0 ? "flip-right" : "flip-left"}
        hoverable
        className=""
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={item.image} />}
      >
        <Meta
          className="text"
          title={item.event}
          description="₹ 50 per registration"
        />
      </Card>
    );
  });

  const onlineEventMapping = OnlineEvents.map((item, index) => {
    const route = item.event.replace(/\s+/g, "_");

    return (
      <Card
        key={index}
        onClick={() => navigate(`/events/${route}`)}
        data-aos={index % 2 == 0 ? "flip-right" : "flip-left"}
        hoverable
        className=""
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={item.image} />}
      >
        <Meta
          className="text"
          title={item.event}
          description="₹ 50 per registration"
        />
      </Card>
    );
  });

  return (
    <div
      style={{ backgroundImage: `url(${getBackgroundImage()})` }}
      className="w-full py-4 bg-no-repeat bg-cover bg-center"
    >
      <div className="pt-10 hero flex flex-col gap-6 justify-center  text-center">
        <h2 className="astra1 text-5xl lg:text-7xl tracking-wide  lg:tracking-widest font-dm">
          A S T R A
        </h2>
        <p className="text-base lg:text-lg text-justify lg:text-center tracking-wide font-lexend text-white px-6 lg:px-0">
          - Welcome to Astra, where innovation meets excitement in the realm of
          technology! -
        </p>
      </div>
      <div className="container mx-auto px-16 py-6 pt-12">
        <div className="flex justify-center items-center">
          <p className="font-bold tracking-widest text-rose-200 font-dm text-3xl lg:text-5xl pb-10">
            MainEvents
          </p>
        </div>
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
          {mainEventMapping}
        </div>
        <div className="pt-24 flex justify-center items-center">
          <p className="font-bold tracking-widest text-rose-200 font-dm text-3xl lg:text-5xl pb-10">
            Online Events
          </p>
        </div>
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
          {onlineEventMapping}
        </div>
      </div>
    </div>
  );
}

export default Events;
