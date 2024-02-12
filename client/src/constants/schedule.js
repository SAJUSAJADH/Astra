import freefire from "../assets/freefire.webp";
import meta from "../assets/meta.png";
import debugging from "../assets/debuggingicon.svg";
import bgmiicon from "../assets/bgmiicon.png";
import ring from "../assets/ring.png";
import codingicon from "../assets/codingicon.png";
import blind from "../assets/blindcoding.png";
import ideathon from "../assets/ideathonicon.png";
import treasure from "../assets/treasurehunt.png";
import roomgames from "../assets/roomgames.png";
import jamming from "../assets/jamming.png";
import minimiltia from "../assets/minimiltiaicon.png";

const schedule = [
  {
    title: "Competative Coding",
    icon: codingicon,
    iconBg: "#383E56",
    date: "9.30 AM",
  },
  {
    title: "Blind Coding",
    icon: blind,
    iconBg: "#E6DEDD",
    date: "10 AM",
  },
  {
    title: "Debugging",
    icon: debugging,
    iconBg: "#383E56",
    date: "11 AM",
  },
  {
    title: "Ideathon",
    icon: ideathon,
    iconBg: "#E6DEDD",
    date: "11.30 AM",
  },
  {
    title: "Treasure Hunt",
    icon: treasure,
    iconBg: "#E6DEDD",
    date: "12 PM",
  },
  {
    title: "BGMI",
    icon: bgmiicon,
    iconBg: "#E6DEDD",
    date: "12.30 PM",
  },
  {
    title: "FreeFire",
    icon: freefire,
    iconBg: "#E6DEDD",
    date: "1 PM",
  },
  {
    title: "PC Room Games",
    icon: roomgames,
    iconBg: "#E6DEDD",
    date: "2PM",
  },
  {
    title: "Reels Competition",
    icon: ring,
    iconBg: "#E6DEDD",
    date: "2.30 PM",
  },
  {
    title: "Jamming Session",
    icon: jamming,
    iconBg: "#E6DEDD",
    date: "3 PM",
  },
  {
    title: "Minimiltia",
    icon: minimiltia,
    iconBg: "#E6DEDD",
    date: "3.30 PM",
  },
];

const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export { schedule, textVariant };
