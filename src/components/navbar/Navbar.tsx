'use client';
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import gsap from "gsap";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(".navbar", { y: -100, opacity: 0, duration: 1 })
      .to(".navbar", { y: 0, opacity: 1, duration: 1 });
  }, []);
  
  useEffect(() => {
    const t2 = gsap.timeline({ paused: true });
    t2.fromTo(
      ".menu-container",
      { opacity: 0, x: -300 },
      { opacity: 1, x: 0, duration: 0.3 }
    ).fromTo(
      ".menu-item",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.5 }
    );

    if (isOpen) {
      t2.play();
    } else {
      t2.play().reverse();
    }
  }, [isOpen]);

  return (
    <>
      <div className="navbar fixed w-full mx-auto px-4 h-10 bg-transparent
       md:h-20 border-b-2 rounded-b-lg backdrop-blur-md z-10 flex justify-center items-center">
        <div className="flex justify-between items-center w-full px-4 md:px-10">
          <div className="h-full flex items-center">
            <h1 className="font-bold text-2xl">Astoneaone</h1>
          </div>
          <div className="flex items-center md:hidden">
            <AiOutlineMenu
              className="h-6 w-6 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>
          <ul className="menu font-medium text-lg hidden gap-5 md:flex md:gap-7 items-center">
            <li className="hover:text-blue-900 hover:underline transition-all duration-300">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-blue-900 hover:underline transition-all duration-300">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-blue-900 hover:underline transition-all duration-300">
              <a href="#contact">Contact</a>
            </li>
            <li className="hover:text-blue-900 hover:underline transition-all duration-300">
              <a href="#leaders">Leaders</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`menu-container fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-lg z-20 flex flex-col items-center justify-center transition duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <AiOutlineClose
          className="h-8 w-8 text-white absolute top-5 right-5 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
        <ul className="flex flex-col gap-5 text-center text-white text-2xl">
          <li className="menu-item hover:scale-110 duration-200">
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li className="menu-item hover:scale-110 duration-200">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li className="menu-item hover:scale-110 duration-200">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
          <li className="menu-item hover:scale-110 duration-200">
            <a href="#leaders" onClick={() => setIsOpen(false)}>
              Leaders
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
