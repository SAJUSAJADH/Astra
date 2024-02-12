import React, { useState,useEffect } from "react";

export default function Nav() {
  const [isToggle, setIstoggle] = useState(false);

  const menus = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "#about" },
    { name: "EVENTS", href: "#highlights" },
    { name: "GALLERY", href: "#gallery" },
    { name: "CONTACT US", href: "#contact" },
  ];

  const menusMobile = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "#about" },
    { name: "EVENTS", href: "#events" },
    { name: "GALLERY", href: "#gallery" },
    { name: "CONTACT US", href: "#contact" },
  ];

  const targetDate = new Date('March 19, 2024 00:00:00 GMT+00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const open = () => {
    setIstoggle(!isToggle);
  };

  document.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  

  return (
    <nav className="mx-auto p-6 px-8 xl:px-32 fixed w-full z-50  flex justify-between items-center">
      <h2 className="text-white font-dm font-bold tracking-widest text-2xl cursor-pointer">
        ASTRA'<span className="text-xl">24</span>
      </h2>
      <div className="hidden xl:flex space-x-16 text-white justify-between">
        <a
          href="/"
          className="hover-underline-animation tracking-widest cursor-pointer py-2 font-sans text-lg"
        >
          HOME
        </a>
        <a
          href="#about"
          className="hover-underline-animation tracking-widest cursor-pointer py-2 font-sans text-lg"
        >
          ABOUT
        </a>
        <a
          href="#highlights"
          className="hover-underline-animation tracking-widest cursor-pointer py-2 font-sans text-lg"
        >
          EVENTS
        </a>
        <a
          href="#gallery"
          className="hover-underline-animation tracking-widest cursor-pointer py-2 font-sans text-lg"
        >
          GALLERY
        </a>
        <a
          href="#contact"
          className="hover-underline-animation tracking-widest cursor-pointer py-2 font-sans text-lg"
        >
          CONTACT US
        </a>
        <span className="border px-1 py-1 cursor-pointer flex flex-col bg-white  bg-opacity-30 hover:bg-transparent hover:astra">
            
            <p className="px-1 py-1">{timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M {timeLeft.seconds}S</p>
          <i></i>
        </span>
      </div>
      <button
        onClick={open}
        id="menu-btn"
        className={
          isToggle
            ? "open block hamburger xl:hidden focus:outline-none ml-auto"
            : "block hamburger xl:hidden focus:outline-none ml-auto"
        }
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      <div className="xl:hidden">
        <div
          onClick={open}
          id="menu"
          className={
            isToggle
              ? "absolute mt-6 flex flex-col items-center self-end py-8 text-xl duration-1000 rounded-2xl shadow-2xl space-y-6 bg-rose-400 bg-opacity-90 border text-opacity-100 border-b-0 border-r-0 border-opacity-10 backdrop-filter backdrop-blur-sm text-[#fff] sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
              : "absolute hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          }
        >
          {menusMobile.map((menu, index) => (
            <a key={index} href={menu.href}>
              {menu.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
