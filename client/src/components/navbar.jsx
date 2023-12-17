import { useState } from "react";


export default function Nav(){

    const [isToggle, setIstoggle] = useState(false);

    const menus = [
        {name: 'HOME', href: ""},
        {name: 'ABOUT', href: ""},
        {name: 'EVENTS', href: "/faq"},
        {name: 'GALLERY', href:"/register"},
        {name: 'CONTACT US', href: '/signin'}
    ]

    const open =()=>{
        setIstoggle(!isToggle)
    }
    
    return(
        <nav className="bg-blue relative container-fluid mx-auto p-6">
            <div className="flex items-center justify-between md:justify-around">
                <div className="font-logo">
                    <h2 className="text-white font-dm font-bold tracking-widest text-2xl cursor-pointer">ASTRA'<span className="text-xl">24</span></h2>
                </div>
                <div className="hidden md:flex space-x-16 text-white">
                    <h2 className="hover-underline-animation tracking-widest cursor-pointer py-2 font-sans text-lg">HOME</h2>
                    <h2 className="hover-underline-animation tracking-widest cursor-pointer py-2 font-sans text-lg">ABOUT</h2>
                    <h2 className="hover-underline-animation tracking-widest cursor-pointer py-2 font-sans text-lg">EVENTS</h2>                
                    <h2 className="hover-underline-animation tracking-widest cursor-pointer py-2 font-sans text-lg">GALLERY</h2>
                    <h2 className="hover-underline-animation tracking-widest cursor-pointer py-2 font-sans text-lg">CONTACT US</h2> 
                    <span className="border px-1 py-1 cursor-pointer"> 
                        <h2 className="border tracking-widest text-lg px-1 py-1 bg-white bg-opacity-30 hover:bg-transparent hover:astra">REGISTRATION OPEN</h2> 
                        <i></i>
                    </span>            
                </div> 
                <button onClick={open} id="menu-btn" className={isToggle ? 'open block hamburger md:hidden focus:outline-none' : 'block hamburger md:hidden focus:outline-none'}>
                        <span className="hamburger-top text-white"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                </button>     
            </div>
            <div className="md:hidden">
                    <div onClick={open} id="menu" className={isToggle ? "absolute flex flex-col items-center self-end py-8 text-xl duration-1000 rounded-2xl shadow-2xl space-y-6 bg-white bg-opacity-20 border text-opacity-100 border-b-0 border-r-0 border-opacity-10 backdrop-filter backdrop-blur-sm text-[#fff] sm:w-auto sm:self-center left-6 right-6 drop-shadow-md " : "absolute hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" }>
                        {menus.map((menu,index)=>(
                            <a key={index} href={menu.href}>{menu.name}</a>
                        ))}
                     </div>
                </div>
        </nav>
    )
}