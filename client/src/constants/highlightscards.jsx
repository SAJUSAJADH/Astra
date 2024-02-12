import { useEffect, useState } from "react";
import treasure from "../assets/treasure.png";
import freefire from "../assets/freefire.png";
import { Card } from "antd";
const { Meta } = Card;
import coding from "../assets/coding.png";
import debugging from "../assets/debugging.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function HighlightsMobile() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
  }, []);

  return (
    <div className="w-full bg-no-repeat bg-cover bg-center grid justify-center items-center">
      <div className="pt-12 text-center">
        <h2
          id="events"
          data-aos="zoom-in"
          className="font-bold tracking-widest text-rose-200 font-dm text-4xl lg:text-5xl pb-10"
        >
          Events
        </h2>
      </div>
      <div className="px-2 lg:px-28 container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <Card
          data-aos="flip-right"
          hoverable
          className=""
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={treasure} />}
        >
          <Meta className="text" title="TREASUR HUNT" />
        </Card>
        <Card
          data-aos="flip-left"
          hoverable
          className=""
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={freefire} />}
        >
          <Meta className="text" title="FREEFIRE" />
        </Card>
        <Card
          data-aos="flip-right"
          hoverable
          className=""
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={coding} />}
        >
          <Meta className="text" title="Ideathon" />
        </Card>
        <Card
          data-aos="flip-left"
          hoverable
          className=""
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={debugging} />}
        >
          <Meta className="text" title="Debugging" />
        </Card>
      </div>
      <div className="flex justify-center items-center pt-5">
        <button
          onClick={() => navigate("/events")}
          className="text text-xl font-lexend py-3 px-4 border-0 font-semibold hover:text-blue-500"
        >
          Show all Events <ArrowRightOutlined />
        </button>
      </div>
    </div>
  );
}
