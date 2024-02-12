import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import BackgroundLarge from "../assets/schedulebg.jpg";
import BackgroundSmall from "../assets/bg.jpg";

import { schedule, textVariant } from "../constants/schedule";
import { useNavigate } from "react-router-dom";

const ScheduleCard = ({ schedule }) => {
  const navigate = useNavigate();
  const route = schedule.title.replace(/\s+/g, "_");
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={schedule.date}
      iconStyle={{ background: schedule.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={schedule.icon}
            alt={schedule.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="cursor-pointer" onClick={()=>navigate(`/events/${route}`)}>
        <h3 className="text text-[24px] font-bold">{schedule.title}</h3>
      </div>
    </VerticalTimelineElement>
  );
};

const Schedule = () => {
  function getBackgroundImage() {
    const isMobileOrTablet = window.matchMedia("(max-width: 768px)").matches;
    return isMobileOrTablet ? BackgroundSmall : BackgroundLarge;
  }

  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-center justify-center items-center"
      style={{ backgroundImage: ` url(${getBackgroundImage()})` }}
    >
      <motion.div variants={textVariant()}>
        <h2
          className={`${styles.sectionHeadText} pt-10 text-center text-rose-200`}
        >
          Schedule.
        </h2>
      </motion.div>

      <div className="py-5 pt-16 flex flex-col">
        <VerticalTimeline>
          {schedule.map((schedule, index) => (
            <ScheduleCard
              data-aos="fade-right"
              key={`experience-${index}`}
              schedule={schedule}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Schedule;
