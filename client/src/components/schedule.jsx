import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import Background from '../assets/bg.jpg'
import {schedule, textVariant} from "../constants/schedule";
import astra from '../assets/astra.png'





const ScheduleCard = ({ schedule }) => {
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
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={schedule.icon}
            alt={schedule.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{schedule.title}</h3>
      </div>
    </VerticalTimelineElement>
  );
};

const Schedule = () => {
  return (
    <div className="w-full bg-no-repeat bg-cover bg-center justify-center items-center" style={{backgroundImage: ` url(${Background})`}}>
      <motion.div variants={textVariant()}>
        
        <h2 className={`${styles.sectionHeadText} pt-10 text-center text-rose-200`}>
          Schedule.
        </h2>
      </motion.div>

      <div className='py-5 pt-16 flex flex-col'>
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
      <div id="book-slot" className='container px-2 flex flex-col gap-8 justify-center items-center py-32'>
            <img data-aos="zoom-out" className='w-2/3 lg:w-1/3 lg:ml-8 img-fluid z-30 shadow-xl' src={astra} alt="tickets"/>
            <a data-aos="zoom-out" href="#_" className="px-5 lg:ml-12 lg:px-10 py-2 lg:py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
                 Buy Ticket
            </a>
        </div>
    </div>
  );
};

export default Schedule